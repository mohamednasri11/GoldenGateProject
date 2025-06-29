import React from 'react';
import './SignAuth.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-illustration">
        <img src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-5325.jpg?w=826&t=st=1717690000~exp=1717690600~hmac=6e2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2" alt="Illustration" />
        <div className="auth-logo"> <img src="https://i.ibb.co/6bQ6Q0k/school-logo.png" alt="logo" className="logo-img"/> Golden Gate</div>
      </div>
      <div className="auth-form-card">
        <h2>Sign up</h2>
        <p className="auth-sub">If you already have an account register<br/>You can <span className="auth-link" onClick={() => navigate('/signin')}>Login here !</span></p>
        <form>
          <label>Email</label>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <label>Username</label>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Enter your User name" required />
          </div>
          <label>Password</label>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Enter your Password" required />
          </div>
          <label>Confirm Password</label>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Confirm your Password" required />
          </div>
          <label>Choose your role</label>
          <div className="input-group">
            <select>
              <option>Parent</option>
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
          <button className="auth-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage; 