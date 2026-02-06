import { TargetIcon, EyeIcon, StarIcon } from './Icons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About KHEYRE CONSTRUCTION</h2>
          <p className="section-subtitle">
            Excellence in construction and engineering since our inception
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="card-icon-wrapper">
              <TargetIcon />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional construction and engineering services that exceed 
              client expectations through innovation, quality craftsmanship, and unwavering 
              commitment to safety and sustainability. We build lasting relationships by 
              transforming visions into reality.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-wrapper">
              <EyeIcon />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading construction and engineering company recognized for 
              excellence, innovation, and integrity. We envision a future where every 
              project we undertake sets new standards for quality and becomes a testament 
              to our dedication to building better communities.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-wrapper">
              <StarIcon />
            </div>
            <h3>Our Values</h3>
            <p>
              Integrity, quality, safety, and client satisfaction are the cornerstones 
              of everything we do. We believe in transparent communication, sustainable 
              practices, and continuous improvement to deliver projects that stand the 
              test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
