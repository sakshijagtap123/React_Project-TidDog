import React from 'react';
import './App.css';



function App({ footerRef ,prisingRef ,banner2Ref }) {
  const scrollToFooter = (event) => {
    event.preventDefault();
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPrising = (event) => {
    event.preventDefault();
    if (prisingRef.current) {
      prisingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToBanner2 = (event) => {
    event.preventDefault();
    if (banner2Ref.current) {
      banner2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='banner'>
      <nav className='navbar'>
        <a href='#' className='bname'>TinDog</a>
        <a href='#' onClick={scrollToFooter} className='bname1'>Contact</a>
        <a href='#' onClick={scrollToPrising} className='bname2'>Pricing</a>
        <a href='#' onClick={scrollToBanner2} className='bname3'>Download</a>
      </nav>
      <div className='content'>
        <div className='text-container'>
          <h1>Meet new and <br/>interesting <br/>dogs nearby.</h1>
          <div className='button-container'>
          <a className='download-button' href='#'>
              <i className='fa-brands fa-apple'></i> Download
            </a>
            <a className='download-button' href='#'><i class="fa-brands fa-google-play"></i>Download</a>
          </div>
        </div>
        <div className='image-container'>
          <img src='https://rosajen27.github.io/tindog/images/iphone6.png' alt='Dog' />
        </div>
      </div>
      
    </div>
  
  );
}

export default App;
