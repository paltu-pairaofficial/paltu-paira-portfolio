import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setBusy(true);
    setSent(false);
    setError('');

    const formData = new FormData(form);

    const payload = {
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        subject: String(formData.get('subject') || ''),
        message: String(formData.get('message') || '')
    };

    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/inquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error('Unable to send');

        setSent(true);
        setError('');
        form.reset();
    } catch (error) {
        console.error('Inquiry submission error:', error);
        setSent(false);
        setError('Could not send right now. Please use email or WhatsApp.');
    } finally {
        setBusy(false);
    }
}

    return <div className="page">
        <section className="page-hero contact-title">
            <span className="pill">INQUIRIES & AVAILABILITY · Q4 2026</span>
            <h1>LET’S WORK<br /><em>TOGETHER.</em></h1>
            <p>Have a project in mind or need a website for your business? Feel free to get in touch. I’m available for freelance projects, full-stack contracts, and developer opportunities.</p>
        </section>

        <section className="contact-layout">
            <Reveal>
                <aside className="contact-panel">
                    <span className="eyebrow">DIRECT VERIFIED CHANNELS</span>

                    <a href="mailto:paltupaira3@gmail.com">
                        <b>DIRECT EMAIL</b>
                        <span>paltupaira3@gmail.com</span>
                    </a>

                    <a href="tel:+917894314178">
                        <b>VOICE & WHATSAPP</b>
                        <span>+91 7894314178</span>
                    </a>

                    <div>
                        <b>PRIMARY STUDIO</b>
                        <span>Jhargram, West Bengal, India</span>
                    </div>

                    <div className="qr">
                        <div>▦</div>
                        <span>
                            Scan & Connect<br />
                            <small>WhatsApp contact available</small>
                        </span>
                    </div>

                    <div className="social-row">
                        <a href="https://github.com/paltu-pairaofficial" target="_blank">GitHub Codebase ↗</a>
                        <a href="https://www.linkedin.com/in/paltu-paira-12a55936b" target="_blank">LinkedIn Profile ↗</a>
                    </div>
                </aside>
            </Reveal>

            <Reveal delay={.1}>
                <form className="contact-form" onSubmit={submit}>
                    <span className="eyebrow">DIRECT TRANSMISSION</span>
                    <h2>Send a Message</h2>
                    <p>Fill in your project parameters below to arrange an exploratory technical sync.</p>

                    <div className="chips">
                        {['Website Development', 'Full Stack Web App', 'AI Integration', 'UI Redesign', 'E-commerce', 'WordPress', 'General Inquiry'].map(x =>
                            <button type="button" key={x}>{x}</button>
                        )}
                    </div>

                    <div className="form-grid">
                        <label>
                            Full Name *
                            <input required name="name" placeholder="e.g. Paltu Paira" />
                        </label>

                        <label>
                            Email Address *
                            <input required type="email" name="email" placeholder="you@company.com" />
                        </label>
                    </div>

                    <label>
                        Project Subject
                        <input name="subject" placeholder="e.g. Website Redesign / Full-Stack Application" />
                    </label>

                    <label>
                        Message *
                        <textarea required name="message" placeholder="Outline your technical goals, desired schedule, tech stack requirements, or questions..." />
                    </label>

                    <button className="btn primary" type="submit" disabled={busy}>
                        {busy ? 'Sending…' : sent ? 'Message Sent ✓' : 'Send Message →'}
                    </button>

                    {error && <small style={{ color: '#b83320' }}>{error}</small>}
                </form>
            </Reveal>
        </section>

        <section className="collab">
            <Reveal>
                <div>
                    <span className="eyebrow">COLLABORATIVE ENGINEERING</span>
                    <h2>Looking for a long-term technical collaborator?</h2>
                    <p>I partner on practical web applications, automation, code quality, and modern digital solutions.</p>
                </div>

                <Link className="btn" to="/services">Inspect Services →</Link>
            </Reveal>
        </section>
    </div>
}


