/**
 * Site-wide content for Redefining Architecture.
 * Sources: "website data-31.10.docx", the earlier "Redefining Architecture.html",
 * and the project folders. Edit here; every page reads from this file.
 */

export const brand = {
  name: 'Redefining Architecture',
  short: 'RA',
  tagline: 'Buildings shaped by climate, city and the people who use them.',
  lead:
    'Architecture, interiors, landscape, vaastu and green-building consultancy, with building sanction, PCB and EC clearances, DPR and design feasibility studies. Led by an architect with over twenty years of experience in India and the Gulf.',
  // TODO(client): set the studio email (e.g. 'studio@yourdomain.com'). While null, email lines stay hidden.
  email: null,
  phone: '+91 98364 21375',
  phoneHref: 'tel:+919836421375',
  founded: 'Kolkata · Bhubaneswar',
}

export const studios = [
  {
    id: 'kolkata',
    city: 'Kolkata',
    label: 'Kolkata Studio',
    sublabel: 'Blob Studio · Kolkata',
    region: 'West Bengal',
    tag: 'WEST BENGAL',
    coords: '22.5937° N, 88.4061° E',
    category: 'Main Studio & Research Archive',
    description:
      'Housed in our regional studio overlooking the salt-lake wetlands. Accommodates the physical model-making shop, structural testing bay, and materials library.',
    lines: ['Blob Studio, 5th Floor, Yamuna Building', '86, Golaghata Road, Sreebhumi, Lake Town', 'Kolkata, West Bengal 700048'],
    hours: 'Mon – Fri / 09:30 – 18:30 IST',
    mapQuery: 'Yamuna Building, 86 Golaghata Road, Sreebhumi, Lake Town, Kolkata 700048',
  },
  {
    id: 'bhubaneswar',
    city: 'Bhubaneswar',
    label: 'Bhubaneswar Studio',
    sublabel: 'Bhubaneswar Studio',
    region: 'Odisha',
    tag: 'ODISHA',
    coords: '20.2706° N, 85.8334° E',
    category: 'Terroir & Stone Craft Lab',
    description:
      'Situated near the ancient temple quarter, focusing on regional climate physics, masonry detailing, and statutory BDA/BMC compliance.',
    lines: ['66 Budhanagar', 'Bhubaneswar, Odisha 751006'],
    hours: 'Tue – Sat / 10:00 – 19:00 IST',
    mapQuery: '66 Budhanagar, Bhubaneswar 751006',
  },
]

export const nav = [
  { to: '/', label: 'Overview' },
  { to: '/projects', label: 'Projects' },
  { to: '/practice', label: 'Practice' },
  { to: '/practice#approach', label: 'Dialogue with Nature' },
  { to: '/inquire#studios', label: 'Contact' },
]

/** The eleven services — "everything under one roof". */
export const services = [
  {
    title: 'Architecture',
    text: 'Concept to detailed drawings for residential, commercial, institutional and hospitality projects.',
  },
  {
    title: 'Interior Design',
    text: 'Layouts, materials, joinery and lighting for homes, offices, hotels and retail spaces.',
  },
  {
    title: 'Landscape Design',
    text: 'Gardens, terraces and site landscaping planned together with the building.',
  },
  {
    title: 'Building Sanction',
    text: 'Sanction drawings and submissions for all building types — KMC, NKDA, BMC, BDA and CDA.',
  },
  {
    title: 'Master Plan Approval',
    text: 'Master plans and layouts prepared and taken through approval, backed by a master’s degree in urban development.',
  },
  {
    title: 'IGBC Green Building',
    text: 'Design guidance and documentation for IGBC green-building certification.',
  },
  {
    title: 'Vaastu Consultation',
    text: 'Vaastu-aligned planning that fits the site and the brief.',
  },
  {
    title: 'PCB & EC Clearances',
    text: 'Pollution Control Board consents and environmental clearance applications with supporting documents.',
  },
  {
    title: 'DPR & Feasibility Studies',
    text: 'Detailed project reports and design feasibility studies covering scope, drawings and estimates.',
  },
  {
    title: 'Design Management',
    text: 'MEPF coordination, BOQs, material specifications and consultant input kept consistent with the design.',
  },
  {
    title: 'Project Management (PMC)',
    text: 'Coordination of consultants and contractors, cost and schedule monitoring, and quality control through construction.',
  },
]

