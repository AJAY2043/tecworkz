import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/Services/ServicesSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;