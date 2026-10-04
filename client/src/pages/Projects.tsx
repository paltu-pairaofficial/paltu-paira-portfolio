

import {motion, useScroll, useTransform} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const projects = [
  {
    number: "01",
    title: "PhishGuard",
    category: "Cybersecurity",
    description: "Phishing Detection & Online Safety Platform",
    technologies: "Next.js · Node.js · Supabase",
    image: "/projects/phishguard.png",
    github: "https://github.com/paltu-pairaofficial/PhishGuard",
    live: "https://phish-guard-five-plum.vercel.app/"
  },
  {
    number: "02",
    title: "Cloud Media Storage",
    category: "Cloud Application",
    description: "Cloud-based media storage and file management platform",
    technologies: "React · Node.js · MongoDB",
    image: "/projects/cloud-media-storage.png",
    github: "https://github.com/paltu-pairaofficial/cloud-media-storage",
    live: "https://cloud-media-storage-six.vercel.app/"
  },
  {
    number: "03",
    title: "Nivaro",
    category: "Web Application",
    description: "Local Service Booking Platform",
    technologies: "React · Node.js · MongoDB",
    image: "/projects/nivaro.png",
    github: "https://github.com/paltu-pairaofficial/nivaro-local-services",
    live: "https://nivaro-local-services.vercel.app/"
  },
  {
    number: "04",
    title: "Nexvanta",
    category: "Education",
    description: "Educational Platform",
    technologies: "React · PostgreSQL · Tailwind CSS",
    image: "/projects/nexvanta.png",
    github: "https://github.com/paltu-pairaofficial/nexvanta-education-platform",
    live: "https://nexvanta-education-platform.vercel.app/"
  },
  {
    number: "05",
    title: "Titan Fitness",
    category: "Gym Management",
    description: "Gym Management Portal",
    technologies: "React · Node.js · MongoDB",
    image: "/projects/titan-fitness.png",
    github: "https://github.com/paltu-pairaofficial/titan-fitness-portal",
    live: "https://titan-fitness-portal.vercel.app/"
  }
];

export default function Projects() {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const projectViewportRef = useRef<HTMLDivElement | null>(null);
  const [isProjectAutoScrolling, setIsProjectAutoScrolling] = useState(true);

  const {scrollYProgress} = useScroll({
    target: projectSectionRef,
    offset: ["start end", "end start"],
  });

  const projectRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.5, 0, -1.5]
  );

  const projectScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.96]
  );

  useEffect(() => {
    const viewport = projectViewportRef.current;

    if (!viewport) return;

    let animationFrame = 0;

    const autoScroll = () => {
      if (isProjectAutoScrolling) {
        viewport.scrollLeft += 5;

        if (
          viewport.scrollLeft + viewport.clientWidth >=
          viewport.scrollWidth
        ) {
          viewport.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isProjectAutoScrolling]);

  return (
    <div className="page">
      <section className="page-hero">
        <span className="pill">PORTFOLIO & WORK ARCHIVE</span>

        <h1 className="projects-heading">
          <span>Curated Work &</span>
          <br />
          <span className="projects-heading-accent">
            Upcoming Case Studies
          </span>
        </h1>

        <p>
          Software engineering, full-stack web applications, and AI-assisted
          workflows. Real-world projects are presented as they become ready
          for publication.
        </p>
      </section>

      <section className="notice">
        <b>Real Work. Honest Experience.</b>

        <p>
          These projects were developed through internship experience and
          hands-on practice. They demonstrate my actual development skills
          and practical experience, with no fake clients, invented results,
          or fabricated metrics.
        </p>
      </section>

      <section
        ref={projectSectionRef}
        className="projects-cinematic-section"
      >
        <Section
          eyebrow="INTERACTIVE ARCHITECTURE"
          title="Featured Projects"
        >
          <div
            className="horizontal-viewport"
            ref={projectViewportRef}
            onMouseEnter={() => setIsProjectAutoScrolling(false)}
            onMouseLeave={() => setIsProjectAutoScrolling(true)}
          >
            <motion.div
              className="horizontal-track cinematic-track"
              style={{
                rotateZ: projectRotate,
                scale: projectScale,
              }}
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  className="cinematic-project-card"
                  whileHover={{y: -10}}
                  transition={{duration: 0.3}}
                >
                  <div className="cinematic-project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                    />
                  </div>

                  <div className="cinematic-project-content">
                    <span className="cinematic-project-number">
                      {project.number}
                    </span>

                    <span className="cinematic-project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <small>{project.technologies}</small>

                    <div className="cinematic-project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </Section>
      </section>

      <Section
        eyebrow="PUBLIC CODEBASE & OPEN ENGINEERING"
        title="Inspect Real Code On GitHub"
      >
        <div className="github-card">
          <div>
            <b>@paltu-pairaofficial</b>

            <p>
              Public repositories, experiments, interfaces, and development
              practice.
            </p>
          </div>

          <a
            className="btn"
            href="https://github.com/paltu-pairaofficial"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub Profile ↗
          </a>
        </div>
      </Section>

      <section className="dark-cta">
        <Reveal>
          <div>
            <span className="eyebrow">CONFIDENTIAL CONSULTATION</span>

            <h2>
              Need a custom web application or want to review implementation
              architecture?
            </h2>
          </div>

          <Link className="btn primary" to="/contact">
            Initiate Project Inquiry →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

