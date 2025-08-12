import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <nav className={`nav-vision ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">JG</Link>
      
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>
          Home
        </Link>
        <Link to="/about-me" className={isActive('/about-me')}>
          About Me
        </Link>
        <Link to="/projects" className={isActive('/projects')}>
          Projects
        </Link>
        <a href="https://github.com/Jashann" target="_blank" rel="noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          color: 'var(--text-secondary)',
          transition: 'color 0.2s ease'
        }}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/jashan7/" target="_blank" rel="noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          color: 'var(--text-secondary)',
          transition: 'color 0.2s ease'
        }}>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    </nav>
  );
}