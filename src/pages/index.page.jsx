import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div className="hero-vision">
      <div className="hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        
        <h1 className="hero-title">Jashanjot Gill</h1>
        <p className="hero-subtitle">Full Stack Software Engineer</p>
        
        <div className="glass-panel glass-light" style={{ 
          padding: '2rem', 
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Computer Science graduate with <strong style={{ color: 'var(--text-primary)' }}>2+ years</strong> of 
            hands-on experience <strong style={{ color: 'var(--text-primary)' }}>building scalable applications</strong>. Passionate about crafting 
            <strong style={{ color: 'var(--text-primary)' }}> beautiful, intuitive interfaces</strong> and 
            delivering polished user experiences like <strong style={{ color: 'var(--text-primary)' }}>this portfolio</strong>.
          </p>
        </div>
        
        <div className="hero-buttons">
          <Link to="/about-me" className="btn-vision btn-primary">
            <ion-icon name="briefcase-outline"></ion-icon>
            View Experience
          </Link>
          <Link to="/projects" className="btn-vision btn-glass">
            <ion-icon name="code-slash-outline"></ion-icon>
            Browse Projects
          </Link>
          <a href="mailto:gilljs5@myumanitoba.ca" className="btn-vision btn-glass">
            <ion-icon name="mail-outline"></ion-icon>
            Get in Touch
          </a>
        </div>
        
        <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="glass-panel glass-light" style={{ padding: '1rem 2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>4+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Co-op Positions</div>
          </div>
          <div className="glass-panel glass-light" style={{ padding: '1rem 2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>100K+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Lines of Code</div>
          </div>
          <div className="glass-panel glass-light" style={{ padding: '1rem 2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>95%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Bug-Free Deploys</div>
          </div>
        </div>
      </div>
    </div>
  );
}