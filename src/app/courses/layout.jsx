import React from 'react';
import CourseNav from '../components/Honours/CourseNav';
import Navbar from '../components/Master/Navbar';

const layout = ({children}) => {
    return (
        <div>
            {/* <Navbar/> */}
            <CourseNav  />
            {/* <div className='mb-12'></div> */}
            {children}
        </div>
    );
};

export default layout;