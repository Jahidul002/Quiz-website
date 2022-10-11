import React from 'react';
import { ArrowRightCircleIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const HomeData = ({ data }) => {
    const { id, name, logo, total } = data
    return (
        <div>
            <div className=' bg-slate-300 rounded-md'>
                <img src={logo} alt="" />
                <div className='flex justify-evenly items-center font-semibold mt-2 pb-3'>
                    <p className='bg-red-300 px-3 py-1 rounded-md'>{name}</p>
                    <p>Quiz:{total}</p>
                    <Link to={`/${id}`}>
                        <div className='flex items-center bg-sky-700 px-5 py-3 rounded-lg text-white gap-1'>
                            <button>Start Qs</button>
                            <ArrowRightCircleIcon className="h-5 w-5 text-white" />
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default HomeData;