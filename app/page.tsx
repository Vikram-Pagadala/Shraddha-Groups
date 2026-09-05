import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Section from '@/components/layout/Section'
import AboutSection from '@/components/home/AboutSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import FaqSection from '@/components/home/FaqSection'
import CtaBand from '@/components/home/CtaBand'

export const metadata: Metadata = {
  title: 'Civil Contractors & Developers in Hyderabad & Rangareddy — Shraddha Group',
  description:
    'Shraddha Group delivers iconic high-rise residential communities, commercial and industrial civil construction across Hyderabad & Rangareddy.',
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

      <Section label="Services" id="services" bg="concrete">
        <ServicesGrid />
      </Section>

      <Section label="Projects" id="projects" bg="paper">
        <FeaturedProjects />
      </Section>

      <Section label="Process" id="process" bg="concrete">
        <Process />
      </Section>

      <Section label="Clients" id="clients" bg="paper">
        <Testimonials />
      </Section>

      <Section label="FAQ" id="faq" bg="concrete">
        <FaqSection />
      </Section>

      <CtaBand />
    </>
  )
}
