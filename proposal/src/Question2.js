// Question2.js
import './Question2.css';
import Rating2 from './Rating2';

const Question2 = () => {
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
        padding: '15px',
        textAlign: 'center',
        // Add other styles  as needed
      };
    
      const boldTextStyle = {
        fontWeight: 'bold',
      };

  return (
    <div>
      <header className="App-header-Q2 overlayQ2">
        {/* <img src={logo} className="App-logo fade-in-text-fast" alt="logo" /> */}
          <span className="fade-in-text-fast" style={boldTextStyle}>Question. 2</span> 
          <div className="fade-in-text" style={paragraphStyleBig}>
             How many of the following things were you aware of?<br/>
             Varun AB : 
             <ul>
              <li>loves to spend time with you</li>
              <li>cherishes you</li>
              <li>will always be there for you no-matter what</li>
             </ul>
          </div>
        <Rating2/>
      </header>
      {/* <button>Next</button> */}
    </div>
  );
};

export default Question2;
