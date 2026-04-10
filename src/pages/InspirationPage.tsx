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
  "1593642632823-8f785ba67e45", "1495932568733-289b4f971ba4", "1612845423696-24ea94df9da8",
  "1585408990117-64047aade5f3", "1503944686414-b1523ecdd1bc", "1516089304918-024503def8f9",
  "1582296568285-1bf86d63d893", "1519389953810-c511178c7eb4", "1578500494198-246f61203671",
  "1600570761376-7933f8cf4ea4", "1531835560662-8153b3ebbaae", "1487258359788-b21a57e3ebd0",
  "1573046755452-fddba2a6d4e2"
];

const companyNames = [
  "Nexus Tech HQ", "Global Finance Group", "Crescent Creative Studios", 
  "Elevate Enterprises", "Horizon Marketing Agency", "Aurora Innovations",
  "Vertex Solutions", "Pinnacle Consulting", "Lumiere Design Co."
];

// Helper to generate a deterministic number from a string
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const InspirationPage: React.FC<InspirationPageProps> = ({ title }) => {
  // Deterministically pick 5 unique images and captions based on page title
  const projects = React.useMemo(() => {
    const seed = hashString(title);
    return Array.from({ length: 5 }).map((_, i) => {
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
            <div key={project.id} className="inspiration-strip" style={{ marginBottom: '40px' }}>
              <img src={project.imgUrl} alt={project.caption} style={{ borderRadius: '4px' }} />
              <div className="strip-caption">
                 <p>{project.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;
