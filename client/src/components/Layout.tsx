
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Services', '/services'],
  ['Contact', '/contact'],
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span>PALTU PAIRA</span>
          <small>FULL STACK & AI</small>
        </Link>

        <nav className={menuOpen ? 'mobile-open' : ''}>
          {nav.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <Link className="resume" to="/contact">
          Download Resume ↓
        </Link>

        <Link className="dot" to="/contact" aria-label="Contact Paltu Paira">
          ✦
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <h2>PALTU PAIRA.</h2>
            <p>Full Stack Developer — AI-Assisted Web Developer</p>
          </div>

          <div className="footer-cta">
            Let's build something extraordinary.
            <Link to="/contact">
              Initiate Collaboration →
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <b>DIRECT CONTACT</b>

            <a href="mailto:paltupaira3@gmail.com">
              paltupaira3@gmail.com
            </a>

            <a href="tel:+917894314178">
              +91 7894314178
            </a>

            <span>Jhargram, West Bengal, India</span>
          </div>

          <div>
            <b>NAVIGATION</b>

            {nav.map(([name, path]) => (
              <Link key={path} to={path}>
                {name}
              </Link>
            ))}
          </div>

          <div>
            <b>NETWORK</b>

            <a
              href="https://github.com/paltu-pairaofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/paltu-paira-12a55936b"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Paltu Paira. All rights reserved.

          <span>
            Engineered with editorial precision & modern web craft.
          </span>
        </div>
      </footer>
    </>
  );
}