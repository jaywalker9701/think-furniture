import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>This is a placeholder for the {title} page. Section by section recreation coming soon!</p>
    </div>
  );
};

export default PlaceholderPage;
