// Services content data

export type Service = {
  id: string
  anchor: string
  title: string
  icon: string // lucide icon name
  shortDescription: string
  description: string
  scope: string[]
  typicalDuration: string
  pricingModel: string
  whatYouGet: string[]
}

export const services: Service[] = [
  {
    id: 'residential',
    anchor: 'residential-construction',
    title: 'Residential Construction',
    icon: 'Home',
    shortDescription: 'Individual houses, row houses and apartment blocks built from foundation to handover.',
    description:
      'We build new residential structures — from a single G+2 home to a 50-unit apartment project — managing every stage ourselves with our own site supervisors and tested materials. Pricing is on a per-sq-ft turnkey basis with a fixed, written schedule.',
    scope: [
      'Foundation design and construction (isolated, raft, pile)',
      'RCC structural frame — columns, beams, slabs',
      'Brick or AAC block masonry',
      'Plastering and waterproofing',
      'Flooring, tiling and stone work',
      'Painting — interior OBD and exterior texture or stone',
      'Plumbing and sanitary fixtures',
      'Electrical — wiring, distribution board, points',
      'Compound wall, gate and driveway',
    ],
    typicalDuration: '12–24 months depending on size and scope',
    pricingModel: 'Per sq ft (built-up area), turnkey. Itemised estimate provided before agreement.',
    whatYouGet: [
      'Signed scope of work and payment schedule',
      'Structural drawings (if we design) or review of architect drawings',
      'Weekly progress report with photographs',
      'Material test certificates on request',
      'Occupancy certificate assistance',
      '12-month defect liability period',
    ],
  },
  {
    id: 'commercial',
    anchor: 'commercial-industrial',
    title: 'Commercial & Industrial',
    icon: 'Building2',
    shortDescription: 'Office buildings, retail complexes, warehouses and manufacturing facilities.',
    description:
      "Commercial and industrial projects demand close coordination between structure, services, and the client's operational requirements. We carry out civil works including foundations, structure, facades, and finishing, and we coordinate with MEP specialists and fit-out contractors to a single programme.",
    scope: [
      'Basement excavation and retaining structures',
      'RCC or pre-engineered steel structures',
      'External facades — glass, stone cladding, texture',
      'MEP coordination and civil interface works',
      'Industrial floors — concrete with hardener or epoxy finish',
      'Fire-rated construction and fire-fighting system civil works',
      'Lift and escalator civil works',
      'Rooftop plant rooms and utility areas',
    ],
    typicalDuration: '18–36 months depending on complexity',
    pricingModel: 'Item-rate contract for large projects; turnkey per sq ft for standard warehouse and shed works.',
    whatYouGet: [
      'Pre-construction programme aligned to occupancy date',
      'Fortnightly material testing reports',
      'MEP contractor coordination meetings',
      'As-built drawings at handover',
      '12-month defect liability with quarterly inspection',
    ],
  },
  {
    id: 'renovation',
    anchor: 'renovation-interiors',
    title: 'Renovation & Interiors',
    icon: 'Wrench',
    shortDescription: 'Full or partial renovation of existing buildings with minimal disruption.',
    description:
      'Renovation work requires a different discipline than new construction — reading an existing building, finding what is sound and what is not, and sequencing work so the client can continue using part of the property where possible. We carry out full structural audits before quoting.',
    scope: [
      'Structural condition audit before any work begins',
      'Selective demolition and debris removal',
      'Structural repairs — crack stitching, column jacketing',
      'Replastering and waterproofing',
      'Flooring replacement — tile, marble, wood',
      'False ceiling — gypsum and grid',
      'Kitchen and bathroom renovation',
      'Electrical rewiring and distribution board upgrade',
      'Painting — interior and exterior',
    ],
    typicalDuration: '3–9 months depending on extent',
    pricingModel: 'Per item rate. Detailed BOQ provided after site inspection.',
    whatYouGet: [
      'Structural audit report before works commence',
      'Detailed bill of quantities with unit rates',
      'Phased work plan to minimise disruption',
      '6-month defect liability on all finishing works',
    ],
  },
  {
    id: 'pm',
    anchor: 'project-management',
    title: 'Project Management & Consultancy',
    icon: 'ClipboardList',
    shortDescription: 'Independent oversight and cost control for owner-managed projects.',
    description:
      "Some clients prefer to appoint contractors directly but want an independent party to verify quality and progress on their behalf. We act as owner's representative: reviewing estimates, approving materials, verifying measurements, and reporting to you weekly.",
    scope: [
      'Contractor tender evaluation and recommendation',
      'BOQ preparation and cross-checking',
      'Weekly site inspection and report',
      'Material quality verification at source and site',
      'Measurement verification for running account bills',
      'Variation order review and approval recommendation',
      'Defects identification at handover inspection',
    ],
    typicalDuration: 'For the duration of the construction contract',
    pricingModel: 'Monthly retainer based on project size, or a percentage of contract value.',
    whatYouGet: [
      'Weekly written site inspection report',
      'Independent bill verification before payment',
      'Photographic progress record',
      'Final handover inspection report',
    ],
  },
]
