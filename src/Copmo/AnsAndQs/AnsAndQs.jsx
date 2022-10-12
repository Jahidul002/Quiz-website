import React from 'react';
import './AnsAndQs.css'
const AnsAndQs = () => {
    return (
        <div className='bg-image'>
            <div className='container mx-auto cont-bg'>
                <div>
                    <p className='text-xl text-center q-bg mb-5'>what is purpose of react router?</p>
                    <p className='ans-bg font-semibold'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div>
                    <p className='text-xl text-center q-bg mb-5'>How does context api work?</p>
                    <p className='ans-bg font-semibold'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
                </div>
                <div>
                    <p className='text-xl text-center q-bg mb-5'>usehref() hook use for?</p>
                    <p className='ans-bg font-semibold'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the "Link" attribute component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
                </div>
            </div>
        </div>
    );
};

export default AnsAndQs;