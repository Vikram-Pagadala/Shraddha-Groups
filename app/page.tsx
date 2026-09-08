import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Section from '@/components/layout/Section'
import AboutSection from '@/components/home/AboutSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import FaqSection from '@/components/home/FaqSection'

export const metadata: Metadata = {
  title: 'Real-Estate Marketing in Hyderabad — Shraddha Group',
  description:
    'Shraddha Group connects buyers with premium apartments, villas & open plots across Hyderabad and Rangareddy.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <Section label="About" id="about" bg="paper">
        <AboutSection />
      </Section>

      <Section label="Projects" id="projects" bg="concrete">
        <FeaturedProjects />
      </Section>

      <Section label="FAQ" id="faq" bg="paper">
        <FaqSection />
      </Section>
    </>
  )
}
