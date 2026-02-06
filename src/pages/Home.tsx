import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Certification from '../components/Certification';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="KHEYRE CONSTRUCTION - Building Excellence, Constructing Dreams"
        description="Leading construction and engineering company delivering exceptional projects with precision, quality, and innovation. Expert services in commercial, residential, and infrastructure construction."
        keywords="construction company, engineering services, commercial construction, residential construction, infrastructure projects, building contractors, construction management"
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <CTA />
      <Testimonials />
      <Certification />
      <FAQ />
    </div>
  );
};

export default Home;
