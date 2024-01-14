// SplashScreen.js
import React from 'react';
import logo from './images/logo.png';
import './Splashscreen.css';

const SplashScreen = () => {
    const paragraphStyle = {
        fontSize: '16px',
        color: 'white',
        // Add other styles as needed
      };
    
      const boldTextStyle = {
        fontWeight: 'bold',
      };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <span style={boldTextStyle}>Miss. Nitisha Ahuja,</span> <br/>
          <span>We appreciate the privilege of serving you.<br/></span>
          <span>Kindly request you to truthfully fill the feedback questionnaire.<br/></span>
        <p style={paragraphStyle}>
          Use the buttons on the top of the screen to navigate
        </p>
      </header>
      {/* <button>Next</button> */}
    </div>
  );
};

export default SplashScreen;
