import PageHero from '../../components/PageHero/PageHero';
import Icon from '../../components/Icon/Icon';
import CTA from '../../components/CTA/CTA';
import team from '../../data/team.json';
import './About.css';

const VALUES = [
  {
    icon: 'target',
    title: 'Our Mission',
    text: 'Make enterprise-grade technology simple, practical and accessible for every Melbourne business, regardless of size.',
  },
  {
    icon: 'value',
    title: 'Our Values',
    text: 'Honest communication, fair pricing and quality work — we treat every client project like it was our own business.',
  },
  {
    icon: 'shield',
    title: 'Our Approach',
    text: 'We document everything we build and explain decisions in plain language, so you always understand your own systems.',
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Technology partners who actually understand small business"
        subtitle="TecWorkz was founded to give Melbourne businesses the kind of responsive, practical IT support that's usually reserved for big enterprises."
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div data-aos="fade-right">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-heading">Built from real, hands-on experience</h2>
            <p className="section-subtext">
              TecWorkz started with a simple observation: small and growing
              businesses are often stuck choosing between expensive
              enterprise IT firms and unreliable freelancers. We set out to
              be the option in between — a dependable local team that
              treats every client project with the same care, no matter
              the size.
            </p>
            <p className="section-subtext" style={{ marginTop: 16 }}>
              Today we help businesses across Melbourne with everything
              from custom websites to day-to-day IT support, network setup
              and cybersecurity, always with clear communication and fair,
              transparent pricing.
            </p>
          </div>

          <div className="about-story__values" data-aos="fade-left">
            {VALUES.map((value) => (
              <div className="about-story__value-card" key={value.title}>
                <Icon name={value.icon} className="about-story__value-icon" />
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <div className="section-head section-head--center" data-aos="fade-up">
            <span className="eyebrow">Our Team</span>
            <h2 className="section-heading">The people behind TecWorkz</h2>
          </div>

          <div className="about-team__grid">
            {team.map((member, i) => (
              <div
                className="about-team__card"
                key={member.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="about-team__avatar">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h4>{member.name}</h4>
                <span className="about-team__role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default About;