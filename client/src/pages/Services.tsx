import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const services = [
    'Website Development',
    'Full Stack Web Apps',
    'AI & Automation',
    'Website Redesign & UI/UX',
    'WordPress Builds',
    'E-commerce Stores',
    'Website Maintenance',
    'Website Deployment'
];

const steps = [
    ['01', 'Understand Requirements'],
    ['02', 'Plan & Develop'],
    ['03', 'Test & Improve'],
    ['04', 'Deploy & Deliver']
];

const faqs = [
    {
        question: 'What types of websites do you develop?',
        answer:
            'I build responsive business websites, landing pages, portfolio sites, and custom web applications.'
    },
    {
        question: 'Do you build responsive websites for mobile and desktop?',
        answer:
            'Yes. I build responsive interfaces that adapt to mobile, tablet, and desktop screen sizes, with a focus on usability and consistent presentation.'
    },
    {
        question: 'Can you develop full-stack web applications?',
        answer:
            'Yes. I can work across the frontend, backend, APIs, database integration, and deployment depending on the requirements of the application.'
    },
    {
        question: 'Do you provide AI integration and automation services?',
        answer:
            'Yes. I can integrate AI capabilities and automation into web applications and workflows based on the project requirements and selected tools.'
    },
    {
        question: 'Can you redesign or maintain an existing website?',
        answer:
            'Yes. I can help improve an existing website through UI updates, responsive improvements, bug fixes, performance improvements, and ongoing maintenance.'
    },
    {
        question: 'How can I contact you to discuss a project?',
        answer:
            'You can contact me through WhatsApp, email, or the contact form on this website. Share your project idea, requirements, and preferred way to communicate.'
    }
];
const serviceDescriptions = [
    'Responsive business websites, landing pages and portfolio websites built for modern browsers.',
    'Complete web applications with frontend, backend, database and API integration.',
    'AI-powered features, API integrations and workflow automation for practical use cases.',
    'Modern UI improvements, responsive redesigns and user-focused interface development.',
    'Custom WordPress websites, theme setup, customization and content management.',
    'Product-focused online stores with responsive interfaces and practical management features.',
    'Bug fixes, content updates, performance improvements and ongoing website support.',
    'Production deployment, hosting configuration, domain setup and application launch support.'
];

export default function Services() {
    return <div className="page">
        <section className="page-hero">
            <span className="pill">CAPABILITIES & SPECIALIZATIONS</span>
            <h1>Services & Solutions.</h1>
            <p>End-to-end web engineering, from responsive marketing sites to scalable full-stack applications and AI-assisted workflows.</p>
        </section>

        <Section eyebrow="01 / FULL-STACK OFFERINGS" title="Engineered Deliverables">
            <div className="service-grid">
                {services.map((x, i) =>
                    <article key={x}>
                        <span>0{i + 1}</span>
                        <b>{x}</b>
                        <p>{serviceDescriptions[i]}</p>
                        <small><a
                            href="https://wa.me/917894314178"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discuss this service →
                        </a></small>
                    </article>
                )}
            </div>
        </Section>

        <section className="advantage">
            <div>
                <span className="eyebrow">SPECIALIZED DELIVERY BENCHMARK</span>
                <h2>The AI-Assisted Advantage</h2>
                <p>AI-assisted workflows can support ideation, testing, documentation, automation, and component development while keeping engineering decisions intentional.</p>
            </div>

            <div className="metric-row">
                <b>3.5×<small>faster iteration target</small></b>
                <b>100%<small>structured scalable architecture</small></b>
                <b>7+<small>tools across the workflow</small></b>
            </div>
        </section>

        <Section eyebrow="02 / EXECUTION FRAMEWORK" title="How I Work">
            <div className="steps">
                {steps.map(s =>
                    <article key={s[0]}>
                        <span>{s[0]}</span>
                        <b>{s[1]}</b>
                        <p>Clear communication, practical planning, responsive implementation and continuous improvement.</p>
                    </article>
                )}
            </div>
        </Section>

        <Section eyebrow="03 / INQUIRY & CLARIFICATION" title="Frequently Asked Questions">
            <div className="faq">
                {faqs.map((faq) =>
                    <details key={faq.question}>
                        <summary>
                            {faq.question}
                            <span>+</span>
                        </summary>
                        <p>{faq.answer}</p>
                    </details>
                )}
            </div>
        </Section>

        <section className="collab">
            <Reveal>
                <div>
                    <span className="eyebrow">LET'S DISCUSS YOUR PROJECT</span>
                    <h2>Have a project in mind or need a tailored web application?</h2>
                    <p>Let’s turn your idea into a dependable digital solution.</p>
                </div>
                <Link className="btn primary" to="/contact">Initiate Collaboration →</Link>
            </Reveal>
        </section>
    </div>
}