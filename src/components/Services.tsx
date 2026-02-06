import { BuildingIcon, HomeIcon, BridgeIcon, SettingsIcon, BriefcaseIcon, LeafIcon } from './Icons';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: BuildingIcon,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from design to completion, including offices, retail spaces, and mixed-use developments.'
    },
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential developments built with precision and attention to detail.'
    },
    {
      icon: BridgeIcon,
      title: 'Infrastructure Projects',
      description: 'Bridges, roads, utilities, and large-scale infrastructure projects engineered for durability and efficiency.'
    },
    {
      icon: SettingsIcon,
      title: 'Engineering Services',
      description: 'Structural, civil, and mechanical engineering solutions with advanced design and analysis capabilities.'
    },
    {
      icon: BriefcaseIcon,
      title: 'Project Management',
      description: 'Comprehensive project management ensuring on-time, on-budget delivery with meticulous planning and execution.'
    },
    {
      icon: LeafIcon,
      title: 'Sustainable Building',
      description: 'Green building practices and LEED-certified construction for environmentally responsible projects.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive construction and engineering solutions for every need
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
