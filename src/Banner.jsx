import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className='b2 row text-center'>
            <div className="feature-box col-lg-3 col-md-12 col-sm-12">
                <i className="fa-solid fa-circle-check fa-3x" style={{color: "#ff6f61"}}></i>
                <h3>Easy to use.</h3>
                <p>So easy to use, even your dog could do it.</p>
            </div>
            <div className="feature-box col-lg-3 col-md-12 col-sm-12">
                <i className="fa-solid fa-bullseye fa-3x" style={{color: "#ff6f61"}}></i>
                <h3>Elite Clientele</h3>
                <p>We have all the dogs, the greatest dogs.</p>
            </div>
            <div className="feature-box col-lg-3 col-md-12 col-sm-12">
                <i className="fa-solid fa-heart fa-3x" style={{color: "#ff6f61"}}></i>
                <h3>Guaranteed to work.</h3>
                <p>Find the love of your dog's life or your money back.</p>
            </div>
        </div>
    );
}

export default Banner;
