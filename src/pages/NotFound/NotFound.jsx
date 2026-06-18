import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import SEO from '../../components/SEO/SEO';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — TecWorkz"
        description="The page you're looking for doesn't exist. Return to the TecWorkz homepage."
      />
      <section className="not-found">
        <div className="container not-found__inner">
          <div className="not-found__circuit" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <path className="not-found__path" d="M40 100 H80 L100 70 H160" />
              <path className="not-found__path" d="M40 130 H120 L140 160" />
              <circle className="not-found__node" cx="80" cy="100" r="6" />
              <circle className="not-found__node" cx="160" cy="70" r="6" />
              <circle className="not-found__node" cx="140" cy="160" r="6" />
            </svg>
          </div>

          <span className="not-found__code">404</span>
          <h1>This page took a wrong turn</h1>
          <p>
            The page you're looking for doesn't exist or may have been
            moved. Let's get you back on track.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="btn btn--primary">
              Back to Home <Icon name="arrow" />
            </Link>
            <Link to="/contact" className="btn btn--secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;