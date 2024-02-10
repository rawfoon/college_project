"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {


    const current = usePathname();


    let navdata = [
        {
            "name":"Home",
            "path": "/"
        },
        {
            "name":"Courses",
            "path": "/courses"
        },
        {
            "name":"About",
            "path": "/about"
        },
        {
            "name":"Contacts",
            "path": "/contacts"
        },
    
    ]
    // console.log(navdata[1]);


    return (
        <div>



        <nav className=' bg-lime-300  h-12 fixed w-full z-50 '>
            <div className='container mx-auto flex justify-between items-center'>
                <div className=''>
                    <h1 className=' text-3xl text-orange-400'>Math dept</h1>
                </div>

                <div >
               
                    
                    {navdata.map((item, i)=>{
                        return(
                            <>
                    <Link className={current===item.path?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline "} href={item.path}>{item.name}</Link>
                    </>
                        )
                    })}
                    
                    
                    
              

                

                </div>
                <div className=' mt-3'>
                    <ul className='flex'>
                    <li>
                        <Link className={"mx-3 px-8 py-3 font-semibold rounded text-black border-[1px] rounded-[10px] border-green-400 "} href={"/login"}>Login</Link>
                        </li>
                        <li>
                        <Link className={" px-8 py-3 font-semibold rounded text-white bg-green-400 "} href={"/signup"}>Sign Up</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>








            
        </div>
    );
};

export default Navbar;