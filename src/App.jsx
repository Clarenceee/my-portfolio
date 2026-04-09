import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-hidden bg-white text-[#111111]">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#4DD9E0]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4DD9E0]/5 blur-3xl" />

      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <CTABanner />
      <Footer />
    </div>
  )
}
