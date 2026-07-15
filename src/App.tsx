import { useReveal } from './hooks/useReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Quote } from './components/Quote'
import { Procedures } from './components/Procedures'
import { Care } from './components/Care'
import { Testimonials } from './components/Testimonials'
import { LeadForm } from './components/LeadForm'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  useReveal()

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <Procedures />
        <Care />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
