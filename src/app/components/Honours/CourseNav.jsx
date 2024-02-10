"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CourseNav = () => {


    let navdata = [
        {
            "name":"Honours 1st Year",
            "path": "/courses/honours1st"
        },
        {
            "name":"Honours 2nd Year",
            "path": "/courses/honours2nd"
        },
        {
            "name":"Honours 3rd Year",
            "path": "/courses/honours3rd"
        },
        {
            "name":"Honours 4th Year",
            "path": "/courses/honours4th"
        },
        {
            "name":"Masters",
            "path": "/courses/masters"
        }
    ]

    const current = usePathname()


    return (
        <div className=' bg-[#faebd7] top-12 sticky'>
            <div className='container mx-auto py-3'>
            {navdata.map((item, i)=>{
                        return(
                            <>
                    <Link className={current===item.path?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline "} href={item.path}>{item.name}</Link>
                    </>
                        )
                    })}
            </div>
        </div>
    );
};

export default CourseNav;