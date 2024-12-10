import React from 'react';
import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const NavBar = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="z-50 fixed top-0 w-full mt-12" data-aos="fade-down">
            <nav
                id="NavView"
                className="w-full flex justify-center px-2 mt-0"
            >
                <ul className="flex flex-wrap justify-center gap-10 md:gap-10 list-none p-2 px-5 md:px-10 border border-[#cbacf9] rounded-lg backdrop-blur-lg bg-[#0a0a23]/60">
                    <li className="text-sm md:text-base">
                        <a href="#HomeContainer" className="no-underline text-[#cbacf9]">
                            Home
                        </a>
                    </li>
                    <li className="text-sm md:text-base">
                        <a href="#ProjectContainer" className="no-underline text-[#cbacf9]">
                            Projects
                        </a>
                    </li>
                    <li className="text-sm md:text-base">
                        <a
                            href="SuryaaVijayD/portfoliohttps://drive.google.com/file/d/1teRtmdKKuPiZVXR4SY143hdibdG37SY2/view?usp=sharing"
                            className="no-underline text-[#cbacf9]"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="text-sm md:text-base">
                        <a href="#ContactContainer" className="no-underline text-[#cbacf9]">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
