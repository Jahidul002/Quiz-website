import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import './DHeader.css'
const DHeader = () => {

    return (
        <div className='bg-img div-grid container mx-auto rounded-md mt-5'>
            <div>
                <p className='md:text-3xl px-5 md:flex justify-center font-thin'>Test <span className='font-extrabold text-red-600'>YourSelf</span>,<br />What you Know?</p>
            </div>
            <div></div>
        </div>
    );
};

export default DHeader;