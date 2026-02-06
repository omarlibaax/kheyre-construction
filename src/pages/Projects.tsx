import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial', 'Healthcare'];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art 20-story office building with sustainable design features, modern amenities, and LEED certification.',
      fullDescription: 'This landmark office complex represents the pinnacle of modern commercial construction. Featuring 20 floors of premium office space, the building incorporates cutting-edge sustainable technologies including solar panels, rainwater harvesting systems, and energy-efficient HVAC. The design emphasizes natural light, open workspaces, and green building materials. The project was completed ahead of schedule and has become a model for sustainable commercial development in the region.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      location: 'Downtown Business District',
      year: '2024',
      size: '500,000 sq ft',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Residential Tower',
      category: 'Residential',
      description: 'Luxury residential development with premium amenities and modern architecture.',
      fullDescription: 'A luxury residential tower featuring 150 premium units with panoramic city views. The development includes state-of-the-art amenities including a rooftop infinity pool, fitness center, concierge services, and private parking. The architecture blends modern design with sustainable practices, featuring energy-efficient systems and green spaces throughout.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      location: 'Waterfront District',
      year: '2023',
      size: '300,000 sq ft',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Highway Bridge',
      category: 'Infrastructure',
      description: 'Major bridge construction project connecting two major cities.',
      fullDescription: 'A landmark infrastructure project featuring a 2.5-kilometer suspension bridge connecting two major metropolitan areas. The bridge incorporates advanced engineering techniques, seismic resistance systems, and sustainable construction methods. The project significantly reduced travel time and improved regional connectivity.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop',
      location: 'Regional Highway',
      year: '2023',
      size: '2.5 km span',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Shopping Mall',
      category: 'Commercial',
      description: 'Large-scale retail complex with parking facilities and entertainment zones.',
      fullDescription: 'A comprehensive shopping and entertainment complex spanning 1.2 million square feet. The development includes 200+ retail stores, a multiplex cinema, food court, entertainment zones, and parking for 3,000 vehicles. The design emphasizes customer experience with natural lighting, open spaces, and modern architectural elements.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      location: 'Suburban Commercial Zone',
      year: '2024',
      size: '1.2M sq ft',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Industrial Facility',
      category: 'Industrial',
      description: 'Modern manufacturing plant with advanced engineering systems.',
      fullDescription: 'A state-of-the-art manufacturing facility designed for efficiency and sustainability. The facility includes advanced production lines, quality control laboratories, warehouse space, and administrative offices. The project incorporated green building practices and energy-efficient systems, reducing operational costs by 30%.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
      location: 'Industrial Park',
      year: '2022',
      size: '800,000 sq ft',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Hospital Expansion',
      category: 'Healthcare',
      description: 'Multi-story hospital wing with cutting-edge medical facilities.',
      fullDescription: 'A major hospital expansion project adding 200 beds, advanced surgical suites, emergency department, and specialized care units. The facility incorporates the latest medical technology, infection control systems, and patient-centered design. The expansion increased the hospital\'s capacity by 40% while maintaining the highest standards of healthcare delivery.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
      location: 'Medical District',
      year: '2024',
      size: '400,000 sq ft',
      status: 'Completed'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <SEO 
        title="Our Projects - KHEYRE CONSTRUCTION"
        description="Explore our portfolio of successful construction and engineering projects including commercial buildings, residential developments, infrastructure projects, and industrial facilities."
        keywords="construction projects, building projects, construction portfolio, commercial construction projects, residential construction, infrastructure projects"
      />
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Our Projects</h1>
            <p className="hero-subtitle">
              Explore our diverse range of successful construction and engineering projects. 
              Each project represents our commitment to excellence, innovation, and quality.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card-detailed">
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} - ${project.category} construction project by KHEYRE Construction`} loading="lazy" />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <div className="project-detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{project.location}</span>
                    </div>
                    <div className="project-detail-item">
                      <span className="detail-label">Year:</span>
                      <span className="detail-value">{project.year}</span>
                    </div>
                    <div className="project-detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{project.size}</span>
                    </div>
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View Full Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <div className="projects-cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>
              Let's discuss how we can bring your vision to life with our expertise 
              in construction and engineering.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
