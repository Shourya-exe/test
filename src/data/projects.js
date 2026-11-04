/**
 * Project catalogue.
 *
 * Images come from scripts/prepare_images.py → src/data/images.generated.json.
 * Per the client's notes: no locations are shown, and projects carried out
 * while working for developers or consultancies say so in `credit`.
 *
 * `drawings` lists image indexes (0-based) that are plans / sheets rather than renders.
 */
import manifest from './images.generated.json'

export const categories = [
  { id: 'luxury', label: 'High-end Residential' },
  { id: 'housing', label: 'Housing' },
  { id: 'villas', label: 'Villas' },
  { id: 'healthcare', label: 'Health Care' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'institutions', label: 'Institutions' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'offices', label: 'IT & Offices' },
  { id: 'commercial', label: 'Mixed Commercial' },
  { id: 'industrial', label: 'MSME Industrial Parks' },
]

const CREDIT = {
  developer: 'Real estate developer',
  consultancy: 'Design consultancy',
  contractor: 'Design-build contractor',
}

const raw = [
  {
    slug: 'the-curve',
    title: 'The Curve',
    category: 'luxury',
    badge: 'High-rise Residence',
    credit: CREDIT.developer,
    scope: ['Architecture', 'Unit planning', 'Amenity floors'],
    summary:
      'A luxury residential tower that flares toward a crown of pointed arches, lit at night as a marker on the skyline.',
    body: [
      'The tower rises as a slender shaft and opens out toward the top, where a ring of pointed arches forms its crown. Vertical fins and recessed balconies give the elevation depth and keep direct sun off the glazing.',
      'Apartments are planned as four- and five-bedroom simplex homes and four-bedroom duplexes. Residents’ clubs sit on the 2nd, 3rd and 20th floors, and the arrival court is organised around an entrance water feature.',
    ],
    facts: [
      { label: 'Typology', value: 'High-rise luxury residential' },
      { label: 'Homes', value: '4 & 5 BHK simplex · 4 BHK duplex' },
      { label: 'Amenities', value: 'Clubs on 2nd, 3rd & 20th floors' },
      { label: 'Arrival', value: 'Entrance court with water feature' },
    ],
    captions: [
      'Crown of the tower at dusk',
      'The tower above the neighbourhood at night',
      'Crown above the morning mist',
      'Entrance and drop-off',
      'Apartment terrace',
      'Aerial view at dusk',
    ],
  },
  {
    slug: 'the-duet',
    title: 'The Duet',
    category: 'luxury',
    badge: 'Luxury Residence',
    credit: CREDIT.developer,
    scope: ['Architecture', 'Facade', 'Lounge interiors'],
    summary:
      'A slender residential tower on a triangular corner plot, wrapped in sweeping balconies and finished with a curved crown.',
    body: [
      'The building works with a tight triangular corner site. Floor plates follow the plot’s geometry, and continuous curved balconies soften the corners and shade the glass behind them.',
      'A ground and mezzanine floor carry the arrival and parking, with simplex and duplex apartments above. A perforated curved screen marks the entrance from the street, and a residents’ lounge with a bar completes the amenities.',
    ],
    facts: [
      { label: 'Typology', value: 'High-rise luxury residential' },
      { label: 'Site', value: 'Triangular corner plot' },
      { label: 'Homes', value: 'Simplex & duplex apartments' },
      { label: 'Amenities', value: 'Residents’ lounge & bar' },
    ],
    captions: [
      'Street elevation at night',
      'Aerial view over the neighbourhood',
      'Street elevation by day',
      'Entrance screen and podium',
      'Residents’ lounge',
    ],
  },
  {
    slug: 'medical-college',
    title: 'Medical College & Teaching Hospital',
    category: 'healthcare',
    badge: 'Health Care Campus',
    credit: CREDIT.contractor,
    scope: ['Architecture', 'Campus planning', 'Hostels & quarters'],
    summary:
      'A government medical college and teaching hospital campus with hostels and staff quarters, delivered on a turnkey design-and-build basis.',
    body: [
      'The campus brings together a 100-seat medical college, its teaching hospital and the housing that supports it: hostels for students and resident doctors, a nurses’ hostel and staff quarters.',
      'Blocks share a restrained language of white render and terracotta-toned vertical bands, so a large, phased campus reads as one place while each building stays simple to build.',
    ],
    facts: [
      { label: 'Typology', value: 'Medical college & teaching hospital' },
      { label: 'Programme', value: '100-seat medical college' },
      { label: 'Residential', value: 'Student, doctors’ & nurses’ hostels; staff quarters' },
      { label: 'Delivery', value: 'Turnkey design & build' },
    ],
    captions: [
      'Medical college — view 1',
      'Medical college — view 2',
      'Resident doctors’ hostel',
      'Boys’ hostel',
      'Nurses’ hostel',
      'Nurses’ quarters',
    ],
  },
  {
    slug: 'club-interiors',
    title: 'Club Interiors — Concept',
    category: 'interiors',
    badge: 'Proposed',
    status: 'Proposed concept',
    credit: null,
    scope: ['Interior design', 'Concept', 'Material palette'],
    summary:
      '“Modern opulence and sophisticated leisure” — a concept for a private club in soft taupes, champagne golds and creamy whites.',
    quote:
      'The concept stems from a desire to create an atmosphere that is graceful, welcoming, and quietly luxurious — a neutral and warm palette of soft taupes, champagne golds and creamy whites to evoke a sense of calm sophistication.',
    body: [
      'The interiors are designed with gentle curves, layered textures and ambient lighting so each room feels both intimate and expansive.',
      'The concept covers the whole club: meeting rooms, bar, card room, theatre, party area, event hall, rooftop swimming pool, jacuzzi, gym and an aqua gym — each developed in two or three options.',
    ],
    facts: [
      { label: 'Typology', value: 'Private club interiors' },
      { label: 'Spaces', value: 'Meeting, bar, card room, theatre, event hall' },
      { label: 'Wellness', value: 'Pool, jacuzzi, gym, aqua gym' },
      { label: 'Palette', value: 'Taupe · champagne gold · cream' },
    ],
    captions: ['Rooftop swimming pool', 'Event hall', 'Meeting room', 'Bar', 'Card room', 'Party area', 'Jacuzzi deck', 'Gym'],
  },
  {
    slug: 'housing-enclave',
    title: 'Housing Enclave',
    category: 'housing',
    badge: 'Residential Housing',
    credit: CREDIT.developer,
    scope: ['Architecture', 'Site planning', 'Clubhouse'],
    summary:
      'A large housing development of residential towers set around landscaped courts, with a glazed clubhouse at the entrance.',
    body: [
      'Residential towers are arranged around a sequence of green courts, keeping cars to the edges so the centre of the site belongs to people, play areas and the pool.',
      'A double-height glazed clubhouse with a brick base marks the entrance and gives the community a shared front door.',
    ],
    facts: [
      { label: 'Typology', value: 'Group housing' },
      { label: 'Planning', value: 'Towers around landscaped courts' },
      { label: 'Amenities', value: 'Clubhouse, pool, play areas' },
    ],
    captions: ['The enclave at dusk', 'Clubhouse at the entrance', 'Towers from the approach road', 'Site plan'],
    drawings: [3],
  },
  {
    slug: 'hotel-interiors',
    title: 'Business Hotel Interiors',
    category: 'interiors',
    badge: 'Hospitality Interiors',
    credit: null,
    scope: ['Interior design', 'Lighting', 'Joinery'],
    summary:
      'Arrival, dining and guest-room interiors for a business hotel — warm timber, stone and layered lighting throughout.',
    body: [
      'The arrival sequence uses patterned stone floors and backlit panelling to lead guests from the lobby to reception.',
      'Restaurants each take a distinct character — from a speciality dining room with circular backlit screens to an all-day buffet under timber-slatted ceilings — while guest rooms stay calm and practical.',
    ],
    facts: [
      { label: 'Typology', value: 'Business hotel' },
      { label: 'Public areas', value: 'Lobby, reception, restaurants' },
      { label: 'Rooms', value: 'Guest rooms & bathrooms' },
    ],
    captions: ['Lobby lounge', 'Reception', 'Speciality restaurant', 'Dining room with backlit screens', 'All-day dining buffet', 'Guest room', 'Twin guest room'],
  },
  {
    slug: 'residence-amenities',
    title: 'Luxury Residence Amenities',
    category: 'interiors',
    badge: 'Residential Interiors',
    credit: null,
    scope: ['Interior design', 'Amenity spaces'],
    summary:
      'Amenity interiors for a high-end residential building: club lobby, residents’ hall, reception, lift lobbies and gym.',
    body: [
      'Shared spaces are treated like a private hotel — inlaid stone floors, fluted and backlit wall panels, and furniture grouped for conversation.',
      'The residents’ hall combines a bar and lounge; the gym looks out over greenery through full-height glazing.',
    ],
    facts: [
      { label: 'Typology', value: 'High-end residential amenities' },
      { label: 'Spaces', value: 'Club lobby, residents’ hall, reception' },
      { label: 'Also', value: 'Lift lobbies & gym' },
    ],
    captions: ['Club lobby', 'Residents’ hall', 'Reception lounge', 'Lift lobby', 'Gym'],
  },
  {
    slug: 'luxury-villa',
    title: 'Luxury Villa',
    category: 'villas',
    badge: 'Private Residence',
    credit: null,
    scope: ['Architecture', 'Landscape'],
    summary:
      'A private villa with a colonnaded entrance portico, stone-clad planes and a landscaped forecourt.',
    body: [
      'A deep entrance portico on slender columns gives shade and a sense of arrival. Stone and timber cladding break the volumes into calmer planes.',
      'Planting is brought right up to the house, so the forecourt and terraces read as part of the garden.',
    ],
    facts: [
      { label: 'Typology', value: 'Private villa' },
      { label: 'Features', value: 'Colonnaded portico, landscaped forecourt' },
    ],
    captions: ['Garden elevation', 'Front elevation', 'Entrance portico'],
  },
  {
    slug: 'college-campus',
    title: 'College & Auditorium Campus',
    category: 'institutions',
    badge: 'Higher Education',
    credit: CREDIT.consultancy,
    year: '2016',
    scope: ['Design review', 'Coordination', 'Shop drawings'],
    summary:
      'A women’s college with an auditorium and classroom block on a university campus — reviewed, coordinated and detailed for construction.',
    body: [
      'The project has two parts: the college building (basement plus four floors) and an auditorium and classroom block (ground plus two).',
      'Work covered design review and RFIs, coordination with the client and consultants, precast cladding coordination with the manufacturer, detailing, MEP coordination and shop drawings — including wet areas, finishes and reflected ceilings — plus sketches and 3D views for site engineers, mock-ups and client approvals.',
    ],
    facts: [
      { label: 'Typology', value: 'University college & auditorium' },
      { label: 'College', value: 'Basement + 4 floors' },
      { label: 'Auditorium block', value: 'Ground + 2 floors' },
      { label: 'Year', value: '2016' },
    ],
    captions: ['Campus view from the street', 'Aerial view of the campus', 'Ground floor plan sheet'],
    drawings: [2],
  },
  {
    slug: 'exhibition-centre',
    title: 'Exhibition & Fair Ground',
    category: 'hospitality',
    badge: 'Exhibition Venue',
    credit: CREDIT.consultancy,
    scope: ['Master planning', 'Architecture'],
    summary:
      'A master plan for a large exhibition and fair ground: tensile-roofed halls, a business block, food court and a landmark tower.',
    body: [
      'Exhibition halls are covered by peaked tensile roofs that read as a festival of tents from the approach and stay light and naturally ventilated inside.',
      'A business block, food court and open plazas organise the ground for large crowds, with a landmark tower marking the entrance.',
    ],
    facts: [
      { label: 'Typology', value: 'Exhibition & fair ground' },
      { label: 'Programme', value: 'Halls, business block, food court' },
      { label: 'Structure', value: 'Tensile-roofed exhibition halls' },
    ],
    captions: ['Exhibition halls at night', 'Entrance plaza and landmark tower', 'Aerial view of the master plan', 'Presentation sheet'],
    drawings: [3],
  },
  {
    slug: 'eco-station',
    title: 'Eco Station Corporate Office',
    category: 'offices',
    badge: 'Corporate Office',
    credit: CREDIT.consultancy,
    year: '2011–13',
    scope: ['Architecture', 'Parking systems', 'Lobby interiors'],
    summary:
      'A corporate office tower with a façade of coloured panels, a driveway lobby and automated rotary car parking within its podium.',
    body: [
      'The office floors sit above a parking podium. Automated rotary parking makes the most of a compact footprint, and a driveway lobby brings cars and visitors in under cover.',
      'Bands of orange, red and yellow panels between the windows give the tower its identity and break down its scale.',
    ],
    facts: [
      { label: 'Typology', value: 'IT / corporate office' },
      { label: 'Podium', value: 'Rotary car parking' },
      { label: 'Amenities', value: 'Gymnasium & café floor' },
      { label: 'Years', value: '2011–13' },
    ],
    captions: ['The tower', 'Façade detail', 'Driveway lobby', 'Plans, section and views'],
    drawings: [3],
  },
  {
    slug: 'autohub',
    title: 'Autohub Mixed Development',
    category: 'commercial',
    badge: 'Mixed Commercial',
    credit: CREDIT.consultancy,
    scope: ['Architecture', 'Facade'],
    summary:
      'Car showrooms, service workshops and offices combined in one building behind a stacked, layered façade.',
    body: [
      'Showrooms take the double-height glazed frontage at street level, with workshops behind and offices stacked above.',
      'The upper floors step and overlap in shifted bands, giving a large commercial block a strong silhouette from the road.',
    ],
    facts: [
      { label: 'Typology', value: 'Mixed commercial' },
      { label: 'Programme', value: 'Car showrooms, workshops, offices' },
    ],
    captions: ['Elevation at dusk', 'Street corner view', 'Showroom frontage', 'Plans and project sheet'],
    drawings: [3],
  },
  {
    slug: 'prana-housing',
    title: 'Prana Housing',
    category: 'housing',
    badge: 'Residential Towers',
    credit: CREDIT.consultancy,
    scope: ['Architecture', 'Landscape'],
    summary:
      'Residential towers with sculpted, wave-like balconies wrapped in planting, and landscaped gardens between them.',
    body: [
      'Each floor’s balcony line shifts from the one below, so the towers read as soft, layered forms rather than flat walls of windows.',
      'Planters along every balcony edge and landscaped decks bring greenery up the building and into the shared gardens.',
    ],
    facts: [
      { label: 'Typology', value: 'Residential towers' },
      { label: 'Features', value: 'Sculpted planted balconies, landscaped decks' },
    ],
    captions: ['Tower with planted balconies', 'Balcony forms at sunset', 'Landscaped garden deck', 'Presentation sheet'],
    drawings: [3],
  },
  {
    slug: 'industrial-park',
    title: 'MSME Industrial Park',
    category: 'industrial',
    badge: 'Industrial Plotting',
    credit: CREDIT.developer,
    scope: ['Master planning', 'Plotting', 'Main gate'],
    summary:
      'Layout and plotting of a 25.37-acre MSME industrial park, with internal roads, industrial plots and a landmark entrance gate.',
    body: [
      'The 25.37-acre development parcel was carved out of a larger landholding and laid out on a clear grid of internal roads, giving every industrial plot direct access.',
      'A timber-and-stone main gate gives the park an address from the road.',
    ],
    facts: [
      { label: 'Typology', value: 'MSME industrial park' },
      { label: 'Area', value: '25.37 acres' },
      { label: 'Scope', value: 'Plotting, roads, main gate' },
    ],
    captions: ['Main gate — view 1', 'Main gate — view 2', 'Industrial plotting plan'],
    drawings: [2],
  },
  {
    slug: 'diagnostic-centre',
    title: 'Diagnostic Centre',
    category: 'healthcare',
    badge: 'Proposed',
    status: 'Proposed',
    credit: CREDIT.consultancy,
    scope: ['Space planning', 'Interior design'],
    summary:
      'A two-floor diagnostic centre planned from adjacency diagrams — OPDs, imaging, pathology, dialysis, physiotherapy and day care.',
    body: [
      'Planning started with bubble diagrams of patient flow. Reception and waiting sit at the centre of each floor, with clinical rooms around them so patients never cross back through the building.',
      'The ground floor holds the pharmacy, digital X-ray, dialysis and physiotherapy; the first floor holds OPD consulting rooms, ECG, USG and pathology, day care and a small OT.',
    ],
    facts: [
      { label: 'Typology', value: 'Diagnostic centre' },
      { label: 'Ground floor', value: 'Pharmacy, X-ray, dialysis, physiotherapy' },
      { label: 'First floor', value: 'OPDs, ECG, USG, pathology, day care, OT' },
    ],
    captions: ['Ground floor layout', 'First floor layout', 'Ground floor adjacency diagram', 'First floor adjacency diagram'],
    drawings: [0, 1, 2, 3],
  },
  {
    slug: 'villa-in-progress',
    title: 'Villa — Work in Progress',
    category: 'villas',
    badge: 'In Progress',
    status: 'Work in progress',
    credit: null,
    scope: ['Architecture'],
    summary:
      'A residence of stacked, terraced volumes over a solid base, with colour-accented upper floors. Currently under way.',
    body: [
      'The house is built up as a solid base with lighter, stepped volumes above, opening onto terraces and roof gardens on each level.',
      'Yellow accent panels and deep window reveals give the upper floors their character.',
    ],
    facts: [
      { label: 'Typology', value: 'Villa / residential building' },
      { label: 'Status', value: 'Work in progress' },
    ],
    captions: ['Corner view', 'Aerial view of the terraces', 'Approach view'],
  },
]

const BASE = import.meta.env.BASE_URL || '/'

export function imageSet(slug, index) {
  const entry = manifest[slug]?.[index]
  if (!entry) return null
  const url = (w) => `${BASE}images/projects/${slug}/${entry.name}-${w}.webp`
  return {
    src: url(entry.widths[0]),
    srcSet: entry.widths.map((w) => `${url(w)} ${w}w`).join(', '),
    width: entry.w,
    height: entry.h,
    ratio: entry.w / entry.h,
  }
}

export const projects = raw.map((p, i) => {
  const count = manifest[p.slug]?.length ?? 0
  const drawings = new Set(p.drawings ?? [])
  return {
    ...p,
    index: String(i + 1).padStart(2, '0'),
    categoryLabel: categories.find((c) => c.id === p.category)?.label ?? p.category,
    images: Array.from({ length: count }, (_, k) => ({
      ...imageSet(p.slug, k),
      caption: p.captions?.[k] ?? p.title,
      isDrawing: drawings.has(k),
    })),
  }
})

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export function neighbours(slug) {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}

export const featuredSlugs = ['the-curve', 'the-duet', 'medical-college', 'hotel-interiors', 'housing-enclave']
