// SplashScreen.js
import logo from './images/logo.png';
import './Splashscreen.css';

const SplashScreen = () => {
    const paragraphStyle = {
        fontSize: '10px',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        // Add other styles as needed
      };

      const paragraphStyleBig = {
        fontSize: '15px',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        // Add other styles  as needed
      };
    
      const boldTextStyle = {
        fontWeight: 'bold',
      };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo fade-in-text-fast" alt="logo" />
          <span className="fade-in-text" style={boldTextStyle}>Miss. Nitisha Ahuja,</span> 
          <span className="fade-in-text-slow" style={paragraphStyleBig}>We are truly grateful for the privilege of serving you.<br/>
          Kindly request you to truthfully fill the feedback questionnaire.</span>
        <p className="fade-in-text-slow" style={paragraphStyle}>
          Use the buttons on the top of the screen to navigate
        </p>
      </header>
      {/* <button>Next</button> */}
    </div>
  );
};

export default SplashScreen;
