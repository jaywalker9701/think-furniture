import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/carousel/184/Think_Furniture_Banner_Image_-_vitra_mynt_chair.jpg?c=2',
    title: 'VITRA MYNT CHAIR',
    description: 'Redefine dynamic seating with the Mynt Chair, designed by Erwan Bouroullec for Vitra.',
    buttonText: 'VIEW MYNT'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/carousel/186/Untitled_design.png?c=2',
    title: 'MODERN OFFICE SOLUTIONS',
    description: 'Elevate your workspace with our curated collection of ergonomic office furniture.',
    buttonText: 'EXPLORE NOW'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/carousel/183/Think_Furniture_Banner_Image_-_interstuhl_hej_chairs.jpg?c=2',
    title: 'INTERSTUHL HEJ CHAIRS',
    description: 'Innovative design meets ultimate comfort in the new Interstuhl series.',
    buttonText: 'LEARN MORE'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/carousel/182/Think_Furniture_Banner_-_Connection_Spaces_Modular_Room_System.jpg?c=2',
    title: 'MODULAR ROOM SYSTEMS',
    description: 'Flexible environments designed for connection and focused work.',
    buttonText: 'VIEW COLLECTION'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="content-box">
              <button className="nav-btn prev" onClick={prevSlide}>
                <ChevronLeft size={32} />
              </button>
              
              <div className="text-content">
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-desc">{slide.description}</p>
                <button className="hero-cta">{slide.buttonText}</button>
              </div>

              <button className="nav-btn next" onClick={nextSlide}>
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
