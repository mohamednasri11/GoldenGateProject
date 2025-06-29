import React from 'react';

function AppSection() {
  return (
    <section className="app-section">
      <h2>About Our Golden School App</h2>
      <div className="app-info">
        <div className="app-features">
          <div className="feature">
            <h4>Creative Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h4>Easy to Use</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h4>Best User Experience</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="app-image-placeholder"></div>
      </div>
      <div className="download-section">
        <p>DOWNLOAD APP NOW</p>
        <div className="download-buttons">
          <button className="google-play-btn">Google Play</button>
          <button className="app-store-btn">App Store</button>
        </div>
        <div className="app-stats">
          <div><span>4865</span><br />Download</div>
          <div><span>2300</span><br />Like</div>
          <div><span>1500</span><br />5 Star Rating</div>
        </div>
      </div>
    </section>
  );
}

export default AppSection; 