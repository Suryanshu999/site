import { useRevealAnimation } from './hooks/useRevealAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { ClientStrip, Services, Work, Process, About, Testimonials } from './components/SectionComponents'

function App() {
  useRevealAnimation()

  const handleHeroMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--pointer-x', `${x * 18}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${y * 18}px`)
  }

  const handleHeroLeave = (event) => {
    event.currentTarget.style.setProperty('--pointer-x', '0px')
    event.currentTarget.style.setProperty('--pointer-y', '0px')
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#fbfaf7]">
      <a className="fixed left-4 top-[-100px] z-[100] rounded-lg bg-[#15152a] px-4 py-3 font-bold text-white focus:top-4" href="#top">Skip to main content</a>
      <Navbar />

      <main id="top" tabIndex="-1">
        <Hero onMouseMove={handleHeroMove} onMouseLeave={handleHeroLeave} />
        <ClientStrip />
        <Services />
        <Work />
        <Process />
        <About />
        <Testimonials />
        <section className="bg-[#ddd5f7] py-16 md:py-24" id="contact">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] md:grid-cols-[42%_58%] md:gap-[70px]">
            <div data-reveal><span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[.16em] text-[#7252d6]">Start a project</span><h2 className="font-[Manrope] text-4xl leading-tight font-bold tracking-[-2px] md:text-[52px]">Have an idea?<br />Let's make it <em className="text-[#5d3da6]">real.</em></h2><p className="my-6 max-w-md leading-7 text-[#666579]">Tell us what you're building. We'll come back with honest thoughts and clear next steps.</p><a className="font-bold border-b border-[#15152a]"> Call us at +91 7982764705</a></div>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
