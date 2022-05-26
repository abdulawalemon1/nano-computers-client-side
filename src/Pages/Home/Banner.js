import React from 'react';
import banner from '../../assets/images/banner1.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner} class="lg:max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to Nano Computers!</h1>
                    <p class="py-6">Leading as the top Computer Parts Manufacturer of the country for a decade! Join now to buy the best parts within a very reasonable wholesale rate.</p>
                    <button class="btn  bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;