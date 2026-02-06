import { useEffect } from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '../components/Icons';
import './ContactPage.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us - KHEYRE CONSTRUCTION"
        description="Get in touch with KHEYRE Construction for your construction and engineering needs. Request a free quote, consultation, or project inquiry. We're here to help bring your vision to life."
        keywords="contact construction company, construction quote, engineering consultation, construction inquiry, building contractor contact"
      />
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">
              Contact us today to discuss your construction or engineering project. 
              We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Reach out to us through any of the following channels. Our team is ready 
                to assist you with your construction and engineering needs.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>
                      123 Construction Avenue<br />
                      Building District, City 12345<br />
                      Country
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+15551234567">+1 (555) 123-4567</a><br />
                      <a href="tel:+15551234568">+1 (555) 123-4568</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <MailIcon />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@kheyreconstruction.com">info@kheyreconstruction.com</a><br />
                      <a href="mailto:projects@kheyreconstruction.com">projects@kheyreconstruction.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
