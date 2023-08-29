import { links } from "../list";
import { FaArrowRight } from "react-icons/fa";

function Blog(){

    return(
        
        <div className="cursor-pointer">
            <h6 style={{margin: '50px', textAlign: 'center'}}>NEW AT MCKINSEY BLOG</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="relative overflow-hidden divtransition hover:text-blue-600">
                <img src={links[1].blog1} className="img-fluid" style={{ height: '500px' }} alt="Blog" />
                <span className="absolute bottom-0 left-0 p-6 bg-white/70 shadow-2xl">
                    <p className='font-medium'>
                        27 August, 2023
                    </p>
                    <p className='font-medium text-4xl font-serif'>
                        Partner voices: Growth isn't a zero-sum game
                    </p>
                </span>
            </div>


                <div className="grid grid-rows-1 md:grid-rows-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divtransition">
                        <img src={links[1].blog2} className="img-fluid" style={{height: '100%'}} alt="Blog"/>
                        <div className=" hover:text-blue-600 font-medium flex flex-col justify-end" style={{padding: '30px'}}>
                            <p className="text-sm leading-none">August 7, 2023</p>
                            <p className="text-2xl">{links[2].text1}</p>
                        </div>
                    </div>
                    <div className=" bg-slate-900 text-white divtransition font-medium p-10">
                        <p className="text-sm leading-none">August 9, 2023</p>
                        <p className="text-2xl w-80">{links[2].text2}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divtransition">
                    <div className=" hover:text-blue-600 font-medium flex flex-col justify-end" style={{padding: '40px'}}>
                        <p className="text-sm leading-none">{links[3].date3}</p>
                        <p className="text-2xl">{links[2].text3}</p>
                    </div>
                    <img src={links[1].blog4} className="h-full w-full" alt="Blog"/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden">
                    <div className=" hover:text-blue-600 font-medium flex flex-col justify-end">
                        <p className="text-sm leading-none pl-7">{links[3].date4}</p>
                        <p className="text-2xl pl-7">{links[2].text4}</p>
                        <button className="text-white bg-blue-600 p-4 rounded-none font-semibold flex group" type="button">Read more on our Blog
                        <span className='ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                        </button>
                    </div>
                    <img src={links[1].blog3} className="w-full divtransition h-full md:h-96" alt="Blog"/>
                </div>
            </div>
        </div>
)}

export default Blog;
