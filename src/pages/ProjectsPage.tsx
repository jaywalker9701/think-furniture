import React from 'react';
import Newsletter from '../components/Newsletter';
import './ProjectsPage.css';

const projectsData = [
  {
    title: 'DEBEVOISE & PLIMPTON',
    description: 'Think Furniture were approached by Debevoise & Plimpton to work directly with their appointed project team as their furniture consultant. Working closely with the design team we provided a furniture solution that hit budget and complimented the vision of the designer.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-debevoise-and-plimpton-2.jpg',
    theme: 'orange'
  },
  {
    title: 'BAYERNLB, LONDON',
    description: 'Think Furniture was proud to be directly appointed by BayernLB – a leading European bank with a global footprint – to procure, deliver, and install furniture for their new office at 8 Bishopsgate, London.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-bayern-1.jpg',
    theme: 'gray'
  },
  {
    title: 'LUFTHANSA OFFICES',
    description: 'A comprehensive furniture rollout for Lufthansa, focusing on modularity and brand consistency across several floors of their regional headquarters.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-lufthansa-2.jpg',
    theme: 'orange'
  },
  {
    title: 'GSK STOCKMANN',
    description: 'Delivering a high-spec legal environment for GSK Stockmann. We integrated bespoke joinery and premium ergonomic seating to reflect the firm\'s prestigious international standing.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-gsk-stockmann-1.jpg',
    theme: 'gray'
  },
  {
    title: 'BNP PARIBAS, 24 SAVILE ROW',
    description: 'Transforming a prestigious Savile Row space into a modern financial hub. We provided ergonomic task seating and high-end executive furniture to match the premium location.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-bnp-paribas-24-savile-row-1.jpg',
    theme: 'orange'
  },
  {
    title: 'CEPI',
    description: 'A modern, collaborative workspace for CEPI, focusing on flexible meeting areas and open-plan desking that encourages communication and productivity.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-cepi-4.jpg',
    theme: 'gray'
  },
  {
    title: 'CLARION, LONDON',
    description: 'A major relocation project for a leading legal firm in the heart of London. Think Furniture managed the procurement and installation of hundreds of workstations and bespoke meeting room solutions.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/clarion-greater-london-house-3.jpg',
    theme: 'orange'
  },
  {
    title: 'BNP PARIBAS, ALDERMANBURY SQ',
    description: 'Specialized furniture solutions for another key BNP Paribas location. Focusing on high-density workstations and ergonomic comfort for busy financial teams.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-bnp-paribas-aldermanbury-sq-1.jpg',
    theme: 'gray'
  },
  {
    title: 'BNP PARIBAS, HAREWOOD',
    description: 'Providing premium executive furniture for BNP Paribas’ Harewood location. The project combined traditional elegance with modern functionality.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/think-furniture-project-bnp-paribas-harewood-5.jpg',
    theme: 'orange'
  },
  {
    title: 'CLARION 3',
    description: 'Continuing our partnership with Clarion, this phase delivered advanced acoustics and modular lounge seating for their growing central office.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/clarion-3.jpg',
    theme: 'gray'
  },
  {
    title: 'CLARION, CROYDON',
    description: 'A fresh, vibrant office fit-out for Clarion’s Croydon hub. We focused on social breakout zones and modern desking to support a collaborative culture.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/clarion-croydon-7.jpg',
    theme: 'orange'
  },
  {
    title: 'CREASEYS',
    description: 'Creating a modern accounting environment for Creaseys. We provided clean, professional desking and high-quality storage solutions across their department floors.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/creaseys-2.jpg',
    theme: 'gray'
  },
  {
    title: 'CALASTONE',
    description: 'Full furniture procurement for Calastone’s modern fintech office. The solution included height-adjustable desks and bespoke boardroom features.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/calastone-3.jpg',
    theme: 'orange'
  },
  {
    title: 'BIE',
    description: 'A minimalist and effective workspace for BIE, focusing on clean lines and ergonomic task seating to support their executive search operations.',
    image: 'https://www.think-furniture.com/product_images/uploaded_images/bie-6.jpg?t=1518540683',
    theme: 'gray'
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <div className="breadcrumb-container">
        <p className="breadcrumb-text">Home / Projects</p>
      </div>

      <div className="projects-header">
        <h1 className="page-title">Projects</h1>
      </div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className={`project-row ${project.theme} ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-hero-img" />
            </div>
            <div className="project-details-container">
              <div className="project-details-content">
                <h2 className="project-title-large">{project.title}</h2>
                <div className="project-divider"></div>
                <p className="project-desc-text">{project.description}</p>
                <button className="see-more-btn">SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Newsletter />
    </div>
  );
};

export default ProjectsPage;
