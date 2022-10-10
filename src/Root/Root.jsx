import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Copmo/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <h1>root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;