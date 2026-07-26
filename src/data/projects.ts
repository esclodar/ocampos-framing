export interface Project {
  id: string
  title: string
  category: string
  location: string
  blurb: string
  /** Path to a real project photo, once available. Falls back to a placeholder card when unset. */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'custom-home-1',
    title: 'Pine Ridge Custom Home',
    category: 'Custom Home Framing',
    location: 'Nacogdoches, TX',
    blurb: 'Full structural framing for a 3,200 sq ft single-family home, including engineered trusses and a wraparound porch.',
  },
  {
    id: 'barndominium-1',
    title: 'Angelina Creek Barndominium',
    category: 'Barndominium',
    location: 'Lufkin, TX',
    blurb: 'Post-frame and interior wall framing for a barndominium with an attached workshop and loft.',
  },
  {
    id: 'remodel-1',
    title: 'Fredonia Street Addition',
    category: 'Remodel & Addition',
    location: 'Nacogdoches, TX',
    blurb: 'Framed a two-room addition and reworked load-bearing walls to open up the existing kitchen.',
  },
  {
    id: 'custom-home-2',
    title: 'Lanana Hill Residence',
    category: 'Custom Home Framing',
    location: 'Nacogdoches, TX',
    blurb: 'Ground-up framing for a two-story home with a steep roof pitch and vaulted great room.',
  },
  {
    id: 'shop-1',
    title: 'Timpson Road Shop House',
    category: 'Shop & Outbuilding',
    location: 'Timpson, TX',
    blurb: 'Framed a combination shop and guest house, built to double as storm shelter space.',
  },
  {
    id: 'remodel-2',
    title: 'Old Tyler Road Rebuild',
    category: 'Remodel & Addition',
    location: 'Center, TX',
    blurb: 'Re-framed a storm-damaged roof structure and rebuilt an exterior wall after a fallen tree.',
  },
]
