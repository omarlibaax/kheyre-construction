import { CheckIcon, AwardIcon, UsersIcon, ShieldIcon, DollarIcon, HandshakeIcon } from './Icons';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckIcon,
      title: 'Proven Track Record',
      description: 'Years of successful projects delivered on time and within budget'
    },
    {
      icon: AwardIcon,
      title: 'Award-Winning Quality',
      description: 'Recognized for excellence in construction and engineering'
    },
    {
      icon: UsersIcon,
      title: 'Expert Team',
      description: 'Skilled professionals with extensive industry experience'
    },
    {
      icon: ShieldIcon,
      title: 'Safety First',
      description: 'Rigorous safety protocols ensuring zero-incident worksites'
    },
    {
      icon: DollarIcon,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden costs or surprises'
    },
    {
      icon: HandshakeIcon,
      title: 'Client-Focused',
      description: 'Dedicated to exceeding expectations and building lasting partnerships'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            The advantages that set us apart in the construction industry
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <IconComponent />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
