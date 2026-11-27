import logo from '../assets/GlobalWebDevs Purple Logo.png'

export default function Footer() {
  return (
    <footer className="min-h-[120px] bg-[#171725] text-white">
      <div className="mx-auto flex min-h-[150px] w-[calc(100%-32px)] max-w-[1180px] flex-col items-center justify-center gap-5 text-center md:min-h-[120px] md:w-[calc(100%-48px)] md:flex-row md:justify-between md:text-left">
        <a className="flex h-12 w-[180px] items-center justify-center md:justify-start" href="#top" aria-label="GlobalWebDevs back to top">
          <img className="h-full w-full object-contain" src={logo} alt="GlobalWebDevs" />
        </a>
        <p className="text-xs text-[#9a99a8]">© 2026 GlobalWebDevs Studio</p>
        <div className="flex gap-6 text-xs">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          {/* <a href="mailto:suryanshu4705@gmail.com">Email us</a> */}
        </div>
      </div>
    </footer>
  )
}