/** Authorities the practice prepares sanction / clearance submissions for (per Screen 10). */
export const authorities = [
  {
    code: 'KMC',
    name: 'Kolkata Municipal Corporation',
    region: 'West Bengal',
    tag: 'WEST BENGAL',
    title: 'Kolkata Municipal Corporation',
    text: 'Borough approvals, heritage conservation zone compliances, structural stability verification, and FAR/Ground Coverage calculations under West Bengal Municipal Building Rules.',
  },
  {
    code: 'NKDA',
    name: 'New Town Dev Authority',
    region: 'New Town, Kolkata',
    tag: 'NEW TOWN KOLKATA',
    title: 'New Town Kolkata Development Authority',
    text: 'Smart-city environmental clearances, elevated skywalk sanctions, sub-surface drainage clearances, and green-building incentive FAR certifications.',
  },
  {
    code: 'BMC & BDA',
    name: 'Bhubaneswar Urban Region',
    region: 'Odisha Capital',
    tag: 'ODISHA CAPITAL',
    title: 'Bhubaneswar Municipal & Development Authority',
    text: 'Comprehensive Development Plan (CDP) zone conformance, BDA planning permissions, seismic zone compliances, and temple-precinct height buffer clearances.',
  },
  {
    code: 'CDA',
    name: 'Cuttack Development Authority',
    region: 'Cuttack Urban',
    tag: 'CUTTACK URBAN',
    title: 'Cuttack Development Authority',
    text: 'Riverine setback covenants along Mahanadi and Kathajodi basins, historic silver-city conservation norms, and water-table containment audits.',
  },
  {
    code: 'PCB · SEIAA',
    name: 'State Pollution Control & EIA',
    region: 'Ecological Clearances',
    tag: 'ECOLOGICAL',
    title: 'Pollution Control Board & Environmental Clearances',
    text: 'Consent to Establish (CTE), Environment Impact Assessment (EIA) clearance for footprints > 20,000 sqm, and solid-waste cycle certification.',
  },
  {
    code: 'WBFES & AAI',
    name: 'Fire & Aviation Clearances',
    region: 'Safety & Clearances',
    tag: 'SAFETY & AVIATION',
    title: 'Fire Safety & Civil Aviation Liaison',
    text: 'Hydrant loop simulation approvals, fire refuge balconies, and NOC acquisition under Civil Aviation Funnel maps for Dumdum & Biju Patnaik Airports.',
  },
]

export const principal = {
  role: 'Principal Architect',
  // TODO(client): add the principal's name if it should appear on the site.
  name: null,
  summary:
    'A registered architect with more than twenty years of experience in design, design management and coordination of multi-discipline teams, across India and the Gulf.',
  credentials: [
    { label: 'Education', value: 'B.Arch', highlight: 'NIT Calicut' },
    { label: 'Post-graduate', value: 'M.Arch, Urban Development' },
    { label: 'Experience', value: '20+ years · India & the Gulf' },
    { label: 'Registration', value: 'Registered architect' },
    { label: 'Languages', value: 'English, Hindi, Odia, Bengali' },
  ],
}

export const practiceText = [
  'Redefining Architecture is led by a registered architect with more than twenty years of experience in design, design management and coordination of multi-discipline teams.',
  'The practice treats drawings, bills of quantities and consultant input as one job. That keeps design intent intact through approvals, tendering and construction.',
  'We work from Kolkata and Bhubaneswar and travel to site as the project needs.',
]

export const approachText =
  'Each project starts with the site: its orientation, its rainfall, the street it faces, vaastu requirements and the rules that govern it. We resolve planning, structure, services and material specifications together, so what is drawn can be built — and what is built stays comfortable and economical to run.'

