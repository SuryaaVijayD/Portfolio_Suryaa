import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import emailjs from "emailjs-com";
import { FaCheckCircle } from "react-icons/fa";
import { BsSendExclamationFill } from "react-icons/bs";

function Email() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        skills: [],
        mobile: "",
        purpose: "",
    });
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                skills: checked
                    ? [...prevData.skills, value]
                    : prevData.skills.filter((skill) => skill !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_zt4fg5t",
                "template_00c4kjd",
                {
                    name: formData.name,
                    email: formData.email,
                    skills: formData.skills.join(", "),
                    mobile: formData.mobile,
                    purpose: formData.purpose,
                },
                "Xp9XHhe3UNLQ5et1I"
            )
            .then(
                () => {
                    setStatusMessage("Message sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        skills: [],
                        mobile: "",
                        purpose: "",
                    });
                },
                () => {
                    setStatusMessage("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className=" flex flex-col justify-center items-center py-16 bg-gradient-to-br  to-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6" data-aos="fade-up">Service & <span className="text-transparent bg-gradient-to-b from-[#f39e30] via-[#f85d6b] to-[#fe12b0] bg-clip-text font-bold">Feedback</span></h1>

            <div className="md:flex justify-between items-center">
                {/* Form Section */}
                <form
                    data-aos="fade-up" data-aos-delay="400"
                    onSubmit={sendEmail}
                    className="shadow-lg rounded-lg  bg-opacity-10 backdrop-blur-md p-6 px-4 w-full md:w-[60%] text-gray-100"
                >
                    {/* Name Input */}
                    <label className="mb-4">
                        <span className="block text-lg font-semibold mb-2">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 bg-transparent border-b-2 border-[#9c7bce] focus:border-purple-500 outline-none mb-5"
                            required
                        />
                    </label>

                    {/* Email Input */}
                    <label className="mb-4">
                        <span className="block text-lg font-semibold mb-2">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-transparent border-b-2 border-[#9c7bce] focus:border-purple-500 outline-none mb-5"
                            required
                        />
                    </label>

                    {/* Purpose Textarea */}
                    <label className="mb-6">
                        <span className="block text-lg font-semibold mb-2">Purpose or Feedback</span>
                        <textarea
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            placeholder="Write the purpose of contacting us"
                            className="w-full px-4 py-2 bg-transparent border-2 border-[#9c7bce] rounded-lg focus:border-purple-500 outline-none h-36"
                            required
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#9c7bce]  text-black px-6 py-3 rounded-lg font-semibold transition duration-300 mt-5"
                    >
                        Submit
                    </button>

                    {/* Status Message */}
                    {statusMessage && (
                        <div className="flex justify-center items-center gap-3 bg-gray-900 py-2 my-3">
                            <p
                                className={` text-center ${statusMessage.includes("successfully")
                                    ? "text-green-500 "
                                    : "text-red-500"
                                    }`}
                            >
                                {statusMessage}
                            </p>
                            {statusMessage.includes("successfully") ? <FaCheckCircle className="text-xl  text-green-500 " /> : <BsSendExclamationFill className="text-xl text-red-500" />}
                        </div>
                    )}
                </form>

                {/* Image Section */}
                <div className="hidden md:block md:ml-6" data-aos="fade-left" data-aos-delay="800">
                    <img
                        src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1733594000/email_ztanvt.gif"
                        alt="Email GIF"
                        className="w-[500px] h-auto object-contain"
                        onError={(e) => {
                            e.target.src =
                                "https://via.placeholder.com/500x400?text=Image+not+available";
                            e.target.alt = "Fallback Image";
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Email;
