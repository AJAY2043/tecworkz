import PageHero from '../../components/PageHero/PageHero';
import Icon from '../../components/Icon/Icon';
import CTA from '../../components/CTA/CTA';
import services from '../../data/services.json';
import './Services.css';

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Practical IT services for growing businesses"
        subtitle="Whether you need a new website, day-to-day support, or a full network overhaul, we tailor every engagement to your business — not the other way around."
      />

      <section className="section services-page">
        <div className="container services-page__list">
          {services.map((service, i) => (
            <div
              id={service.id}
              key={service.id}
              className={`services-page__row ${i % 2 === 1 ? 'services-page__row--reverse' : ''}`}
              data-aos="fade-up"
            >
              <div className="services-page__icon-block">
                <div className="services-page__icon">
                  <Icon name={service.icon} />
                </div>
              </div>

              <div className="services-page__content">
                <h2>{service.title}</h2>
                <p className="services-page__description">{service.description}</p>
                <ul className="services-page__features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Services;