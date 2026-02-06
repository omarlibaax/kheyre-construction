import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp Industries',
      content: 'KHEYRE Construction delivered our office complex ahead of schedule and exceeded all our expectations. Their attention to detail and professionalism is unmatched.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, City Development',
      content: 'Working with KHEYRE was a pleasure. They handled every challenge with expertise and kept us informed throughout the entire process. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      content: 'The quality of work and commitment to safety standards impressed us from day one. KHEYRE Construction is now our go-to partner for all major projects.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Testimonials from satisfied clients who trust us with their projects
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
