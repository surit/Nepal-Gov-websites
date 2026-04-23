// js/script.js - V2.1 Complete (Inline Data + Community Submissions)
// No external JSON fetch - works everywhere including file://

// ========== SANITIZED DATA (trimmed, no trailing spaces) ==========
const sitesData = [
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
  { name: "State Public Service Commission Gandaki", url: "https://spscgandaki.gov.np", desc: "Provincial civil service recruitment for Gandaki Province.", cat: "Constitutional", status: "active" },
  { name: "State Public Service Commission Lumbini", url: "https://psclumbini.gov.np", desc: "Provincial civil service recruitment for Lumbini Province.", cat: "Constitutional", status: "active" },

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
  { name: "Department of Agriculture", url: "https://doa.gov.np", desc: "Agricultural development, extension services & farmer support.", cat: "Department", status: "active" },
  { name: "Department of Archaeology", url: "https://archaeology.gov.np", desc: "Heritage conservation, archaeological research & museum management.", cat: "Department", status: "active" },
  { name: "Department of Commerce and Supply Management", url: "https://dofcms.gov.np", desc: "Trade regulation, supply chain management & consumer protection.", cat: "Department", status: "active" },
  { name: "Department of Drug Administration", url: "https://ddda.gov.np", desc: "Drug regulation, quality control & pharmaceutical licensing.", cat: "Department", status: "active" },
  { name: "Department of Electricity Development", url: "https://doed.gov.np", desc: "Electricity licensing, hydropower development & energy regulation.", cat: "Department", status: "active" },
  { name: "Department of Information Technology", url: "https://doit.gov.np", desc: "IT infrastructure, e-governance & digital service delivery.", cat: "Department", status: "active" },
  { name: "Department of Mines and Geology", url: "https://dmgnepal.gov.np", desc: "Mining regulation, geological surveys & mineral resource management.", cat: "Department", status: "active" },
  { name: "Department of National Parks and Wildlife Conservation", url: "https://dnpwc.gov.np", desc: "Protected area management, wildlife conservation & biodiversity.", cat: "Department", status: "active" },
  { name: "Department of Postal Service", url: "https://nepalpost.gov.np", desc: "Postal services, mail delivery & financial services.", cat: "Department", status: "active" },
  { name: "Department of Survey", url: "https://dos.gov.np", desc: "Land surveying, mapping & geospatial data management.", cat: "Department", status: "active" },
  { name: "Department of Urban Development and Building Construction", url: "https://dudbc.gov.np", desc: "Urban planning, building codes & construction regulation.", cat: "Department", status: "active" },
  { name: "Department of Water Resources and Irrigation", url: "https://dwri.gov.np", desc: "Water resource management, irrigation systems & watershed development.", cat: "Department", status: "active" },
  // 🆕 COMMUNITY SUBMISSION: Department of Water Supply and Sewerage
  { name: "Department of Water Supply and Sewerage", url: "https://dwss.gov.np", desc: "Drinking water & sanitation infrastructure planning and management.", cat: "Department", status: "active" },

  // ========== Authorities & Boards ==========
  { name: "Nepal Rastra Bank", url: "https://nrb.org.np", desc: "Central bank & monetary authority.", cat: "Authority", status: "active" },
  { name: "Nepal Telecommunications Authority", url: "https://nta.gov.np", desc: "Telecom & broadcasting regulation.", cat: "Authority", status: "active" },
  { name: "Civil Aviation Authority of Nepal", url: "https://caanepal.gov.np", desc: "Aviation safety & airport management.", cat: "Authority", status: "active" },
  { name: "Nepal Tourism Board", url: "https://ntb.gov.np", desc: "Tourism promotion & marketing.", cat: "Board", status: "active" },
  { name: "Trade and Export Promotion Centre", url: "https://tepc.gov.np", desc: "Export facilitation & trade support services.", cat: "Board", status: "active" },
  { name: "Central Bureau of Statistics", url: "https://cbs.gov.np", desc: "National statistics, census data & demographic research.", cat: "Authority", status: "active" },
  { name: "Film Development Board", url: "https://fdb.gov.np", desc: "Film industry regulation, certification & development support.", cat: "Board", status: "active" },
  { name: "Health Insurance Board", url: "https://hib.gov.np", desc: "Health insurance schemes, coverage & claims management.", cat: "Board", status: "active" },
  { name: "National Archives of Nepal", url: "https://naa.gov.np", desc: "Historical records preservation, archives management & research.", cat: "Authority", status: "active" },
  { name: "National Dairy Development Board", url: "https://nddb.gov.np", desc: "Dairy industry development, production support & quality control.", cat: "Board", status: "active" },
  { name: "National Data Portal", url: "https://data.gov.np", desc: "Open government data, statistics & public information access.", cat: "Authority", status: "active" },
  { name: "National Examinations Board", url: "https://neb.gov.np", desc: "School examinations, curriculum assessment & certification.", cat: "Board", status: "active" },
  { name: "Tea and Coffee Development Board", url: "https://teacoffee.gov.np", desc: "Tea & coffee industry development, quality standards & export promotion.", cat: "Board", status: "active" },
  { name: "National Health Research Council", url: "https://nhrc.gov.np", desc: "Health research coordination, policy advice & evidence generation.", cat: "Authority", status: "active" },
  { name: "National Health Training Center", url: "https://nhtc.gov.np", desc: "Health workforce training, capacity building & professional development.", cat: "Authority", status: "active" },
  { name: "National Information Technology Center", url: "https://nitc.gov.np", desc: "Government IT infrastructure, data center & e-governance support.", cat: "Authority", status: "active" },
  { name: "National Youth Council", url: "https://nyc.gov.np", desc: "Youth development programs, empowerment & coordination.", cat: "Authority", status: "active" },
  { name: "Nepal Agricultural Research Council", url: "https://narc.gov.np", desc: "Agricultural research, technology development & innovation.", cat: "Council", status: "active" },
  { name: "Nepal Engineering Council", url: "https://nec.gov.np", desc: "Engineering profession regulation, licensing & standards.", cat: "Council", status: "active" },
  { name: "Nepal National Single Window", url: "https://nsw.gov.np", desc: "Trade facilitation, customs clearance & import-export services.", cat: "Authority", status: "active" },
  { name: "Public Procurement Monitoring Office", url: "https://ppmo.gov.np", desc: "Public procurement regulation, monitoring & transparency.", cat: "Office", status: "active" },
  { name: "Alternative Energy Promotion Centre", url: "https://aepc.gov.np", desc: "Renewable energy promotion, solar programs & clean energy access.", cat: "Authority", status: "active" },
  { name: "Central Law Library", url: "https://lawlibrary.gov.np", desc: "Legal resources, case law & legislative documents.", cat: "Authority", status: "active" },

  // ========== Commissions ==========
  { name: "Medical Education Commission", url: "https://mec.gov.np", desc: "Medical education regulation, licensing & quality assurance.", cat: "Commission", status: "active" },
  { name: "Teachers Service Commission", url: "https://tsc.gov.np", desc: "Teacher recruitment, licensing & professional standards.", cat: "Commission", status: "active" },
  { name: "Nepal Law Commission", url: "https://lawcommission.gov.np", desc: "Law reform, legal research & legislative drafting.", cat: "Commission", status: "active" },

  // ========== Provincial Governments ==========
  { name: "Koshi Province", url: "https://koshi.gov.np", desc: "Provincial government services for Koshi (Province 1).", cat: "Provincial Govt", status: "active" },
  { name: "Madhesh Province", url: "https://madhesh.gov.np", desc: "Provincial government services for Madhesh (Province 2).", cat: "Provincial Govt", status: "active" },
  { name: "Bagmati Province", url: "https://bagmati.gov.np", desc: "Provincial government services for Bagmati (Province 3).", cat: "Provincial Govt", status: "active" },
  { name: "Gandaki Province", url: "https://gandaki.gov.np", desc: "Provincial government services for Gandaki (Province 4).", cat: "Provincial Govt", status: "active" },
  { name: "Lumbini Province", url: "https://lumbini.gov.np", desc: "Provincial government services for Lumbini (Province 5).", cat: "Provincial Govt", status: "active" },
  { name: "Karnali Province", url: "https://karnali.gov.np", desc: "Provincial government services for Karnali (Province 6).", cat: "Provincial Govt", status: "active" },
  { name: "Sudurpaschim Province", url: "https://sudurpaschim.gov.np", desc: "Provincial government services for Sudurpaschim (Province 7).", cat: "Provincial Govt", status: "active" },

  // ========== Local Governments (Metropolitan & Sub-Metropolitan Cities) ==========
  { name: "Kathmandu Metropolitan City", url: "https://kathmandu.gov.np", desc: "Local services, permits, notices.", cat: "Local Govt", status: "active" },
  { name: "Lalitpur Metropolitan City", url: "https://lmc.gov.np", desc: "Municipal services for Lalitpur residents.", cat: "Local Govt", status: "active" },
  { name: "Pokhara Metropolitan City", url: "https://pokharamun.gov.np", desc: "Municipal services for Pokhara residents.", cat: "Local Govt", status: "active" },
  { name: "Bharatpur Metropolitan City", url: "https://bharatpurmun.gov.np", desc: "Municipal services for Bharatpur residents.", cat: "Local Govt", status: "active" },
  { name: "Biratnagar Metropolitan City", url: "https://biratnagarmun.gov.np", desc: "Municipal services for Biratnagar residents.", cat: "Local Govt", status: "active" },
  { name: "Birgunj Metropolitan City", url: "https://birgunjmun.gov.np", desc: "Municipal services for Birgunj residents.", cat: "Local Govt", status: "active" },
  { name: "Dhangadhi Sub-Metropolitan City", url: "https://dhangadhimun.gov.np", desc: "Municipal services for Dhangadhi residents.", cat: "Local Govt", status: "active" },
  { name: "Nepalgunj Sub-Metropolitan City", url: "https://nepalgunjmun.gov.np", desc: "Municipal services for Nepalgunj residents.", cat: "Local Govt", status: "active" },
  { name: "Ghorahi Sub-Metropolitan City", url: "https://ghorahimun.gov.np", desc: "Municipal services for Ghorahi residents.", cat: "Local Govt", status: "active" },
  { name: "Itahari Sub-Metropolitan City", url: "https://itaharimun.gov.np", desc: "Municipal services for Itahari, Sunsari.", cat: "Local Govt", status: "active" },
  { name: "Dharan Sub-Metropolitan City", url: "https://dharanmun.gov.np", desc: "Municipal services for Dharan, Sunsari.", cat: "Local Govt", status: "active" },
  { name: "Butwal Sub-Metropolitan City", url: "https://butwalmun.gov.np", desc: "Municipal services for Butwal, Rupandehi.", cat: "Local Govt", status: "active" },

  // ========== Municipalities (Major) ==========
  { name: "Mechinagar Municipality", url: "https://mechinagarmun.gov.np", desc: "Municipal services for Mechinagar, Jhapa.", cat: "Local Govt", status: "active" },
  { name: "Damak Municipality", url: "https://damakmun.gov.np", desc: "Municipal services for Damak, Jhapa.", cat: "Local Govt", status: "active" },
  { name: "Birtamod Municipality", url: "https://birtamodmun.gov.np", desc: "Municipal services for Birtamod, Jhapa.", cat: "Local Govt", status: "active" },
  { name: "Bhadrapur Municipality", url: "https://bhadrapurmun.gov.np", desc: "Municipal services for Bhadrapur, Jhapa.", cat: "Local Govt", status: "active" },
  { name: "Pathari Shanishchare Municipality", url: "https://patharimun.gov.np", desc: "Municipal services for Pathari Shanishchare, Morang.", cat: "Local Govt", status: "active" },
  { name: "Rangeli Municipality", url: "https://rangelimun.gov.np", desc: "Municipal services for Rangeli, Morang.", cat: "Local Govt", status: "active" },
  { name: "Letang Municipality", url: "https://letangmun.gov.np", desc: "Municipal services for Letang, Morang.", cat: "Local Govt", status: "active" },
  { name: "Ratuwamai Municipality", url: "https://ratuwamaimun.gov.np", desc: "Municipal services for Ratuwamai, Morang.", cat: "Local Govt", status: "active" },
  { name: "Sundarharaicha Municipality", url: "https://sundarharaichamun.gov.np", desc: "Municipal services for Sundarharaicha, Morang.", cat: "Local Govt", status: "active" },
  { name: "Urlabari Municipality", url: "https://urlabarimun.gov.np", desc: "Municipal services for Urlabari, Morang.", cat: "Local Govt", status: "active" },
  { name: "Belbari Municipality", url: "https://belbarimun.gov.np", desc: "Municipal services for Belbari, Morang.", cat: "Local Govt", status: "active" },
  { name: "Sunwarshi Municipality", url: "https://sunwarshimun.gov.np", desc: "Municipal services for Sunwarshi, Sunsari.", cat: "Local Govt", status: "active" },
  { name: "Inaruwa Municipality", url: "https://inaruwamun.gov.np", desc: "Municipal services for Inaruwa, Sunsari.", cat: "Local Govt", status: "active" },
  { name: "Duhabi Municipality", url: "https://duhabimun.gov.np", desc: "Municipal services for Duhabi, Sunsari.", cat: "Local Govt", status: "active" },
  { name: "Tilottama Municipality", url: "https://tilottamamun.gov.np", desc: "Municipal services for Tilottama, Rupandehi.", cat: "Local Govt", status: "active" },
  { name: "Siddharthanagar Municipality", url: "https://siddharthanagarmun.gov.np", desc: "Municipal services for Siddharthanagar, Rupandehi.", cat: "Local Govt", status: "active" },
  { name: "Waling Municipality", url: "https://walingmun.gov.np", desc: "Municipal services for Waling, Syangja.", cat: "Local Govt", status: "active" },
  { name: "Putalibazar Municipality", url: "https://putalibazarmun.gov.np", desc: "Municipal services for Putalibazar, Syangja.", cat: "Local Govt", status: "active" },
  { name: "Tansen Municipality", url: "https://tansenmun.gov.np", desc: "Municipal services for Tansen, Palpa.", cat: "Local Govt", status: "active" },
  { name: "Ratnanagar Municipality", url: "https://ratnanagarmun.gov.np", desc: "Municipal services for Ratnanagar, Chitwan.", cat: "Local Govt", status: "active" },
  { name: "Kalika Municipality", url: "https://kalikamun.gov.np", desc: "Municipal services for Kalika, Chitwan.", cat: "Local Govt", status: "active" },
  { name: "Khairahani Municipality", url: "https://khairahanimun.gov.np", desc: "Municipal services for Khairahani, Chitwan.", cat: "Local Govt", status: "active" },
  { name: "Gorkha Municipality", url: "https://gorkhamun.gov.np", desc: "Municipal services for Gorkha Municipality.", cat: "Local Govt", status: "active" },
  { name: "Palungtar Municipality", url: "https://palungtarmun.gov.np", desc: "Municipal services for Palungtar, Gorkha.", cat: "Local Govt", status: "active" },
  { name: "Bidur Municipality", url: "https://bidurmun.gov.np", desc: "Municipal services for Bidur, Nuwakot.", cat: "Local Govt", status: "active" },
  { name: "Kirtipur Municipality", url: "https://kirtipurmun.gov.np", desc: "Municipal services for Kirtipur, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Madhyapur Thimi Municipality", url: "https://mthimi.gov.np", desc: "Municipal services for Madhyapur Thimi, Bhaktapur.", cat: "Local Govt", status: "active" },
  { name: "Chandragiri Municipality", url: "https://chandragirimun.gov.np", desc: "Municipal services for Chandragiri, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Tarakeshwar Municipality", url: "https://tarakeshwormun.gov.np", desc: "Municipal services for Tarakeshwar, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Tokha Municipality", url: "https://tokhamun.gov.np", desc: "Municipal services for Tokha, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Budhanilkantha Municipality", url: "https://budhanilkanthamun.gov.np", desc: "Municipal services for Budhanilkantha, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Gokarneshwar Municipality", url: "https://gokarneshwormun.gov.np", desc: "Municipal services for Gokarneshwar, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Kageshwari Manohara Municipality", url: "https://kmun.gov.np", desc: "Municipal services for Kageshwari Manohara, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Shankharapur Municipality", url: "https://shankharapurmun.gov.np", desc: "Municipal services for Shankharapur, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Nagarjun Municipality", url: "https://nagarjunmun.gov.np", desc: "Municipal services for Nagarjun, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Dakshinkali Municipality", url: "https://dakshinkalimun.gov.np", desc: "Municipal services for Dakshinkali, Kathmandu.", cat: "Local Govt", status: "active" },
  { name: "Godawari Municipality", url: "https://godawarimun.gov.np", desc: "Municipal services for Godawari, Lalitpur.", cat: "Local Govt", status: "active" },
  { name: "Mahalaxmi Municipality", url: "https://mahalaxmimun.gov.np", desc: "Municipal services for Mahalaxmi, Lalitpur.", cat: "Local Govt", status: "active" },
  { name: "Konjyosom Rural Municipality", url: "https://konjyosomrm.gov.np", desc: "Rural municipal services for Konjyosom, Sindhupalchok.", cat: "Local Govt", status: "active" },
  { name: "Gauradaha Municipality", url: "https://gauradahamun.gov.np", desc: "Municipal services for Gauradaha, Jhapa.", cat: "Local Govt", status: "active" },
  // 🆕 COMMUNITY SUBMISSIONS - Apr 2026
  { name: "Rajbiraj Municipality", url: "https://rajbirajmun.gov.np", desc: "Municipal services for Rajbiraj, Saptari.", cat: "Local Govt", status: "active" },
  { name: "Mahadeva Municipality", url: "https://mahadevamun.gov.np", desc: "Municipal services for Mahadeva, Saptari.", cat: "Local Govt", status: "active" },
  { name: "Tulsipur Sub-Metropolitan City", url: "https://tulsipurmun.gov.np", desc: "Municipal services for Tulsipur, Dang.", cat: "Local Govt", status: "active" },
  // 🆕 END COMMUNITY SUBMISSIONS

  // ========== Portals & Service Platforms ==========
  // { name: "Online Driving License System", url: "https://drivinglicense.gov.np", desc: "Online driving license application, renewal & verification system.", cat: "Portal", status: "active" },
  //{ name: "Centralized Email System", url: "https://email.gov.np", desc: "Government email services for officials and departments.", cat: "Portal", status: "active" },
  //{ name: "Nepal Government National Portal", url: "https://nepal.gov.np", desc: "Official portal of Government of Nepal - gateway to all services.", cat: "Portal", status: "active" },
  //{ name: "Nepal Kanun Patrika", url: "https://kanunpatrika.gov.np", desc: "Official gazette publication, laws & legal notices.", cat: "Portal", status: "active" },
  //{ name: "Nepal Trade Information Portal", url: "https://ntip.gov.np", desc: "Trade data, market information & export-import guidance.", cat: "Portal", status: "active" },

  // ========== Hospitals & Health Institutions ==========
  { name: "Bharatpur Hospital", url: "https://bharatpurhospital.gov.np", desc: "Government teaching hospital - ENT, general physician, dental services.", cat: "Hospital", status: "active" },
  { name: "Kanti Children's Hospital", url: "https://kantichildrenhospital.gov.np", desc: "Specialized pediatric hospital for children's healthcare.", cat: "Hospital", status: "active" },

  // ========== Programs, Trusts & Institutes ==========
  { name: "Lumbini Development Trust", url: "https://lumbinitrust.gov.np", desc: "Lumbini development, heritage conservation & pilgrimage management.", cat: "Trust", status: "active" },
  { name: "Local Governance and Community Development Programme", url: "https://lgcdp.gov.np", desc: "Local governance strengthening, community development & poverty reduction.", cat: "Program", status: "active" },
  { name: "Provincial and Local Governance Support Program", url: "https://plgsp.gov.np", desc: "Support for provincial and local government capacity building.", cat: "Program", status: "active" },
  { name: "Policy Research Institute", url: "https://pri.gov.np", desc: "Policy research, analysis & evidence-based recommendations.", cat: "Institute", status: "active" },
];

