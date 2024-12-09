import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import MobileProjects from "./MobileProjects";
import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

function Project() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelTwo, setModelTwo] = useState(false);
    const [selectedProjects, setSelectedProjects] = useState([]);

    const openModal = () => {
        setSelectedProjects(projects.slice(0, 2));
        setIsModalOpen(true);
    };

    const openModelTwo = () => {
        setSelectedProjects(projects.slice(2, 4));
        setModelTwo(true);
    };

    const Onhandle = (link) => {
        window.location.href = link;
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModelTwo(false);
    };

    const projects = [
        {
            title: "DermLens",
            description:
                "This project provides users with a platform to predict skin and hair-related issues using image classification techniques. The application consists of both web and mobile versions.",
            image:
                "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699028/Screenshot_2024-03-29_132445_eel1ta.png",
            link: "https://github.com/SuryaaVijayD/dermatology.git",
            tech: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
            year: "2022",
        },
        {
            title: "Crypto Value Recommendation",
            description:
                "A recommendation system for cryptocurrency prices, predicting the future value of Bitcoin, Ethereum, or Tether based on a selected date.",
            image:
                "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_159_aeoyla.png",
            link: "https://github.com/SuryaaVijayD/CryptoCurrencyRecommendationApp.git",
            tech: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
            year: "2022",
        },
        {
            title: "FoodMunch App",
            description:
                "The food delivery application offers dynamic responsiveness for a seamless user experience.",
            image:
                "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_2024-03-29_131238_wveuyh.png",
            link: "https://foodeliverysv.ccbp.tech/",
            tech: ["HTML", "CSS", "JavaScript"],
        },
        {
            title: "TODO App",
            description:
                "The Todo application project offers a dynamic and responsive interface for managing tasks.",
            image:
                "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720507095/Screenshot_189_aa4z9k.png",
            link: "https://todosv.ccbp.tech/",
            tech: ["HTML", "CSS", "JavaScript"],
        },
    ];

    return (
        <div id="ProjectContainer" className="ProjectContainer">
            <div className="hidden md:flex">
                <div
                    className={`relative py-5 transition-all duration-300 ${isModalOpen || modelTwo ? "blur-sm" : ""
                        }`}
                >
                    <h1 className="px-14 text-white py-10 text-3xl font-semibold my-5" data-aos="fade-up">
                        Featured <span className="text-transparent bg-gradient-to-b from-[#f39e30] via-[#f85d6b] to-[#fe12b0] bg-clip-text font-bold">Work</span>
                    </h1>
                    {/* Project Grid */}
                    <div className="grid grid-cols-12 gap-4 px-6 lg:px-14 " >
                        <div
                            className="relative col-span-6 cursor-pointer hover:-translate-y-3 duration-75"
                            onClick={openModal}
                            data-aos="fade-right"
                        >
                            <img
                                src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1733571502/images_igjku7.png"
                                alt="Hero Collection"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-15 p-4 flex flex-col rounded-lg">
                                <div className="flex">
                                    <h2 className="text-xl font-extrabold text-white">
                                        HERO COLLECTION
                                    </h2>
                                    <FaArrowRight className="text-white self-center ml-3 mb-1" />
                                </div>
                                <p className="text-sm text-gray-200 mt-3">
                                    Machine Learning Website
                                </p>
                            </div>
                        </div>
                        <div
                            className="relative col-span-6 cursor-pointer hover:-translate-y-3 duration-75"
                            onClick={openModelTwo}
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <img
                                src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1733572095/Screenshot_2024-12-07_130458_enhanced_dakwwg.png"
                                alt="Essentials Collection"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-between rounded-lg">
                                <div>
                                    <h2 className="text-xl font-bold text-white">
                                        ESSENTIALS COLLECTION
                                    </h2>
                                    <p className="text-sm text-gray-200">
                                        Web Applications
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modals */}
                {(isModalOpen || modelTwo) && (
                    <div className="fixed inset-0 p-5 bg-[020202] bg-opacity-60 flex items-center justify-center ">
                        <div className="bg-gray-950 text-black p-6 rounded-lg shadow-lg w-2/3 max-w-4xl relative">
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-400"
                                onClick={closeModal}
                            >
                                <IoCloseOutline className="text-3xl" />
                            </button>
                            <h2 className="text-2xl text-white font-bold mb-4">
                                Project Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedProjects.map((project, index) => (
                                    <div
                                        key={index}
                                        className=" p-4 rounded-lg shadow-xl shadow-gray-900"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-56 object-cover rounded"
                                        />
                                        <h3 className="text-lg font-bold mt-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm mt-2 text-gray-700">
                                            {project.description}
                                        </p>
                                        <button className="px-4 py-3 mt-3 bg-[#cbacf9] text-black font-semibold" onClick={() => Onhandle(project.link)} >
                                            View Project
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="md:hidden" id="ProjectContainer">
                <MobileProjects projects={projects} />
            </div>
        </div>
    );
}

export default Project;
