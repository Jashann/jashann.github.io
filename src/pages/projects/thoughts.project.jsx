import React from 'react';
import { Link } from 'react-router-dom';
import { URL_ROUTES } from '../../assets/helpers/URL_ROUTES.routes';
import Image1 from "./../../assets/img/projects/thoughts-sharing/1.png";
import Image2 from "./../../assets/img/projects/thoughts-sharing/2.png";
import Image3 from "./../../assets/img/projects/thoughts-sharing/3.png";

export default function ProjectThoughts() {
  const features = [
    {
      icon: 'shield-checkmark-outline',
      title: 'Authentication System',
      description: 'Django-powered backend with secure user registration and authentication. Real-time username availability checking with JavaScript frontend integration.',
      image: Image1
    },
    {
      icon: 'create-outline',
      title: 'Rich Content Creation',
      description: 'HTML rich text editor for dynamic content creation. Images stored in AWS S3, with all article data persisted in SQL database.',
      image: Image2
    },
    {
      icon: 'person-circle-outline',
      title: 'Personalized Dashboard',
      description: 'Custom user dashboards showing join date, created articles, comments, and favorites. Public profiles for community interaction.',
      image: Image3
    },
    {
      icon: 'settings-outline',
      title: 'Full CRUD Operations',
      description: 'Complete control over content with edit capabilities for profiles, articles, and comments through intuitive interface.'
    },
    {
      icon: 'lock-closed-outline',
      title: 'Enterprise Security',
      description: 'Confidential information protection with secure data handling. Production environment with restricted access controls.'
    },
    {
      icon: 'bug-outline',
      title: 'Robust & Tested',
      description: 'Comprehensive bug fixes and testing. Protection against duplicate accounts and resource abuse.'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="section-vision">
        {/* Project Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Link to="/projects" className="btn-vision btn-glass" style={{ marginBottom: '2rem' }}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Projects
          </Link>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Thoughts Sharing Platform</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            A full-stack social platform for sharing articles and ideas
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="https://github.com/Jashann/Django-Thoughts-Sharing" target="_blank" rel="noreferrer"
               className="btn-vision btn-glass">
              <ion-icon name="logo-github"></ion-icon>
              View Code
            </a>
            <a href="#" className="btn-vision btn-primary">
              <ion-icon name="open-outline"></ion-icon>
              Live Demo
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-panel glass-heavy" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto 3rem',
          padding: '2rem'
        }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Technology Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['Django', 'Python', 'JavaScript', 'SQL', 'AWS S3', 'HTML/CSS', 'Authentication'].map((tech) => (
              <span key={tech} className="glass-panel glass-light" style={{
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                color: 'var(--text-secondary)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Features</h2>
          
          <div className="grid-vision grid-2">
            {features.map((feature, index) => (
              <div key={index} className="card-vision glass-heavy" style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
              }}>
                <div className="card-icon">
                  <ion-icon name={feature.icon}></ion-icon>
                </div>
                <h4 className="card-title">{feature.title}</h4>
                <p className="card-content">{feature.description}</p>
                
                {feature.image && (
                  <a href={feature.image} target="_blank" rel="noreferrer" 
                     style={{ display: 'block', marginTop: '1.5rem', cursor: 'zoom-in' }}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      style={{ 
                        width: '100%', 
                        borderRadius: '12px',
                        border: '1px solid var(--glass-border)'
                      }}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Screenshots</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[Image1, Image2, Image3].map((img, index) => (
              <a key={index} href={img} target="_blank" rel="noreferrer"
                 className="glass-panel glass-heavy" 
                 style={{ 
                   padding: '1rem',
                   cursor: 'zoom-in',
                   transition: 'transform 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src={img} 
                  alt={`Screenshot ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    borderRadius: '8px'
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card-vision glass-heavy" style={{ 
          maxWidth: '700px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Interested in Collaborating?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Have ideas for new projects or questions about this one? I'd love to hear from you!
          </p>
          <Link to="/about-me" className="btn-vision btn-primary">
            <ion-icon name="mail-outline"></ion-icon>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}