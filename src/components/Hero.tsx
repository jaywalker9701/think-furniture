import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    title: 'PREMIUM TASK SEATING',
    description: 'Discover ultimate comfort and support with our elite ergonomic seating collection.',
    buttonText: 'VIEW SEATING',
    link: '/categories/seating/task-seating'
  },
  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80',
    title: 'INNOVATIVE DESKING',
    description: 'Elevate your work experience with our height-adjustable sit-stand solutions.',
    buttonText: 'VIEW DESKS',
    link: '/categories/desking/sit-stand'
  },
  {
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1920&q=80',
    title: 'SMART STORAGE',
    description: 'Organize your workspace with style using our modular and secure storage systems.',
    buttonText: 'VIEW STORAGE',
    link: '/categories/storage/lockers'
  },
  {
    image: 'https://images.unsplash.com/photo-1556800539-715ceee2366b?auto=format&fit=crop&w=1920&q=80',
    title: 'ACOUSTIC WORK PODS',
    description: 'Create private hubs for focus and collaboration in any open-plan environment.',
    buttonText: 'VIEW PODS',
    link: '/categories/breakout-pods/pods-booths'
  },
  {
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80',
    title: 'ERGONOMIC ACCESSORIES',
    description: 'Optimize your station setup with precision-engineered monitor arms and tools.',
    buttonText: 'VIEW ACCESSORIES',
    link: '/categories/ergonomics/monitor-arms'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
              <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={32} />
              </button>
              
              <div className="text-content">
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-desc">{slide.description}</p>
                <button className="hero-cta" onClick={() => navigate(slide.link)}>
                  {slide.buttonText}
                </button>
              </div>

              <button className="nav-btn next" onClick={nextSlide} aria-label="Next Slide">
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
