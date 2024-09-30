import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top-outer" >
      {isVisible && (
          <div className="scroll-to-top" onClick={scrollToTop}></div>
        // <button onClick={scrollToTop}>
        //   <span aria-hidden="true">&#8593;</span> 
        // </button>
      )}
    </div>
  );
};

export default ScrollToTop;