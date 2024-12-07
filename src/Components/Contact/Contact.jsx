import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const makeCall = () => {
        window.location.href = 'tel:+916380596461';
    };

    return (
        <div className='h-[60vh] ' id='ContactContainer' >
            <div className="text-white flex flex-col items-center justify-center h-[50vh] px-4" id="ContactContainer">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl max-w-[500px] font-bold">
                        Wanna Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Conversation</span> To Me?
                    </h1>
                    <p className="text-gray-300 mb-6">Reach out to me today and let's discuss how I can help you achieve your goal</p>
                    <div className='flex justify-center items-center'>
                        <button className="bg-[#9c7bce] text-black font-semibold  py-2 px-4 cursor-pointer" onClick={makeCall}>
                            Contact Me
                        </button>
                        <div className='text-black bg-[#9c7bce] py-3 px-3 ml-2 cursor-pointer' onClick={makeCall}>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white px-4 pb-4 text-center flex gap-6 items-center text-3xl justify-center'>
                <a href="https://www.instagram.com/__.__suryaa__.__?igsh=MWNreGh0aGNqaWZ1eQ=="><FaInstagram /></a>
                <a href="https://github.com/SuryaaVijayD">  <FaGithub /></a>
                <a href="https://www.linkedin.com/in/suryaa-d/"> <FaLinkedinIn /></a>
                <a href="https://wa.me/6380596461">   <FaWhatsapp /></a>
            </div>
        </div>
    );
};

export default Contact;
