// Nepal Government Websites Directory - Complete Site List
const sites = [
  // ========== Constitutional Bodies ==========
  { name: "Office of the President", url: "https://presidentofnepal.gov.np", desc: "Official office of the President of Nepal.", cat: "Constitutional", status: "active" },
  { name: "Office of the Vice President", url: "https://vp.gov.np", desc: "Official office of the Vice President of Nepal.", cat: "Constitutional", status: "active" },
  { name: "Supreme Court of Nepal", url: "https://supremecourt.gov.np", desc: "Highest court of Nepal with appellate jurisdiction.", cat: "Constitutional", status: "active" },
  { name: "Public Service Commission Nepal", url: "https://psc.gov.np", desc: "Recruitment for civil service & government positions.", cat: "Constitutional", status: "active" },
  { name: "Election Commission Nepal", url: "https://election.gov.np", desc: "Conducting free & fair elections at all levels.", cat: "Constitutional", status: "active" },
  { name: "Commission for the Investigation of Abuse of Authority", url: "https://ciaa.gov.np", desc: "Anti-corruption watchdog & integrity enforcement.", cat: "Constitutional", status: "active" },
  { name: "Office of the Auditor General Nepal", url: "https://oagnepal.gov.np", desc: "Audit of government accounts & public expenditure.", cat: "Constitutional", status: "active" },
  { name: "National Women Commission", url: "https://nwc.gov.np", desc: "Promoting gender equality & women's rights.", cat: "Constitutional", status: "active" },
  { name: "National Planning Commission Nepal", url: "https://npc.gov.np", desc: "National development planning & policy coordination.", cat: "Constitutional", status: "active" },

  // ========== Executive ==========
  { name: "Office of the Prime Minister", url: "https://opmcm.gov.np", desc: "Prime Minister and Council of Ministers.", cat: "Executive", status: "active" },

  // ========== Ministries ==========
  { name: "Ministry of Finance", url: "https://mof.gov.np", desc: "Budget, fiscal policy, economic data.", cat: "Ministry", status: "active" },
  { name: "Ministry of Home Affairs", url: "https://moha.gov.np", desc: "Security, immigration, civil registration.", cat: "Ministry", status: "active" },
  { name: "Ministry of Foreign Affairs", url: "https://mofa.gov.np", desc: "Foreign relations & diplomatic services.", cat: "Ministry", status: "active" },
  { name: "Ministry of Defense", url: "https://mod.gov.np", desc: "National defense & military affairs.", cat: "Ministry", status: "active" },
  { name: "Ministry of Education, Science & Technology", url: "https://moest.gov.np", desc: "Education policy & institutions.", cat: "Ministry", status: "active" },
  { name: "Ministry of Health & Population", url: "https://mohp.gov.np", desc: "Healthcare services & population management.", cat: "Ministry", status: "active" },
  { name: "Free Health Dashboard - MoHP", url: "https://freehealth.mohp.gov.np", desc: "Real-time health data & service monitoring dashboard.", cat: "Ministry", status: "active" },
  { name: "Ministry of Communication & Information Technology", url: "https://mocit.gov.np", desc: "ICT policy, digital governance & IT infrastructure.", cat: "Ministry", status: "active" },
  { name: "Ministry of Federal Affairs & General Administration", url: "https://mofaga.gov.np", desc: "Federal coordination & public administration.", cat: "Ministry", status: "active" },
  { name: "Ministry of Energy, Water Resources & Irrigation", url: "https://moewri.gov.np", desc: "Energy, hydropower & irrigation development.", cat: "Ministry", status: "active" },
  { name: "Ministry of Agriculture & Livestock Development", url: "https://moald.gov.np", desc: "Agricultural development & livestock services.", cat: "Ministry", status: "active" },
  { name: "Ministry of Industry, Commerce & Supplies", url: "https://moics.gov.np", desc: "Industrial policy, trade regulation & supply management.", cat: "Ministry", status: "active" },
  { name: "Ministry of Culture, Tourism & Civil Aviation", url: "https://tourism.gov.np", desc: "Tourism promotion & aviation regulation.", cat: "Ministry", status: "active" },
  { name: "Ministry of Physical Infrastructure & Transport", url: "https://mopit.gov.np", desc: "Roads, airports, transport & infrastructure development.", cat: "Ministry", status: "active" },
  { name: "Ministry of Urban Development", url: "https://moud.gov.np", desc: "Urban planning, housing & city development.", cat: "Ministry", status: "active" },
  { name: "Ministry of Water Supply", url: "https://mows.gov.np", desc: "Drinking water & sanitation services.", cat: "Ministry", status: "active" },
  { name: "Ministry of Forests & Environment", url: "https://mofe.gov.np", desc: "Forest conservation, climate & environmental policy.", cat: "Ministry", status: "active" },
  { name: "Ministry of Land Management, Cooperatives & Poverty Alleviation", url: "https://molcpa.gov.np", desc: "Land reform, cooperatives & poverty reduction programs.", cat: "Ministry", status: "active" },
  { name: "Ministry of Women, Children & Senior Citizens", url: "https://mowcsc.gov.np", desc: "Gender equality, child protection & elderly welfare.", cat: "Ministry", status: "active" },
  { name: "Ministry of Youth & Sports", url: "https://moys.gov.np", desc: "Youth development, sports promotion & national games.", cat: "Ministry", status: "active" },
  { name: "Ministry of Law, Justice & Parliamentary Affairs", url: "https://moljpa.gov.np", desc: "Legal reforms, justice administration & parliamentary support.", cat: "Ministry", status: "active" },
  { name: "Ministry of Labour, Employment & Social Security", url: "https://moless.gov.np", desc: "Labor rights, employment services & social security.", cat: "Ministry", status: "active" },

  // ========== Departments ==========
  { name: "Department of Immigration", url: "https://nepalimmigration.gov.np", desc: "Visa services & immigration control.", cat: "Department", status: "active" },
  { name: "Department of Passports", url: "https://nepalpassport.gov.np", desc: "Passport issuance & renewal.", cat: "Department", status: "active" },
  { name: "Department of Customs", url: "https://customs.gov.np", desc: "Customs clearance, duty collection & trade facilitation.", cat: "Department", status: "active" },
  { name: "Inland Revenue Department", url: "https://ird.gov.np", desc: "Tax administration & revenue collection.", cat: "Department", status: "active" },
  { name: "Department of Transport Management", url: "https://dotm.gov.np", desc: "Vehicle registration, licenses & road safety.", cat: "Department", status: "active" },
  { name: "Department of National ID & Civil Registration", url: "https://donidcr.gov.np", desc: "National ID cards & birth/death registration.", cat: "Department", status: "active" },
  { name: "Department of Foreign Employment", url: "https://dofe.gov.np", desc: "Overseas employment services & migrant welfare.", cat: "Department", status: "active" },
  { name: "Nepal Police", url: "https://nepalpolice.gov.np", desc: "Law enforcement & public safety services.", cat: "Department", status: "active" },
  { name: "Armed Police Force Nepal", url: "https://apf.gov.np", desc: "Border security, counter-terrorism & disaster response.", cat: "Department", status: "active" },
  { name: "Department of Information & Broadcasting", url: "https://doib.gov.np", desc: "Media regulation, press accreditation & public communication.", cat: "Department", status: "active" },
  { name: "Department of Tourism", url: "https://tourismdepartment.gov.np", desc: "Tourism development, licensing & promotion.", cat: "Department", status: "active" },
  { name: "Department of Roads", url: "https://dor.gov.np", desc: "Road construction, maintenance & infrastructure.", cat: "Department", status: "active" },
  { name: "Department of Hydrology & Meteorology", url: "https://dhm.gov.np", desc: "Weather forecasting, flood alerts & climate data.", cat: "Department", status: "active" },
  { name: "Department of Food Technology & Quality Control", url: "https://dftqc.gov.np", desc: "Food safety standards & quality certification.", cat: "Department", status: "active" },
  { name: "Department of Land Management & Archive", url: "https://dolma.gov.np", desc: "Land records & archives management.", cat: "Department", status: "active" },
  { name: "Department of Livestock Services", url: "https://dls.gov.np", desc: "Livestock development & veterinary services.", cat: "Department", status: "active" },

  // ========== Authorities & Boards ==========
  { name: "Nepal Rastra Bank", url: "https://nrb.org.np", desc: "Central bank & monetary authority.", cat: "Authority", status: "active" },
  { name: "Nepal Telecommunications Authority", url: "https://nta.gov.np", desc: "Telecom & broadcasting regulation.", cat: "Authority", status: "active" },
  { name: "Civil Aviation Authority of Nepal", url: "https://caanepal.gov.np", desc: "Aviation safety & airport management.", cat: "Authority", status: "active" },
  { name: "Nepal Tourism Board", url: "https://ntb.gov.np", desc: "Tourism promotion & marketing.", cat: "Board", status: "active" },
  { name: "Trade and Export Promotion Centre", url: "https://tepc.gov.np", desc: "Export facilitation & trade support services.", cat: "Board", status: "active" },

  // ========== Provincial Governments ==========
  { name: "Koshi Province", url: "https://koshi.gov.np", desc: "Provincial government services for Koshi (Province 1).", cat: "Provincial Govt", status: "active" },
  { name: "Madhesh Province", url: "https://madhesh.gov.np/", desc: "Provincial government services for Madhesh (Province 2).", cat: "Provincial Govt", status: "active" },
  { name: "Bagmati Province", url: "https://bagmati.gov.np", desc: "Provincial government services for Bagmati (Province 3).", cat: "Provincial Govt", status: "active" },
  { name: "Gandaki Province", url: "https://gandaki.gov.np", desc: "Provincial government services for Gandaki (Province 4).", cat: "Provincial Govt", status: "active" },
  { name: "Lumbini Province", url: "https://lumbini.gov.np", desc: "Provincial government services for Lumbini (Province 5).", cat: "Provincial Govt", status: "active" },
  { name: "Karnali Province", url: "https://karnali.gov.np", desc: "Provincial government services for Karnali (Province 6).", cat: "Provincial Govt", status: "active" },
  { name: "Sudurpaschim Province", url: "https://sudurpaschim.gov.np", desc: "Provincial government services for Sudurpaschim (Province 7).", cat: "Provincial Govt", status: "active" },

  // ========== Local Governments (Metropolitan Cities) ==========
  { name: "Kathmandu Metropolitan City", url: "https://kathmandu.gov.np", desc: "Local services, permits, notices.", cat: "Local Govt", status: "active" },
  { name: "Lalitpur Metropolitan City", url: "https://lmc.gov.np", desc: "Municipal services for Lalitpur residents.", cat: "Local Govt", status: "active" },
  { name: "Pokhara Metropolitan City", url: "https://pokharamun.gov.np", desc: "Municipal services for Pokhara residents.", cat: "Local Govt", status: "active" },
  { name: "Bharatpur Metropolitan City", url: "https://bharatpurmun.gov.np", desc: "Municipal services for Bharatpur residents.", cat: "Local Govt", status: "active" },
  { name: "Biratnagar Metropolitan City", url: "https://biratnagarmun.gov.np", desc: "Municipal services for Biratnagar residents.", cat: "Local Govt", status: "active" },
  { name: "Birgunj Metropolitan City", url: "https://birgunjmun.gov.np", desc: "Municipal services for Birgunj residents.", cat: "Local Govt", status: "active" },
];

// ========== DOM Elements & Logic ==========
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const categoryNav = document.getElementById('category-nav');

let currentCategory = 'All';
let searchQuery = '';
const categories = ['All', ...new Set(sites.map(s => s.cat))];

function renderCategories() {
  categoryNav.innerHTML = categories.map(cat => 
    `<button class="cat-btn ${cat === currentCategory ? 'active' : ''}" 
            data-cat="${cat}" 
            aria-pressed="${cat === currentCategory}">
      ${cat}
    </button>`
  ).join('');
  categoryNav.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentCategory = e.currentTarget.dataset.cat;
      renderCategories();
      renderGrid();
    });
  });
}

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

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderGrid();
});

renderCategories();
renderGrid();
