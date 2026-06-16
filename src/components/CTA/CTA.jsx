import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './CTA.css';

function CTA() {
  return (
    <section className="cta" data-aos="zoom-in">
      <div className="container cta__inner">
        <div>
          <h2 className="cta__heading">Ready to upgrade your technology?</h2>
          <p className="cta__text">
            Tell us about your project and we'll get back to you within one business day.
          </p>
        </div>
        <Link to="/contact" className="btn btn--light">
          Get in Touch <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}

export default CTA;