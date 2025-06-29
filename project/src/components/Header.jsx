import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
        </ul>
        <div className="logo" >Golden Gate</div>
        <button className="sign-in-btn" onClick={() => navigate('/signin')}>Sign In</button>
      </nav>
    </header>
  );
}

export default Header; 