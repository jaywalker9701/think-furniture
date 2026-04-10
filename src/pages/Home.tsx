import React from 'react';
import Hero from '../components/Hero';
import GridSection from '../components/GridSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import ProjectsSection from '../components/ProjectsSection';
import NewProducts from '../components/NewProducts';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <GridSection />
      <ServicesSection />
      <CTASection />
      <ProjectsSection />
      <NewProducts />
      <Newsletter />
    </div>
  );
};

export default Home;
