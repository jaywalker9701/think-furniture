import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('thkf_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('thkf_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('thkf_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#1a1a1a', color: '#fff', padding: '20px', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', flexWrap: 'wrap', boxShadow: '0 -5px 20px rgba(0,0,0,0.5)' }}>
      <p style={{ margin: 0, fontSize: '14px', maxWidth: '800px', lineHeight: '1.6' }}>
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy" style={{ color: '#f17e16', textDecoration: 'underline' }}>Privacy Policy</Link> to learn more.
      </p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick={handleReject} style={{ padding: '10px 25px', backgroundColor: 'transparent', color: '#fff', border: '1px solid #555', fontWeight: 600, cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s' }}>
          Reject All
        </button>
        <button onClick={handleAccept} style={{ padding: '10px 25px', backgroundColor: '#f17e16', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s' }}>
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
