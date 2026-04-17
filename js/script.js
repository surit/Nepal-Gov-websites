// Data: Add/edit sites here
const sites = [
  // Constitutional
  { name: "Office of the President", url: "https://president.gov.np", desc: "Official office of the President of Nepal.", cat: "Constitutional", status: "active" },
  { name: "Supreme Court of Nepal", url: "https://supremecourt.gov.np", desc: "Highest court of Nepal.", cat: "Judiciary", status: "active" },
  { name: "Election Commission Nepal", url: "https://election.gov.np", desc: "Conducting free & fair elections at all levels.", cat: "Constitutional", status: "active" },
  { name: "Public Service Commission Nepal", url: "https://psc.gov.np", desc: "Recruitment for civil service & government positions.", cat: "Constitutional", status: "active" },
  { name: "Commission for the Investigation of Abuse of Authority", url: "https://ciaa.gov.np", desc: "Anti-corruption watchdog & integrity enforcement.", cat: "Constitutional", status: "active" },
  { name: "Office of the Auditor General Nepal", url: "https://oag.gov.np", desc: "Audit of government accounts & public expenditure.", cat: "Constitutional", status: "active" },
  { name: "National Planning Commission Nepal", url: "https://npc.gov.np", desc: "The National Planning Commission (NPC) of Nepal", cat: "Constitutional", status: "active" },

  // Executive
  { name: "Office of the Prime Minister", url: "https://opmcm.gov.np", desc: "Prime Minister and Council of Ministers.", cat: "Executive", status: "active" },

  // Ministries
    { name: "Free Health Dashboard - MoHP", url: "https://freehealth.mohp.gov.np", desc: "Real-time health data & service monitoring dashboard by Ministry of Health.", cat: "Ministry", status: "active" },
  { name: "Ministry of Foreign Affairs", url: "https://mofa.gov.np", desc: "Foreign relations & diplomatic services.", cat: "Ministry", status: "active" },
  { name: "Ministry of Finance", url: "https://mof.gov.np", desc: "Budget, fiscal policy, economic data.", cat: "Ministry", status: "active" },
  { name: "Ministry of Home Affairs", url: "https://moha.gov.np", desc: "Security, immigration, civil registration.", cat: "Ministry", status: "active" },
  { name: "Ministry of Education, Science & Technology", url: "https://moest.gov.np", desc: "Education policy & institutions.", cat: "Ministry", status: "active" },
  { name: "Ministry of Health & Population", url: "https://mohp.gov.np", desc: "Healthcare services & population management.", cat: "Ministry", status: "active" },
  { name: "Ministry of Culture, Tourism & Civil Aviation", url: "https://tourism.gov.np", desc: "Tourism promotion & aviation regulation.", cat: "Ministry", status: "active" },
  { name: "Ministry of Agriculture & Livestock Development", url: "https://moald.gov.np", desc: "Agricultural development & livestock services.", cat: "Ministry", status: "active" },
  { name: "Ministry of Energy, Water Resources & Irrigation", url: "https://mowrri.gov.np", desc: "Energy, hydropower & irrigation.", cat: "Ministry", status: "inactive" },
  { name: "Ministry of Defense", url: "https://mod.gov.np", desc: "National defense & military affairs.", cat: "Ministry", status: "active" },
  { name: "Ministry of Federal Affairs & General Administration", url: "https://mofaga.gov.np", desc: "Federal coordination & public administration.", cat: "Ministry", status: "active" },
  { name: "Ministry of Communication and Information Technology", url: "https://mocit.gov.np", desc: "ICT policy, digital governance & IT infrastructure.", cat: "Ministry", status: "active" },
  { name: "Ministry of Labour, Employment and Social Security", url: "https://moless.gov.np", desc: "Labor rights, employment services & social security.", cat: "Ministry", status: "active" },
  { name: "Ministry of Industry, Commerce and Supplies", url: "https://moics.gov.np", desc: "Industrial policy, trade regulation & supply management.", cat: "Ministry", status: "active" },
  { name: "Ministry of Physical Infrastructure and Transport", url: "https://mopit.gov.np", desc: "Roads, airports, transport & infrastructure development.", cat: "Ministry", status: "active" },
  { name: "Ministry of Women, Children and Senior Citizens", url: "https://mowcsc.gov.np", desc: "Gender equality, child protection & elderly welfare.", cat: "Ministry", status: "active" },
  { name: "Ministry of Youth and Sports", url: "https://moys.gov.np", desc: "Youth development, sports promotion & national games.", cat: "Ministry", status: "active" },
  { name: "Ministry of Law, Justice and Parliamentary Affairs", url: "https://moljpa.gov.np", desc: "Legal reforms, justice administration & parliamentary support.", cat: "Ministry", status: "active" },


  // Departments
  { name: "Department of Immigration", url: "https://immigration.gov.np", desc: "Visa services & immigration control.", cat: "Department", status: "active" },
  { name: "Department of Passports", url: "https://nepalpassport.gov.np", desc: "Passport issuance & renewal.", cat: "Department", status: "active" },
  { name: "Department of Land Management & Archive", url: "https://dolma.gov.np", desc: "Land records & archives.", cat: "Department", status: "active" },
  { name: "Department of Livestock Services", url: "https://dls.gov.np", desc: "Livestock development & veterinary services.", cat: "Department", status: "active" },

  // Authorities
  { name: "Nepal Rastra Bank", url: "https://nrb.org.np", desc: "Central bank & monetary authority.", cat: "Authority", status: "active" },
  { name: "Nepal Telecommunications Authority", url: "https://nta.gov.np", desc: "Telecom & broadcasting regulation.", cat: "Authority", status: "active" },
  { name: "Civil Aviation Authority of Nepal", url: "https://caanepal.gov.np", desc: "Aviation safety & airport management.", cat: "Authority", status: "active" },
  { name: "Nepal Police", url: "https://nepalpolice.gov.np", desc: "Nepal Police (Janapath)", cat: "Authority", status: "active" },

  // Boards
  { name: "Nepal Tourism Board", url: "https://ntb.gov.np", desc: "Tourism promotion & marketing.", cat: "Board", status: "active" },

  // Local Government
  { name: "Kathmandu Metropolitan City", url: "https://kathmandu.gov.np", desc: "Local services, permits, notices.", cat: "Local Govt", status: "active" },
];

