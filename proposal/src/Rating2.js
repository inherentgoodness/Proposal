import { useState } from 'react';
import './Splashscreen.css';

const Rating2
 = () => {
  const [rating, setRating] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
    // You can also send the rating value to a server or perform other actions here
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
    <div style={{textAlign: 'center'}}>
      <div className='fade-in-text'>
        {[1, 2, 3].map((value) => (
          <span 
            key={value}
            onClick={() => handleRatingClick(value)}
            style={{ cursor: 'pointer', marginRight: '5px', textAlign: 'center', fontSize: '30px' }}
          >
            {value <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      {rating && <p className='fade-in-text-fast' >Well now you do..<br/> 
      <span className="fade-in-text" style={boldTextStyle}>Miss. Nitisha Ahuja,</span> <br/>
      <span className="fade-in-text-slow" style={boldTextStyle}>I have one final question </span> 
      </p>}
    </div>
  );
};

export default Rating2
;
