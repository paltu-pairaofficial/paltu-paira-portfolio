import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const journey = [
    ['01', 'Engineering Background', 'Built a strong foundation in electrical and industrial systems.'],
    ['02', 'Learning Development', 'Explored modern web technologies and built practical projects.'],
    ['03', 'Building Projects', 'Creating real-world web and AI-assisted digital solutions.']
];

const strengths = [
    ['Professional Strengths', 'Problem-solving, continuous learning, and practical project development.'],
    ['Technical Background', 'Connecting electrical engineering and industrial experience with software development.'],
    ['Career Goals', 'Becoming a skilled full-stack developer and building real-world digital solutions.'],
    ['Work Approach', 'Clean code, responsive websites, user-friendly interfaces, and continuous improvement.']
];

export default function About() {
    return <div className="page">
        <section className="about-hero">
            <div>
                <span className="pill">ABOUT ME</span>
                <motion.h1
                    initial={{ opacity: 0, scaleX: 0, transformOrigin: 'center' }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <span>Engineering Discipline Meets</span>{' '}
                    <span className="heading-accent">Modern Full-Stack Creativity.</span>
                </motion.h1>
                <p>I’m Paltu Paira, a Full Stack Developer with an engineering background, focused on building modern, responsive, and AI-assisted web applications.</p>
                <div className="actions">
                    <Link className="btn primary" to="/contact">Download My Resume →</Link>
                    <Link className="btn" to="/contact">Let's Work Together →</Link>
                </div>
            </div>

            <div className="profile-large">
                <img src="/assets/paltupaira2.png" />
                <b>Paltu Paira</b>
                <small>Full Stack & AI-Assisted Web Developer</small>
            </div>
        </section>

        <Section eyebrow="MY STORY" title="Forged in industrial plant operations, translated into elegant digital systems.">
            <div className="story">
                <p>My journey started in the field of Electrical Engineering, where I worked in hydropower plant operations and industrial systems. That experience developed discipline, problem-solving, documentation habits, and a practical understanding of how real systems behave.</p>
                <p>Today I am translating that engineering mindset into software: responsive interfaces, APIs, databases, automation, and AI-assisted workflows.</p>
            </div>
        </Section>

        <Section eyebrow="PROFESSIONAL EXPERIENCE" title="Experience">
            <div className="experience-grid">
                <article>
                    <b>NS Engineers</b>
                    <span>Hydropower Plant · Operations & Maintenance</span>
                    <p>Electrical and mechanical maintenance, HT/LT panels, SCADA/PLC, turbine operation and plant systems.</p>
                </article>
                <article>
                    <b>Adani Solar Pvt Ltd</b>
                    <span>Production Cell</span>
                    <p>Solar PV module production, process handling, equipment maintenance and quality-focused production work.</p>
                </article>
            </div>
        </Section>

        <Section eyebrow="DEVELOPER JOURNEY" title="The Developer Journey">
            <div className="journey">
                {journey.map(j =>
                    <article key={j[0]}>
                        <span>{j[0]}</span>
                        <b>{j[1]}</b>
                        <p>{j[2]}</p>
                    </article>
                )}
            </div>
        </Section>

        <Section eyebrow="ACHIEVEMENTS & FOUNDATIONAL STRENGTHS" title="Achievements & Strengths">
            <div className="strength-grid">
                {strengths.map(s =>
                    <article key={s[0]}>
                        <span>✦</span>
                        <b>{s[0]}</b>
                        <p>{s[1]}</p>
                    </article>
                )}
            </div>
        </Section>

        <Section eyebrow="STRATEGIC ROADMAP" title="Professional Goals & Future Vision">
            <div className="goal-grid">
                {['Full Stack Systems', 'AI & Automation', 'Real-World Solutions', 'Learning & Growth'].map((x, i) =>
                    <article key={x}>
                        <span>0{i + 1}</span>
                        <b>{x}</b>
                        <p>Build useful, scalable and user-friendly digital solutions while continuously improving modern development skills.</p>
                    </article>
                )}
            </div>
        </Section>

        <section className="dark-cta">
            <Reveal>
                <div>
                    <span className="eyebrow">INTERESTED IN COLLABORATING?</span>
                    <h2>Let's discuss an opportunity.</h2>
                </div>
                <a
                    className="btn primary"
                    href="https://www.facebook.com/share/19aQtwZz2P/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Initiate Collaboration →
                </a>
            </Reveal>
        </section>
    </div>
}