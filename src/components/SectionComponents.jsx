import { clients, processSteps, projects, services, testimonials } from '../data/siteData'

const sectionClass = 'py-16 md:py-24 lg:py-28'
const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-40px)] lg:w-[calc(100%-48px)]'

export function ClientStrip() {
  return (
    <section className="border-y border-[#dedde5] bg-white" aria-label="Selected clients">
      <div className={`${containerClass} flex min-h-28 flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 md:justify-between md:py-0`}><span className="w-full text-center text-xs text-[#92909e] md:w-auto md:text-left">Trusted by teams at</span>{clients.map((client) => <b className="font-[Manrope] text-base text-[#777582] md:text-lg" key={client}>{client}</b>)}</div>
    </section>
  )
}

export function Services() {
  return (
    <section className={sectionClass} id="services"><div className={containerClass}>
      <div className="mb-12 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between" data-reveal><div><span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[.16em] text-[#7252d6]">What we do</span><h2 className="font-[Manrope] text-4xl leading-tight font-bold tracking-[-2px] md:text-[52px]">Built for what's next.</h2></div><p className="max-w-[390px] leading-7 text-[#777589]">From first sketch to final launch, we create digital work that looks sharp and works even harder.</p></div>
      <div className="grid border-y border-[#dedde5] md:grid-cols-3">{services.map((service, index) => (
        <article className="flex min-h-[280px] flex-col border-b border-[#dedde5] p-7 last:border-b-0 md:min-h-[330px] md:border-r md:border-b-0 md:p-8 md:last:border-r-0" data-reveal style={{ '--delay': `${index * 120}ms` }} key={service.title}><span className="text-[11px] text-[#aaa8b4]">0{index + 1}</span><div className="my-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#ece7ff] text-2xl text-[#7252d6]">{service.icon}</div><h3 className="mb-3 font-[Manrope] text-xl font-bold">{service.title}</h3><p className="mb-6 leading-7 text-[#777589]">{service.text}</p><a className="mt-auto text-sm font-bold" href="#contact">Learn more ↗</a></article>
      ))}</div>
    </div></section>
  )
}

export function Work() {
  return (
    <section className={`${sectionClass} bg-[#f8f7f3]`} id="work"><div className={containerClass}>
      <div className="mb-10 flex items-center justify-between" data-reveal><span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#7252d6]">Selected work</span><a className="text-sm font-bold" href="#contact">See all projects ↗</a></div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project, index) => (
        <article className="min-w-0" data-reveal style={{ '--delay': `${index * 140}ms` }} key={project.title}>
          <a className={`group block h-[300px] overflow-hidden rounded-[14px] p-5 md:h-[390px] md:p-7 ${project.theme === 'violet' ? 'bg-gradient-to-br from-[#dcd4ff] to-[#8c72d1]' : project.theme === 'peach' ? 'bg-gradient-to-br from-[#f9dec9] to-[#c88f76]' : project.theme === 'coastal' ? 'bg-gradient-to-br from-[#b7dfe2] to-[#4d8992]' : 'bg-gradient-to-br from-[#d6d1c7] to-[#726f66]'}`} href="#contact" aria-label={`View ${project.title} project`}>
            <div className="relative h-full overflow-hidden rounded-xl bg-[#171725] shadow-[0_28px_55px_rgba(33,29,55,.28)] transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.015]">
              <div className="flex h-[38px] items-center gap-1.5 px-3 text-[9px] text-[#aaaabd] bg-[#202136]"><span className="h-1.5 w-1.5 rounded-full bg-[#ef826f]" /><span className="h-1.5 w-1.5 rounded-full bg-[#ecc75d]" /><span className="h-1.5 w-1.5 rounded-full bg-[#75ba83]" /><small className="mx-auto"></small></div>
              <img className="h-[calc(100%-38px)] w-full object-cover transition duration-700 group-hover:scale-105" src={project.image} alt={`${project.title} — ${project.label}`} loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-between rounded-[10px] bg-[#121223]/80 px-4 py-3 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><span className="text-xs font-bold">{project.label}</span><b className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#171725]">↗</b></div>
            </div>
          </a>
          <div className="flex min-h-[92px] items-center justify-between"><div><small className="text-xs text-[#777589]">{project.tag} / Digital product</small><h3 className="mt-1 font-[Manrope] text-xl font-bold md:text-[22px]">{project.title}</h3></div><b className="text-sm text-[#7252d6]">{project.stat}</b></div>
        </article>
      ))}</div>
    </div></section>
  )
}

