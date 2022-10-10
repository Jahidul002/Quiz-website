import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <Link className='m-2 bg-gradient-to-r from-red-500 to-yellow-400 font-semibold px-3 py-1 rounded-md text-2xl ' to='/home'>Q&A</Link>
            <div>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md font-semibold' to='/home'>Home</Link>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md  font-semibold' to='/ansAndQs'>Get Question</Link>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md font-semibold' to='/statitics'>Statitics</Link>
            </div>
        </div>
    );
};

export default Header;