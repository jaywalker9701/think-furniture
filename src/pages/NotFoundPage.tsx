import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const NotFoundPage: React.FC = () => {
  useSEO({
    title: 'Page Not Found',
    description: 'We could not find the page you were looking for.'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '65vh', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '100px', fontWeight: 900, color: '#f17e16', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '20px 0', color: '#1a1a1a' }}>Oops! That page can't be found.</h2>
      <p style={{ color: '#666', marginBottom: '40px', maxWidth: '400px', fontSize: '16px' }}>
        It looks like nothing was found at this location. Maybe try searching or go back to the homepage.
      </p>
      <Link to="/" style={{ padding: '15px 35px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
