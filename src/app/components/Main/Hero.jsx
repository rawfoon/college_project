'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Image from 'next/image';
import hero1 from '../../../assets/hero/hero1.JPG'
import hero2 from '../../../assets/hero/hero2.JPG'
import hero3 from '../../../assets/hero/hero3.JPG'
import hero4 from '../../../assets/hero/hero4.JPG'

const Hero = () => {

    const [mouse, setMouse] = useState(false)

    
    
    return (


      <section className=" bg-white dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Welcome
				<span >to</span> <br /><span className="text-orange-400">Department Of Mathematics
          </span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Gurudayal Govt. College
				<br   />Kishoreganj
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 w-full text-center text-lg font-semibold rounded bg-orange-400 hover:bg-orange-300 dark:text-gray-900">Explore</a>
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a> */}
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://aul.edu.ng/static/images/reviews/mathematics.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

      // <div className='mt-12'>
      //   <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto'>
      //     <div >
      //       <h1>Welcome to Department of <span>Mathematics</span></h1>
      //     </div>
      //     <div>
      //       <img src="https://aul.edu.ng/static/images/reviews/mathematics.png" alt="" />

      //     </div>
      //   </div>
      // </div>
    //     <div 
        
    //     onMouseEnter={()=>setMouse(true)}
    //     onMouseOut={()=> setMouse(false)}
        
    //     >
    //         <Swiper
    //         className=' h-[100vh] mt-6'
    //   // install Swiper modules
    //   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    // //   spaceBetween={50}
    //   slidesPerView={1}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
      
    //   navigation = {mouse? true : false}

     
      
    // //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    // //   onSwiper={(swiper) => console.log(swiper)}
    // //   onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide><Image src={hero1} sizes="100vw" style={{objectFit: 'cover'}}   alt='hello' /></SwiperSlide>
    //   <SwiperSlide><Image src={hero2} sizes="100vw" style={{objectFit: 'cover'}}   alt='hello' /></SwiperSlide>
    //   <SwiperSlide><Image src={hero3} sizes="100vw" style={{objectFit: 'cover'}}   alt='hello' /></SwiperSlide>
    //   <SwiperSlide><Image src={hero4} sizes="100vw" style={{objectFit: 'cover'}}   alt='hello' /></SwiperSlide>
      
      
    // </Swiper>
    //     </div>
    );
};

export default Hero;