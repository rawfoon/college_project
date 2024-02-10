import Link from 'next/link';
import { FaCopyright, FaF, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div  className=' bg-black text-white py-4'>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between'>


            <div>
                <h1 className=' text-orange-400'>Math Dept</h1>
            </div>

            <div>
                <ul>
                    <li>
                        <Link className='' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='' href={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link className='' href={'/contacts'}>Contact</Link>
                    </li>
                    <li>
                        <Link className='' href={'/about'}>About</Link>
                    </li>
    
                </ul>
            </div>
            <div>

                <ul className='flex justify-center gap-8'>
                <li>
                        <Link className='' href={'/about'}><FaFacebook/></Link>
                    </li>
                <li>
                        <Link className='' href={'/about'}><FaYoutube/></Link>
                    </li>
                <li>
                        <Link className='' href={'/about'}><FaTwitter/></Link>
                    </li>
                </ul>

            </div>
            
            </div>
            <div   >
                <h1 className='text-center'> <span><FaCopyright  className='inline ' /> </span>Muctasina Golam Rawfoon. All rights reserved</h1>
            </div>
        </div>
    );
};

export default Footer;