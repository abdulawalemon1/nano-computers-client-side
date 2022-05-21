import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { RiComputerFill } from 'react-icons/ri';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import BusinessCard from './BusinessCard';


const BusinessSummary = () => {
    return (
        <div className='grid gird-cols-1 lg:grid-cols-3 gap-4'>
            <BusinessCard cardTitle="45k Happy Clients" bgClass="bg-secondary"><IoIosPeople className=''></IoIosPeople></BusinessCard>
            <BusinessCard cardTitle="200+ Computer Parts" bgClass="bg-primary"><RiComputerFill /></BusinessCard>
            <BusinessCard cardTitle="50k+ Customer Feedback" bgClass="bg-success"><BsFillChatSquareTextFill></BsFillChatSquareTextFill></BusinessCard>
        </div>
    );
};

export default BusinessSummary;