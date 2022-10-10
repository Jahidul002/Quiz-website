import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeData from '../../HomeData/HomeData';
import DHeader from '../DHeader/DHeader';

const Home = () => {
    const theData = useLoaderData()
    console.log(theData);
    return (
        <div>
            <DHeader></DHeader>
            <div className='grid grid-cols-4 gap-5'>
                {
                    theData.data.map(data => <HomeData key={data.id} data={data}></HomeData>)
                }
            </div>
        </div>
    );
};

export default Home;