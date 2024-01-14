import { useState } from 'react';
import './Splashscreen.css';

const RatingComponent = () => {
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

  return (
    <div style={{textAlign: 'center'}}>
      <div className='fade-in-text'>
        {[1, 2, 3, 4, 5].map((value) => (
          <span 
            key={value}
            onClick={() => handleRatingClick(value)}
            style={{ cursor: 'pointer', marginRight: '5px', textAlign: 'center', fontSize: '30px' }}
          >
            {value <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      {rating && <p className='fade-in-text-fast'>{rating} out of 5.<br/> 
      {rating >= 4 ? (
        <p style={paragraphStyleBig}> Amazing! Bohot Badhiya.<br/> Isse bhi accha khaana pakaunga aur khilaunga future mai.</p>
        ) : rating == 3 ? (
        <p style={paragraphStyleBig}> Oh. Average lga?<br/> Isse kaafi accha khaana pakaunga <br/>aur khilaunga future mai.</p>
        ) : (
        <p style={paragraphStyleBig}> Sacchi? <br/>I'll make it up to you. </p>
        )}
      </p>}
    </div>
  );
};

export default RatingComponent;
