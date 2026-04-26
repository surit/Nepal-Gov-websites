// scripts/check-status.js - Bulletproof Parser
const fetch = require('node-fetch');
const fs = require('fs');

const SCRIPT_PATH = 'js/script.js';
const TIMEOUT_MS = 8000;
const DELAY_MS = 800;

// Ultra-simple parser: find "const sites = [" as literal string, then bracket-match
function parseSitesFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Normalize line endings (handle Windows/Mac/Linux)
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  console.log('🔍 Reading file:', filePath);
  
  // Simple literal search for the array start
  const arrayStartMarker = 'const sites = [';
  const startIndex = content.indexOf(arrayStartMarker);
  
  if (startIndex === -1) {
    // Fallback: try without "const"
    const altStart = content.indexOf('sites = [');
    if (altStart === -1) {
      console.error('❌ Could not find "const sites = [" or "sites = [" in file');
      console.error('🔍 File starts with:', content.substring(0, 300).replace(/\n/g, '\\n'));
      throw new Error('Sites array not found - check script.js format');
    }
    return parseArrayFromContent(content.substring(altStart));
  }
  
  // Extract from after "const sites = ["
  const afterMarker = content.substring(startIndex + arrayStartMarker.length);
  return parseArrayFromContent(afterMarker);
}

// Manual bracket matching to extract the array
function parseArrayFromContent(content) {
  // Find the opening bracket
  const openIdx = content.indexOf('[');
  if (openIdx === -1) throw new Error('Could not find array opening bracket');
  
  // Manual bracket/quote tracking to find the matching closing bracket
  let depth = 1;
  let inString = false;
  let escapeNext = false;
  let endIndex = -1;
  
  for (let i = openIdx + 1; i < content.length; i++) {
    const char = content[i];
    
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    if (char === '\\' && inString) {
      escapeNext = true;
      continue;
    }
    if (char === '"' || char === "'") {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    
    if (char === '[') depth++;
    if (char === ']') {
      depth--;
      if (depth === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  if (endIndex === -1) {
    throw new Error('Could not find matching closing bracket - check for syntax errors in sites array');
  }
  
  const arrayStr = content.substring(0, endIndex);
  
  // Safe eval for controlled source
  try {
    const sites = eval(`(function(){ return ${arrayStr}; })()`);
    if (!Array.isArray(sites)) throw new Error('Parsed result is not an array');
    console.log(`✅ Parsed ${sites.length} sites successfully`);
    return sites;
  } catch (e) {
    console.error('💥 Parse error:', e.message);
    console.error('📋 Array snippet (first 300 chars):', arrayStr.substring(0, 300) + '...');
    throw new Error(`Failed to parse sites: ${e.message}`);
  }
}

// Check a single URL
async function checkUrl(url, retries = 0) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    const response = await fetch(url, {
      method: 'HEAD',
      headers: { 
        'User-Agent': 'NepalGovDirectory-StatusChecker/1.0 (+https://nepal.surit.com.np)',
        'Accept': 'text/html'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    
    clearTimeout(timeout);
    return { success: true, isActive: response.status < 500, status: response.status };
    
  } catch (error) {
    if (retries < 2 && (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT' || error.name === 'AbortError')) {
      await new Promise(r => setTimeout(r, 1500));
      return checkUrl(url, retries + 1);
    }
    return { success: false, error: error.message || error.code || 'Unknown error' };
  }
}

// Update script.js with new statuses
function updateScriptStatuses(sites, changes) {
  let content = fs.readFileSync(SCRIPT_PATH, 'utf8');
  let updated = 0;
  
  for (const change of changes) {
    const { url, to } = change;
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Find site object by URL and update status (handles trailing spaces)
    const regex = new RegExp(
      `(\\{[^}]*?url\\s*:\\s*["']\\s*${escapedUrl}\\s*["'][^}]*?status\\s*:\\s*)["']\\s*([^"']+)\\s*["']`,
      's'
    );
    
    if (regex.test(content)) {
      content = content.replace(regex, (match, prefix, oldStatus) => {
        const trimmedOld = oldStatus.trim();
        const trimmedNew = to.trim();
        if (trimmedOld !== trimmedNew) {
          updated++;
          console.log(`✏️  ${change.name?.trim()}: ${trimmedOld} → ${trimmedNew}`);
          const quote = match.includes(`status: "${oldStatus}`) ? '"' : "'";
          return `${prefix}${quote}${to}${quote}`;
        }
        return match;
      });
    } else {
      console.warn(`⚠️  Could not find status for: ${url}`);
    }
  }
  
  if (updated > 0) {
    fs.writeFileSync(SCRIPT_PATH, content, 'utf8');
    console.log(`✅ Updated ${updated} site(s) in ${SCRIPT_PATH}`);
    return true;
  }
  return false;
}

// Main
async function main() {
  console.log('🔍 Starting status check...');
  
  let sites;
  try {
    sites = parseSitesFromFile(SCRIPT_PATH);
  } catch (e) {
    console.error(`❌ ${e.message}`);
    process.exit(1);
  }
  
  const results = { checked: 0, active: 0, inactive: 0, changed: [], errors: [] };
  
  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    results.checked++;
    
    if (i > 0) await new Promise(r => setTimeout(r, DELAY_MS));
    
    const result = await checkUrl(site.url?.trim());
    
    if (result.success) {
      const wasActive = site.status?.trim() === 'active';
      const nowActive = result.isActive;
      
      if (wasActive !== nowActive) {
        results.changed.push({
          name: site.name?.trim(),
          url: site.url?.trim(),
          from: site.status?.trim(),
          to: nowActive ? 'active' : 'inactive',
          httpStatus: result.status
        });
        console.log(`🔄 ${site.name?.trim()}: ${site.status?.trim()} → ${nowActive ? 'active' : 'inactive'} [${result.status}]`);
      }
      
      if (nowActive) results.active++; else results.inactive++;
    } else {
      results.inactive++;
      results.errors.push({ name: site.name?.trim(), url: site.url?.trim(), error: result.error });
      console.log(`❌ ${site.name?.trim()}: ${result.error}`);
    }
    
    if (results.checked % 10 === 0) {
      console.log(`📊 ${results.checked}/${sites.length} checked`);
    }
  }
  
  console.log('\n📈 Status Check Complete');
  console.log(`✅ Active: ${results.active}`);
  console.log(`⚠️  Inactive: ${results.inactive}`);
  console.log(`🔄 Changed: ${results.changed.length}`);
  
  if (results.changed.length > 0) {
    console.log('\n📝 Changes:');
    results.changed.forEach(c => console.log(`  • ${c.name}: ${c.from} → ${c.to}`));
    
    const updated = updateScriptStatuses(sites, results.changed);
    console.log(`::set-output name=changes::${updated ? 'true' : 'false'}`);
    console.log(`::set-output name=changed_count::${results.changed.length}`);
  } else {
    console.log('✨ No status changes detected.');
    console.log('::set-output name=changes::false');
    console.log('::set-output name=changed_count::0');
  }
  
  fs.writeFileSync('status-report.json', JSON.stringify(results, null, 2));
}

main().catch(err => {
  console.error('💥 Fatal:', err.message);
  process.exit(1);
});
