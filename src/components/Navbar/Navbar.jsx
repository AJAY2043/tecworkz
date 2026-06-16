import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-full.png';
import Icon from '../Icon/Icon';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="TecWorkz - Technology for Tomorrow" className="navbar__logo" />
        </NavLink>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Get a Quote
          </NavLink>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;