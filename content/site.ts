// This file is the single source of truth for all contact and company details.

export const site = {
  name: 'Shraddha Group',
  legalName: 'SHRADDHA ENTERPRISES',
  constitution: 'Partnership',
  tagline: 'Connecting buyers with premium open plots, villas & apartments across Hyderabad.',
  description:
    'Shraddha Group is a professional real-estate marketing company specializing in connecting customers with suitable residential projects based on their requirements.',

  // Contact details
  phone: '+91 91773 93428',
  phoneRaw: '9177393428', // digits only, no +91, used for WhatsApp link
  whatsapp: 'https://wa.me/919177393428?text=Hi%2C%20I%20have%20a%20property%20enquiry',
  email: 'shraddhasai2026@gmail.com',

  // Principal place of business (From GST Registration Certificate)
  address: {
    line1: '105, Matrusri Homes',
    line2: 'Matrusri Nagar, Miyapur',
    city: 'Hyderabad',
    district: 'Rangareddy',
    state: 'Telangana',
    pin: '500049',
    full: '105, Matrusri Homes, Matrusri Nagar, Miyapur, Hyderabad, Rangareddy, Telangana — 500049',
  },

  hours: 'Mon – Sat, 9 am – 7 pm',

  // Statutory Registrations (From Government Tax Documents)
  gstin: '36AEZFS0317R1Z3',
  pan: 'AEZFS0317R',
  jurisdiction: 'Madhapur - I, Hyderabad',
  dateOfIncorporation: '24/03/2023',
  dateOfRegistration: '09/05/2023',
  yearFounded: 2023,

  // Google Maps embed URL
  mapEmbedUrl:
    'https://www.google.com/maps?q=Matrusri+Nagar,+Miyapur,+Hyderabad,+Telangana+500049&output=embed',

  social: {
    linkedin: '',
    instagram: '',
  },

  // SEO & GEO
  url: 'https://shraddhagroup.in',
  ogImage: '/Photos/FullLogo_Transparent_NoBuffer.png',

  geo: {
    latitude: 17.4969,
    longitude: 78.3547,
    region: 'IN-TG',
    placename: 'Miyapur, Hyderabad, Rangareddy',
  },

  areaServed: [
    'Hyderabad',
    'Rangareddy',
    'Miyapur',
    'Matrusri Nagar',
    'Madhapur',
    'Gachibowli',
    'Kondapur',
    'Kukatpally',
    'Hitec City',
    'Nallagandla',
    'Chandanagar',
    'Patancheru',
    'Banjara Hills',
    'Jubilee Hills',
    'Secunderabad',
    'Bowrampet',
    'Kollur',
    'Tellapur',
  ],

  keywords: [
    'shraddha group',
    'shraddha group hyderabad',
    'real estate marketing hyderabad',
    'property marketing company hyderabad',
    'open plots in hyderabad',
    'villas for sale hyderabad',
    'premium apartments hyderabad',
    'real estate agents miyapur',
    'buy open plots tellapur kollur',
    'vian vayu hyderabad',
    'vian mrida tellapur kollur',
    'property investment hyderabad',
    'residential projects rangareddy',
    'gated communities hyderabad',
  ],

  faqs: [
    {
      question: 'What does Shraddha Group do?',
      answer:
        'Shraddha Group is a professional real-estate marketing company specializing in promoting carefully selected apartments, villas and open-plot projects across Hyderabad. We connect customers with suitable projects based on their requirements, budget, and investment goals.',
    },
    {
      question: 'What types of properties does Shraddha Group offer?',
      answer:
        'We market a diverse portfolio of residential properties, including premium apartments, villas, and open plots, across areas of Hyderabad.',
    },
    {
      question: 'How does Shraddha Group help me choose the right property?',
      answer:
        'We understand your budget, preferred location, property type, lifestyle requirements, and investment objectives and help you explore suitable options. Our team provides project information and coordinates site visits so you can make a well-informed decision.',
    },
    {
      question: 'Can I visit the project before making a decision?',
      answer:
        'Absolutely. We can arrange site visits to shortlisted projects, allowing you to personally experience the location, connectivity, development, amenities, and surrounding infrastructure before making your decision.',
    },
    {
      question: 'Do you assist with the property buying process?',
      answer:
        'Yes. Our team supports you throughout the property selection and booking journey — from project information and site visits to pricing, documentation, booking procedures, and coordination with the respective developer.',
    },
    {
      question: 'Why choose Shraddha Group for your property search?',
      answer:
        'At Shraddha Group, we believe that finding the right property should be simple, transparent, and trustworthy. With our understanding of the Hyderabad real-estate market and our diverse project portfolio, we strive to connect every customer with the right opportunity.',
    },
  ],
} as const

export type Site = typeof site
