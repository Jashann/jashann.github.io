import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_ROUTES } from '../../assets/helpers/URL_ROUTES.routes';
import BackgroundOrbs from '../../components/backgroundOrbs.component';
import Image1 from "./../../assets/img/projects/budget-it/1.png";

export default function ProjectBudgetIt() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: 'person-add-outline',
      title: 'Smart Authentication',
      description: 'Secure user registration with email or bank account integration. Seamless sign-in experience with multi-factor authentication support.',
      color: 'var(--accent-blue)'
    },
    {
      icon: 'git-branch-outline',
      title: 'Flexible Data Input',
      description: 'Choose between automatic bank transaction import or manual entry. Full control over how you track your finances.',
      color: 'var(--accent-green)'
    },
    {
      icon: 'cloud-offline-outline',
      title: 'Private Cloud Storage',
      description: 'Your financial data stays completely private and secure. End-to-end encryption with isolated user spaces.',
      color: 'var(--accent-purple)'
    },
    {
      icon: 'pricetags-outline',
      title: 'Smart Categorization',
      description: 'Automatic transaction categorization: One-time, Recurring, Groceries, and more. AI-powered category suggestions.',
      color: 'var(--accent-orange)'
    },
    {
      icon: 'people-outline',
      title: 'Collaboration Features',
      description: 'Share financial data with trusted partners. Perfect for couples and shared household expenses.',
      badge: 'Experimental',
      color: 'var(--accent-red)'
    },
    {
      icon: 'bar-chart-outline',
      title: 'Advanced Visualization',
      description: 'Interactive graphs comparing monthly income & expenses. Visual breakdowns by category and trends.',
      color: 'var(--accent-blue)'
    },
    {
      icon: 'wallet-outline',
      title: 'Savings Tracker',
      description: 'Mark expenses as "savable" to track potential savings. Monthly savings reports and recommendations.',
      color: 'var(--accent-green)'
    },
    {
      icon: 'trending-up-outline',
      title: 'AI Predictions',
      description: 'Machine learning models predict future income and expenses based on your historical data.',
      badge: 'Experimental',
      color: 'var(--accent-purple)'
    },
    {
      icon: 'download-outline',
      title: 'Export Options',
      description: 'Export your data and visualizations to PDF or Excel. Share reports and maintain offline records.',
      color: 'var(--accent-orange)'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      <BackgroundOrbs />
      <div className="section-vision">
        {/* Project Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Link to="/projects" className="btn-vision btn-glass" style={{ marginBottom: '2rem' }}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Projects
          </Link>
          
          <div className="glass-panel glass-light" style={{ 
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '100px',
            marginBottom: '1rem'
          }}>
            <span style={{ color: 'var(--accent-orange)' }}>🚧 Work in Progress</span>
          </div>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Budget It</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            An intelligent personal finance management platform with bank integration and AI-powered insights
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="https://github.com/Jashann/budget-it" target="_blank" rel="noreferrer"
               className="btn-vision btn-glass">
              <ion-icon name="logo-github"></ion-icon>
              View Code
            </a>
            <button className="btn-vision btn-primary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              <ion-icon name="time-outline"></ion-icon>
              Coming Soon
            </button>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-panel glass-heavy" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto 4rem',
          padding: '2rem'
        }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Technology Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['React.js', 'Node.js', 'MongoDB', 'Express', 'Plaid API', 'Chart.js', 'Machine Learning', 'JWT Auth', 'AWS'].map((tech) => (
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

        {/* Architecture Diagram */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>System Architecture</h2>
          <div className="glass-panel glass-heavy" style={{ 
            padding: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>
              Click on the diagram to explore the detailed system architecture
            </p>
            <a href={Image1} target="_blank" rel="noreferrer" 
               style={{ display: 'block', cursor: 'zoom-in' }}>
              <img 
                src={Image1} 
                alt="System Architecture"
                style={{ 
                  width: '100%', 
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)'
                }}
              />
            </a>
          </div>
        </div>

        {/* Interactive Features */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Platform Features</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Feature List */}
            <div className="glass-panel glass-heavy" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Features Overview</h4>
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`glass-panel ${activeFeature === index ? 'glass-medium' : 'glass-light'}`}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    marginBottom: '0.75rem',
                    border: activeFeature === index ? '1px solid var(--accent-blue)' : '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    background: activeFeature === index ? 'var(--glass-medium)' : ''
                  }}
                >
                  <ion-icon name={feature.icon} style={{ 
                    fontSize: '1.5rem',
                    color: activeFeature === index ? feature.color : 'var(--text-tertiary)'
                  }}></ion-icon>
                  <span style={{ 
                    flex: 1,
                    color: activeFeature === index ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}>
                    {feature.title}
                  </span>
                  {feature.badge && (
                    <span className="glass-panel glass-light" style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      color: 'var(--accent-orange)'
                    }}>
                      {feature.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Feature Detail */}
            <div className="card-vision glass-heavy" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '3rem'
            }}>
              <div className="card-icon" style={{ 
                width: '80px',
                height: '80px',
                marginBottom: '2rem',
                background: features[activeFeature].color + '20'
              }}>
                <ion-icon name={features[activeFeature].icon} style={{ 
                  fontSize: '40px',
                  color: features[activeFeature].color
                }}></ion-icon>
              </div>
              
              <h3 style={{ marginBottom: '1rem' }}>{features[activeFeature].title}</h3>
              {features[activeFeature].badge && (
                <span className="glass-panel glass-light" style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  color: 'var(--accent-orange)'
                }}>
                  {features[activeFeature].badge}
                </span>
              )}
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {features[activeFeature].description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Status */}
        <div className="glass-panel glass-heavy" style={{ 
          maxWidth: '800px', 
          margin: '0 auto 4rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Development Status</h3>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
              <span style={{ color: 'var(--accent-green)' }}>65% Complete</span>
            </div>
            <div style={{ 
              height: '8px',
              background: 'var(--glass-light)',
              borderRadius: '100px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: '65%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-green))',
                borderRadius: '100px',
                transition: 'width 1s ease'
              }}></div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div className="glass-panel glass-light" style={{ padding: '1rem', borderRadius: '12px' }}>
              <ion-icon name="checkmark-circle" style={{ color: 'var(--accent-green)', fontSize: '1.5rem' }}></ion-icon>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Design Complete</p>
            </div>
            <div className="glass-panel glass-light" style={{ padding: '1rem', borderRadius: '12px' }}>
              <ion-icon name="sync-circle" style={{ color: 'var(--accent-orange)', fontSize: '1.5rem' }}></ion-icon>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>In Development</p>
            </div>
            <div className="glass-panel glass-light" style={{ padding: '1rem', borderRadius: '12px' }}>
              <ion-icon name="time-outline" style={{ color: 'var(--text-tertiary)', fontSize: '1.5rem' }}></ion-icon>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Testing Phase</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card-vision glass-heavy" style={{ 
          maxWidth: '700px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Want to Collaborate?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            This project is actively being developed. I'm open to ideas, suggestions, and collaboration opportunities!
          </p>
          <Link to="/about-me" className="btn-vision btn-primary">
            <ion-icon name="mail-outline"></ion-icon>
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  );
}