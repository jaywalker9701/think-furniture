import React from 'react';
import Newsletter from '../components/Newsletter';
import './ContactUsPage.css';

const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-us-page">
      <div className="breadcrumb-container">
        <p className="breadcrumb-text">Home / Contact us</p>
      </div>

      <div className="contact-container">
        <header className="contact-header">
          <h1 className="page-title">Contact us</h1>
        </header>

        <section className="contact-banner-section">
          <img 
            src="https://www.think-furniture.com/product_images/uploaded_images/think-furniture-contact-us-banner.jpg" 
            alt="Think Furniture Office" 
            className="contact-hero-banner" 
          />
        </section>

        <section className="contact-info-text">
          <div className="call-us-block">
            <p>Call us on:</p>
            <p className="phone-line">
              <span className="phone-number">+44 785 314 6763</span> (London)
            </p>
            <p className="phone-line">
              <span className="phone-number">+44 785 314 6763</span> (National & South East)
            </p>
            <p className="touch-prompt">Or get in touch via the below form</p>
          </div>

          <div className="contact-intro-block">
            <h2>Interested in working together?</h2>
            <p>
              Simply provide us with a name and email so we have a point of contact and then give us a brief overview of your project. 
              Even better, enter your phone number as well and we'll call you to discuss various solutions.
            </p>
          </div>

          <div className="contact-intro-block">
            <h2>Only interested in a particular product or just have a general question?</h2>
            <p>Enter your enquiry in the detail field. We will get back to all enquires within the same, or next working day.</p>
          </div>
        </section>

        <section className="contact-form-wrapper">
          <form className="main-contact-form">
            <div className="form-row">
              <div className="form-item">
                <label>Full Name <span className="required">*</span></label>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-item">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-item full-width">
                <label>Email Address <span className="required">*</span></label>
                <input type="email" placeholder="Email Address" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-item full-width">
                <label>Comments/Questions <span className="required">*</span></label>
                <textarea placeholder="Enter your comments here" required></textarea>
              </div>
            </div>

            {/* Recaptcha Placeholder */}
            <div className="recaptcha-placeholder">
              <div className="recaptcha-box">
                <div className="recaptcha-content">
                  <div className="recaptcha-checkbox"></div>
                  <span>I'm not a robot</span>
                </div>
                <div className="recaptcha-logo">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                  <p>reCAPTCHA</p>
                  <p className="privacy-links">Privacy - Terms</p>
                </div>
              </div>
            </div>

            <button type="submit" className="contact-submit-btn">Submit Message</button>
          </form>
        </section>
      </div>

      <Newsletter />
    </div>
  );
};

export default ContactUsPage;
