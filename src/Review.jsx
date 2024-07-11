import React, { useState, useEffect } from 'react';
import './Review.css';

const reviews = [
    {
        id: 1,
        name: "Beverly, Illinois",
        img: "https://rosajen27.github.io/tindog/images/dog-img.jpg",
        text: "My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think."
    },
    {
        id: 2,
        name: "John, New York",
        img: "https://rosajen27.github.io/tindog/images/lady-img.jpg",
        text: "TinDog is amazing! My dog is happier than ever."
    },
    
    
];

const Review = () => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        Display(currentValue);
    }, [currentValue]);

    const Display = (index) => {
        const review = reviews[index];
        document.querySelector('.testimonial-text p').textContent = review.text;
        document.querySelector('.testimonial-image').src = review.img;
        document.querySelector('.testimonial-author p').textContent = review.name;
    };

    const nextReview = () => {
        setCurrentValue((currentValue + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentValue((currentValue - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-content">
                <button className="arrow left-arrow" onClick={prevReview}>&lt;</button>
                <div className="testimonial-text">
                    <p className="text-dark">"My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think."</p>
                    <div className="testimonial-author">
                        <img src="https://rosajen27.github.io/tindog/images/dog-img.jpg" alt="Beverly, Illinois" className="testimonial-image" />
                        <p>Beverly, Illinois</p>
                    </div>
                </div>
                <button className="arrow right-arrow" onClick={nextReview}>&gt;</button>
            </div>
            <div className="company-logos">
                <img src="https://rosajen27.github.io/tindog/images/techcrunch.png" alt="TechCrunch" />
                <img src="https://rosajen27.github.io/tindog/images/tnw.png" alt="The Next Web" />
                <img src="https://rosajen27.github.io/tindog/images/bizinsider.png" alt="Business Insider" />
                <img src="https://rosajen27.github.io/tindog/images/mashable.png" alt="Mashable" />
            </div>
        </div>
    );
};

export default Review;
