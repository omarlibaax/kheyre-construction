import { useEffect } from 'react';
import SEO from '../components/SEO';
import { AwardIcon, ShieldIcon, StarIcon, CheckIcon } from '../components/Icons';
import './CertificationPage.css';

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      details: 'Certified for maintaining the highest standards in quality management across all our construction and engineering projects. This certification ensures consistent quality, continuous improvement, and customer satisfaction.',
      icon: AwardIcon,
      issued: '2020',
      valid: '2025'
    },
    {
      name: 'OSHA Certified',
      description: 'Occupational Safety & Health Administration',
      details: 'Comprehensive safety certification demonstrating our commitment to maintaining zero-incident worksites. Our team undergoes regular safety training and adheres to the strictest safety protocols.',
      icon: ShieldIcon,
      issued: '2019',
      valid: 'Ongoing'
    },
    {
      name: 'LEED Accredited',
      description: 'Leadership in Energy and Environmental Design',
      details: 'Recognized for excellence in sustainable building practices. We specialize in LEED-certified projects, incorporating green building technologies and environmentally responsible construction methods.',
      icon: StarIcon,
      issued: '2021',
      valid: '2026'
    },
    {
      name: 'Licensed Engineers',
      description: 'Professional Engineering License',
      details: 'Our engineering team holds professional licenses and certifications from recognized engineering boards. We maintain continuing education requirements and stay current with industry standards.',
      icon: CheckIcon,
      issued: 'Ongoing',
      valid: 'Current'
    }
  ];

  const achievements = [
    {
      title: 'Zero Safety Incidents',
      description: 'Maintained perfect safety record across all projects'
    },
    {
      title: '100% Project Success Rate',
      description: 'Every project completed on time and within budget'
    },
    {
      title: 'Industry Recognition',
      description: 'Awarded multiple industry excellence awards'
    },
    {
      title: 'Client Satisfaction',
      description: '98% client satisfaction rate with repeat business'
    }
  ];

  return (
    <div className="certification-page">
      <SEO 
        title="Certifications & Accreditations - KHEYRE CONSTRUCTION"
        description="KHEYRE Construction is certified with ISO 9001:2015, OSHA, LEED accreditation, and professional engineering licenses. Recognized credentials demonstrating our commitment to excellence."
        keywords="construction certifications, ISO 9001, OSHA certified, LEED accredited, engineering licenses, construction accreditations"
      />
      <section className="certification-hero">
        <div className="container">
          <div className="certification-hero-content">
            <h1>Certifications & Accreditations</h1>
            <p className="hero-subtitle">
              Recognized credentials demonstrating our commitment to excellence, safety, and quality in construction and engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="certifications-list">
        <div className="container">
          <div className="certifications-grid">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="certification-card-detailed">
                  <div className="cert-icon-wrapper">
                    <IconComponent />
                  </div>
                  <div className="cert-content">
                    <h2>{cert.name}</h2>
                    <p className="cert-description">{cert.description}</p>
                    <p className="cert-details">{cert.details}</p>
                    <div className="cert-meta">
                      <div className="cert-meta-item">
                        <span className="meta-label">Issued:</span>
                        <span className="meta-value">{cert.issued}</span>
                      </div>
                      <div className="cert-meta-item">
                        <span className="meta-label">Valid Until:</span>
                        <span className="meta-value">{cert.valid}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p className="section-subtitle">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">✓</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certification-cta">
        <div className="container">
          <div className="certification-cta-content">
            <h2>Quality You Can Trust</h2>
            <p>
              Our certifications and accreditations ensure that every project meets the highest 
              standards of quality, safety, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
