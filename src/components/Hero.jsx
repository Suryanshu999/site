export default function Hero() {
  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--pointer-x', `${x * 18}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${y * 18}px`)
  }

  const handleLeave = (event) => {
    event.currentTarget.style.setProperty('--pointer-x', '0px')
    event.currentTarget.style.setProperty('--pointer-y', '0px')
  }

  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[linear-gradient(135deg,#fbfaf7_55%,#f1edff)]" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#e5dcff_0%,transparent_68%)]" />
      <div className="relative mx-auto grid min-h-[650px] w-[calc(100%-40px)] max-w-[1180px] items-center md:grid-cols-[46%_54%]">
        <div className="relative z-10 py-12 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.16em]"><span className="h-2 w-2 rounded-full bg-[#8c70db] shadow-[0_0_0_5px_#ebe6ff]" />Your vision, brought to life.</div>
          <h1 className="mx-auto mb-6 max-w-[620px] font-[Manrope] text-5xl leading-[1.03] font-extrabold tracking-[-3px] md:mx-0 md:text-[70px] md:tracking-[-4.5px]"><span className="text-[#31265f]">Build</span> Possibilities,<br />Deliver <em className="text-[#5d3da6]">Success</em></h1>
          <p className="mx-auto max-w-[510px] text-base leading-7 text-[#66667a] md:mx-0 md:text-lg">We design, automate and develop digital experiences that look exceptional and deliver measurable growth.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a className="inline-flex min-h-14 items-center gap-6 rounded-full bg-[#15152a] px-5 py-3 font-bold text-white" href="#contact">Get started <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#15152a]">↗</span></a>
            <a className="inline-flex min-h-14 items-center gap-6 rounded-full border border-[#aaa6b5] bg-white px-5 py-3 font-bold text-[#15152a]" href="#services">View services <span>→</span></a>
          </div>
        </div>
        <div className="hidden h-[590px] place-items-center md:grid" aria-label="GlobalWebDevs digital products preview">
          <div className="absolute h-[390px] w-[530px] rotate-[-18deg] rounded-full border border-[#ded8ef]" />
          <div className="absolute h-[540px] w-[430px] rotate-[35deg] rounded-full border border-[#ded8ef]" />
          <div className="absolute z-20 h-[430px] w-[470px] rotate-[3deg] rounded-[18px] bg-[#202136] p-2.5 shadow-[0_35px_60px_rgba(70,57,120,.24)]">
            <div className="flex h-[38px] items-center gap-1.5 px-2 text-[9px] text-[#aaaabd]"><i className="h-2 w-2 rounded-full bg-[#ef826f]" /><i className="h-2 w-2 rounded-full bg-[#ecc75d]" /><i className="h-2 w-2 rounded-full bg-[#75ba83]" /><span className="mx-auto">globalwebdevs.site/work</span></div>
            <div className="relative h-[372px] overflow-hidden rounded-[10px] bg-gradient-to-br from-[#c9c1ee] to-[#816ac8] p-6">
              <div className="flex justify-between text-[11px] text-white"><b>globalwebdevs®</b><span>Menu +</span></div>
              <div className="absolute bottom-20 left-9 text-white"><small className="text-[9px] tracking-[.15em]">THE FUTURE OF</small><strong className="block text-5xl leading-[.92] tracking-[-3px]">Digital<br />possibility</strong></div>
              <div className="absolute bottom-6 left-9 right-9 flex justify-between border-t border-white/35 pt-2 text-[9px] text-white"><span>01 — 24</span><span>Explore project ↗</span></div>
            </div>
          </div>
          <div className="absolute bottom-20 right-[-10px] z-30 h-[120px] w-[150px] -rotate-6 rounded-[14px] bg-white p-4 shadow-xl"><span className="text-[9px] uppercase text-[#8a8898]">Live online</span><b className="block text-3xl text-[#7252d6]">+187%</b><small className="text-[#77758a]">growth this year</small></div>
        </div>
      </div>
    </section>
  )
}
