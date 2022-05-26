import React from 'react';
import banner from '../../assets/images/banner1.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Nano Computers!</h1>
                    <p className="py-6">Leading as the top Computer Parts Manufacturer of the country for a decade! Join now to buy the best parts within a very reasonable wholesale rate.</p>
                    <button className="btn  bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;