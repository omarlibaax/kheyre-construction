import { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Sustainable Construction',
      excerpt: 'Exploring innovative green building technologies and sustainable practices that are shaping the future of construction.',
      content: 'Sustainable construction is no longer a trend—it\'s a necessity. As we face increasing environmental challenges, the construction industry is evolving to embrace eco-friendly practices...',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
      date: 'March 15, 2024',
      category: 'Sustainability',
      author: 'Engineering Team'
    },
    {
      id: 2,
      title: 'Modern Construction Techniques: What You Need to Know',
      excerpt: 'A comprehensive guide to the latest construction techniques and technologies revolutionizing the industry.',
      content: 'The construction industry is experiencing rapid technological advancement. From 3D printing to modular construction, new techniques are transforming how we build...',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      date: 'March 10, 2024',
      category: 'Technology',
      author: 'Project Management'
    },
    {
      id: 3,
      title: 'Safety First: Best Practices for Construction Sites',
      excerpt: 'Essential safety protocols and best practices every construction site should implement to protect workers.',
      content: 'Safety is paramount in construction. With proper protocols and training, we can significantly reduce workplace accidents and create safer environments...',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      date: 'March 5, 2024',
      category: 'Safety',
      author: 'Safety Team'
    },
    {
      id: 4,
      title: 'Cost-Effective Construction: Tips for Budget Management',
      excerpt: 'Strategies for managing construction budgets effectively without compromising on quality.',
      content: 'Effective budget management is crucial for successful construction projects. Here are proven strategies to keep costs under control while maintaining quality...',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      date: 'February 28, 2024',
      category: 'Management',
      author: 'Finance Team'
    },
    {
      id: 5,
      title: 'The Art of Architectural Design in Modern Construction',
      excerpt: 'How architectural design principles are evolving to meet contemporary needs and aesthetic preferences.',
      content: 'Architecture is both art and science. Modern architectural design balances aesthetic appeal with functionality, sustainability, and cost-effectiveness...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      date: 'February 20, 2024',
      category: 'Design',
      author: 'Design Team'
    },
    {
      id: 6,
      title: 'Infrastructure Development: Building for the Future',
      excerpt: 'The importance of infrastructure development and how it shapes communities and economies.',
      content: 'Infrastructure is the backbone of modern society. Well-planned infrastructure projects drive economic growth, improve quality of life, and connect communities...',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
      date: 'February 15, 2024',
      category: 'Infrastructure',
      author: 'Engineering Team'
    }
  ];

  return (
    <div className="blog-page">
      <SEO 
        title="Blog - KHEYRE CONSTRUCTION"
        description="Read our latest insights, trends, and expert advice on construction, engineering, sustainability, safety, and industry best practices."
        keywords="construction blog, engineering blog, construction tips, building advice, construction industry news, sustainable construction"
      />
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Our Blog</h1>
            <p className="hero-subtitle">
              Insights, trends, and expert advice on construction, engineering, and industry best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={`${post.title} - ${post.category} article by KHEYRE Construction`} loading="lazy" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-author">By {post.author}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
