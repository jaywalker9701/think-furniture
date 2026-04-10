import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Ergonomic Seating",
    excerpt: "Choosing the right chair is more than just about style. It's about health, productivity, and longevity at work.",
    image: "https://images.unsplash.com/photo-1581404476143-df313b0ce47f?auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2026",
    category: "Guide"
  },
  {
    id: 2,
    title: "Creating the Perfect Home Office: 5 Essential Tips",
    excerpt: "Transformation of your home workspace into a professional hub with these simple yet effective design strategies.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    date: "April 05, 2026",
    category: "Interior Design"
  },
  {
    id: 3,
    title: "The Benefits of Standing Desks in the Modern Workplace",
    excerpt: "Discover how height-adjustable desks are revolutionizing the way we work and improving employee well-being.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    date: "March 28, 2026",
    category: "Wellness"
  },
  {
    id: 4,
    title: "Modern Office Design Trends for 2026",
    excerpt: "Explore the shift towards biophilic design, flexible zones, and high-tech collaborative spaces.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    date: "March 20, 2026",
    category: "Trends"
  },
  {
    id: 5,
    title: "How Lighting Affects Productivity in the Office",
    excerpt: "From natural light to smart LED systems, understand the science of illumination in the workplace.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2026",
    category: "Productivity"
  },
  {
    id: 6,
    title: "Minimalist Office Storage Solutions",
    excerpt: "Declutter your mind by decluttering your space. How to achieve a clean look with smart hidden storage.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2026",
    category: "Organization"
  },
  {
    id: 7,
    title: "Sustainable Furniture: Why It Matters for Your Business",
    excerpt: "The environmental and financial benefits of choosing long-lasting, eco-friendly office solutions.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    date: "March 02, 2026",
    category: "Sustainability"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, trends, and inspiration for the modern workspace.</p>
        </div>
      </div>

      <div className="container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button className="read-more-btn">Read Full Article</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
