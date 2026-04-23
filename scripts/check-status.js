// scripts/check-status.js
// Checks all government websites and reports status changes

const fetch = require('node-fetch');

// Load sites from script.js (simple regex parse - safe because you control the source)
const fs = require('fs');
const scriptContent = fs.readFileSync('js/script.js', 'utf8');
const sitesMatch = scriptContent.match(/const sites = \[([\s\S]*?)\];/);
if (!sitesMatch) {
  console.error('❌ Could not parse sites array from script.js');
  process.exit(1);
}

// ⚠️ Warning: eval is safe here because script.js is your own controlled file
const sites = eval(`[${sitesMatch[1]}]`);

// Configuration
const CONFIG = {
  timeout: 10000, // 10 seconds per request
  retries: 2, // Retry failed requests once
  delayMs: 500, // Respectful delay between requests
  userAgent: 'NepalGovDirectory-StatusChecker/1.0 (+https://nepal.surit.com.np)',
  minFailuresToMarkInactive: 2 // Only mark inactive after 2 consecutive failures
};

// Track results
const results = {
  checked: 0,
  active: 0,
  inactive: 0,
  changed: [],
  errors: []
};

// Check a single URL
async function checkUrl(url, retries = 0) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CONFIG.timeout);
    
    const response = await fetch(url, {
      method: 'HEAD', // Lightweight check
      headers: { 'User-Agent': CONFIG.userAgent },
      signal: controller.signal,
      redirect: 'follow'
    });
    
    clearTimeout(timeout);
    
    // Consider 2xx and 3xx as active, 4xx/5xx as inactive
    const isActive = response.ok || response.status < 400;
    return { success: true, isActive, status: response.status };
    
  } catch (error) {
    // Retry on network errors
    if (retries < CONFIG.retries && (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT')) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return checkUrl(url, retries + 1);
    }
    return { success: false, error: error.message };
  }
}

// Main execution
async function main() {
  console.log(`🔍 Starting status check for ${sites.length} sites...`);
  console.log(`⏱️  Timeout: ${CONFIG.timeout}ms | Retries: ${CONFIG.retries}\n`);

  for (const site of sites) {
    results.checked++;
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, CONFIG.delayMs));
    
    const result = await checkUrl(site.url);
    
    if (result.success) {
      const wasActive = site.status === 'active';
      const nowActive = result.isActive;
      
      if (wasActive !== nowActive) {
        results.changed.push({
          name: site.name,
          url: site.url,
          from: site.status,
          to: nowActive ? 'active' : 'inactive',
          httpStatus: result.status
        });
        console.log(`🔄 ${site.name}: ${site.status} → ${nowActive ? 'active' : 'inactive'} [${result.status}]`);
      }
      
      if (nowActive) {
        results.active++;
      } else {
        results.inactive++;
      }
    } else {
      results.inactive++;
      results.errors.push({ name: site.name, url: site.url, error: result.error });
      console.log(`❌ ${site.name}: Failed - ${result.error}`);
    }
    
    // Progress indicator
    if (results.checked % 10 === 0) {
      console.log(`📊 Progress: ${results.checked}/${sites.length} checked`);
    }
  }

  // Summary
  console.log('\n📈 Status Check Complete');
  console.log(`✅ Active: ${results.active}`);
  console.log(`⚠️  Inactive: ${results.inactive}`);
  console.log(`🔄 Changed: ${results.changed.length}`);
  console.log(`❌ Errors: ${results.errors.length}`);

  // Output for GitHub Actions
  if (results.changed.length > 0) {
    console.log('\n📝 Changes detected:');
    results.changed.forEach(c => {
      console.log(`  • ${c.name}: ${c.from} → ${c.to}`);
    });
    
    // Write updated sites to script.js
    updateScriptWithNewStatuses(results.changed);
    
    // Set output for next step
    console.log(`::set-output name=changes::true`);
  } else {
    console.log('\n✨ No status changes detected.');
    console.log(`::set-output name=changes::false`);
  }

  // Save report for artifacts
  fs.writeFileSync('status-report.json', JSON.stringify(results, null, 2));
}

// Update script.js with new statuses
function updateScriptWithNewStatuses(changes) {
  let content = fs.readFileSync('js/script.js', 'utf8');
  
  changes.forEach(change => {
    const newStatus = change.to;
    // Regex to find and replace the status field for this specific URL
    const regex = new RegExp(
      `(\\{[^}]*url:\\s*["']${change.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^}]*status:\\s*)["'][^"']+["']`,
      'g'
    );
    content = content.replace(regex, `$1"${newStatus}"`);
  });
  
  fs.writeFileSync('js/script.js', content);
  console.log(`✏️  Updated js/script.js with ${changes.length} status changes`);
}

// Run
main().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
