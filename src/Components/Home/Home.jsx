import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div id='HomeContainer' className="relative overflow-hidden">
            <img
                src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720438876/sun_rays_lkzdpn.png"
                className="absolute top-0 right-0 hidden md:block h-2/5 mix-blend-lighten animate-ray2"
                alt="ray1"
            />
            <img
                src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720438876/sun_rays_lkzdpn.png"
                className="absolute top-0 left-0 h-2/5 scale-x-[-1] animate-ray1"
                alt="ray2"
            />
            <div data-aos="fade-up" data-aos-delay="800" className="flex flex-col items-center justify-center h-[100vh] w-full gap-5 text-white text-center overflow-x-hidden">
                <h4 className="tracking-widest text-[10px] uppercase">Who am I?</h4>
                <h1 className="text-5xl md:text-7xl font-bold w-4/5 min-h-[100px] leading-tight">
                    Changing Imagination to Seamless{' '}
                    <span className="text-transparent bg-gradient-to-b from-[#f39e30] via-[#f85d6b] to-[#fe12b0] bg-clip-text font-dancing transition-colors duration-1000 ease-in">                        UserExperience
                    </span>
                </h1>
                <h4 className="text-sm md:text-base tracking-wide">
                    I&#39;m <span className='font-bold'>Suryaa D</span>, Front-End Developer
                </h4>
                <button
                    type="button"
                    className="flex items-center justify-center h-10 w-32 md:w-48 mt-4 px-2 border-2 border-[#9C7BCE] bg-transparent text-[#cbacf9] hover:bg-[#9C7BCE] hover:text-black duration-100 font-semibold"
                >
                    Explore
                    <MdOutlineKeyboardDoubleArrowDown className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Home;
