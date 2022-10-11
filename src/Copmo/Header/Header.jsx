import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between items-center shadow shadow-xl bg-slate-200'>
            <Link className='m-2 bg-gradient-to-r from-red-500 to-yellow-400 font-semibold px-3 py-1 rounded-md text-2xl ' to='/'>Q&A</Link>
            <div>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md font-semibold' to='/'>Home</Link>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md  font-semibold' to='/ansAndQs'>Get Question</Link>
                <Link className='m-2 hover:bg-slate-400 px-3 py-1 rounded-md font-semibold' to='/statistics'>Statistics</Link>
            </div>
        </div>
    );
};

export default Header;