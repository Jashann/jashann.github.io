import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../assets/helpers/WORK.data';
import BackgroundOrbs from '../components/backgroundOrbs.component';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('experience');
  
  const skills = {
    'Languages': ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C/C++', 'PHP'],
    'Frontend': ['React.js', 'Vue.js', 'Angular', 'HTML/CSS', 'Redux', 'TypeScript'],
    'Backend': ['Node.js', 'ASP.NET Core', 'Django', 'FastAPI', 'Laravel', 'Express.js'],
    'Cloud & DevOps': ['Azure', 'AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Azure DevOps'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server'],
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      <BackgroundOrbs />
      {/* Section Tabs */}
      <div className="section-vision">
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          <button 
            onClick={() => setActiveSection('experience')}
            className={`btn-vision ${activeSection === 'experience' ? 'btn-primary' : 'btn-glass'}`}
          >
            Work Experience
          </button>
          <button 
            onClick={() => setActiveSection('education')}
            className={`btn-vision ${activeSection === 'education' ? 'btn-primary' : 'btn-glass'}`}
          >
            Education
          </button>
          <button 
            onClick={() => setActiveSection('skills')}
            className={`btn-vision ${activeSection === 'skills' ? 'btn-primary' : 'btn-glass'}`}
          >
            Technical Skills
          </button>
        </div>

        {/* Work Experience Section */}
        {activeSection === 'experience' && (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Professional Experience</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              2+ years of hands-on software development through co-ops and internships
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {WORK_EXPERIENCE.map((work, index) => (
                <div key={index} className="card-vision glass-heavy" style={{ 
                  maxWidth: '900px', 
                  margin: '0 auto',
                  width: '100%',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {work.title}
                      </h3>
                      <p style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        {work.company}
                      </p>
                    </div>
                    <div className="glass-panel glass-light" style={{ 
                      padding: '0.5rem 1rem', 
                      borderRadius: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <ion-icon name="calendar-outline" style={{ color: 'var(--text-tertiary)' }}></ion-icon>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {work.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.95rem'
                  }}>
                    <ion-icon name="location-outline"></ion-icon>
                    {work.location}
                  </div>
                  
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {work.description.map((desc, i) => (
                      <li key={i} style={{ 
                        marginBottom: '0.75rem',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7'
                      }}>
                        <span style={{ 
                          position: 'absolute',
                          left: 0,
                          top: '0.5rem',
                          width: '6px',
                          height: '6px',
                          background: 'var(--accent-blue)',
                          borderRadius: '50%'
                        }}></span>
                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Technical Expertise</h2>
            
            <div className="grid-vision grid-3">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category} className="card-vision" style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}>
                  <div className="card-icon">
                    <ion-icon name={
                      category === 'Languages' ? 'code-slash-outline' :
                      category === 'Frontend' ? 'desktop-outline' :
                      category === 'Backend' ? 'server-outline' :
                      category === 'Cloud & DevOps' ? 'cloud-outline' :
                      'layers-outline'
                    }></ion-icon>
                  </div>
                  <h4 className="card-title">{category}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {items.map((skill, i) => (
                      <span key={i} className="glass-panel glass-light" style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--glass-medium)';
                        e.target.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '';
                        e.target.style.color = 'var(--text-secondary)';
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Education</h2>
            
            <div className="card-vision glass-heavy" style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}>
                <ion-icon name="school-outline"></ion-icon>
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>Bachelor of Science in Computer Science</h3>
              <p style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                University of Manitoba
              </p>
              
              <div className="glass-panel glass-light" style={{ 
                padding: '0.5rem 1rem', 
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                <ion-icon name="calendar-outline"></ion-icon>
                <span>Expected: August 2025</span>
              </div>
              
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Relevant Coursework:</strong>
                </p>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Operating Systems',
                    'Database Systems',
                    'Software Engineering I & II',
                    'Human-Computer Interaction',
                    'Distributed Computing',
                    'Discrete Mathematics',
                    'Linear Algebra',
                    'Calculus I & II',
                    'Statistics I & II'
                  ].map((course, i) => (
                    <div key={i} style={{ 
                      color: 'var(--text-tertiary)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ 
                        width: '4px',
                        height: '4px',
                        background: 'var(--accent-blue)',
                        borderRadius: '50%'
                      }}></span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div style={{ marginTop: '6rem' }}>
          <div className="card-vision glass-heavy" style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Let's Connect</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm actively seeking full-time software engineering opportunities starting August 2025
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a href="mailto:gilljs5@myumanitoba.ca" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                <ion-icon name="mail-outline"></ion-icon>
                gilljs5@myumanitoba.ca
              </a>
              
              <a href="tel:+16047722002" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                <ion-icon name="call-outline"></ion-icon>
                (604) 772-2002
              </a>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <a href="https://linkedin.com/in/jashan7" target="_blank" rel="noreferrer"
                 className="btn-vision btn-glass">
                <ion-icon name="logo-linkedin"></ion-icon>
                LinkedIn
              </a>
              <a href="https://github.com/Jashann" target="_blank" rel="noreferrer"
                 className="btn-vision btn-glass">
                <ion-icon name="logo-github"></ion-icon>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}