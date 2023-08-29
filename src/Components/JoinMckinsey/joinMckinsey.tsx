import { links } from "../list";
import { FaArrowRight } from "react-icons/fa";

function JoinMck(){

    return( 
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-16">
            <iframe title='Mckinsey' src={links[4].video} allowFullScreen className='h-[290px] md:h-full w-full'></iframe>
            <div className="grid grid-rows-1">
                <h1 className="pb-3 font-bold sm:text-5xl text-3xl font-serif">{links[4].joine1}</h1>
                <p className='flex flex-row hover:text-blue-600 font-medium cursor-pointer group'>
                   McKinsey partners from around the world weigh in
                   <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
                <p className='flex flex-row font-medium cursor-pointer group hover:text-blue-600'>
                     Making the case for a new kind of growth
                    <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
            <img src={links[4].join5} className="md:h-screen h-full order-2 md:order-first"  alt="Home"/>   
            <div style={{padding: '64px 0px', paddingLeft: '64px'}} className="flex flex-col justify-center order-1 md:order-last">
                <h1 className="font-bold sm:text-5xl text-4xl font-serif p-3">{links[4].joine4}</h1>
                <p className='flex flex-row hover:text-blue-600 font-bold pl-3 group'>
                    Careers
                    <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
                <p className='flex flex-row hover:text-blue-600 font-bold group pl-3'>
                    Search and apply
                    <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
            </div>
        </div>

        <div className=" text-white grid grid-rows-2 justify-center text-center py-16 bg-gradient-to-r from-black to-blue-500">
            <h1  className="font-bold sm:text-5xl text-3xl font-serif">How can we help you?</h1>
            <p className="sm:text-xl text-lg">
                <a className="text-white cursor-pointer hover:bg-sky-500 underline-offset-4 underline decoration-sky-500">Get in touch</a> with us or <a 
                className="text-white cursor-pointer hover:bg-sky-500 underline-offset-4 underline decoration-sky-500">find an office</a> closest to you.</p>
        </div>
        
    </div>
)}

export default JoinMck;
