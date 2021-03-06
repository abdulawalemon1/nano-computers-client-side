import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import MeetOurTeam from './MeetOurTeam';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <MeetOurTeam></MeetOurTeam>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;