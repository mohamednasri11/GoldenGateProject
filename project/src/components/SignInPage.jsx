import React from 'react';
import './SignAuth.css';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
    const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-illustration">
        <img src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-5325.jpg?w=826&t=st=1717690000~exp=1717690600~hmac=6e2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2e2b2" alt="Illustration" />
        <div className="auth-logo"> <img src="https://i.ibb.co/6bQ6Q0k/school-logo.png" alt="logo" className="logo-img"/> Golden Gate</div>
      </div>
      <div className="auth-form-card">
        <h2>Sign in</h2>
        <p className="auth-sub">If you don't have an account register<br/>You can <span className="auth-link" onClick={() => navigate('/signup')}>Register here !</span></p>
        <form>
          <label>Email</label>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <label>Password</label>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Enter your Password" required />
          </div>
          <div className="auth-row">
            <label className="remember-me"><input type="checkbox" /> Remember me</label>
            <span className="forgot-link">Forgot Password ?</span>
          </div>
          <button className="auth-btn" type="submit" >Login</button>
        </form>
        <div className="auth-or">or continue with</div>
        <div className="auth-socials">
          <span className="social-icon"> <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook"/> </span>
          <span className="social-icon"> <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="google"/> </span>
          <span className="social-icon"> <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="apple"/> </span>
        </div>
      </div>
    </div>
  );
}

export default SignInPage; 