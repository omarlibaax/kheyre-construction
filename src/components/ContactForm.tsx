import { useState } from 'react';
import { handleFormSubmit } from '../utils/formHandler';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (submitMessage) setSubmitMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await handleFormSubmit(formData, {
        sendEmail: true,
        sendWhatsApp: true,
        sendToCRM: true,
      });

      setSubmitMessage(result.message);
      
      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Request a Consultation</h2>
      
      {submitMessage && (
        <div className={`form-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
          {submitMessage}
        </div>
      )}

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (for WhatsApp)"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        >
          <option value="">Select Subject *</option>
          <option value="quote">Request a Quote</option>
          <option value="project">Project Inquiry</option>
          <option value="general">General Inquiry</option>
          <option value="partnership">Partnership</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message *"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-large"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="form-note">
        By submitting this form, you agree to be contacted via email and WhatsApp.
      </p>
    </form>
  );
};

export default ContactForm;
