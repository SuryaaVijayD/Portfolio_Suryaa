import React from 'react'
import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const MobileProjects = props => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const { projects } = props;
    const handleClick = (link) => {
        window.location.href = link; // Use window.location.href for navigation
    };

    return (
        <div className="mt-5 bg-black block px-8 md:hidden">
            <h1 className='text-white text-center font-semibold text-2xl mt-10 py-12'>Featured <span className='text-transparent bg-gradient-to-b from-[#f39e30] via-[#f85d6b] to-[#fe12b0] bg-clip-text font-bold'>Work</span></h1>
            {projects.map((project, index) => (
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mb-24" key={index} data-aos="fade-right">
                    <div className="w-full flex justify-center ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="mt-4">
                        <h1 className="text-xl font-semibold mb-2">{project.title}</h1>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <button
                            className="bg-[#cbacf9] text-black py-2 px-4 font-semibold mt-6"
                            onClick={() => handleClick(project.link)}
                        >
                            View Demo or gitLink
                        </button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default MobileProjects