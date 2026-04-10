import React from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="newsletter-title">Subscribe To Our Newsletter</h2>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email address" 
            className="newsletter-input" 
            required 
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