// ========== State ==========
let sites = sitesData.map(generateTags); // Auto-generate tags
let currentCategory = 'All';
let currentTag = 'All';
let searchQuery = '';
let currentLang = localStorage.getItem('lang') || 'en';
const lastUpdated = '2026-04-23';

// ========== Tag Generation ==========
function generateTags(site) {
  let tags = new Set();
  
  // Keyword-based tagging from name/desc
  const text = (site.name + ' ' + site.desc + ' ' + site.cat).toLowerCase();
  
  // Precise responsibility-based tags from desc only (no cat names)
  if (text.includes('passport') || text.includes('पासपोर्ट')) tags.add('Passport');
  if (text.includes('national id') || text.includes('आइडि') || text.includes('registration') || text.includes('birth') || text.includes('death')) tags.add('Civil Registry');
  if (text.includes('visa') || text.includes('भिसा') || text.includes('immigration')) tags.add('Visa');
  if (text.includes('tax') || text.includes('कर') || text.includes('revenue') || text.includes('ird')) tags.add('Tax');
  if (text.includes('police') || text.includes('प्रहरी')) tags.add('Police');
  if (text.includes('customs') || text.includes('कस्टम्स')) tags.add('Customs');
  if (text.includes('court') || text.includes('अदालत') || text.includes('supreme')) tags.add('Court');
  if (text.includes('health') || text.includes('hospital') || text.includes('स्वास्थ्य')) tags.add('Health');
  if (text.includes('education') || text.includes('शिक्षा') || text.includes('teacher') || text.includes('exam')) tags.add('Education');
  if (text.includes('energy') || text.includes('विद्युत') || text.includes('electricity') || text.includes('hydropower')) tags.add('Energy');
  if (text.includes('road') || text.includes('transport') || text.includes('vehicle')) tags.add('Transport');
  if (text.includes('land') || text.includes('जग्गा') || text.includes('survey') || text.includes('archive')) tags.add('Land Records');
  if (text.includes('election') || text.includes('निर्वाचन')) tags.add('Election');
  if (text.includes('agricultur') || text.includes('कृषि') || text.includes('livestock') || text.includes('farmer')) tags.add('Agriculture');
  if (text.includes('tourism') || text.includes('पर्यटन')) tags.add('Tourism');
  if (text.includes('bank') || text.includes('budget') || text.includes('finance')) tags.add('Finance');
  if (text.includes('water') || text.includes('जल') || text.includes('irrigation') || text.includes('sanitation') || text.includes('sewerage')) tags.add('Water');
  if (text.includes('recruit') || text.includes('employment') || text.includes('service commission')) tags.add('Jobs');
  if (text.includes('audit') || text.includes('account')) tags.add('Audit');
  if (text.includes('statistics') || text.includes('census') || text.includes('data')) tags.add('Statistics');
  if (text.includes('procurement') || text.includes('tender')) tags.add('Procurement');
  
  // Filter out category names to avoid repeats
  const categoryNames = ['Local Govt', 'Ministry', 'Department', 'Authority', 'Constitutional', 'Board', 'Commission', 'Program', 'Hospital', 'Trust', 'Institute', 'Office', 'Council'];
  categoryNames.forEach(name => tags.delete(name));
  
  // Category-based fallback
  if (site.cat === 'Local Govt') tags.add('Local Govt');
  
  const siteWithTags = Object.assign(site, { tags: Array.from(tags) });
  return enrichDetails(siteWithTags);
}