/** "Dialogue with Nature" — four principles drawn from how the practice works. */
export const principles = [
  { word: 'Read', title: 'Read the site', text: 'Orientation, sun path, rainfall, soil and the street a building faces set the plan before any form is drawn.', tag: 'Site & climate' },
  { word: 'Respect', title: 'Respect the rules', text: 'Bye-laws, sanction norms and vaastu requirements are resolved in the first sketches, not patched in at the end.', tag: 'Approvals & vaastu' },
  { word: 'Resolve', title: 'Resolve it together', text: 'Planning, structure, MEPF services and specifications are coordinated as one set, so what is drawn can be built.', tag: 'Design management' },
  { word: 'Remain', title: 'Remain economical', text: 'Daylight, cross-ventilation and green-building measures keep a building comfortable and affordable to run.', tag: 'IGBC & running cost' },
]

/** Studio multidisciplinary disciplines. */
export const disciplines = [
  {
    level: 'Level 01',
    role: 'Architecture & Master Planning',
    text: 'Concept to working drawings, master planning, residential enclaves, towers and campus developments.',
  },
  {
    level: 'Level 02',
    role: 'Interiors & Tactile Craft',
    text: 'Spatial layouts, joinery, natural light optimization, tactile stone and timber craft for homes, hospitality and workspaces.',
  },
  {
    level: 'Level 03',
    role: 'Statutory Sanctions & Clearances',
    text: 'In-house statutory desk for KMC, NKDA, BMC, BDA, CDA, plus PCB consents and environmental clearances (EC).',
  },
  {
    level: 'Level 04',
    role: 'Design Management & PMC',
    text: 'MEPF coordination, structural alignment, comprehensive BOQs, contractor vetting, and site quality surveillance.',
  },
]

/** Four-phase delivery, mapped to the services (Screen 12 matrix). */
export const phases = [
  {
    no: '01',
    phase: 'Phase 01',
    timeline: 'Weeks 01 — 04',
    title: 'Site Study & Feasibility',
    text: 'Site analysis, bye-law and vaastu checks, area statements and — where needed — a detailed project report (DPR) with drawings and estimates.',
    tags: ['DPR', 'Feasibility', 'Vaastu'],
  },
  {
    no: '02',
    phase: 'Phase 02',
    timeline: 'Weeks 05 — 10',
    title: 'Design & Approvals',
    text: 'Concept to design development, then sanction drawings and submissions to KMC, NKDA, BMC, BDA or CDA, plus PCB consents and environmental clearance.',
    tags: ['Architecture', 'Sanction', 'PCB · EC'],
  },
  {
    no: '03',
    phase: 'Phase 03',
    timeline: 'Weeks 11 — 18',
    title: 'Design Management & Tender',
    text: 'Working drawings, MEPF coordination, BOQs and material specifications kept consistent with the design for a clean tender.',
    tags: ['MEPF', 'BOQ', 'Specifications'],
  },
  {
    no: '04',
    phase: 'Phase 04',
    timeline: 'Construction Execution',
    title: 'Project Management on Site',
    text: 'Coordination of consultants and contractors, cost and schedule monitoring, and quality control through to completion.',
    tags: ['PMC', 'Quality', 'Handover'],
  },
]

export const disclosure =
  'Projects shown include work done while working for real estate developers and design consultancies.'

/** Options for the inquiry forms. */
export const formOptions = {
  projectTypes: [
    { value: 'Villa / private residence', hint: 'Homes, villas and bungalows' },
    { value: 'Housing & apartments', hint: 'Residential towers and enclaves' },
    { value: 'Health care', hint: 'Hospitals, clinics, diagnostic centres' },
    { value: 'Hospitality', hint: 'Hotels, clubs, exhibition venues' },
    { value: 'Institutional', hint: 'Schools, colleges, campuses' },
    { value: 'Commercial & offices', hint: 'IT, office and mixed commercial' },
    { value: 'Interiors', hint: 'Residential and commercial interiors' },
    { value: 'Industrial park', hint: 'MSME parks, warehousing, plotting' },
  ],
  authorities: ['KMC', 'NKDA', 'BMC', 'BDA', 'CDA', 'Other authority', 'Not sure yet'],
  timelines: ['As soon as possible', 'Within 3 months', '3 – 6 months', '6 – 12 months', 'Just exploring'],
  sources: ['Referral', 'Google search', 'Social media', 'Saw a project', 'Other'],
}
