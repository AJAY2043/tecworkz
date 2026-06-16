import ServiceCard from '../ServiceCard/ServiceCard';
import services from '../../data/services.json';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading">
            IT services built around your business
          </h2>
          <p className="section-subtext">
            From a single website to a full network refresh, TecWorkz
            provides practical, end-to-end technology support for small
            and medium businesses.
          </p>
        </div>

        <div className="services-section__grid">
          {services.map((service, i) => (
            <div key={service.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <ServiceCard
                id={service.id}
                icon={service.icon}
                title={service.title}
                short={service.short}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;