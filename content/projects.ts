export type PricingDetail = {
  offerPrice?: string
  basePrice?: string
  offerNote?: string
  floorRise?: string
  premiums?: { label: string; amount: string }[]
  otherCharges?: { label: string; amount: string }[]
  parking?: { label: string; amount: string }[]
}

export type PaymentStage = {
  percentage: string
  milestone: string
}

export type Project = {
  slug: string
  title: string
  tagline?: string
  status: 'completed' | 'ongoing'
  type: 'Residential' | 'Commercial' | 'Industrial' | 'Renovation'
  client: string
  location: string
  builtUpArea?: string
  floors?: string
  startDate: string
  endDate?: string
  expectedCompletion?: string
  progress?: number
  approvals?: {
    hmda?: string
    rera?: string
  }
  highlights?: string[]
  pricing?: PricingDetail
  paymentPlan?: PaymentStage[]
  scope: string[]
  description: string
  cover: string
  gallery: string[]
  featured?: boolean
}

export const projects: Project[] = [
  // ── ONGOING PROJECTS (2) ──────────────────────────────────────────────────

  {
    slug: 'vian-vayu',
    title: 'Vian Vayu — High-Rise Residences',
    tagline: 'Elevated Living Above Everything Else',
    status: 'ongoing',
    type: 'Residential',
    client: 'VIAN PROPERTIES & Shraddha Group',
    location: 'Kollur, Hyderabad',
    builtUpArea: '1,790 – 2,150 sq ft units',
    floors: '2 Iconic High-Rise Towers (4 Basements + G + High-Rise)',
    startDate: '2024-01',
    expectedCompletion: '2026-12',
    progress: 45,
    approvals: {
      hmda: '007273/BP/HMDA/1744/SKP/2024',
      rera: 'P01100010825',
    },
    highlights: [
      '2 Iconic Towers with 4-Level Basements',
      'Only 5 Units Per Floor with 4 High-Speed Lifts',
      '80% Corner Residences with maximum cross-ventilation',
      'G+5 Grand Clubhouse with Rooftop Infinity Pool',
      '100 Feet Road Facing Frontage',
      '100% Vaastu Compliant Homes',
    ],
    pricing: {
      basePrice: '₹6,999/- Per Sq. Ft.',
      offerPrice: '₹6,799/- Per Sq. Ft.',
      offerNote: 'Special Limited Period Offer Price',
      floorRise: '₹20/- Per Sq. Ft. (Applicable from 6th floor onwards, per floor)',
      premiums: [
        { label: 'East Facing', amount: '₹100/- Per Sq. Ft.' },
        { label: 'Corner Unit', amount: '₹100/- Per Sq. Ft.' },
        { label: 'Clubhouse View', amount: '₹100/- Per Sq. Ft.' },
        { label: '100 Feet Road Facing', amount: '₹100/- Per Sq. Ft.' },
      ],
      otherCharges: [
        { label: 'Infrastructure Charges', amount: '₹150/- Per Sq. Ft.' },
        { label: 'Clubhouse & Amenities Charges', amount: '₹300/- Per Sq. Ft.' },
      ],
      parking: [
        { label: 'Single Car Parking', amount: '₹3,00,000/-' },
        { label: 'Extra Car Parking', amount: '₹5,00,000/-' },
      ],
    },
    scope: [
      'HMDA Approved (007273/BP/HMDA/1744/SKP/2024) & RERA Registered (P01100010825)',
      '2 Iconic High-Rise Towers redefining the city skyline',
      'Exclusive Low-Density Living: Only 5 units per floor with 4 high-speed lifts per floor',
      '80% Corner Flats ensuring cross ventilation and uninterrupted daylight',
      'Grand G+5 Clubhouse with Rooftop Infinity Pool, Multipurpose Hall, Dining Lounge & Gymnasium',
      '4-Level Basements with smooth, expansive vehicle movement and visitor parking',
      '100% Vaastu-compliant architecture with double-height entrance lobby & 100-ft road frontage',
      'Complete safety infrastructure: CCTV surveillance, 24/7 security, and solar fencing',
    ],
    description: `VIAN VAYU (#FEELTHEFLOW) is an exclusive premium high-rise residential community crafted for elevated, peaceful family living in Kollur, Hyderabad.\n\nDesigned around the natural flow of air and light, VIAN VAYU features 2 magnificent towers with just 5 spacious 3-BHK residences per floor. Over 80% of the residences are corner flats, guaranteeing supreme privacy, cross ventilation, and generous natural daylight.\n\nResidences range from 1,790 sq. ft. to 2,150 sq. ft., complemented by a grand G+5 clubhouse featuring a rooftop infinity pool, wellness gym, kids play arena, and double-height arrival lobbies. Executed with premium IS-standard concrete, high-tensile TMT steel, and precision engineering by Shraddha Group.`,
    cover: '/images/projects/vian-vayu/cover.jpg',
    gallery: [
      '/images/projects/vian-vayu/cover.jpg',
      '/images/projects/vian-vayu/amenities.jpg',
      '/images/projects/vian-vayu/master-plan.jpg',
      '/images/projects/vian-vayu/flat-a-2150.jpg',
      '/images/projects/vian-vayu/flat-b-1900.jpg',
      '/images/projects/vian-vayu/flat-c-1880.jpg',
      '/images/projects/vian-vayu/flat-d-1950.jpg',
      '/images/projects/vian-vayu/flat-e-1790.jpg',
      '/images/projects/vian-vayu/clubhouse-sketch.jpg',
      '/images/projects/vian-vayu/connectivity.jpg',
    ],
    featured: true,
  },

  {
    slug: 'vian-mrida',
    title: 'Vian Mrida — 2 & 3 BHK Premium Homes',
    tagline: 'Elevate Your Lifestyle, Smarter Than Ever',
    status: 'ongoing',
    type: 'Residential',
    client: 'VIAN PROPERTIES & Shraddha Group',
    location: 'Kollur, Hyderabad',
    builtUpArea: '1,395 – 2,360 sq ft units (2.62 Acres / 356 Units)',
    floors: 'G+32 Floors (Stepped Elevation: 22, 28, 32 Floors)',
    startDate: '2024-03',
    expectedCompletion: '2027-06',
    progress: 35,
    approvals: {
      hmda: '003833/BP/HMDA/0800/SKP/2024',
      rera: 'P01100009333',
    },
    highlights: [
      '8 Feet All Doors Height Throughout',
      '8 Feet Wide Grand Corridors',
      '8 Feet Wide Panoramic Balconies',
      '6 Feet Tall UPVC Windows for Max Light',
      'G+32 Floors Stepped Elevation Icon across 2.62 Acres',
      '4 Dedicated Levels of Luxury Clubhouse Amenities',
    ],
    pricing: {
      offerPrice: '₹6,999/- Per Sq. Ft.',
      offerNote: 'Offer Price (Amenities & Premiums Applicable)',
    },
    paymentPlan: [
      { percentage: '10%', milestone: 'Booking' },
      { percentage: '10%', milestone: 'Agreement of Sale (AOS)' },
      { percentage: '30%', milestone: 'As Per Every 8 Months Schedules' },
      { percentage: '50%', milestone: 'At Handover / NOC' },
    ],
    scope: [
      'HMDA Approved (003833/BP/HMDA/0800/SKP/2024) & RERA Registered (P01100009333)',
      'Iconic single-tower stepped elevation architectural marvel across 2.62 acres (356 units)',
      'Innovative "Breathing Mass" biophilic design with stepped terraces and lush green facade',
      '2 & 3 BHK luxury configurations ranging from 1,395 to 2,360 sq. ft.',
      '8-feet wide panoramic balconies, 8-feet doors, and 8-feet wide corridors',
      '4 levels of world-class clubhouse amenities with Rooftop Infinity Pool & Stargazing Deck',
      'Comprehensive sports & fitness: Squash Court, Basketball Court, Cricket Practice Net & Gym',
      '100-feet approach road with seamless connectivity to Neopolis, Kokapet SEZ & Financial District',
    ],
    description: `VIAN MRIDA (Mrida Smart) is an iconic G+32 stepped high-rise development spanning 2.62 acres in the prime corridor of Kollur, Hyderabad.\n\nConceived around the architectural philosophy of "Breathing Mass," the building converges biophilic aesthetics and structural engineering to provide maximum cross ventilation, louvers that filter daylight, and terraced gardens at multiple elevations.\n\nFeaturing 356 premium 2 & 3 BHK homes (1,395 to 2,360 sq. ft.), 8-foot wide balconies, 8-foot tall doorways, 8-foot corridors, and 4 dedicated levels of clubhouse amenities including a sky pool, stargazing deck, business co-working lounges, and indoor sports arena.`,
    cover: '/images/projects/vian-mrida/cover.jpg',
    gallery: [
      '/images/projects/vian-mrida/cover.jpg',
      '/images/projects/vian-mrida/entrance-lobby.jpg',
      '/images/projects/vian-mrida/library-lounge.jpg',
      '/images/projects/vian-mrida/connectivity.jpg',
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByStatus(status: 'completed' | 'ongoing'): Project[] {
  return projects.filter((p) => p.status === status)
}
