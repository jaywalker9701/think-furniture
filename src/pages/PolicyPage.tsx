import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface PolicyProps {
  title: string;
  type: 'shipping' | 'returns' | 'terms' | 'privacy' | 'faq';
}

const PolicyPage: React.FC<PolicyProps> = ({ title, type }) => {
  useSEO({
    title: title,
    description: `Read the ${title} for Think Furniture. Important information about our services.`,
    canonicalUrl: `https://www.think-furniture.com/${type}`
  });

  const getPolicyContent = () => {
    switch (type) {
      case 'shipping':
        return (
          <>
            <h2>UK Delivery</h2>
            <p>We offer standard delivery within 3-5 working days across the UK. Large furniture pieces may require arranged white-glove installation services which take 7-10 working days.</p>
            <h2>International Delivery</h2>
            <p>International shipping is available upon request. Rates vary depending on the volumetric weight and destination. Contact our support team for a tailored quote.</p>
          </>
        );
      case 'returns':
        return (
          <>
            <h2>Our Returns Policy</h2>
            <p>We accept returns within 14 days of delivery. The item must be in its original packaging and unused condition. Made-to-order items are exempt from returns unless faulty.</p>
            <h2>Faulty Items</h2>
            <p>If your item arrives damaged, please document it immediately and contact our support team within 48 hours for a rapid replacement.</p>
          </>
        );
      case 'terms':
        return (
          <>
            <h2>1. Terms of Use</h2>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h2>2. Pricing</h2>
            <p>All prices listed exc. VAT unless otherwise stated. We reserve the right to modify prices without prior notice.</p>
          </>
        );
      case 'privacy':
        return (
          <>
            <h2>Information Collection</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
            <h2>Data Compliance (GDPR)</h2>
            <p>We are fully compliant with UK-GDPR laws and will never secretly sell your data. You may request account deletion at any point.</p>
          </>
        );
      case 'faq':
        return (
          <>
            <div style={{ marginBottom: '20px' }}>
               <h4>Do you offer bulk discounts for corporate offices?</h4>
               <p>Yes, we provide trade pricing and volume discounts for full office fit-outs. Reach out via our Contact Us page.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
               <h4>Are the products assembled?</h4>
               <p>Most large items include professional installation. Specific details are labeled clearly on each product page.</p>
            </div>
          </>
        );
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', minHeight: '60vh', lineHeight: '1.8' }}>
      <nav style={{ marginBottom: '30px', fontSize: '13px', color: '#888', textTransform: 'uppercase' }}>
        <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link> / 
        <span style={{ color: '#333', fontWeight: 600, marginLeft: '5px' }}>{title}</span>
      </nav>
      <h1 style={{ fontSize: '36px', marginBottom: '40px', fontWeight: 700, borderBottom: '2px solid #000', paddingBottom: '20px' }}>{title}</h1>
      <div style={{ color: '#444' }}>
        {getPolicyContent()}
      </div>
    </div>
  );
};

export default PolicyPage;
