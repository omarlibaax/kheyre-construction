import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art 20-story office building with sustainable design features.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      title: 'Residential Tower',
      category: 'Residential',
      description: 'Luxury residential development with premium amenities and modern architecture.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    },
    {
      title: 'Highway Bridge',
      category: 'Infrastructure',
      description: 'Major bridge construction project connecting two major cities.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop'
    },
    {
      title: 'Shopping Mall',
      category: 'Commercial',
      description: 'Large-scale retail complex with parking facilities and entertainment zones.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    },
    {
      title: 'Industrial Facility',
      category: 'Industrial',
      description: 'Modern manufacturing plant with advanced engineering systems.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      title: 'Hospital Expansion',
      category: 'Healthcare',
      description: 'Multi-story hospital wing with cutting-edge medical facilities.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Showcasing our portfolio of successful construction and engineering projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} construction project by KHEYRE Construction`}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-btn">
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
