import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProLearnProgram: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="program-details-page">
      <div className="container">
        {/* Hero Section */}
        <div className="program-hero">
          <div className="hero-content">
            <h1>ProLearn</h1>
            <p className="hero-subtitle">Learn from the Subject Matter Experts</p>
            <p className="hero-description">
              Connect with subject matter experts and academics in cutting-edge fields. 
              <strong> Gain practical knowledge</strong> through hands-on demonstrations and real-world exercises.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="ProLearn - Learning from Experts" 
            />
          </div>
        </div>

        {/* Program Overview */}
        <div className="program-section">
          <h2>Program Overview</h2>
          <div className="program-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-number">Industry</div>
              <div className="stat-label">Certified</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="program-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Expert-Led Learning</h3>
              <p>Learn directly from industry professionals and academic experts in cutting-edge fields.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hands-on"></i>
              </div>
              <h3>Hands-on Demonstrations</h3>
              <p>Gain practical experience through real-world exercises and interactive demonstrations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Industry Connections</h3>
              <p>Connect with professionals and build your network in your chosen field.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Industry Certification</h3>
              <p>Earn recognized certifications that validate your expertise and skills.</p>
            </div>
          </div>
        </div>

        {/* Learning Approach */}
        <div className="program-section">
          <h2>Learning Approach</h2>
          <div className="learning-approach">
            <div className="approach-item">
              <h3>Expert Instruction</h3>
              <p>Learn from subject matter experts who bring real-world experience and cutting-edge knowledge to the classroom.</p>
            </div>
            <div className="approach-item">
              <h3>Practical Application</h3>
              <p>Apply your learning through hands-on projects, case studies, and real-world scenarios.</p>
            </div>
            <div className="approach-item">
              <h3>Collaborative Learning</h3>
              <p>Engage with peers and experts in interactive sessions, discussions, and group projects.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="program-cta">
          <h2>Ready to Learn from the Experts?</h2>
          <p>Join thousands of learners who are advancing their careers with expert-led education.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/apply')}>Apply Now</button>
            <button className="btn btn-secondary" onClick={() => window.location.href = '/contact'}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProLearnProgram;
