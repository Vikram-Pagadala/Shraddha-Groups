import { site } from '@/content/site'

export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/Photos/FullLogo_Transparent_NoBuffer.png`,
    image: `${site.url}/Photos/FullLogo_Transparent_NoBuffer.png`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    taxID: site.gstin,
    vatID: site.gstin,
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'PAN',
        value: site.pan,
      },
      {
        '@type': 'PropertyValue',
        name: 'GSTIN',
        value: site.gstin,
      },
      {
        '@type': 'PropertyValue',
        name: 'Constitution',
        value: `${site.constitution} Firm`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Jurisdiction',
        value: site.jurisdiction,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pin,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: site.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    priceRange: '₹₹ - ₹₹₹',
    knowsAbout: [
      'Civil Construction',
      'Turnkey Residential Construction',
      'Commercial Building Construction',
      'Industrial Warehousing & Sheds',
      'RCC Structural Frame Work',
      'Foundation Engineering',
      'Civil Contracting in Hyderabad and Rangareddy',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: {
      '@id': `${site.url}/#business`,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