// ========== Professional Tooltip Enrichment ==========
function enrichDetails(site) {
  const details = {
    services: [],
    audience: "General Public",
    interaction: "Medium - Informational & Support"
  };

  const text = (site.name + ' ' + site.desc).toLowerCase();
  
  // Logic to determine services based on tags/content
  if (site.tags.includes('Passport')) {
    details.services.push("E-passport applications", "Renewal services", "Passport status tracking");
    details.interaction = "High - Direct service delivery";
  }
  if (site.tags.includes('Civil Registry')) {
    details.services.push("National ID registration", "Birth/Death certification", "Vital records management");
    details.interaction = "High - Critical citizen documentation";
  }
  if (site.tags.includes('Visa') || site.tags.includes('Immigration')) {
    details.services.push("Visa applications & extensions", "Entry/Exit permits", "Travel advisories");
    details.audience = "International Travelers & Citizens";
  }
  if (site.tags.includes('Tax') || site.tags.includes('Customs')) {
    details.services.push("Electronic tax filing (e-Filing)", "Customs clearance services", "Revenue payment portal");
    details.audience = "Citizens, Businesses & Importers";
    details.interaction = "High - Financial & trade compliance";
  }
  if (site.tags.includes('Transport')) {
    details.services.push("Driving license applications", "Vehicle registration", "Transport permit management");
    details.interaction = "High - Mobility & licensing services";
  }
  if (site.tags.includes('Health')) {
    details.services.push("Hospital & clinic locator", "Health service standards", "Epidemic alerts & data");
    details.interaction = "High - Public wellness support";
  }
  if (site.tags.includes('Education')) {
    details.services.push("Curriculum assessment", "Teacher licensing", "Results and certification");
    details.audience = "Students, Teachers & Parents";
  }
  if (site.tags.includes('Jobs')) {
    details.services.push("Civil service exams", "Job recruitment notices", "Application portal");
    details.audience = "Job Seekers";
    details.interaction = "High - Career & employment support";
  }
  if (site.cat === 'Local Govt' || site.cat === 'Provincial Govt') {
    details.services.push("Local infrastructure development", "Permits and recommendations", "Public grievances handling");
    details.audience = "Local Residents";
    details.interaction = "High - Direct local governance";
  }
  if (site.cat === 'Ministry') {
    details.services.push("Policy formulation", "National sector oversight", "Legislative drafting support");
    details.audience = "Citizens & Institutional Bodies";
    details.interaction = "Medium - Strategic & legal oversight";
  }
  if (site.tags.includes('Police')) {
    details.services.push("Online first information reports", "Emergency response coordination", "Character verification");
    details.interaction = "High - Security & protection services";
  }
  if (site.tags.includes('Finance') || site.tags.includes('Bank') || site.tags.includes('Authority')) {
    details.services.push("Regulatory monitoring", "Public data and archives", "Standards & compliance enforcement");
    details.audience = "Professionals, Businesses & Researchers";
  }
  if (site.tags.includes('Water')) {
    details.services.push("Drinking water infrastructure", "Sewerage system planning", "Sanitation service coordination");
    details.audience = "Municipalities, Engineers & Residents";
    details.interaction = "Medium - Infrastructure planning & support";
  }

  // Fallback if empty
  if (details.services.length === 0) {
    details.services.push("Official announcements", "Departmental guidance", "Information dissemination");
  }

  return Object.assign(site, { details });
}


