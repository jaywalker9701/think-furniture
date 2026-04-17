import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, Share2 } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        {/* Addresses */}
        <div className="footer-col">
          <h4 className="footer-label">ADDRESS</h4>
          <p className="footer-text">
            20-22 Wenlock Road<br />
            London<br />
            N1 7GU<br />
            GB
          </p>
          <p className="footer-text phone">+44 785 314 6763</p>
          <p className="footer-text email" style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '-8px'}}>info@thinkfurniture.co.uk</p>

          <h4 className="footer-label margin-top">MARGATE ADDRESS:</h4>
          <p className="footer-text">
            Basement Studio<br />
            40 Fort Hill<br />
            Margate<br />
            Kent<br />
            CT9 1HD
          </p>
          <p className="footer-text phone">+44 785 314 6763</p>
          <p className="footer-text email" style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '-8px'}}>info@thinkfurniture.co.uk</p>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4 className="footer-label">CATEGORIES</h4>
          <ul className="footer-list">
            <li><Link to="/categories/seating/task-seating" style={{color:'inherit', textDecoration:'none'}}>Seating</Link></li>
            <li><Link to="/categories/desking/home-working-bundles" style={{color:'inherit', textDecoration:'none'}}>Desking</Link></li>
            <li><Link to="/categories/tables/meeting-boardroom" style={{color:'inherit', textDecoration:'none'}}>Tables</Link></li>
            <li><Link to="/categories/storage/lockers" style={{color:'inherit', textDecoration:'none'}}>Storage</Link></li>
            <li><Link to="/categories/breakout-pods/breakout-seating" style={{color:'inherit', textDecoration:'none'}}>Breakout & Pods</Link></li>
            <li><Link to="/categories/acoustics/office-pods" style={{color:'inherit', textDecoration:'none'}}>Acoustics</Link></li>
            <li><Link to="/categories/ergonomics/ergonomic-chairs" style={{color:'inherit', textDecoration:'none'}}>Ergonomics</Link></li>
            <li><Link to="/categories/accessories/lighting" style={{color:'inherit', textDecoration:'none'}}>Accessories</Link></li>
          </ul>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h4 className="footer-label">PAGES</h4>
          <ul className="footer-list">
            <li><Link to="/about-us" style={{color:'inherit', textDecoration:'none'}}>About Us</Link></li>
            <li><Link to="/contact-us" style={{color:'inherit', textDecoration:'none'}}>Contact Us</Link></li>
            <li><Link to="/projects" style={{color:'inherit', textDecoration:'none'}}>Projects</Link></li>
            <li><Link to="/services" style={{color:'inherit', textDecoration:'none'}}>Services</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h4 className="footer-label">FOLLOW US</h4>
          <div className="social-icons">
            {/* Using alternative common icons due to package version mismatches */}
            <a href="#" aria-label="LinkedIn"><Globe size={20} /></a>
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="Facebook"><Share2 size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', marginTop: '60px' }}>
          <div className="payment-methods">
            <span className="visa">VISA</span>
            <span className="mastercard">MasterCard</span>
            <span className="paypal">PayPal</span>
          </div>
          <p className="copyright">&copy; 2026 Think Furniture</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
