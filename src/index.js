import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './Banner.jsx';
import Review from './Review.jsx';
import Prising from './Prising.jsx';
import Banner2 from './Banner2.jsx';
import Footer from './Footer.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
const footerRef = createRef();
const prisingRef = createRef();
const banner2Ref = createRef();


root.render(
  <React.StrictMode>
    <App footerRef={footerRef} prisingRef={prisingRef} banner2Ref={banner2Ref} />
    <Banner />
    <Review />
    <Prising ref={prisingRef}/>
    <Banner2 ref={banner2Ref}/>
    <Footer ref={footerRef} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
