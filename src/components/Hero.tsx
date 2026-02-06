import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-welcome">WELCOME TO KHEYRE</p>
          <h1 className="hero-headline">
            Building dreams with<br />
            precision and excellence
          </h1>
          <p className="hero-subtitle">
            We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.
          </p>
          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/projects')}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
