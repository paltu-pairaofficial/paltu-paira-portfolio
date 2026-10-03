import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import HeroScene from "../three/HeroScene";

const tech = [
  "React.js",
  "TypeScript",
  "Three.js",
  "React Three Fiber",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "MySQL",
  "Supabase",
];

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

const stats = [
  {
    value: "3.5+",
    label: "Years Industrial Experience",
  },
  {
    value: "24/7",
    label: "Problem Solving Mindset",
  },
  {
    value: "3×",
    label: "Engineering to Software Bridge",
  },
  {
    value: "∞",
    label: "Continuous Learning",
  },
];

const journey = [
  {
    number: "01",
    label: "ENGINEERING BACKGROUND",
    title: "Engineering",
    text: "Built a strong foundation through electrical engineering and practical industrial experience.",
  },
  {
    number: "02",
    label: "LEARNING DEVELOPMENT",
    title: "Learning",
    text: "Exploring modern frontend, backend, database, AI and 3D technologies through practical development.",
  },
  {
    number: "03",
    label: "BUILDING PROJECTS",
    title: "Building",
    text: "Creating real world web applications and AI assisted digital solutions.",
  },
];

const strengths = [
  {
    icon: "◉",
    title: "Professional Strengths",
    text: "Problem solving, continuous learning and practical project development.",
    tags: "Problem Solving · Continuous Learning",
  },
  {
    icon: "✦",
    title: "Technical Background",
    text: "Connecting electrical engineering and industrial experience with software development.",
    tags: "Engineering · Software Development",
  },
  {
    icon: "◆",
    title: "Career Goals",
    text: "Become a skilled full stack developer and build useful real world digital solutions.",
    tags: "Full Stack · Real World Solutions",
  },
  {
    icon: "◇",
    title: "Work Approach",
    text: "Clean code, responsive websites, user friendly interfaces and continuous improvement.",
    tags: "Clean Code · Responsive UI",
  },
];

const vision = [
  {
    number: "01",
    title: "Full Stack Systems",
    text: "Build complete web applications using frontend, backend and database technologies.",
  },
  {
    number: "02",
    title: "AI Integration",
    text: "Explore AI powered features and automation for practical business problems.",
  },
  {
    number: "03",
    title: "Real World Solutions",
    text: "Develop useful websites and applications for businesses and individuals.",
  },
  {
    number: "04",
    title: "Continuous Growth",
    text: "Keep learning modern technologies and continuously improve development skills.",
  },
];

