import React from 'react';
import './Prising.css';

const Prising = React.forwardRef((props, ref) => {
    return (
        <section>
            <div ref={ref} className="pricing-header">
                <h2>A Plan for Every Dog's Needs</h2>
                <p>Simple and affordable price plans for you and your dog.</p>
            </div>
            <div className="pricing">
                <div className="pricing-sub">
                    <div className="heading">
                        <h3>Chihuahua</h3>
                    </div>
                    <div className="subsection">
                        <h2>Free</h2>
                        <p>5 Matches Per Day</p>
                        <p>10 Messages Per Day</p>
                        <p>Unlimited App Usage</p>
                        <button type="button" className="btn btn-lg btn-outline-dark ">Sign Up</button>
                    </div>
                </div>
                <div className="pricing-sub">
                    <div className="heading">
                        <h3>Labrador</h3>
                    </div>
                    <div className="subsection">
                        <h2>$49 / mo</h2>
                        <p>Unlimited Matches</p>
                        <p>Unlimited Messages</p>
                        <p>Unlimited App Usage</p>
                        <button type="button" className="btn btn-lg btn-outline-dark download-button">Sign Up</button>
                    </div>
                </div>
                <div className="pricing-sub">
                    <div className="heading">
                        <h3>Mastiff</h3>
                    </div>
                    <div className="subsection">
                        <h2>$99 / mo</h2>
                        <p>Priority Listing</p>
                        <p>Unlimited Matches</p>
                        <p>Unlimited Messages</p>
                        <p>Unlimited App Usage</p>
                        <button type="button" className="btn btn-lg btn-outline-dark download-button">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Prising;
