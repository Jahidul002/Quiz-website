import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const [stat, setStat] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const dataLoaded = data.data.data
                const loadData = dataLoaded.map(theData => {
                    const mainData = {
                        name: theData.name,
                        total: theData.total
                    }
                    return mainData
                })
                console.log(loadData);
                setStat(loadData)
            })
    }, [])
    return (
        <BarChart className='text-center' width={300} height={400} data={stat}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default Statistics;