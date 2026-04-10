import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';

const projects = [
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/image-manager/think-furniture-project-lufthansa-snapshot.jpg?t=1740570106',
    title: 'Lufthansa',
    location: 'Heathrow Airport'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/image-manager/think-furniture-project-debevoise-and-plimpton.jpg?t=1767827718',
    title: 'Debevoise & Plimpton',
    location: 'London'
  },
  {
    image: 'https://cdn1.bigcommerce.com/server800/0193a/product_images/uploaded_images/think-furniture-project-bnp-paribas-24-savile-row-1.jpg',
    title: 'BNP Paribas',
    location: 'Savile Row'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/original/image-manager/think-furniture-project-image-thumbnail-homepage-bayernlb.jpg?t=1749650040',
    title: 'BayernLB',
    location: 'Bishopsgate, London'
  }
];

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section">
      {/* Video Header */}
      <div className="video-container">
        <iframe 
          className="project-video"
          src="https://www.youtube.com/embed/l4ElHG3v78g?autoplay=1&mute=1&loop=1&playlist=l4ElHG3v78g&controls=0"
          title="Think Furniture Project Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-location">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => navigate('/projects')}>
            View more projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
