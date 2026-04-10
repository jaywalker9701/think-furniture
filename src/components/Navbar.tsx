import React, { useState, useContext } from 'react';
import { Phone, Search, User, Heart, ShoppingCart, ChevronDown, Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { user, logout } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="site-header">
      {/* Mobile-Only Action Bar */}
      <div className="mobile-top-bar">
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <button className="mobile-action-btn"><Phone size={20} /></button>
        <button className="mobile-action-btn"><Search size={24} /></button>
        
        {user ? (
           <button className="mobile-action-btn" onClick={() => logout()} title={`Logout ${user.name}`}>
             <LogOut size={24} />
           </button>
        ) : (
           <button className="mobile-action-btn" onClick={() => navigate('/login')} title="Log In">
             <User size={24} />
           </button>
        )}

        <button className="mobile-action-btn" onClick={() => navigate('/cart')} style={{ position: 'relative' }}>
          <ShoppingCart size={24} />
          {itemCount > 0 && <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#f17e16', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 700 }}>{itemCount}</span>}
        </button>
      </div>

      {/* Mobile-Only Logo Bar */}
      <div className="mobile-logo-bar">
        <Link to="/" className="logo mobile-logo">
          <h1>Think<span>Furniture</span></h1>
        </Link>
      </div>

      {/* Desktop Top Navbar */}
      <div className="top-nav desktop-only">
        <div className="container header-content">
          <Link to="/" className="logo">
            <h1>Think<span>Furniture</span></h1>
          </Link>
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button className="action-btn"><Phone size={20} /></button>
            <button className="action-btn"><Search size={20} /></button>
            
            {user ? (
               <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={() => logout()} title="Click to Logout">
                 <span style={{ fontSize: '12px', fontWeight: 600 }}>Hi, {user.name.split(' ')[0]}</span>
                 <LogOut size={16} />
               </div>
            ) : (
               <button className="action-btn" onClick={() => navigate('/login')} title="Log In"><User size={20} /></button>
            )}
            
            <button className="action-btn"><Heart size={20} /></button>
            <span className="separator" style={{ margin: '0 5px' }}>|</span>
            <button className="action-btn cart-btn" onClick={() => navigate('/cart')} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShoppingCart size={20} />
              <span style={{ fontSize: '14px', fontWeight: 700 }}>{itemCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Navbar */}
      <nav className="main-nav desktop-only">
        <div className="container nav-links-container">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>

            <li
              className={`has-dropdown ${activeDropdown === 'furniture' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('furniture')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/furniture" className="dropdown-trigger">
                Furniture <ChevronDown size={14} />
              </Link>
              {activeDropdown === 'furniture' && (
                <div className="mega-menu" onClick={handleMouseLeave}>
                  <div className="container mega-grid">
                    <div className="mega-col">
                      <h3>SEATING</h3>
                      <ul>
                        <li><Link to="/categories/seating/home-office-chairs">Home Office Chairs</Link></li>
                        <li><Link to="/categories/seating/task-seating">Task Seating</Link></li>
                        <li><Link to="/categories/seating/mesh-back-chairs">Mesh Back</Link></li>
                        <li><Link to="/categories/seating/ergonomic-chairs">Ergonomic Chairs</Link></li>
                        <li><Link to="/categories/seating/meeting-boardroom">Meeting & Boardroom</Link></li>
                        <li><Link to="/categories/seating/executive">Executive</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>DESKING</h3>
                      <ul>
                        <li><Link to="/categories/desking/single-home-office">Single & Home Office</Link></li>
                        <li><Link to="/categories/desking/compact-space-saving">Space Saving Desks</Link></li>
                        <li><Link to="/categories/desking/bench-desking">Bench Desks</Link></li>
                        <li><Link to="/categories/desking/sit-stand">Sit Stand Desks</Link></li>
                        <li><Link to="/categories/desking/executive-desks">Executive Desks</Link></li>
                        <li><Link to="/categories/desking/home-working-bundles">Home Working Bundles</Link></li>
                        <li><Link to="/categories/desking/reception-desks">Reception Desks</Link></li>
                        <li><Link to="/categories/desking/lecterns">Lecterns</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>TABLES</h3>
                      <ul>
                        <li><Link to="/categories/tables/standing-height">Standing Height</Link></li>
                        <li><Link to="/categories/tables/meeting-boardroom">Meeting & Boardroom</Link></li>
                        <li><Link to="/categories/tables/breakout-cafe">Breakout & Cafe</Link></li>
                        <li><Link to="/categories/tables/coffee-tables">Coffee Tables</Link></li>
                        <li><Link to="/categories/tables/outdoor-tables">Outdoor Tables</Link></li>
                        <li><Link to="/categories/tables/space-saving">Space Saving</Link></li>
                        <li><Link to="/categories/tables/glass-tables">Glass Tables</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>STORAGE</h3>
                      <ul>
                        <li><Link to="/categories/storage/mobile-pedestals">Mobile & Pedestals</Link></li>
                        <li><Link to="/categories/storage/lockers">Lockers</Link></li>
                        <li><Link to="/categories/storage/bookcase-shelving">Bookcase & Shelving</Link></li>
                        <li><Link to="/categories/storage/wardrobes-freestanding">Wardrobes & Freestanding</Link></li>
                        <li><Link to="/categories/storage/storagewall-systems">Storagewall</Link></li>
                        <li><Link to="/categories/storage/modular-storage">Modular Storage</Link></li>
                        <li><Link to="/categories/storage/credenza-boardroom">Credenza & Boardroom</Link></li>
                        <li><Link to="/categories/storage/all-wooden-storage">All Wooden Storage</Link></li>
                        <li><Link to="/categories/storage/all-metal-storage">All Metal Storage</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>BREAKOUT & PODS</h3>
                      <ul>
                        <li><Link to="/categories/breakout-pods/breakout-seating">Breakout Seating</Link></li>
                        <li><Link to="/categories/breakout-pods/breakout-tables">Breakout Tables</Link></li>
                        <li><Link to="/categories/acoustics/phone-booths">Phone Booths</Link></li>
                        <li><Link to="/categories/breakout-pods/enclosed-work-pods">Enclosed Work Pods</Link></li>
                        <li><Link to="/categories/breakout-pods/enclosed-meeting-pods">Enclosed Meeting Pods</Link></li>
                        <li><Link to="/categories/breakout-pods/open-pods">Open Pods</Link></li>
                        <li><Link to="/categories/breakout-pods/private-work-cubicles">Private Work Cubicles</Link></li>
                        <li><Link to="/categories/breakout-pods/pods-booths">Pods & Booths</Link></li>
                        <li><Link to="/categories/breakout-pods/daybeds-relaxation">Daybeds & Relaxation Pods</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>ACOUSTICS</h3>
                      <ul>
                        <li><Link to="/categories/acoustics/office-pods">Office Pods</Link></li>
                        <li><Link to="/categories/acoustics/phone-booths">Phone Booths</Link></li>
                        <li><Link to="/categories/acoustics/booths-high-back-sofas">Booths & High Backs</Link></li>
                        <li><Link to="/categories/acoustics/office-booths-with-media">Booths With Media</Link></li>
                        <li><Link to="/categories/acoustics/acoustic-screens-partitions">Screening Systems</Link></li>
                        <li><Link to="/categories/acoustics/acoustic-wall-ceiling-tiles">Wall & Ceiling Tiles</Link></li>
                        <li><Link to="/categories/acoustics/acoustic-lighting">Acoustic Lighting</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>ERGONOMICS</h3>
                      <ul>
                        <li><Link to="/categories/ergonomics/ergonomic-chairs">Ergonomic Chairs</Link></li>
                        <li><Link to="/categories/ergonomics/ergonomic-desks">Ergonomic Desks</Link></li>
                        <li><Link to="/categories/ergonomics/monitor-arms">Monitor Arms</Link></li>
                        <li><Link to="/categories/ergonomics/laptop-stands">Laptop Stands</Link></li>
                        <li><Link to="/categories/ergonomics/sit-stand-mats">Sit Stand Mats</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h3>ACCESSORIES</h3>
                      <ul>
                        <li><Link to="/categories/accessories/lighting">Lighting</Link></li>
                        <li><Link to="/categories/ergonomics/monitor-arms">Monitor Arms</Link></li>
                        <li><Link to="/categories/accessories/cpu-holders">CPU Holders</Link></li>
                        <li><Link to="/categories/ergonomics/laptop-stands">Laptop Stands</Link></li>
                        <li><Link to="/categories/accessories/desktop-screens">Desktop Screens</Link></li>
                        <li><Link to="/categories/accessories/whiteboards">Whiteboards</Link></li>
                        <li><Link to="/categories/accessories/planters">Planters</Link></li>
                        <li><Link to="/categories/accessories/coat-stands">Coat Stands</Link></li>
                        <li><Link to="/categories/accessories/bins">Bins</Link></li>
                        <li><Link to="/categories/accessories/clocks">Clocks</Link></li>
                        <li><Link to="/categories/accessories/power-modules">Power Modules</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className={`has-dropdown ${activeDropdown === 'area' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('area')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/by-area" className="dropdown-trigger">
                By Area <ChevronDown size={14} />
              </Link>
              {activeDropdown === 'area' && (
                <div className="mega-menu" onClick={handleMouseLeave}>
                  <div className="container mega-grid">
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/meeting-room">MEETING ROOM</Link></li>
                        <li><Link to="/traditional-work">TRADITIONAL WORK</Link></li>
                        <li><Link to="/training-room">TRAINING ROOM</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/reception">RECEPTION</Link></li>
                        <li><Link to="/focused-work">FOCUSED WORK</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/breakout-space">BREAKOUT SPACE</Link></li>
                        <li><Link to="/hybrid-work">HYBRID WORK</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/canteen">CANTEEN</Link></li>
                        <li><Link to="/collaborative-space">COLLABORATIVE SPACE</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className={`has-dropdown ${activeDropdown === 'sector' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('sector')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/by-sector" className="dropdown-trigger">
                By Sector <ChevronDown size={14} />
              </Link>
              {activeDropdown === 'sector' && (
                <div className="mega-menu" onClick={handleMouseLeave}>
                  <div className="container mega-grid">
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/inspiration-by-sector-education">EDUCATION</Link></li>
                        <li><Link to="/inspiration-by-sector-design">DESIGN</Link></li>
                        <li><Link to="/inspiration-by-sector-entertainment-stadia">ENTERTAINMENT/STADIA</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/inspiration-by-sector-hospitality">HOSPITALITY</Link></li>
                        <li><Link to="/inspiration-by-sector-healthcare">HEALTHCARE</Link></li>
                        <li><Link to="/inspiration-by-sector-charity">CHARITY</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/inspiration-by-sector-financial">FINANCIAL/LEGAL</Link></li>
                        <li><Link to="/inspiration-by-sector-coworking">COWORKING</Link></li>
                        <li><Link to="/inspiration-by-sector-manufacturing">MANUFACTURING</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul className="area-sector-list">
                        <li><Link to="/inspiration-by-sector-media-technology">MEDIA/TECHNOLOGY</Link></li>
                        <li><Link to="/inspiration-by-sector-airports-transportation">AIRPORTS/TRANSPORTATION</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link></li>
          <li><Link to="/about-us" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link></li>
          <li><Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link></li>
          <li className="mobile-nav-expand">
            <span>FURNITURE</span>
            <ChevronDown size={16} />
          </li>
          <li className="mobile-nav-expand">
            <span>BY AREA</span>
            <ChevronDown size={16} />
          </li>
          <li className="mobile-nav-expand">
            <span>BY SECTOR</span>
            <ChevronDown size={16} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
