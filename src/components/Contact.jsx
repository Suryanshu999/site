import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setSent(false)
    setError('')

    try {
      const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Unable to send your enquiry')

      setSent(true)
      formRef.current?.reset()
    } catch {
      setError('Sorry, we could not send your enquiry. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form ref={formRef} className="w-full rounded-2xl bg-white p-5 shadow-[0_25px_50px_rgba(82,69,130,.12)] md:p-8" action="https://formsubmit.co/suryanshu4705@gmail.com" method="POST" onSubmit={handleSubmit} data-reveal>
      <input type="hidden" name="_subject" value="New GlobalWebDevs website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2"><label className="mb-4 flex flex-col gap-2 text-xs font-bold">Name<input className="w-full border-0 border-b border-[#dddde5] px-1 py-3 outline-none focus:border-[#7252d6]" name="name" placeholder="Your name" required /></label><label className="mb-4 flex flex-col gap-2 text-xs font-bold">Email<input className="w-full border-0 border-b border-[#dddde5] px-1 py-3 outline-none focus:border-[#7252d6]" name="email" type="email" placeholder="you@company.com" required /></label></div>
      <div className="grid gap-4 md:grid-cols-2"><label className="mb-4 flex flex-col gap-2 text-xs font-bold">Phone number<input className="w-full border-0 border-b border-[#dddde5] px-1 py-3 outline-none focus:border-[#7252d6]" name="phone" type="tel" placeholder="+91 98765 43210" required /></label><label className="mb-4 flex flex-col gap-2 text-xs font-bold">I'm interested in<select className="w-full border-0 border-b border-[#dddde5] px-1 py-3 outline-none focus:border-[#7252d6]" name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Web design</option><option>Product design</option><option>Web development</option><option>Full project</option></select></label></div>
      <label className="mb-4 flex flex-col gap-2 text-xs font-bold">Tell us about your project<textarea className="w-full resize-y border-0 border-b border-[#dddde5] px-1 py-3 outline-none focus:border-[#7252d6]" name="message" placeholder="A few words about your idea, timeline or budget..." rows="4" required /></label>
      <button className="mt-1 inline-flex w-full items-center justify-between rounded-full bg-[#15152a] px-5 py-4 font-bold text-white disabled:opacity-60 md:w-auto md:min-w-[180px]" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send enquiry'} <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#15152a]">↗</span></button>
      {sent && <p className="mt-3 text-sm text-[#4f7956]">Thanks! Your enquiry has been sent. We'll be in touch soon.</p>}{error && <p className="mt-3 text-sm text-[#a84b4b]">{error}</p>}
    </form>
  )
}
