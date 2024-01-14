// Question1.js
import './Question1.css';
import RatingComponent from './Rating';

const Question1 = () => {


      const paragraphStyleBig = {
        fontSize: '15px',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        // Add other styles  as needed
      };
    
      const boldTextStyle = {
        fontWeight: 'bold',
      };

  return (
    <div>
      <header className="App-header-Q1 overlay">
        {/* <img src={logo} className="App-logo fade-in-text-fast" alt="logo" /> */}
          <span className="fade-in-text-fast" style={boldTextStyle}>Question. 1</span> 
          <span className="fade-in-text" style={paragraphStyleBig}>
            Varun AB would love to hear if you enjoyed the food. <br/>
            What did you think?
          </span>
        <RatingComponent/>
      </header>
      {/* <button>Next</button> */}
    </div>
  );
};

export default Question1;
