import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/Services/ServicesSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';
import './Home.css';
import SEO from '../../components/SEO/SEO';

function Home() {
  return (
     <>
      <SEO
        title="TecWorkz — IT Services & Web Development in Melbourne"
        description="TecWorkz provides web development, IT support, networking and cybersecurity services for small and growing businesses across Melbourne."
      />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;