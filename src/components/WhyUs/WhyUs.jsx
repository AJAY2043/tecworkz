import Icon from '../Icon/Icon';
import './WhyUs.css';

const REASONS = [
  {
    title: 'Local & responsive',
    text: 'Melbourne-based team, fast response times and on-site support when you need it.',
  },
  {
    title: 'Transparent pricing',
    text: "Clear quotes with no hidden fees, so you always know what you're paying for.",
  },
  {
    title: 'Built to scale',
    text: 'Solutions designed to grow with your business, from one site to many.',
  },
];

function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container why-us__grid">
        <div className="why-us__content" data-aos="fade-right">
          <span className="eyebrow">Why TecWorkz</span>
          <h2 className="section-heading">
            A technology partner that actually picks up the phone
          </h2>
          <p className="section-subtext">
            We're a Melbourne-based team that works closely with small
            and growing businesses. No call centres, no jargon — just
            clear advice and reliable delivery.
          </p>

          <ul className="why-us__list">
            {REASONS.map((reason) => (
              <li key={reason.title}>
                <span className="why-us__list-icon">
                  <Icon name="check" />
                </span>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-us__visual" data-aos="fade-left">
          <div className="why-us__card why-us__card--primary">
            <Icon name="target" className="why-us__card-icon" />
            <h4>Our Mission</h4>
            <p>Make enterprise-grade technology simple and accessible for every Melbourne business.</p>
          </div>
          <div className="why-us__card">
            <Icon name="team" className="why-us__card-icon" />
            <h4>Our Team</h4>
            <p>Experienced developers, technicians and consultants working as an extension of yours.</p>
          </div>
          <div className="why-us__card">
            <Icon name="shield" className="why-us__card-icon" />
            <h4>Our Approach</h4>
            <p>Practical, secure and well-documented work — built to last, not just to launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;