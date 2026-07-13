import { useReveal } from './hooks/useReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Procedures } from './components/Procedures'
import { About } from './components/About'
import { Care } from './components/Care'
import { Testimonials } from './components/Testimonials'
import { LeadForm } from './components/LeadForm'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  useReveal()

  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Procedures />
        <About />
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
