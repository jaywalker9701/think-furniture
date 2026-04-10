import React from 'react';
import './GridSection.css';

const GridSection: React.FC = () => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {/* TOP ROW */}
        <div className="row row-1">
          <div className="grid-item large project-box">
            {/* Image contains text */}
          </div>
          <div className="grid-column side-stats">
            <div className="grid-item side-box why-choose-box">
              {/* Image contains text */}
            </div>
            <div className="grid-item side-box free-call-box">
              {/* Image contains text */}
            </div>
            <div className="grid-item side-box read-blog-box">
              {/* Image contains text */}
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row row-2">
          <div className="grid-item column-3 hybrid-office">
            {/* Image contains text */}
          </div>
          <div className="grid-item column-3 office-pods">
            {/* Image contains text */}
          </div>
          <div className="grid-item column-3 home-office">
            {/* Image contains text */}
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="row row-3">
          <div className="grid-item column-1 events-box">
            {/* Image contains text */}
          </div>
          <div className="grid-item column-2-alt wfh-box">
            {/* Image contains text */}
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className="row row-4">
          <div className="grid-item column-3 acoustic-box">
            {/* Image contains text */}
          </div>
          <div className="grid-item column-3 sit-stand-box">
            {/* Image contains text */}
          </div>
          <div className="grid-item column-3 dealer-box">
            {/* Image contains text */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
