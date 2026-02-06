import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#2563eb"/>
              <rect x="9" y="13" width="6" height="7" fill="white" rx="0.5"/>
              <rect x="7" y="6" width="10" height="3" fill="#1a202c" opacity="0.5" rx="0.5"/>
            </svg>
          </div>
          <span className="logo-text">KHEYRE</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-menu-container">
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={closeMobileMenu}>Services</Link></li>
            <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMobileMenu}>Projects</Link></li>
            <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''} onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to="/certification" className={isActive('/certification') ? 'active' : ''} onClick={closeMobileMenu}>Certification</Link></li>
          </ul>
        </div>

        <button 
          className="nav-contact-btn"
          onClick={() => {
            navigate('/contact');
            closeMobileMenu();
          }}
        >
          Contact Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
