export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  tagline: string;
  location: string;
  year: string;
  area: string;
  status: string;
  workedFor: string;
  coverImage: string;
  gallery: string[];
  brief: string;
  description: string[];
  disciplines: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "the-duet-ballygunge",
    title: "The Duet - Luxury Residential Tower",
    category: "Residential: High-End Luxury",
    categorySlug: "residential-luxury",
    tagline: "Towering elegance sculpted with climate-responsive double skin and panoramic vistas.",
    location: "Ballygunge, Kolkata",
    year: "2024",
    area: "3,80,000 sq.ft",
    status: "Completed",
    workedFor: "Premier Real Estate Developers & Consultancies",
    coverImage: "/images/projects/the-duet/cover.jpg",
    gallery: [
      "/images/projects/the-duet/cover.jpg",
      "/images/projects/the-duet/aerial.jpg",
      "/images/projects/the-duet/night.jpg",
      "/images/projects/luxury-interiors/cover.jpg",
      "/images/projects/luxury-interiors/lobby.jpg",
    ],
    brief:
      "A flagship luxury residential high-rise situated in Ballygunge, designed to redefine ultra-luxury urban living in Kolkata with climate-adaptive facades and bespoke penthouse duplexes.",
    description: [
      "The Duet stands as a landmark residential statement in Kolkata's historic Ballygunge neighborhood. The architecture balances monumental verticality with delicate solar-responsive shading fins and deep cantilevered balconies.",
      "The tower responds directly to Bengal's seasonal monsoon winds and sun path, allowing abundant natural daylight into living zones while minimizing solar thermal gain. The crown of the building features expansive private sky terraces overlooking the urban skyline.",
      "Integrated design coordination united MEPF engineering, structural articulation, and interior spatial harmony from the earliest conceptual sketches."
    ],
    disciplines: [
      "Architectural Design",
      "Facade Engineering",
      "Building Sanction Coordination (KMC)",
      "IGBC Green Certification",
      "MEPF Design Management"
    ],
    highlights: [
      "Dual-aspect panoramic residences with natural cross-ventilation",
      "Climate-responsive horizontal and vertical louvre systems",
      "Private cantilevered sky terraces and wellness club"
    ]
  },
  {
    id: "02",
    slug: "medical-college-bhubaneswar",
    title: "Medical College & Teaching Hospital",
    category: "Health Care",
    categorySlug: "healthcare",
    tagline: "A state-of-the-art 850-bed academic medical campus planned for clinical excellence and healing environments.",
    location: "Bhubaneswar, Odisha",
    year: "2023",
    area: "9,50,000 sq.ft",
    status: "Completed / Commissioned",
    workedFor: "State Healthcare Corporation & Institutional Consultancies",
    coverImage: "/images/projects/medical-college/cover.jpg",
    gallery: [
      "/images/projects/medical-college/cover.jpg",
      "/images/projects/medical-college/view-1.jpg",
      "/images/projects/medical-college/view-2.jpg",
      "/images/projects/medical-college/view-3.jpg",
      "/images/projects/medical-college/view-4.jpg",
      "/images/projects/medical-college/view-5.jpg"
    ],
    brief:
      "A sprawling super-specialty medical campus comprising academic blocks, 850-bed teaching hospital, diagnostic wings, and student residences designed with therapeutic landscape courtyards.",
    description: [
      "Designed as a comprehensive tertiary healthcare institution, the campus orchestrates complex clinical workflows into clear, human-scaled circulation spines. Dedicated vehicular segregation separates emergency, OPD, patient transfer, and visitor streams.",
      "Internal courtyards and landscaped light wells penetrate the deep hospital floor plates, bringing daylight and natural greenery deep into recovery wards, nurse stations, and waiting lounges.",
      "The project adheres strictly to statutory hospital norms, biomedical clearances, BDA approvals, and environmental sustainability standards."
    ],
    disciplines: [
      "Hospital Architecture",
      "Master Planning & Campus Design",
      "BDA Sanction & Statutory Clearances",
      "PCB & Environmental Clearances",
      "MEPF Healthcare Design Management"
    ],
    highlights: [
      "Dedicated sterile and non-sterile zone separation with infection-control airflow",
      "Therapeutic healing gardens integrated across the OPD and inpatient blocks",
      "High-efficiency central energy plant with wastewater zero-discharge recycling"
    ]
  },
  {
    id: "03",
    slug: "the-curve-residences",
    title: "The Curve Luxury Residences",
    category: "Residential: High-End Luxury",
    categorySlug: "residential-luxury",
    tagline: "Curvilinear aerodynamic architecture maximizing natural light, garden views, and spatial grandeur.",
    location: "Kolkata",
    year: "2023",
    area: "2,40,000 sq.ft",
    status: "Under Execution",
    workedFor: "Leading Real Estate Developers",
    coverImage: "/images/projects/the-curve/cover.jpg",
    gallery: [
      "/images/projects/the-curve/cover.jpg",
      "/images/projects/the-curve/facade.jpg",
      "/images/projects/the-curve/render.jpg",
      "/images/projects/the-curve/plan-1.jpg",
      "/images/projects/the-curve/plan-2.jpg"
    ],
    brief:
      "An iconic residential tower defined by fluid geometry, sweeping glass facades, and cantilevered landscaped decks that seamlessly unite the interior sanctuary with sky gardens.",
    description: [
      "The Curve departs from rigid orthogonal residential blocks by embracing organic flowing contours. Its swept perimeter reduces aerodynamic drag while opening wide 180-degree panoramic vantage points for each residence.",
      "Every residence is designed with expansive ceiling heights, private lift vestibules, and deep shading balconies that shield living areas from the intense afternoon sun.",
      "The master planning integrates multi-tiered landscape decks, infinity edge pools, and shaded walking circuits woven directly into the structural podium."
    ],
    disciplines: [
      "Architectural Design",
      "Master Planning",
      "Structural & MEPF Coordination",
      "KMC Sanction Compliance",
      "Landscape Architecture"
    ],
    highlights: [
      "Dynamic curved continuous balconies providing natural solar shade",
      "Acoustically insulated double-glazed curtain walls",
      "Podium level tropical garden deck with bio-pool"
    ]
  },
  {
    id: "04",
    slug: "dhuliyan-luxury-villa",
    title: "Luxury Waterfront Villa at Dhuliyan",
    category: "Villas",
    categorySlug: "villas",
    tagline: "A bespoke private sanctuary celebrating vernacular masonry, expansive water bodies, and microclimate breezes.",
    location: "Murshidabad, West Bengal",
    year: "2024",
    area: "28,000 sq.ft",
    status: "Under Construction",
    workedFor: "Private Client",
    coverImage: "/images/projects/dhuliyan-villa/cover.jpg",
    gallery: [
      "/images/projects/dhuliyan-villa/cover.jpg",
      "/images/projects/dhuliyan-villa/exterior-1.jpg",
      "/images/projects/dhuliyan-villa/exterior-2.jpg"
    ],
    brief:
      "A grand riverside estate nestled along the Ganges in Murshidabad, synthesizing classical Nawabi heritage proportions with contemporary tropical minimalism.",
    description: [
      "Commissioned for a distinguished family, the villa draws deep inspiration from Bengal's traditional 'Baganbari' (garden retreat). Water bodies wrap around living pavilions to cool the arriving river breezes before entering shaded verandas.",
      "Locally sourced terracotta bricks, handcrafted stone jalis, and native timber are paired with sleek structural cantilevers. The villa's orientation is tuned to the cardinal axes in accordance with authentic Vaastu principles.",
      "A series of stepped pavilions step down gracefully toward the water's edge, preserving mature native trees that have stood on the property for over four decades."
    ],
    disciplines: [
      "Comprehensive Architectural Design",
      "Landscape Architecture",
      "Interior Architecture",
      "Vaastu Consultation",
      "Project Management Consultancy (PMC)"
    ],
    highlights: [
      "Passive evaporative cooling via surrounding water courtyards",
      "Handcrafted terracotta screens providing privacy and solar modulation",
      "Full off-grid solar and rainwater harvesting infrastructure"
    ]
  },
  {
    id: "05",
    slug: "kolkata-exhibition-centre",
    title: "International Exhibition & Convention Centre",
    category: "Hospitality",
    categorySlug: "hospitality",
    tagline: "A monumental civic venue built with column-free exhibition halls, expansive plazas, and civic presence.",
    location: "Kolkata, West Bengal",
    year: "2023",
    area: "4,60,000 sq.ft",
    status: "Completed",
    workedFor: "Civic Infrastructure Consultancies & Developers",
    coverImage: "/images/projects/exhibition-centre/cover.jpg",
    gallery: [
      "/images/projects/exhibition-centre/cover.jpg",
      "/images/projects/exhibition-centre/view-1.jpg",
      "/images/projects/exhibition-centre/view-2.jpg",
      "/images/projects/exhibition-centre/view-3.jpg"
    ],
    brief:
      "A large-scale convention and international trade exhibition hub equipped with long-span column-free halls, grand public plazas, and multi-modal transit connectivity.",
    description: [
      "The Exhibition Centre is engineered to host global trade expos, cultural summits, and multi-thousand delegate conferences. The architectural envelope features bold geometric canopies that shelter arriving delegates from torrential monsoon rains.",
      "Inside, 72-meter long-span steel trusses create unobstructed exhibition volumes capable of flexible repartitioning. Acoustic walls, high-load service trenches, and overhead rigging grids support world-class staging.",
      "Outside, civic plazas accommodate large crowds with shaded gathering groves, water fountains, and dedicated freight logistics access completely segregated from visitors."
    ],
    disciplines: [
      "Civic & Hospitality Architecture",
      "Long-Span Structural Coordination",
      "Urban Transit & Traffic Flow Planning",
      "Building Sanctions & Approvals",
      "Environmental Impact Assessment (EC)"
    ],
    highlights: [
      "72-meter clear-span exhibition pavilions with multi-configurable layouts",
      "High-capacity passive pedestrian shaded colonnades",
      "Dual-level logistics docks with underground heavy vehicle servicing"
    ]
  },
  {
    id: "06",
    slug: "puri-diagnostic-centre",
    title: "Proposed Diagnostic & Wellness Centre",
    category: "Health Care",
    categorySlug: "healthcare",
    tagline: "A coastal healthcare facility harmonizing patient comfort, natural light, and precise diagnostic pathways.",
    location: "Puri, Odisha",
    year: "2023",
    area: "1,20,000 sq.ft",
    status: "Approved / Design Completed",
    workedFor: "Healthcare Foundation & Consultancies",
    coverImage: "/images/projects/puri-diagnostic/cover.jpg",
    gallery: [
      "/images/projects/puri-diagnostic/cover.jpg",
      "/images/projects/puri-diagnostic/view-1.jpg",
      "/images/projects/puri-diagnostic/view-2.jpg",
      "/images/projects/puri-diagnostic/view-3.jpg",
      "/images/projects/puri-diagnostic/view-4.jpg"
    ],
    brief:
      "An advanced multi-modality diagnostic imaging and preventive healthcare centre designed specifically for the maritime coastal climate of Puri.",
    description: [
      "Situated near Puri's sacred coast, this facility is conceived as a sanctuary of health rather than an intimidating medical building. Soft natural daylight illuminates all public lounges and consultation corridors through sheltered atrium gardens.",
      "Special attention was dedicated to coastal durability: non-corrosive materials, aerated concrete panels, and marine-grade protective finishes safeguard the structure from saline air exposure.",
      "Advanced MRI, CT, and robotic pathology suites are shielded with precision radiation-containment engineering and isolated vibration dampers."
    ],
    disciplines: [
      "Healthcare Architecture",
      "Medical Equipment Fit-Out Planning",
      "BDA & BMC Sanction Approvals",
      "Pollution Control Board (PCB) Clearances",
      "Vaastu Consultation"
    ],
    highlights: [
      "Saline-resistant coastal building envelope with self-cleaning facade tiles",
      "Double-height sky-lit central waiting concourse surrounded by native greenery",
      "Radiation-safe layout optimized for seamless diagnostic throughput"
    ]
  },
  {
    id: "07",
    slug: "high-end-club-interiors",
    title: "High-End Club & Wellness Interiors",
    category: "Interiors",
    categorySlug: "interiors",
    tagline: "Opulent material palettes, warm ambient illuminations, and bespoke joinery for exclusive private clubs.",
    location: "Kolkata, West Bengal",
    year: "2024",
    area: "45,000 sq.ft",
    status: "Completed",
    workedFor: "Premier Real Estate Hospitality",
    coverImage: "/images/projects/luxury-interiors/cover.jpg",
    gallery: [
      "/images/projects/luxury-interiors/cover.jpg",
      "/images/projects/luxury-interiors/lobby.jpg",
      "/images/projects/luxury-interiors/hall.jpg",
      "/images/projects/luxury-interiors/gym.jpg",
      "/images/projects/luxury-interiors/lift.jpg"
    ],
    brief:
      "A turnkey interior transformation of a five-star private club, comprising reception lounges, fine-dining halls, state-of-the-art gymnasium, and VIP resident salons.",
    description: [
      "The interior architectural concept merges classical restraint with contemporary material honesty. Italian Statuario marble floors are balanced by fluted walnut paneling, custom brushed brass trim, and bespoke acoustic coffered ceilings.",
      "Lighting design plays a central role: warm indirect coves and architectural spotlights highlight textured natural stones, creating an intimate, welcoming sanctuary removed from the bustling city outside.",
      "Every detail—from the custom-engineered acoustic partitions in the resident banquet hall to ergonomic fitness layouts—was crafted to endure rigorous high-touch daily use."
    ],
    disciplines: [
      "Comprehensive Interior Architecture",
      "Lighting & Acoustic Design",
      "Custom Furniture & Millwork Detailing",
      "Material Specifications & BOQ",
      "PMC & Quality Control"
    ],
    highlights: [
      "Bespoke backlit onyx and bronze reception desk with acoustic fluting",
      "Sound-damped private banquet suites with concealed multimedia tech",
      "Olympic-grade fitness centre with anti-vibration sprung wood flooring"
    ]
  },
  {
    id: "08",
    slug: "ecostation-it-tower",
    title: "Ecostation IT Office Building",
    category: "IT and office buildings",
    categorySlug: "it-office",
    tagline: "A platinum-rated green commercial workplace built for tech enterprises and optimal energy performance.",
    location: "Sector V, Salt Lake, Kolkata",
    year: "2022",
    area: "5,20,000 sq.ft",
    status: "Completed",
    workedFor: "Commercial Real Estate Developers",
    coverImage: "/images/projects/ecostation/cover.jpg",
    gallery: [
      "/images/projects/ecostation/cover.jpg"
    ],
    brief:
      "A high-density sustainable IT workplace tower engineered for maximum floor-plate efficiency, tenant modularity, and low operational carbon footprint.",
    description: [
      "Located in Kolkata's premier tech hub Sector V, Ecostation sets a benchmark for resource efficiency. The central core layout yields expansive column-free tenant floors of 35,000 sq.ft with high flexibility for enterprise fit-outs.",
      "High-performance double-glazed solar low-E curtain walling dramatically lowers HVAC chiller loads while flooding interior workstations with glare-free daylight.",
      "Rainwater harvesting, rooftop solar photovoltaic arrays, and an automated building management system deliver 34% energy savings over standard commercial baselines."
    ],
    disciplines: [
      "Commercial Workplace Architecture",
      "IGBC Platinum Green Certification",
      "NKDA Sanction Compliance",
      "MEPF High-Rise Systems Design",
      "DPR & Feasibility Study"
    ],
    highlights: [
      "35,000 sq.ft column-free floor plates with central service core",
      "Energy recovery ventilation delivering high indoor air quality (IAQ)",
      "Automated multi-level car parking facility with EV charging infrastructure"
    ]
  },
  {
    id: "09",
    slug: "autohub-corporate",
    title: "Autohub Showroom & Corporate Headquarters",
    category: "Mixed Commercial",
    categorySlug: "commercial",
    tagline: "A sculptural automotive showcase pairing ultra-transparent glazed galleries with high-spec service bays.",
    location: "Kolkata, West Bengal",
    year: "2023",
    area: "1,85,000 sq.ft",
    status: "Completed",
    workedFor: "Automotive Conglomerate",
    coverImage: "/images/projects/autohub/cover.jpg",
    gallery: [
      "/images/projects/autohub/cover.jpg",
      "/images/projects/autohub/view-1.jpg"
    ],
    brief:
      "A mixed-use commercial facility combining an automotive flagship showroom, corporate offices, customer lounges, and a multi-brand servicing workshop.",
    description: [
      "The design highlights speed, precision, and transparency. A 12-meter tall structural glass curtain wall creates a seamless visual showcase facing the major arterial expressway.",
      "A ramp system leads vehicles up to elevated showcase galleries, while the rear houses clean, acoustically isolated diagnostic workshops with specialized grease-interception drainage systems.",
      "The upper three floors host executive boardrooms, corporate training centers, and open-plan administrative offices overlooking the grand showroom atrium below."
    ],
    disciplines: [
      "Commercial & Retail Architecture",
      "Structural Steel Engineering Coordination",
      "Municipal Sanction Compliance (KMC)",
      "Automotive Service Logistics Layout",
      "Design Management & MEPF"
    ],
    highlights: [
      "12-meter high structural glass display gallery facing primary arterial highway",
      "Engineered industrial service bays with eco-certified oil separation drainage",
      "Executive rooftop corporate suite with private presentation theatre"
    ]
  },
  {
    id: "10",
    slug: "amtala-industrial-park",
    title: "Amtala MSME Industrial Park",
    category: "MSME industrial parks",
    categorySlug: "industrial",
    tagline: "A master-planned 25.37-acre industrial ecosystem optimized for manufacturing, logistics, and sustainability.",
    location: "Amtala, West Bengal",
    year: "2024",
    area: "25.37 Acres / 8,90,000 sq.ft Built",
    status: "Phase 1 Completed",
    workedFor: "Industrial Development Authority & Private Developers",
    coverImage: "/images/projects/amtala-industrial/cover.jpg",
    gallery: [
      "/images/projects/amtala-industrial/cover.jpg",
      "/images/projects/amtala-industrial/layout.jpg"
    ],
    brief:
      "A comprehensive industrial master plan spanning 25.37 acres, featuring modular manufacturing sheds, container logistics corridors, common effluent treatment, and workers' amenities.",
    description: [
      "The Amtala industrial park provides small and medium enterprises with world-class plug-and-play manufacturing infrastructure. The layout separates heavy articulated truck logistics from employee circulation.",
      "Pre-engineered steel portal frames accommodate flexible crane capacities up to 10 tons. Green buffer zones, stormwater retention ponds, and native tree planting screen the industrial operations from adjoining rural communities.",
      "Master planning included detailed zoning approvals, PCB industrial consent documentation, and environmental clearances."
    ],
    disciplines: [
      "Industrial Master Planning",
      "Zoning & Land Use Approvals",
      "PCB Consents & Environmental Clearance (EC)",
      "Pre-Engineered Building (PEB) Design",
      "Civil Infrastructure & Roadway Engineering"
    ],
    highlights: [
      "25.37-acre master planned logistics grid with 24-meter arterial avenues",
      "Zero-liquid discharge common effluent treatment plant (CETP)",
      "Modular pre-engineered standard factory sheds with high clear heights"
    ]
  },
  {
    id: "11",
    slug: "rajarhat-housing",
    title: "Rajarhat Housing Complex",
    category: "Residential: housing",
    categorySlug: "residential-housing",
    tagline: "Contemporary mid-rise residential community woven with pedestrian avenues, play zones, and lush greenery.",
    location: "Rajarhat, Kolkata",
    year: "2023",
    area: "4,20,000 sq.ft",
    status: "Completed",
    workedFor: "Regional Housing Developers",
    coverImage: "/images/projects/rajarhat-housing/cover.jpg",
    gallery: [
      "/images/projects/rajarhat-housing/cover.jpg",
      "/images/projects/rajarhat-housing/view-1.jpg",
      "/images/projects/rajarhat-housing/view-2.jpg"
    ],
    brief:
      "A master-planned residential housing enclave offering modern, affordable high-quality apartments centered around a lush central landscaped park.",
    description: [
      "Rajarhat Housing provides 420 well-ventilated family apartments distributed across balanced towers. The site layout keeps vehicular parking on the peripheral loop, freeing the central precinct as an uninterrupted, safe playground and community park.",
      "Every apartment features cross-ventilation, functional utility balconies, and optimal furniture layouts. Energy-efficient building materials and solar water heating contribute to low recurring maintenance costs for homeowners.",
      "Full sanction drawings were executed and approved through NKDA guidelines, coordinating structural, civil, and fire-safety standards seamlessly."
    ],
    disciplines: [
      "Residential Architecture",
      "Master Planning & Community Amenities",
      "NKDA Building Sanction",
      "Fire Safety NOC Compliance",
      "Landscape Architecture"
    ],
    highlights: [
      "Vehicle-free central community park spanning over 40,000 sq.ft",
      "Cross-ventilated 2BHK and 3BHK unit layouts with zero wasted corridor space",
      "On-site sewage treatment plant with recycled water for garden irrigation"
    ]
  },
  {
    id: "12",
    slug: "estate-villa-murshidabad",
    title: "Residential Estate Villa & Gardens",
    category: "Villas",
    categorySlug: "villas",
    tagline: "An understated private residence balancing classical proportions with verdant courtyard gardens.",
    location: "Murshidabad, West Bengal",
    year: "2023",
    area: "14,500 sq.ft",
    status: "Completed",
    workedFor: "Private Client",
    coverImage: "/images/projects/estate-villa/cover.jpg",
    gallery: [
      "/images/projects/estate-villa/cover.jpg",
      "/images/projects/estate-villa/view-1.jpg",
      "/images/projects/estate-villa/view-2.jpg"
    ],
    brief:
      "A custom two-story family villa set on a private agrarian estate, designed to celebrate indoor-outdoor connectivity and cross-breezes.",
    description: [
      "Surrounded by fruit orchards, this villa emphasizes timeless horizontal planes, wide overhanging eaves, and double-height living areas that invite the landscape inside.",
      "Deep verandas shield the brick and plaster facades from driving summer rains, while private upper-level bedroom balconies look out onto the sunset horizon.",
      "Constructed by local artisans under the studio's design guidance, the villa showcases how economical, climate-appropriate construction can achieve luxurious architectural grace."
    ],
    disciplines: [
      "Architectural Design",
      "Interior Architecture",
      "Vaastu Consultation",
      "Landscape Design",
      "Site Supervision & PMC"
    ],
    highlights: [
      "Deep wrap-around verandas functioning as climate buffers",
      "Double-height living pavilion with exposed timber trusses",
      "Integrated natural rainwater collection pond for estate irrigation"
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Residential: High-End Luxury",
  "Health Care",
  "Hospitality",
  "Interiors",
  "IT and office buildings",
  "Mixed Commercial",
  "MSME industrial parks",
  "Residential: housing",
  "Villas"
];
