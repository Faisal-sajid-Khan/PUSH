import { useState } from 'react';

const API = import.meta.env.VITE_API_URL || '';
const field = 'w-full border-b border-push-charcoal bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-push-mid focus:border-push-white';

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus({ state: 'sending', msg: '' });
    try {
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      form.reset();
      setStatus({ state: 'done', msg: 'Sent. We reply within two working days.' });
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Could not send. Email hello@push.studio.' });
    }
  };

  return (
    <section className="min-h-[100svh] px-5 pb-24 pt-32 md:px-10">
      <h1 className="push-display mb-14 text-[16vw] md:text-[11vw]">Let's talk.</h1>
      <form onSubmit={submit} className="grid max-w-2xl gap-6" noValidate>
        <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden />
        <input className={field} name="name" placeholder="Your name" autoComplete="name" aria-label="Your name" required />
        <input className={field} name="email" type="email" placeholder="Email address" autoComplete="email" aria-label="Email address" required />
        <input className={field} name="company" placeholder="Company (optional)" autoComplete="organization" aria-label="Company" />
        <textarea className={field} name="message" rows={4} placeholder="What are you building?" aria-label="Message" required />
        <button disabled={status.state === 'sending'} className="mt-4 w-full bg-push-white py-5 text-sm font-bold text-push-black transition-colors hover:bg-push-olive hover:text-push-white disabled:opacity-50 md:w-auto md:px-14">
          {status.state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p role="status" className="min-h-6 text-sm text-push-mid">{status.msg}</p>
      </form>
    </section>
  );
}
