import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mark.png';
import Icon from '../Icon/Icon';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <img src={logo} alt="TecWorkz" className="footer__logo" />
            <span className="footer__brand-name">TecWorkz</span>
          </div>
          <p className="footer__tagline">
            Practical software, networks and IT support for growing
            businesses across Melbourne.
          </p>
          <a
            href="https://www.linkedin.com/company/tecworkz-australia-pty-ltd/people/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="TecWorkz on LinkedIn"
          >
            <Icon name="linkedin" />
          </a>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Navigate</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__links">
            <li><Link to="/services">Web &amp; Software Development</Link></li>
            <li><Link to="/services">IT Support &amp; Helpdesk</Link></li>
            <li><Link to="/services">Networking &amp; Infrastructure</Link></li>
            <li><Link to="/services">Cloud &amp; Cybersecurity</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links footer__links--contact">
            <li>
              <Icon name="mail" /> <a href="mailto:info@tecworkz.com.au">info@tecworkz.com.au</a>
            </li>
            <li>
              <Icon name="phone" /> <a href="tel:+61450391099">0450 391 099</a>
            </li>
            <li>
              <Icon name="pin" /> Melbourne, VIC, Australia
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} TecWorkz. All rights reserved.</p>
          <p className="footer__credit">Technology for Tomorrow</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;