import React from 'react';
import './ARVRTechnologyProgram.css';

const ARVRTechnologyProgram: React.FC = () => {
  return (
    <div className="arvr-program-page">
      {/* Hero Section */}
      <section className="arvr-hero-section">
        {/* Background Image */}
        <div 
          className="arvr-hero-bg"
          style={{ backgroundImage: `url('/images/hero-vr.jpg')` }}
        />
        
        {/* Animated Background Elements */}
        <div className="arvr-hero-animations">
          <div className="animate-pulse"></div>
          <div className="animate-ping"></div>
          <div className="animate-bounce"></div>
          <div className="animate-pulse-2"></div>
        </div>

        <div className="arvr-hero-content">
          <div className="arvr-hero-grid">
            {/* Content */}
            <div className="arvr-hero-text">
              <div>
                <h1 className="arvr-hero-title">
                  <span className="arvr-hero-title-gradient">
                    EU ACC MASTER PROGRAM
                  </span>
                  <br />
                  <span className="arvr-hero-title-white">
                    AR VR TECHNOLOGY
                  </span>
                </h1>

                <div>
                  <p className="arvr-hero-subtitle">
                    Starts from Oct 2025
                  </p>
                  <p className="arvr-hero-mode">
                    ( ONLINE & OFFLINE )
                  </p>
                </div>

                <div className="arvr-hero-quote">
                  <p className="arvr-hero-quote-text">
                    "Learn from experts of Google, IITs and top industrial"
                  </p>
                </div>

                <button 
                  className="arvr-hero-button"
                  onClick={() => window.location.href = '/apply'}
                >
                  JOIN US TODAY!
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="arvr-hero-stats">
              <div className="arvr-stats-grid">
                <div className="arvr-stat-item">
                  <div className="arvr-stat-number">25+</div>
                  <div className="arvr-stat-label">International and National experts</div>
                </div>
                <div className="arvr-stat-item">
                  <div className="arvr-stat-number">100+</div>
                  <div className="arvr-stat-label">Industrial partners</div>
                </div>
                <div className="arvr-stat-item">
                  <div className="arvr-stat-number">10k+</div>
                  <div className="arvr-stat-label">Students trained</div>
                </div>
                <div className="arvr-stat-item">
                  <div className="arvr-stat-number">10+</div>
                  <div className="arvr-stat-label">Hands on Projects</div>
                </div>
                <div className="arvr-stat-item arvr-stat-item-wide">
                  <div className="arvr-stat-number">35+</div>
                  <div className="arvr-stat-label">Practical use cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="arvr-overview-section">
        <div className="arvr-overview-bg">
          <div className="bg-blur-1"></div>
          <div className="bg-blur-2"></div>
        </div>

        <div className="arvr-overview-content">
          <div className="arvr-overview-header">
            <div className="arvr-overview-title-box">
              <h2 className="arvr-overview-title">Program Overview</h2>
            </div>
            
            <p className="arvr-overview-description">
              The Master program in AR/VR is a comprehensive program designed to equip students with the skills and knowledge necessary to design, develop, and deploy cutting-edge applications for AR/VR platforms. This program combines theoretical foundations with practical skills, ensuring students are well-prepared for the industry.
            </p>
          </div>

          <div className="arvr-overview-grid">
            {/* Image */}
            <div className="arvr-overview-image">
              <div className="arvr-overview-img-container">
                <img 
                  src="/images/program-overview.jpg" 
                  alt="AR/VR Technology" 
                  className="arvr-overview-img"
                />
                <div className="arvr-overview-img-overlay" />
              </div>
            </div>

            {/* Course Structure */}
            <div className="arvr-overview-details">
              <div className="arvr-overview-structure">
                <h3 className="arvr-structure-title">Course Structure</h3>
              </div>

              <div className="arvr-structure-list">
                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">Duration:</span>
                    <span className="arvr-structure-value">12 months</span>
                  </div>
                </div>

                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">Language:</span>
                    <span className="arvr-structure-value">English</span>
                  </div>
                </div>

                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">In-classroom training:</span>
                    <span className="arvr-structure-value">( online & offline )</span>
                  </div>
                </div>

                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">Hands-on practice:</span>
                    <span className="arvr-structure-value">in essential skills like lighting, rendering, and optimization</span>
                  </div>
                </div>

                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">Opportunities:</span>
                    <span className="arvr-structure-value">to build a professional portfolio through project-based learning</span>
                  </div>
                </div>

                <div className="arvr-structure-item">
                  <div className="arvr-structure-bullet" />
                  <div>
                    <span className="arvr-structure-text">Internship opportunities:</span>
                    <span className="arvr-structure-value">for real-world exposure and networking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics and Careers Section */}
      <section className="arvr-topics-section">
        <div className="arvr-topics-grid">
          {/* Key Topics */}
          <div className="arvr-topic-card">
            <div className="arvr-topic-header">
              <div className="arvr-topic-title-box">
                <h3 className="arvr-topic-title">KEY TOPICS COVERED</h3>
              </div>
            </div>
            <div className="arvr-topic-content">
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">AR/VR Development: Learn to design and develop immersive AR/VR experiences</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">3D Modeling and Animation: Understand industry-standard 3D software and techniques</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">User Experience Design: Learn to create intuitive and engaging user experiences</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Programming: Gain skills in programming languages and game engines relevant to AR/VR</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Project Management: Understand how to plan and execute AR/VR projects</p>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="arvr-topic-card">
            <div className="arvr-topic-header">
              <div className="arvr-topic-title-box">
                <h3 className="arvr-topic-title">CAREER OPPORTUNITIES</h3>
              </div>
            </div>
            <div className="arvr-topic-content">
              <p className="arvr-topic-description">
                Graduates of this program can pursue various career paths, including:
              </p>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Unreal Developer: Create immersive experiences using Unreal Engine</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">XR Developer: Develop cross-platform experiences integrating VR, AR, and MR</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">3D Modeler: Design assets for virtual environments</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">UX Designer: Create intuitive and engaging user experiences</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Simulation Engineer: Design simulations for training and other applications</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="arvr-topic-card">
            <div className="arvr-topic-header">
              <div className="arvr-topic-title-box">
                <h3 className="arvr-topic-title">SKILLS YOU WILL GAIN</h3>
              </div>
            </div>
            <div className="arvr-topic-content">
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Proficiency in industry-standard 3D software and UI navigation</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Ability to design and develop immersive AR/VR experiences</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Understanding of AR/VR hardware and physical structure</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Knowledge of programming languages and game engines relevant to AR/VR</p>
              </div>
              <div className="arvr-topic-item">
                <div className="arvr-topic-bullet" />
                <p className="arvr-topic-text">Skills in project management and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Aways Section */}
      <section className="arvr-takeaways-section">
        <div className="arvr-takeaways-header">
          <h2 className="arvr-takeaways-title">TAKE AWAYS</h2>
        </div>

        <div className="arvr-takeaways-grid">
          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">EU Acc course completion certificate</h3>
            <p className="arvr-takeaway-description">Get certified upon successful completion</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <polygon points="10,8 16,12 10,16 10,8"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">Live classes, flexible hours</h3>
            <p className="arvr-takeaway-description">Recordings of classes provided</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">JOB ASSISTANCE</h3>
            <p className="arvr-takeaway-description">Resume building & Mentoring support</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">Industrial exposure and Internships</h3>
            <p className="arvr-takeaway-description">Real-world experience opportunities</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">Offline hands on exposure availability</h3>
            <p className="arvr-takeaway-description">Practical learning experiences</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">Hands on experiences on all aspects</h3>
            <p className="arvr-takeaway-description">Comprehensive practical training</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">Project and publication assistance</h3>
            <p className="arvr-takeaway-description">Support for your research and projects</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">24/7 accessible study material</h3>
            <p className="arvr-takeaway-description">Learn at your own pace anytime</p>
          </div>

          <div className="arvr-takeaway-card">
            <div className="arvr-takeaway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14s1 2 3 2 3-2 3-2"/>
                <path d="M3 10s1 2 3 2 3-2 3-2"/>
                <path d="M3 6s1 2 3 2 3-2 3-2"/>
                <path d="M21 14s-1 2-3 2-3-2-3-2"/>
                <path d="M21 10s-1 2-3 2-3-2-3-2"/>
                <path d="M21 6s-1 2-3 2-3-2-3-2"/>
                <path d="M12 2v20"/>
              </svg>
            </div>
            <h3 className="arvr-takeaway-title">VR AR Technology Access</h3>
            <p className="arvr-takeaway-description">Hands-on with latest equipment</p>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="arvr-syllabus-section">
        <div className="arvr-syllabus-header">
          <div className="arvr-syllabus-title-box">
            <h2 className="arvr-syllabus-title">SYLLABUS OVERVIEW</h2>
          </div>
        </div>

        <div className="arvr-syllabus-grid">
          {/* First Semester */}
          <div className="arvr-semester-card">
            <div className="arvr-semester-header">
              <div className="arvr-semester-title-box">
                <h3 className="arvr-semester-title">FIRST SEMESTER</h3>
              </div>
            </div>
            <div className="arvr-semester-content">
              <div className="arvr-semester-subtitle">
                <h4 className="arvr-semester-subtitle-text">Semester 1: Foundations of AR/VR</h4>
              </div>
              
              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Introduction to AR/VR (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Overview of AR/VR technologies</li>
                  <li className="arvr-course-list-item">History and evolution of AR/VR</li>
                  <li className="arvr-course-list-item">Current trends and applications</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">3D Modeling and Animation (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Fundamentals of 3D modeling</li>
                  <li className="arvr-course-list-item">Industry-standard 3D software (e.g., Blender)</li>
                  <li className="arvr-course-list-item">Animation techniques and principles</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Programming for AR/VR (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Introduction to programming languages (e.g., C#, Java, Python)</li>
                  <li className="arvr-course-list-item">Game engines (e.g., Unity, Unreal Engine)</li>
                  <li className="arvr-course-list-item">AR/VR development frameworks and tools</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">User Experience Design (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Principles of UX design</li>
                  <li className="arvr-course-list-item">Designing intuitive and engaging user experiences</li>
                  <li className="arvr-course-list-item">Human-centered design approach</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">AR/VR Development Fundamentals (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Designing and developing immersive AR/VR experiences</li>
                  <li className="arvr-course-list-item">Understanding AR/VR hardware and physical structure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Semester */}
          <div className="arvr-semester-card">
            <div className="arvr-semester-header">
              <div className="arvr-semester-title-box">
                <h3 className="arvr-semester-title">SECOND SEMESTER</h3>
              </div>
            </div>
            <div className="arvr-semester-content">
              <div className="arvr-semester-subtitle">
                <h4 className="arvr-semester-subtitle-text">Semester 2: Advanced AR/VR Development</h4>
              </div>
              
              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Advanced AR/VR Development (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Advanced techniques for AR/VR development</li>
                  <li className="arvr-course-list-item">Integration with AI, ML, and other technologies</li>
                  <li className="arvr-course-list-item">Optimization and performance enhancement</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Project Management and Teamwork (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Principles of project management</li>
                  <li className="arvr-course-list-item">Agile development methodologies</li>
                  <li className="arvr-course-list-item">Teamwork and collaboration in AR/VR development</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Specialized AR/VR Topics (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Advanced 3D modeling and animation techniques</li>
                  <li className="arvr-course-list-item">AR/VR for specific industries (e.g., healthcare, education)</li>
                  <li className="arvr-course-list-item">Emerging trends and technologies in AR/VR</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Capstone Project (8 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Development of a comprehensive AR/VR project</li>
                  <li className="arvr-course-list-item">Application of skills and knowledge gained throughout the program</li>
                  <li className="arvr-course-list-item">Portfolio development and presentation</li>
                </ul>
              </div>

              <div className="arvr-course-item">
                <h5 className="arvr-course-title">Internship and Industry Exposure (4 credits)</h5>
                <ul className="arvr-course-list">
                  <li className="arvr-course-list-item">Real-world experience in AR/VR development</li>
                  <li className="arvr-course-list-item">Networking opportunities with industry professionals</li>
                  <li className="arvr-course-list-item">Application of theoretical knowledge in practical settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="arvr-experts-section">
        <div className="arvr-experts-header">
          <h2 className="arvr-experts-title">EXPERTS</h2>
        </div>

        <div className="arvr-experts-grid">
          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/d15df5c1-5f69-46f4-9e82-334523be6517.png" 
                alt="Mr Manas Khare"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr Manas Khare</div>
            </div>
            <h3 className="arvr-expert-title">AR/VR Engineer</h3>
            <p className="arvr-expert-company">Google Inc</p>
            <p className="arvr-expert-description">
              Highly skilled AR/VR hardware expert with extensive experience in designing and developing immersive reality experiences. Proficient in working with various VR headsets, including Oculus, HTC Vive, and Meta Quest, with expertise in 3D modeling, spatial audio, and advanced video encoding and streaming algorithms. Strong background in integrating hardware and software components to create seamless AR/VR systems.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/8890a0f9-4c33-4839-91ce-b23e55933fb6.png" 
                alt="Mr Sridhar"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr Sridhar</div>
            </div>
            <h3 className="arvr-expert-title">Founder & CEO, XR developer</h3>
            <p className="arvr-expert-company">Intrino Robotics & Technologies Pvt Ltd</p>
            <p className="arvr-expert-description">
              Experienced XR Developer with 5+ years of expertise in designing and developing immersive augmented reality (AR) and virtual reality (VR) experiences. Proficient in Unity, C#, and 3D modeling, with a strong portfolio of projects showcasing innovative XR solutions. Skilled in optimizing XR applications for various platforms, including mobile, PC, and head-mounted displays.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/6a288f03-bff6-40a7-8ab0-2d80bfe3a971.png" 
                alt="Mr. Stalin Mani"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr. Stalin Mani</div>
            </div>
            <h3 className="arvr-expert-title">Principal XR Architect</h3>
            <p className="arvr-expert-company">Intrino Technologies</p>
            <p className="arvr-expert-description">
              Award-winning 3D animation and visual effects professional with 14 years of experience. Recognized as an International Animation Award winner in 2009 and Unreal Engine Authorized Instructor. Proven track record of working with top institutions like MAAC, ZICA, Arena Animation, RAMP Animations, and iSquare Media. Delivers high-quality projects that captivate global audiences.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/bb1938ab-192a-4081-90f0-72225a5ab773.png" 
                alt="Mr. Premkumar"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr. Premkumar</div>
            </div>
            <h3 className="arvr-expert-title">Senior XR Developer</h3>
            <p className="arvr-expert-company">Intrino Technologies</p>
            <p className="arvr-expert-description">
              With over 10 years of experience in AR & VR development, deployment, and strategy implementation, this expert has a proven track record of delivering innovative solutions. As a former Senior Specialist AR VR MR at Ford, they have leveraged their expertise to drive business growth and enhance customer experiences through immersive technologies. Their extensive background in AR & VR enables them to develop and implement effective strategies that meet the needs of diverse industries and applications.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/a6f7740d-b36a-4bbd-98bc-6952c2ec573e.png" 
                alt="Dr Meena Kannan"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Dr Meena Kannan</div>
            </div>
            <h3 className="arvr-expert-title">AR/VR Developer, Ass Prof</h3>
            <p className="arvr-expert-company">KCT</p>
            <p className="arvr-expert-description">
              With 7 years of academic experience in AR/VR development, I've honed my skills in creating immersive experiences using Unity, Unreal Engine, and other cutting-edge tools. My expertise spans AR/VR application development, 3D modeling, and interactive storytelling. I'm passionate about pushing the boundaries of what's possible in AR/VR.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/ce1ac961-286e-4b8c-8249-cc59f008997d.png" 
                alt="Mr. Balaji"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr. Balaji</div>
            </div>
            <h3 className="arvr-expert-title">XR Developer</h3>
            <p className="arvr-expert-company">Intrino Technologies</p>
            <p className="arvr-expert-description">
              As an AR Specialist & Product Builder with 6 years of experience, I excel in spatial modeling and integration, crafting innovative AR solutions that transform user experiences. My expertise spans AR development, 3D modeling, and seamless integration of digital and physical worlds. I'm dedicated to creating immersive and interactive experiences that drive engagement and growth.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/253ff3f1-c6ce-464f-bff3-98922aa950b3.png" 
                alt="Mr Alekh Johari"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Mr Alekh Johari</div>
            </div>
            <h3 className="arvr-expert-title">FOUNDER</h3>
            <p className="arvr-expert-company">ANEMOI SOLUTION</p>
            <p className="arvr-expert-description">
              He has been at the forefront of Metaverse/Virtual Reality and Augmented Reality innovation in the broadcast industry since 2007. With over 15 years of experience, they've developed cutting-edge solutions that push the boundaries of storytelling and audience engagement. Their expertise has shaped the future of immersive media, driving creative and technical excellence.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/a3e46b7b-b8ab-4809-96e8-aeb66e0604a5.png" 
                alt="Dr Veera Talukdar"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Dr Veera Talukdar</div>
            </div>
            <h3 className="arvr-expert-title">AI Solutions Architect for AR/VR</h3>
            <p className="arvr-expert-company">PDF, IIT Bombay</p>
            <p className="arvr-expert-description">
              As an AI Solutions Architect for AR/VR, she has designed and implemented cutting-edge AI-powered solutions that transform immersive experiences. With expertise in AR/VR development and AI/ML integration, they craft innovative applications that revolutionize industries. Their work enables seamless interactions between humans and technology, pushing the boundaries of what's possible in augmented and virtual reality.
            </p>
          </div>

          <div className="arvr-expert-card">
            <div className="arvr-expert-header">
              <img 
                src="/images/508731e2-626a-4add-a79a-b72c80dc88c1.png" 
                alt="Dr Mangal Raj"
                className="arvr-expert-image"
              />
              <div className="arvr-expert-name-tag">Dr Mangal Raj</div>
            </div>
            <h3 className="arvr-expert-title">Expert Extended reality</h3>
            <p className="arvr-expert-company">PhD from IIIT</p>
            <p className="arvr-expert-description">
              I specialize in harnessing the power of Extended Reality (XR) to revolutionize industries and experiences. With expertise in AR, VR, and MR technologies, I design and develop innovative solutions that blur the lines between physical and digital worlds. My work unlocks new possibilities for engagement, education, and entertainment, shaping the future of human interaction through immersive XR experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Banner Section */}
      <section className="arvr-pricing-section">
        <div className="arvr-pricing-banner">
          <div className="arvr-pricing-header">
            <div className="arvr-institute-banner">INSTITUTE OF GLOBAL TECHNOLOGY</div>
            <div className="arvr-organizers">
              <p className="arvr-organized-by">Organised by</p>
              <div className="arvr-organizer-names">
                <div>INSTITUTE OF GLOBAL TECHNOLOGY</div>
                <div>AND INTRINO ROBOTICS & TECHNOLOGIES PVT LTD</div>
              </div>
            </div>
          </div>
          
          <div className="arvr-pricing-content">
            <h3 className="arvr-admission-fee-title">Admission Fee</h3>
            <div className="arvr-pricing-display">
              <div className="arvr-original-price">Rs 1,24,999</div>
              <div className="arvr-discounted-price">@ Rs 89,999</div>
              <div className="arvr-emi-note">(EMI options available)</div>
              <div className="arvr-early-bird">As early bird offer Till August 15th 2025</div>
            </div>
          </div>
          
          <button 
            className="arvr-join-now-button"
            onClick={() => window.location.href = '/apply'}
          >
            Join Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default ARVRTechnologyProgram;
