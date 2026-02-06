import { useEffect } from 'react';
import SEO from '../components/SEO';
import { TargetIcon, EyeIcon, StarIcon, UsersIcon, AwardIcon, ShieldIcon } from '../components/Icons';
import './AboutPage.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <SEO 
        title="About Us - KHEYRE CONSTRUCTION"
        description="Learn about KHEYRE Construction's mission, vision, and values. Discover our legacy of excellence in construction and engineering with 25+ years of experience."
        keywords="about construction company, construction company history, construction mission, engineering company values, construction team"
      />
      {/* Rest of component remains the same */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About KHEYRE CONSTRUCTION</h1>
            <p className="hero-subtitle">
              Engineering Precision, Building Trust. We architect excellence, merging heritage with global standards.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Legacy</h2>
              <p>
                At KHEYRE Construction, we don't just move earth and pour concrete. We architect the backdrop 
                of evolving skylines, merging heritage with global engineering standards. With decades of 
                experience, we've built a reputation for excellence, innovation, and unwavering commitment 
                to quality.
              </p>
              <p>
                Our journey began with a simple vision: to transform the construction industry through 
                precision engineering, sustainable practices, and client-focused service. Today, we stand 
                as a leader in construction and engineering, having completed hundreds of successful projects 
                across residential, commercial, and infrastructure sectors.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Project Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">150+</div>
                <div className="stat-label">Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <TargetIcon />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction and engineering services that exceed client expectations 
                through innovation, quality craftsmanship, and unwavering commitment to safety and sustainability. 
                We build lasting relationships by transforming visions into reality.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <EyeIcon />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading construction and engineering company recognized for excellence, innovation, 
                and integrity. We envision a future where every project we undertake sets new standards for 
                quality and becomes a testament to our dedication to building better communities.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <StarIcon />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, quality, safety, and client satisfaction are the cornerstones of everything we do. 
                We believe in transparent communication, sustainable practices, and continuous improvement to 
                deliver projects that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <div className="philosophy-content">
            <h2>Our Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">Design</div>
                <h4>Bespoke Architectural Blueprints</h4>
                <p>
                  Every project begins with meticulous planning and custom design solutions tailored to 
                  our clients' unique needs and vision.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">Safety</div>
                <h4>Zero-Compromise Site Protocols</h4>
                <p>
                  Safety is non-negotiable. We maintain the highest safety standards with rigorous protocols 
                  ensuring zero-incident worksites.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">Quality</div>
                <h4>Uncompromising Excellence</h4>
                <p>
                  We never cut corners. Every material, every process, every detail is executed with precision 
                  and attention to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership</h2>
            <p className="section-subtitle">
              Meet the experts leading KHEYRE Construction to new heights
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <UsersIcon />
              </div>
              <h3>Expert Technicians</h3>
              <p>
                Our certified engineers and builders provide top-tier construction services with accurate 
                planning and execution.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <AwardIcon />
              </div>
              <h3>Award-Winning Team</h3>
              <p>
                Recognized for excellence in construction and engineering, our team brings decades of 
                combined experience.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <ShieldIcon />
              </div>
              <h3>Safety Champions</h3>
              <p>
                Our safety-first approach ensures rigorous protocols and zero-compromise site safety 
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
