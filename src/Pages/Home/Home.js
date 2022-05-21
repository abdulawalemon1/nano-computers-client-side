import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import { GrUserExpert } from 'react-icons/gr';
import Products from './Products';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;