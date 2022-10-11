import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const theData = useLoaderData()
    console.log(theData.data);



    return (
        <div>

        </div>
    );
};

export default Statistics;