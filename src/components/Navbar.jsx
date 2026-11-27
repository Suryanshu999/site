import { useState } from 'react'
import logo from '../assets/GlobalWebDevs Purple Logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 h-[84px] border-b border-[#15152a]/7 bg-[#fbfaf7]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[1180px] items-center justify-between" aria-label="Main navigation">
        <a className="flex h-14 w-[220px] shrink-0 items-center md:h-16 md:w-[280px]" href="#top" aria-label="GlobalWebDevs home"><img className="h-full w-full object-contain object-left" src={logo} alt="GlobalWebDevs" /></a>
        <button className="grid h-11 w-11 place-items-center rounded-full text-2xl md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label="Toggle menu">☰</button>
        <div id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-5 right-5 top-[76px] flex-col gap-1 rounded-2xl border border-[#dedde5] bg-white p-2.5 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {['Tech solutions', 'Our work', 'Process', 'About us'].map((item, index) => {
            const href = ['#services', '#work', '#process', '#about'][index]
            return <a key={item} className="rounded-lg px-3 py-3 text-sm font-semibold transition hover:text-[#7252d6] md:px-0 md:py-0" href={href} onClick={closeMenu}>{item}</a>
          })}
          <a className="mt-1 rounded-full bg-[#15152a] px-5 py-3 text-center text-sm font-bold text-white md:mt-0" href="#contact" onClick={closeMenu}>Get in touch</a>
        </div>
      </nav>
    </header>
  )
}
