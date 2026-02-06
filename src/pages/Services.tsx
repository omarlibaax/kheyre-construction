import { useEffect } from 'react';
import SEO from '../components/SEO';
import { BuildingIcon, HomeIcon, BridgeIcon, SettingsIcon, BriefcaseIcon, LeafIcon } from '../components/Icons';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: BuildingIcon,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from design to completion, including offices, retail spaces, and mixed-use developments.',
      features: [
        'Office buildings and corporate headquarters',
        'Retail centers and shopping malls',
        'Mixed-use developments',
        'Hospitality and entertainment venues',
        'Warehouse and distribution centers'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential developments built with precision and attention to detail.',
      features: [
        'Custom luxury homes',
        'Residential complexes and apartments',
        'Home renovations and extensions',
        'Sustainable housing solutions',
        'Interior design and finishing'
      ],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    },
    {
      icon: BridgeIcon,
      title: 'Infrastructure Projects',
      description: 'Bridges, roads, utilities, and large-scale infrastructure projects engineered for durability and efficiency.',
      features: [
        'Bridge construction and rehabilitation',
        'Road and highway development',
        'Water and sewage systems',
        'Power and utility infrastructure',
        'Public transportation facilities'
      ],
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop'
    },
    {
      icon: SettingsIcon,
      title: 'Engineering Services',
      description: 'Structural, civil, and mechanical engineering solutions with advanced design and analysis capabilities.',
      features: [
        'Structural engineering and design',
        'Civil engineering consulting',
        'Mechanical and electrical systems',
        'Geotechnical engineering',
        'Building information modeling (BIM)'
      ],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      icon: BriefcaseIcon,
      title: 'Project Management',
      description: 'Comprehensive project management ensuring on-time, on-budget delivery with meticulous planning and execution.',
      features: [
        'End-to-end project coordination',
        'Budget planning and cost control',
        'Schedule management and optimization',
        'Quality assurance and control',
        'Risk assessment and mitigation'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      icon: LeafIcon,
      title: 'Sustainable Building',
      description: 'Green building practices and LEED-certified construction for environmentally responsible projects.',
      features: [
        'LEED certification consulting',
        'Energy-efficient building systems',
        'Sustainable material sourcing',
        'Renewable energy integration',
        'Environmental impact assessment'
      ],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="services-page">
      <SEO 
        title="Our Services - KHEYRE CONSTRUCTION"
        description="Comprehensive construction and engineering services including commercial construction, residential building, infrastructure projects, engineering services, project management, and sustainable building solutions."
        keywords="construction services, engineering services, commercial construction services, residential construction, infrastructure construction, project management, sustainable building"
      />
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive construction and engineering solutions tailored to your needs. 
              From concept to completion, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-detail-card">
                <div className="service-detail-content">
                  <div className="service-detail-info">
                    <div className="service-icon-wrapper">
                      <IconComponent />
                    </div>
                    <h2>{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                      <h3>What We Offer:</h3>
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="service-cta-btn">
                      Get Free Quote
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                  <div className="service-detail-image">
                    <img src={service.image} alt={`${service.title} - KHEYRE Construction project example`} loading="lazy" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can bring your vision to life with our comprehensive 
              construction and engineering services.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
