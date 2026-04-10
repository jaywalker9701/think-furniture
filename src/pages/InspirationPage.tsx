import React from 'react';
import { Link } from 'react-router-dom';
import './InspirationPage.css';

interface InspirationPageProps {
  title: string;
}

// A large pool of reliable Unsplash office/architecture interior IDs
const photoPool = [
  "1497366216548-37526070297c", "1524758631624-e2822e304c36", "1517502884422-41eaead166d4",
  "1556800539-715ceee2366b", "1505691938895-1758d7feb511", "1521737604893-d14cc237f11d",
  "1497215248147-22878cefb2b3", "1556761175-5973dc0f32e7", "1527192491265-7e15c55b1ed2",
  "1604328698692-f76ea9498e76", "1577412647305-95079fbe4be1", "1606857521015-7f9fcf423740",
  "1593642632823-8f785ba67e45", "1495932568733-289b4f971ba4", "1612845423696-24ea94df9da8"
];

const companyNames = [
  "Nexus Tech HQ", "Global Finance Group", "Crescent Creative Studios", 
  "Elevate Enterprises", "Horizon Marketing Agency", "Aurora Innovations",
  "Vertex Solutions", "Pinnacle Consulting", "Lumiere Design Co.",
  "Mosaic Dynamics", "Oasis Workspace", "Prism Interactive",
  "Stellar Systems", "Quantum Partners"
];

// Helper to generate a deterministic number from a string
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const InspirationStrip: React.FC<{ project: any }> = ({ project }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="inspiration-strip" style={{ marginBottom: '40px' }}>
      <img 
        src={project.imgUrl} 
        alt={project.caption} 
        style={{ borderRadius: '4px' }} 
        onError={() => setIsVisible(false)}
      />
      <div className="strip-caption">
         <p>{project.caption}</p>
      </div>
    </div>
  );
};

const InspirationPage: React.FC<InspirationPageProps> = ({ title }) => {
  // Deterministically pick 6 unique images and captions based on page title
  const projects = React.useMemo(() => {
    const seed = hashString(title);
    return Array.from({ length: 6 }).map((_, i) => {
      const imgIndex = (seed + i * 7) % photoPool.length;
      const companyIndex = (seed + i * 3) % companyNames.length;
      
      return {
        id: i,
        imgUrl: `https://images.unsplash.com/photo-${photoPool[imgIndex]}?auto=format&fit=crop&w=1600&q=80`,
        caption: `${companyNames[companyIndex]} - ${title} Implementation`
      };
    });
  }, [title]);

  return (
    <div className="inspiration-page-fluid">
      <div className="container" style={{maxWidth: '1400px', margin: '0 auto'}}>
        <nav className="detail-breadcrumb" style={{marginBottom: '40px', fontSize: '13px', color: '#888', textTransform: 'uppercase', display: 'flex', gap: '10px'}}>
          <Link to="/" style={{color: '#888', textDecoration: 'none'}}>Home</Link> / 
          <span style={{color: '#333', fontWeight: 600}}>Inspiration - {title}</span>
        </nav>

        <header className="inspiration-header">
           <h1>Inspiration By Area - {title}</h1>
        </header>

        <div className="inspiration-gallery">
          {projects.map((project) => (
            <InspirationStrip key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;
