import { Link } from 'react-router-dom';
import './GridSection.css';

const GridSection: React.FC = () => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {/* TOP ROW */}
        <div className="row row-1">
          <Link to="/projects" className="grid-item large project-box">
            {/* Image contains text */}
          </Link>
          <div className="grid-column side-stats">
            <Link to="/about-us" className="grid-item side-box why-choose-box">
              {/* Image contains text */}
            </Link>
            <Link to="/free-call-back" className="grid-item side-box free-call-box">
              {/* Image contains text */}
            </Link>
            <Link to="/blog" className="grid-item side-box read-blog-box">
              {/* Image contains text */}
            </Link>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row row-2">
          <Link to="/inspiration-by-sector-hybrid-work" className="grid-item column-3 hybrid-office">
            {/* Image contains text */}
          </Link>
          <Link to="/categories/breakout-pods/pods-booths" className="grid-item column-3 office-pods">
            {/* Image contains text */}
          </Link>
          <Link to="/categories/seating/home-office-chairs" className="grid-item column-3 home-office">
            {/* Image contains text */}
          </Link>
        </div>

        {/* THIRD ROW */}
        <div className="row row-3">
          <Link to="/inspiration-by-sector-training-room" className="grid-item column-1 events-box">
            {/* Image contains text */}
          </Link>
          <Link to="/categories/seating/task-seating" className="grid-item column-2-alt wfh-box">
            {/* Image contains text */}
          </Link>
        </div>

        {/* FOURTH ROW */}
        <div className="row row-4">
          <Link to="/categories/acoustics/wall-tiles" className="grid-item column-3 acoustic-box">
            {/* Image contains text */}
          </Link>
          <Link to="/categories/desking/sit-stand" className="grid-item column-3 sit-stand-box">
            {/* Image contains text */}
          </Link>
          <Link to="/about-us" className="grid-item column-3 dealer-box">
            {/* Image contains text */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