// ========== DOM Elements ==========
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const categoryNav = document.getElementById('category-nav');
const siteCountEl = document.getElementById('site-count');
const lastUpdatedEl = document.getElementById('last-updated');
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const tagNav = document.getElementById('tag-nav');

// ========== Helpers ==========
const escapeHtml = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const formatDate = (dateStr) => {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(currentLang === 'ne' ? 'ne-NP' : 'en-US', options);
};

const getTranslation = (key) => {
  return translations?.[currentLang]?.[key] || translations?.en?.[key] || key;
};

// ========== Render Functions ==========
function renderCategories() {
  const categories = ['All', ...Array.from(new Set(sites.map(s => s.cat)))].sort();
  const counts = {};
  sites.forEach(s => counts[s.cat] = (counts[s.cat] || 0) + 1);
  const totalCount = sites.length;
  
  categoryNav.innerHTML = categories.map(cat => {
    const count = cat === 'All' ? totalCount : (counts[cat] || 0);
    return `
      <button class="cat-btn ${cat === currentCategory ? 'active' : ''}" 
              data-cat="${escapeHtml(cat)}" 
              aria-pressed="${cat === currentCategory}"
              title="${cat} (${count} sites)"
              aria-label="${cat} - ${count} sites">
        ${escapeHtml(cat)} <span class="count">(${count})</span>
      </button>
    `;
  }).join('');
}

