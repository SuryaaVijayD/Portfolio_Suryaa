import { MdArrowOutward } from "react-icons/md";

function About() {

    return (
        <div className='text-white flex flex-col md:flex-row justify-between py-8 px-8 md:px-14' data-aos="fade">
            <div className='flex flex-col relative ' >
                <h3 className='text-2xl md:text-3xl '>About <span className='text-transparent bg-gradient-to-b from-[#f39e30] via-[#f85d6b] to-[#fe12b0] bg-clip-text font-bold'>Me</span></h3>
                <div className='self-start mt-10 flex mb-10 md:mb-5'>
                    <h2 className='px-5 py-2 bg-[#9c7bce] text-black font-semibold'><a href="#ContactContainer">Let's Contact</a></h2>
                    <div className='bg-[#9c7bce] ml-2 text-black px-3 flex justify-center'>
                        <MdArrowOutward className='self-center' />
                    </div>
                </div>
            </div>
            <div className='md:max-w-[500px]'>
                <p className='text-xl leading-7 text-gray-400 mb-10'>Innovative product designer with a passion for aesthetics and usability. I design purposeful, user-friendly products that blend form and function, creating memorable experiences that align with both practical needs and visual appeal.</p>
            </div>
        </div>
    )
}

export default About