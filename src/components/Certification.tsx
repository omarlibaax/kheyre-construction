import { AwardIcon, ShieldIcon, LeafIcon, UsersIcon } from './Icons';
import './Certification.css';

const Certification = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: AwardIcon
    },
    {
      name: 'OSHA Certified',
      description: 'Occupational Safety & Health',
      icon: ShieldIcon
    },
    {
      name: 'LEED Accredited',
      description: 'Green Building Certification',
      icon: LeafIcon
    },
    {
      name: 'Licensed Engineers',
      description: 'Professional Engineering License',
      icon: UsersIcon
    }
  ];

  return (
    <section id="certification" className="certification">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">
            Recognized credentials demonstrating our commitment to excellence
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="cert-card">
                <div className="cert-icon-wrapper">
                  <IconComponent />
                </div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;
