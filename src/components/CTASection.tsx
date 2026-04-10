import { useNavigate } from 'react-router-dom';
import './CTASection.css';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-banner">
        <img src="https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/image-manager/clarion-greater-london-house-project-preview.jpg" alt="Clarion Project Banner" className="banner-img" />
      </div>
      <div className="cta-content">
        <div className="container">
          <h2 className="cta-heading">Find Out How We Can Help With Your Project</h2>
          <p className="cta-subtext">
            Get in touch today for a no obligation discussion to see how we can help with your project.
          </p>
          <button className="contact-btn" onClick={() => navigate('/contact-us')}>Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
