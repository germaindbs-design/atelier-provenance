import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Comparison from '@/components/Comparison'
import Testimonials from '@/components/Testimonials'
import Cta from '@/components/Cta'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Comparison />
      <Testimonials />
      <Cta />
    </>
  )
}
