import React, { useState } from 'react';
import { CATEGORIES, PROJECTS } from '../assets/helpers/PROJECTS.data';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All', icon: 'apps-outline' },
    { value: 'group', label: 'Team', icon: 'people-outline' },
    { value: 'personal', label: 'Personal', icon: 'person-outline' },
    { value: 'web', label: 'Web', icon: 'globe-outline' },
    { value: 'data', label: 'Data', icon: 'analytics-outline' }
  ];

  let filteredProjects = PROJECTS;

  // Filter by search
  if (searchTerm) {
    filteredProjects = filteredProjects.filter(
      project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tools.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredProjects = filteredProjects.filter(project => {
      if (selectedCategory === 'group') return project.tags.includes(CATEGORIES.group);
      if (selectedCategory === 'personal') return project.tags.includes(CATEGORIES.personal);
      if (selectedCategory === 'web') return project.tags.includes(CATEGORIES.web);
      if (selectedCategory === 'data') return project.tags.includes(CATEGORIES.data);
      return true;
    });
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="section-vision">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Project Portfolio</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Showcasing innovation through practical applications
        </p>

        {/* Search and Filter */}
        <div className="glass-panel glass-heavy" style={{ 
          maxWidth: '900px', 
          margin: '0 auto 3rem',
          padding: '2rem'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <ion-icon name="search-outline" style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)',
                fontSize: '1.2rem'
              }}></ion-icon>
              <input
                type="text"
                placeholder="Search projects by name or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'var(--glass-medium)';
                  e.target.style.borderColor = 'var(--accent-blue)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'var(--glass-light)';
                  e.target.style.borderColor = 'var(--glass-border)';
                }}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`btn-vision ${selectedCategory === cat.value ? 'btn-primary' : 'btn-glass'}`}
                style={{ fontSize: '0.95rem' }}
              >
                <ion-icon name={cat.icon}></ion-icon>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-vision grid-3">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="card-vision glass-heavy" style={{
              animation: `fadeInUp 0.15s ease-out ${index * 0.015}s backwards`
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem' }}>
                  {project.category}
                </p>
              </div>
              
              {project.summary && (
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.95rem', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.summary}
                </p>
              )}
              
              {project.tools && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tools.split(',').slice(0, 5).map((tool, i) => (
                      <span key={i} className="glass-panel glass-light" style={{
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: 'var(--text-tertiary)'
                      }}>
                        {tool.trim()}
                      </span>
                    ))}
                    {project.tools.split(',').length > 5 && (
                      <span className="glass-panel glass-light" style={{
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: 'var(--text-tertiary)'
                      }}>
                        +{project.tools.split(',').length - 5}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--glass-border)'
              }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                     className="btn-vision btn-glass" 
                     style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
                    <ion-icon name="logo-github"></ion-icon>
                    Code
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer" 
                     className="btn-vision btn-primary" 
                     style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
                    <ion-icon name="open-outline"></ion-icon>
                    Demo
                  </a>
                )}
                {project.learnMore && (
                  <Link to={project.learnMore} 
                        className="btn-vision btn-glass" 
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
                    <ion-icon name="information-circle-outline"></ion-icon>
                    Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <div className="glass-panel glass-heavy" style={{ 
              display: 'inline-block',
              padding: '2rem 3rem',
              borderRadius: '16px'
            }}>
              <ion-icon name="search-outline" style={{ 
                fontSize: '3rem', 
                color: 'var(--text-tertiary)',
                marginBottom: '1rem'
              }}></ion-icon>
              <p style={{ color: 'var(--text-secondary)' }}>
                No projects found matching your criteria
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}