export default function Home() {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const projectViewportRef = useRef<HTMLDivElement | null>(null);
  const [isProjectAutoScrolling, setIsProjectAutoScrolling] = useState(true);
  const { scrollYProgress } = useScroll({
    target: projectSectionRef,
    offset: ["start end", "end start"],
  });

  const projectX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["0%", "-4%", "-18%", "-32%", "-42%"]
  );

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
    <main className="home-page">
      <section className="hero cinematic-section">
        <div className="hero-copy">
          <motion.span
            className="pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ● AVAILABLE FOR FREELANCE · FULL TIME · REMOTE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Hi, I’m <em>Paltu Paira.</em>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            Full Stack Developer
            <br />
            AI Assisted Web Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            Engineering discipline meets modern web development.
            I build responsive, scalable, and AI assisted digital
            solutions for real world problems.
          </motion.p>

          <motion.div
            className="actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            <Link
              className="btn primary"
              to="/contact"
            >
              Let’s Work Together →
            </Link>

            <a
              className="btn"
              href="/resume/Paltu-Paira-Resume.pdf"
              download
            >
              Download My Resume ↓
            </a>
          </motion.div>

          <motion.div
            className="meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >
            <span>⌖ Jhargram, West Bengal</span>
            <span>◉ Open to Remote & Global</span>
            <span>◌ Available for Projects</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >


          <motion.div
            className="portrait-card"
            initial={{
              opacity: 0,
              y: 50,
              rotate: 3,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -12,
              rotate: -1,
              scale: 1.02,
            }}
          >
            <div className="portrait-image-wrap">
              <img
                src="/assets/paltupaira2.png"
                alt="Paltu Paira"
              />
            </div>

            <div className="portrait-info">
              <b>Paltu Paira</b>
              <small>
                Full Stack & AI Assisted Web Developer
              </small>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="stats cinematic-section">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
          >
            <motion.div
              className="stat-card"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
            >
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </motion.div>
          </Reveal>
        ))}
      </section>

      <Section
        eyebrow="TECHNICAL DNA"
        title="Technical Toolkit & Core Technologies"
      >
        <Reveal>
          <p className="section-description">
            A growing full stack toolkit combining modern
            frontend engineering, backend development,
            databases, AI assisted workflows and 3D web
            experiences.
          </p>
        </Reveal>

        <div className="tech-grid">
          {tech.map((technology, index) => (
            <motion.div
              className="tech-card cinematic-card"
              key={technology}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.045,
              }}
              whileHover={{
                y: -12,
                rotateX: 5,
                rotateY: -5,
                scale: 1.025,
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <b>{technology}</b>

              <small>
                Practical development &
                continuous learning
              </small>
            </motion.div>
          ))}
        </div>
      </Section>

      <section
        ref={projectSectionRef}
        className="projects-cinematic-section"
      >
        <div className="projects-heading">
          <div>
            <span className="eyebrow">
              SELECTED WORK
            </span>

            <h2>
              Featured Work & Case Studies
            </h2>

            <p>
              Practical projects exploring full stack
              development, AI assisted workflows and
              real world digital solutions.
            </p>
          </div>

          <Link
            className="text-link"
            to="/projects"
          >
            View All Projects →
          </Link>
        </div>

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
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cinematic-project-image">
                  <img src={project.image} alt={`${project.title} project screenshot`} />
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

            <motion.article
              className="project-card project-placeholder"
              whileHover={{
                y: -15,
                scale: 1.02,
              }}
            >
              <div className="placeholder-icon">
                +
              </div>

              <span>MORE PROJECTS</span>

              <h3>
                More real world projects
                coming soon.
              </h3>

              <p>
                New applications and client work
                will be added as they are completed.
              </p>
            </motion.article>
          </motion.div>
        </div>

        <div className="project-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <span className="line" />
          <span>→</span>
        </div>
      </section>

      <Section
        eyebrow="MY JOURNEY"
        title="Engineering → Development → Building"
      >
        <div className="journey-grid">
          {journey.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 0.1}
            >
              <motion.article
                className="journey-card"
                whileHover={{ y: -10 }}
              >
                <span className="journey-number">
                  {item.number}
                </span>

                <span className="journey-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FOUNDATIONAL STRENGTHS"
        title="Achievements & Foundational Strengths"
      >
        <div className="strength-grid">
          {strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              delay={index * 0.08}
            >
              <motion.article
                className="strength-card"
                whileHover={{ y: -10 }}
              >
                <span className="strength-icon">
                  {strength.icon}
                </span>

                <h3>{strength.title}</h3>

                <p>{strength.text}</p>

                <small>{strength.tags}</small>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="PROFESSIONAL VISION"
        title="Professional Goals & Future Vision"
      >
        <div className="vision-grid">
          {vision.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 0.08}
            >
              <motion.article
                className="vision-card"
                whileHover={{ y: -8 }}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="dark-cta cinematic-cta">
        <Reveal>
          <div className="cta-content">
            <div>
              <span className="eyebrow">
                LET'S BUILD TOGETHER
              </span>

              <h2>
                Have a project in mind or need a
                tailored web application?
              </h2>

              <p>
                Let's discuss your idea and turn it
                into a practical working solution.
              </p>
            </div>

            <div className="cta-actions">
              <Link
                className="btn primary"
                to="/contact"
              >
                Start a Conversation →
              </Link>

              <a
                className="btn dark-btn"
                href="https://wa.me/917894314178"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}



