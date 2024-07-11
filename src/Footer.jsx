import React from 'react';
import './Footer.css';

const Footer = React.forwardRef((props, ref) => {
    return(
        <>
        <div ref={ref} className="footer">
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                    
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:example@example.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <p>&copy; 2024 2021 TinDog</p>
            <p>Made by <a href='#'>Xyz</a></p>
        </div>

        </>
    )
});
export default Footer;