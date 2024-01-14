// App.js
import React, { useState } from 'react';
import SplashScreen from './Splashscreen';
import Question1 from './Question1';
import Question2 from './Question2';
import Proposal from './Proposal';
import Navbar from './NavBar';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Navbar
        currentPage={currentPage}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
      <div>
        {currentPage === 1 && <SplashScreen />}
        {currentPage === 2 && <Question1 />}
        {currentPage === 3 && <Question2 />}
        {currentPage === 4 && <Proposal />}
      </div>
    </div>
  );
};

export default App;
