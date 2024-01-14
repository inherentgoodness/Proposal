import logo from './images/logo.png';
import './App.css';


function App() {
  const paragraphStyle = {
    fontSize: '16px',
    color: 'white',
    // Add other styles as needed
  };

  const boldTextStyle = {
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> */}
          <span style={boldTextStyle}>Miss. Nitisha Ahuja,</span> <br/>
          We appreciate the privilege of serving you.<br/>
          Kindly request you to truthfully fill the feedback questionnaire.<br/>
        {/* </p> */}
        <p style={paragraphStyle}>
          Use the buttons on the top of the screen to navigate
        </p>
      </header>
    </div>
  );
}

export default App;
