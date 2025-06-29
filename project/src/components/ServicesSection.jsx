import React from 'react';
import teacherIcon from '../assets/icons/teacher.png'; // Adjust the path as necessary
import scoreIcon from '../assets/icons/score.png'; // Adjust the path as necessary
import certificateIcon from '../assets/icons/certicate.png'; // Adjust the path as necessary  
import elearningIcon from '../assets/icons/elearning.png'; // Adjust the path as necessary
function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Golden Gate offers services like</h2>
      <div className="services-cards">
        <div className="service-card">
          <div className="icon-placeholder">
            <img src={teacherIcon} alt="Child holding books" />

          </div>
          <h4>Teachers Profesional</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <div className="icon-placeholder pinky">
            <img src={elearningIcon} alt="Child holding books" />

          </div>
          <h4>Online Course</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <div className="icon-placeholder">
            <img src={certificateIcon} alt="Child holding books" />
          </div>
          <h4>Certificate Course</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <div className="icon-placeholder pinky" 
          >
            <img src={scoreIcon} alt="Child holding books" />
          </div>
          <h4>Better Value</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <button className="read-more-btn">Read More</button>
    </section>
  );
}

export default ServicesSection; 