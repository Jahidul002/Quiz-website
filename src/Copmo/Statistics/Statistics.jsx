import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const theData = useLoaderData()
    // console.log(theData.data);

    // let objData = []
    // console.log(objData);
    // for (const dt of theData.data) {
    //     const total = dt.total;
    //     const name = dt.name;
    //     objData.push(total, name)
    // }
    return (
        <div>
        </div>
    );
};

export default Statistics;