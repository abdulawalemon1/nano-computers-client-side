import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import { GrUserExpert } from 'react-icons/gr';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Products></Products>
        </div>
    );
};

export default Home;