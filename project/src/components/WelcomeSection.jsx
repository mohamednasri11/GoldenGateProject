import React from 'react';
import teacherIcon from '../assets/icons/teacher.png'; // Adjust the path as necessary

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <div className="welcome-text">
          <h2>Welcome to Golden Gate</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="welcome-image">
          <div className="">
          </div>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet.</p>
          <div className="stats">
            <div><span>5+</span><br />Years Experience</div>
            <div><span>29+</span><br />Total Course</div>
            <div><span>5K+</span><br />Student Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection; 