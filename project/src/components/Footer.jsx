import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Ignite Your Child's Potential Take the Leap with US</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address..." />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-main">
        <div className="footer-info">
          <h4>Golden Gate</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor vel lacus laoreet tristique. Nunc bibendum justo.</p>
          <div className="social-icons">
            <span>FB</span>
            <span>IG</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Course</li>
            <li>Our Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-app">
          <h4>App</h4>
          <div className="qr-placeholder"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 