function renderTags() {
  const filteredForCat = currentCategory === 'All' ? sites : sites.filter(s => s.cat === currentCategory);
  const uniqueTags = Array.from(new Set(filteredForCat.flatMap(s => s.tags))).sort();
  
  // If current tag is no longer available in this category, reset it
  if (currentTag !== 'All' && !uniqueTags.includes(currentTag)) {
    currentTag = 'All';
  }

  tagNav.innerHTML = uniqueTags.map(tag => {
    return `
      <button class="tag-btn ${tag === currentTag ? 'active' : ''}" 
              data-tag="${escapeHtml(tag)}">
        ${escapeHtml(tag)}
      </button>
    `;
  }).join('');
}


function renderGrid() {
  const q = searchQuery.toLowerCase();
  const filtered = sites.filter(s => {
    const matchesCat = currentCategory === 'All' || s.cat === currentCategory;
    const matchesTag = currentTag === 'All' || s.tags.includes(currentTag);
    const matchesSearch = !q || 
      s.name.toLowerCase().includes(q) || 
      s.url.toLowerCase().includes(q) || 
      s.desc.toLowerCase().includes(q) || 
      s.cat.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q));
    return matchesCat && matchesTag && matchesSearch;
  });

  if (siteCountEl) {
    siteCountEl.innerHTML = `📈 <strong>${filtered.length}</strong> ${getTranslation('sitesCount') || 'sites'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty">${getTranslation('noResults') || 'No sites match your filters.'}</p>`;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const displayUrl = s.url.replace(/^https?:\/\//, '');
    const statusText = s.status === 'active' ? (getTranslation('online') || 'Online') : (getTranslation('offline') || 'Offline');
    
    return `
      <article class="card">
        <div class="details-trigger" aria-label="More Info">i</div>
        <div class="tooltip">
          <div class="tooltip-header">
            <span>🏛️</span> ${getTranslation('detailsTitle') || 'Organization Insights'}
          </div>
          <div class="tooltip-section">
            <span class="tooltip-label">${getTranslation('labelServices') || 'Key Services'}</span>
            <span class="tooltip-content">
              <ul>
                ${s.details.services.map(serve => `<li>${serve}</li>`).join('')}
              </ul>
            </span>
          </div>
          <div class="tooltip-section">
            <span class="tooltip-label">${getTranslation('labelAudience') || 'Primary Audience'}</span>
            <span class="tooltip-content">${s.details.audience}</span>
          </div>
          <div class="tooltip-section">
            <span class="tooltip-label">${getTranslation('labelInteraction') || 'Public Interaction'}</span>
            <span class="tooltip-content">${s.details.interaction}</span>
          </div>
        </div>

        <h3>${escapeHtml(s.name)}</h3>
        <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(displayUrl)}</a>
        <p>${escapeHtml(s.desc)}</p>
        <div class="card-footer">
          <span class="tag">${escapeHtml(s.cat)}</span>
          <div class="status ${s.status}">${statusText}</div>
        </div>
        <button class="copy-btn" data-url="${escapeHtml(s.url)}" aria-label="${getTranslation('copyUrl') || 'Copy URL'}">
          ${getTranslation('copyUrl') || '📋 Copy URL'}
        </button>
      </article>
    `;
  }).join('');
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = getTranslation(key);
    if (translation) el.textContent = translation;
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translation = getTranslation(key);
    if (translation) el.placeholder = translation;
  });
  
  if (langToggle) {
    langToggle.textContent = getTranslation('langToggle');
  }
  
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = formatDate(lastUpdated);
  }
  
  renderGrid();
}

