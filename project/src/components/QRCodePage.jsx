import React from 'react';
import './SignAuth.css';

function QRCodePage() {
  return (
    <div className="qr-bg">
      <div className="qr-illustration qr-illustration-left">
        <img src="https://img.freepik.com/free-vector/scooter-delivery-concept-illustration_114360-1306.jpg?w=740" alt="left" />
      </div>
      <div className="qr-card">
        <div className="qr-logo"><img src="https://i.ibb.co/6bQ6Q0k/school-logo.png" alt="logo" className="logo-img"/> Golden Gate</div>
        <div className="qr-text">
          <div>Dear Parent ,</div>
          <h2>Please scan !</h2>
          <div className="qr-desc">the QR code below to download our App !</div>
        </div>
        <img className="qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://goldengate.com/app" alt="QR Code" />
      </div>
      <div className="qr-illustration qr-illustration-right">
        <img src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-5325.jpg?w=826" alt="right" />
      </div>
    </div>
  );
}

export default QRCodePage; 