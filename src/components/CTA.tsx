import './CTA.css';

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Get a free quote today and let's bring your construction vision to life. 
            Our team is ready to discuss your project and provide expert guidance.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </button>
            <button 
              className="btn btn-secondary btn-large"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
