import React, { useState } from 'react';
import './FreeCallBackPage.css';

const FreeCallBackPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to an API
  };

  if (submitted) {
    return (
      <div className="free-call-back-page">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Thank You!</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>We have received your request. One of our experts will call you back shortly.</p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ marginTop: '30px', padding: '15px 40px', backgroundColor: '#f17e16', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="free-call-back-page">
      <div className="container">
        <div className="callback-form-wrapper">
          <h1 className="callback-title">Free Call Back</h1>
          <p className="callback-intro">
            Thank you for your interest in our site and products. For a free call back please fill in the form below using the details box to enter the best time in which to ring you.
          </p>

          <form onSubmit={handleSubmit} className="callback-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name<span>*</span></label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Email Address<span>*</span></label>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group full-width">
              <label>Comments/Questions<span>*</span></label>
              <textarea 
                placeholder="Enter your comments here" 
                required
                rows={5}
                value={formData.comments}
                onChange={e => setFormData({...formData, comments: e.target.value})}
              ></textarea>
            </div>

            <div className="captcha-placeholder">
              <div className="captcha-mock">
                <input type="checkbox" id="mock-captcha" required />
                <label htmlFor="mock-captcha">I'm not a robot</label>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="recaptcha-logo" />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeCallBackPage;