// ========== Event Handlers ==========
function handleCategoryClick(e) {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  currentCategory = btn.dataset.cat;
  renderCategories();
  renderTags();
  renderGrid();
}

function handleTagClick(e) {
  const btn = e.target.closest('.tag-btn');
  if (!btn) return;
  const newTag = btn.dataset.tag;
  if (currentTag === newTag) {
    currentTag = 'All';
  } else {
    currentTag = newTag;
  }
  renderTags();
  renderGrid();
}

function handleSearchInput(e) {
  searchQuery = e.target.value.trim();
  renderGrid();
}

async function handleCopyUrl(e) {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  
  const url = btn.dataset.url;
  try {
    await navigator.clipboard.writeText(url);
    const original = btn.innerHTML;
    btn.innerHTML = getTranslation('copied') || '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 2000);
  } catch (err) {
    console.error('Copy failed:', err);
  }
}

function handleLangToggle() {
  currentLang = currentLang === 'en' ? 'ne' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

function handleThemeToggle() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  if (themeToggle) themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
}

// ========== Event Listeners ==========
categoryNav.addEventListener('click', handleCategoryClick);
tagNav.addEventListener('click', handleTagClick);
searchInput.addEventListener('input', handleSearchInput);
grid.addEventListener('click', handleCopyUrl);
if (langToggle) {
  langToggle.addEventListener('click', handleLangToggle);
}
if (themeToggle) {
  themeToggle.addEventListener('click', handleThemeToggle);
}

// ========== Init ==========
function init() {
  // Remove loading state if present
  if (grid.querySelector('.loading')) {
    grid.innerHTML = '';
  }
  
  // Theme init
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  
  applyTranslations();
  renderCategories();
  renderTags();
  renderGrid();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