export function Process() {
  return (
    <section className={`${sectionClass} bg-[#f7f5f0]`} id="process"><div className={`${containerClass} grid gap-9 md:grid-cols-[40%_60%]`}>
      <div data-reveal><span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[.16em] text-[#7252d6]">How we work</span><h2 className="font-[Manrope] text-4xl leading-tight font-bold tracking-[-2px] md:text-[52px]">Simple process.<br /><em className="text-[#5d3da6]">Serious impact.</em></h2></div>
      <div className="border-t border-[#dedde5]">{processSteps.map(([num, title, text], index) => (
        <article className="grid h-[112px] grid-cols-[50px_1fr_30px] items-center border-b border-[#dedde5]" data-reveal style={{ '--delay': `${index * 100}ms` }} key={num}><b className="text-xs text-[#7252d6]">{num}</b><div><h3 className="mb-1 font-[Manrope] font-bold">{title}</h3><p className="text-sm text-[#777589]">{text}</p></div><span>↗</span></article>
      ))}</div>
    </div></section>
  )
}

export function About() {
  return (
    <section className={`${sectionClass} border-t border-[#dedde5] bg-[#fbfaf7]`} id="about"><div className={`${containerClass} grid gap-10 md:grid-cols-[42%_58%] md:gap-[70px]`}>
      <div data-reveal><span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[.16em] text-[#7252d6]">About TekDevs</span><h2 className="my-4 font-serif text-4xl leading-[1.05] tracking-[-2px] md:text-[52px]">Small team.<br /><em className="text-[#5d3da6]">Big thinking.</em></h2><p className="mb-7 max-w-[440px] leading-7 text-[#666579]">TekDevs is a digital studio for ambitious brands and growing businesses. We combine strategy, design and development to create work that feels clear, purposeful and built to last.</p><a className="inline-flex items-center gap-6 rounded-full bg-[#15152a] px-5 py-4 font-bold text-white" href="#contact">Work with us <span>↗</span></a></div>
      <div className="border-t border-[#dedde5]" data-reveal><div className="grid gap-3 border-b border-[#dedde5] py-7 md:grid-cols-[140px_1fr] md:gap-6"><span className="text-xs font-bold uppercase text-[#5d3da6]">Our approach</span><p className="text-base leading-7 text-[#4f4e60] md:text-lg">We keep the process close, collaborative and refreshingly straightforward—from the first conversation to launch day.</p></div><div className="grid md:grid-cols-3">{[['30+', 'Projects delivered'], ['5×', 'Average growth uplift'], ['100%', 'Built around you']].map(([value, label], index) => <div className={`flex min-h-[110px] flex-col justify-end border-b border-[#dedde5] py-5 md:min-h-[150px] md:border-r md:border-b-0 md:px-6 ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:border-r-0' : ''}`} key={label}><strong className="font-serif text-4xl text-[#5d3da6] md:text-[44px]">{value}</strong><span className="mt-2 text-xs text-[#777589]">{label}</span></div>)}</div></div>
    </div></section>
  )
}

export function Testimonials() {
  const scrollingTestimonials = [...testimonials, ...testimonials]
  return (
    <section className="overflow-hidden bg-[#171725] py-16 text-white md:py-24" id="testimonials"><div className={containerClass}>
      <div className="mb-12 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between" data-reveal><div><span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[.16em] text-[#b7a4ef]">Client stories</span><h2 className="font-serif text-4xl leading-[1.05] tracking-[-2px] md:text-[52px]">Trusted to deliver.<br /><em className="text-[#b7a4ef]">Loved to partner with.</em></h2></div><p className="max-w-[300px] leading-7 text-[#aaa9b7] md:text-right">What founders and teams say after building with us.</p></div>
    </div><div className="w-full overflow-hidden border-y border-white/12 [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]" data-reveal aria-label="Client testimonials"><div className="flex w-max animate-[testimonial-scroll_38s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
      {scrollingTestimonials.map((testimonial, index) => (
        <article className="flex min-h-[300px] w-[300px] min-w-[300px] flex-col border-r border-white/12 p-7 md:min-h-[330px] md:w-[390px] md:min-w-[390px] md:p-8" key={`${testimonial.name}-${index}`} aria-hidden={index >= testimonials.length ? 'true' : undefined}><div className="text-[13px] tracking-[4px] text-[#c0aff0]" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="my-7 font-serif text-lg leading-[1.55] md:text-xl">“{testimonial.quote}”</blockquote><div className="mt-auto flex items-center gap-3"><img className="h-11 w-11 rounded-full border-2 border-[#b7a4ef]/55 object-cover" src={testimonial.image} alt={`${testimonial.name}, ${testimonial.role}`} loading="lazy" /><div className="flex flex-col"><strong className="text-[13px]">{testimonial.name}</strong><span className="mt-1 text-[11px] text-[#9998a7]">{testimonial.role}</span></div></div></article>
      ))}
    </div></div></section>
  )
}
