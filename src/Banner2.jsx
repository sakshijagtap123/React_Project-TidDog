import React from 'react';
import './Banner2.css';

const Banner2 = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='contentt'>
            <div className='text-container'>
                <h1>Find the True Love of Your Dog's Life Today!</h1>
                <div className='button-container'>
                    <a className='download-button' href='#'>
                        <i className='fa-brands fa-apple'></i> Download
                    </a>
                    <a className='download-button' href='#'>
                        <i className='fa-brands fa-google-play'></i> Download
                    </a>
                </div>
            </div>
        </div>
    );
});

export default Banner2;
