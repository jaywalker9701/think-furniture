import React from 'react';
import './ServicesSection.css';

const services = [
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-office-planning.png', label: 'Office Planning & Design' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-furniture-procurement.png', label: 'Furniture Procurement' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-project-management.png', label: 'Project Management' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-installation.png', label: 'Delivery & Install' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-ergonomic-assessment.png', label: 'Ergonomic Assessment' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-acoustic.png', label: 'Acoustic Consultation' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-storage-audit.png', label: 'Storage Audit' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-warehousing.png', label: 'Warehousing & Moves Management' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-rental-and-finance.png', label: 'Furniture Rental & Finance' },
  { icon: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-services-symbol-bespoke-furniture.png', label: 'Bespoke Furniture Solutions' },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="icon-wrapper">
                <img src={service.icon} alt={service.label} className="service-icon-img" />
              </div>
              <span className="service-label">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
