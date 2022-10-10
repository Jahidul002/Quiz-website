import React from 'react';

const HomeData = ({ data }) => {
    const { name, logo, total } = data
    return (
        <div>
            <div className=' bg-slate-300 rounded-md'>
                <img src={logo} alt="" />
                <div className='flex justify-evenly items-center'>
                    <p>{name}</p>
                    <p>Quiz:{total}</p>
                    <button>Start Qs</button>
                </div>
            </div>
        </div>
    );
};

export default HomeData;