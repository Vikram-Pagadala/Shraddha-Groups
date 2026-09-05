// [FILL] Replace with real testimonials. Written permission is required
// before publishing any client name, company, or photograph.

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  project: string
  // [FILL] Add logo path once client provides permission to use it
  logo?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'tl-1',
    quote:
      'We handed over drawings in December and moved in the following October — ten months for a G+4 building. Shraddha Group gave us a written programme before we signed, and they hit every milestone. The only time we were surprised was when they finished the structural phase a week early.',
    name: 'Rajesh Kumar', // [FILL]
    role: 'Managing Director',
    project: 'Sunrise Residency Phase 1, Kondapur',
  },
  {
    id: 'tl-2',
    quote:
      'They found structural cracks in the columns during the initial inspection — something the previous contractor had missed. Rather than covering it up and continuing, they stopped, wrote it up, and gave us three options with costs. That kind of transparency is rare.',
    name: 'Priya Venkatesh', // [FILL]
    role: 'Homeowner',
    project: 'Kondapur Villa Renovation',
  },
  {
    id: 'tl-3',
    quote:
      'The warehouse was handed over on time and within 2% of the agreed estimate. The floor finish in particular has held up better than expected — no dusting at all after 18 months of forklift traffic.',
    name: 'Anil Sharma', // [FILL]
    role: 'Operations Head',
    project: 'Pharmaceutical Warehouse, Patancheru',
  },
]

// [FILL] Add client logos here once you have permission to display them
export const clientLogos: { name: string; logo: string }[] = []
