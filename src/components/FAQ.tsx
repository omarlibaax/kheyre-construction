import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of construction projects do you handle?',
      answer: 'We handle a wide range of projects including commercial buildings, residential developments, infrastructure projects, industrial facilities, and specialized engineering projects. Our expertise covers everything from small renovations to large-scale construction.'
    },
    {
      question: 'How long does a typical construction project take?',
      answer: 'Project timelines vary based on scope, size, and complexity. A small renovation might take 2-4 weeks, while a large commercial building can take 12-24 months. We provide detailed timelines during the planning phase and keep you updated throughout the project.'
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes, we offer free, no-obligation quotes for all projects. Our team will assess your requirements and provide a detailed estimate including timelines and costs. Contact us today to schedule a consultation.'
    },
    {
      question: 'What safety measures do you follow?',
      answer: 'Safety is our top priority. We follow strict safety protocols, conduct regular safety training, maintain OSHA compliance, and implement comprehensive safety programs on all job sites. We have an excellent safety record with zero-incident worksites.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers\' compensation coverage. All our certifications and licenses are current and available for review upon request.'
    },
    {
      question: 'Can you work within a specific budget?',
      answer: 'Absolutely. We work closely with clients to develop projects that fit their budget while maintaining quality standards. We provide transparent pricing and can suggest cost-effective alternatives when needed.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="blog" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our construction and engineering services
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