// DOM elements
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const categoryNav = document.getElementById('category-nav');

// State
let currentCategory = 'All';
let searchQuery = '';

// Get unique categories + "All"
const categories = ['All', ...new Set(sites.map(s => s.cat))];

// Render category buttons
function renderCategories() {
  categoryNav.innerHTML = categories.map(cat => 
    `<button class="cat-btn ${cat === currentCategory ? 'active' : ''}" 
            data-cat="${cat}" 
            aria-pressed="${cat === currentCategory}">
      ${cat}
    </button>`
  ).join('');

  // Attach click handlers
  categoryNav.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentCategory = e.currentTarget.dataset.cat;
      renderCategories();
      renderGrid();
    });
  });
}

// Filter & render cards
function renderGrid() {
  const q = searchQuery.toLowerCase();
  const filtered = sites.filter(s => {
    const matchesCat = currentCategory === 'All' || s.cat === currentCategory;
    const matchesSearch = !q || 
      s.name.toLowerCase().includes(q) || 
      s.url.toLowerCase().includes(q) || 
      s.desc.toLowerCase().includes(q) ||
      s.cat.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty" style="grid-column:1/-1;text-align:center;color:var(--sub)">No sites match your filters.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(s => `
    <article class="card">
      <h3>${s.name}</h3>
      <a href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.url.replace(/^https?:\/\//, '')}
      </a>
      <p>${s.desc}</p>
      <span class="tag">${s.cat}</span>
      <div class="status ${s.status}">● ${s.status === 'active' ? 'Online' : 'Offline'}</div>
    </article>
  `).join('');
}

// Search handler
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderGrid();
});

// Initialize
renderCategories();
renderGrid();

// Optional: Set Google Form link later
// document.getElementById('suggest-link').href = 'YOUR_GOOGLE_FORM_URL_HERE';
