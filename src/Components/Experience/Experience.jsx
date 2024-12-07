import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const ExpCard = [
        {
            id: 1,
            title: "App Development Workshop",
            url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720512334/Screenshot_2024-07-09_133231-removebg-preview_wkjvlv.png",
            description: "Conducted an engaging app development workshop for school students, focusing on practical skills and creativity. Shared knowledge to inspire and empower the younger generation, fostering their interest in technology and innovation. Encouraged hands-on learning to help them build confidence and develop foundational programming skills for future opportunities.",
            link: "https://drive.google.com/file/d/1DSC-Vd7HtWrlhNk3t-IQD5kc7Ix7hCgh/view"
        },
        {
            id: 2,
            title: "News feed app - TrichyTimes",
            url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720512334/Screenshot_2024-07-09_133435-removebg-preview_njp3mw.png",
            description: "Developed a dynamic and user-friendly news feed application for Trichy Times, accessible on both mobile and web platforms. Focused on delivering real-time updates with an intuitive interface, enhancing user engagement. Combined responsive design with efficient functionality to meet the media company's requirements and improve their digital presence.",
            link: "https://newtrichytimes.in/",
            credentials: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1733580923/trichy_times_certificate_lpbdtd.jpg"
        },
        {
            id: 3,
            title: "Doctor Recommendation app",
            url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1731849989/Doctor-logo_odl01q.png",
            description: "Developed a doctor recommendation app designed to match users with the most suitable healthcare professionals based on their specific needs. The app leverages advanced filtering to provide personalized suggestions, ensuring users find trusted doctors efficiently. With a user-friendly interface, it simplifies healthcare access and promotes better decision-making for medical consultations.",
            link: "https://doc-rec-app.netlify.app/"
        },
        {
            id: 4,
            title: "College Conference website",
            url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1712653581/sara_lg_png_lmwsey.png",
            description: "Designed and developed a college conference registration website to streamline participant sign-ups based on their roles, such as student, faculty, or guest. The platform highlights our college's achievements and provides comprehensive navigation details, including routes via bus, train, and flight, ensuring seamless accessibility for attendees from various locations.",
            link: "https://indousmathchem.com/"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? ExpCard.length - 1 : prevIndex - 1));
    };

    // Move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === ExpCard.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="mt-24 px-5 py-6 md:px-14 relative">
            <h1 data-aos="fade-up" className="mb-5 text-white font-semibold text-uppercase tracking-wider text-2xl md:text-3xl  md:text-left">
                Exposure & <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Experience</span>
            </h1>

            <div className="relative my-10" data-aos="fade-up" data-aos-delay="400">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {ExpCard.map((card) => (
                            <div key={card.id} className="min-w-full flex flex-col items-center p-4">
                                <img
                                    src={card.url}
                                    alt={card.title}
                                    className="rounded-lg w-48 h-48 object-cover mb-4"
                                />
                                <h3 className="text-white text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-300 text-sm text-center max-w-[600px] mb-4 px-7 md:px-0">{card.description}</p>
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#9c7bce] text-black font-semibold px-8 py-2 rounded-lg"
                                >
                                    View Project
                                </a>
                                {card.credentials && (
                                    <button
                                        onClick={() => window.location.href = card.credentials}
                                        className="bg-[#9c7bce] text-black font-semibold px-4 py-2 rounded-lg mt-5"
                                    >
                                        View Credentials
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                    <FaArrowRight />
                </button>
            </div>

            <div className="flex justify-center mt-4">
                {ExpCard.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-2 rounded-full ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-500'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Experience;
