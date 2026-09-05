// This file is the single source of truth for all contact and company details.

export const site = {
  name: 'Shraddha Group',
  legalName: 'SHRADDHA ENTERPRISES',
  constitution: 'Partnership',
  tagline: 'Civil contracting & premium developments across Hyderabad & Rangareddy.',
  description:
    'Residential, commercial and iconic high-rise construction — from foundation to handover, on a schedule we commit to in writing.',

  // Contact details
  phone: '+91 98490 00000',
  phoneRaw: '9849000000', // digits only, no +91, used for WhatsApp link
  whatsapp: 'https://wa.me/919849000000?text=Hi%2C%20I%20have%20a%20construction%20enquiry',
  email: 'enquiries@shraddhagroup.in',

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
    'civil contractors in hyderabad',
    'construction companies in hyderabad',
    'civil contracting company rangareddy',
    'turnkey construction contractors hyderabad',
    'residential building contractors hyderabad',
    'commercial construction contractors madhapur',
    'industrial warehouse builders hyderabad',
    'civil contractor miyapur',
    'building contractors kukatpally',
    'construction services gachibowli',
    'civil engineering contractors telangana',
    'house construction contractors hyderabad',
    'rcc structural frame builders',
    'gst registered civil contractor hyderabad',
    'shraddha enterprises civil contractors',
    'vian vayu hyderabad',
    'vian mrida tellapur kollur',
  ],

  faqs: [
    {
      question: 'Who is Shraddha Group and where are you located?',
      answer:
        'Shraddha Group is a premier civil contracting and development firm operating under the government-registered partnership entity Shraddha Enterprises (GSTIN: 36AEZFS0317R1Z3, PAN: AEZFS0317R). Our principal office is located at 105, Matrusri Homes, Matrusri Nagar, Miyapur, Hyderabad, Rangareddy, Telangana 500049 under the Madhapur - I tax jurisdiction.',
    },
    {
      question: 'What civil construction and development services do you provide in Hyderabad?',
      answer:
        'We deliver end-to-end turnkey civil construction including premium high-rise residential communities (such as Vian Vayu and Vian Mrida), independent villas, commercial buildings, industrial warehouses, factory sheds, structural renovation, and project management across Hyderabad and Rangareddy district.',
    },
    {
      question: 'How do you price construction projects?',
      answer:
        'We provide transparent per-square-foot turnkey pricing for residential and commercial projects. Every client receives an itemised BOQ (Bill of Quantities) and a signed milestone-based payment schedule before work begins, with no hidden escalations.',
    },
    {
      question: 'What quality guarantees and defect liabilities do you offer?',
      answer:
        'All raw materials (cement, TMT steel, aggregates, bricks) are batch-tested to IS standards with test certificates made available to clients. Every completed project includes a standard 12-month defect liability period and structural handover documentation.',
    },
    {
      question: 'Which areas in Hyderabad and Rangareddy do you take up projects in?',
      answer:
        'We undertake projects throughout Greater Hyderabad and Rangareddy district, including Miyapur, Tellapur, Kollur, Bowrampet, Madhapur, Gachibowli, Kondapur, Kukatpally, Hitec City, Nallagandla, Chandanagar, Patancheru, Banjara Hills, Jubilee Hills, and Secunderabad.',
    },
    {
      question: 'Is Shraddha Group a GST-compliant registered entity?',
      answer:
        'Yes. Shraddha Group operates under the statutory registration of Shraddha Enterprises, registered under the Goods and Services Tax Act with GSTIN 36AEZFS0317R1Z3 and Income Tax Permanent Account Number (PAN) AEZFS0317R.',
    },
  ],
} as const

export type Site = typeof site
