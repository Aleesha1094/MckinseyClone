import {links} from '../list';
import { FaArrowRight } from "react-icons/fa";

function Landingpage(){
    const list ={
        border: 'none', borderLeft: '1px solid rgb(37 99 235)',
        padding: '0px', paddingLeft: '8px',marginLeft: '8px', marginRight: '20px', cursor: 'pointer',
    }
    return(
        <div>
            <div className='relative text-white'>
                <img src={links[0].home} className="img-fluid w-full" style={{ height: '500px'}}  alt="Home"/>
                <p className='absolute flex flex-row hover:text-blue-600 font-medium group cursor-pointer bottom-24 sm:left-[90px] left-10'>
                    Read 2023 insights
                    <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
                <p className='absolute flex flex-row hover:text-blue-600 group font-medium cursor-pointer bottom-16 sm:left-[90px] left-10'>
                    What is diversity, equity, and inclusion?
                    <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </p>
            </div>
            <div className='grid grid-cols-6 py-3 justify-center overflow-x-auto md:m-3 m-0'>
                <h5 style={{fontSize: '16px'}} className='flex w-2 lg:ml-24 ml-0 text-black'>TRENDING INSIGHTS</h5>
                <ul className="list-group list-group-flush flex flex-row col-span-5 border-none" style={{textDecoration: 'none'}}>
                    
                    <span className='text-blue-600 font-bold text-2xl'>1</span>
                    <a><li className="list-group-item hover:text-blue-700" style={list}>
                        The economic potential of generative AI: The next productivity frontier
                    </li></a>
                    <span className='text-blue-600 font-bold text-2xl'>2</span>
                    <a><li className="list-group-item hover:text-blue-700" style={list}>
                        McKinsey Technology Trends Outlook 2023
                    </li></a>
                    <span className='text-blue-600 font-bold text-2xl'>3</span>
                    <a><li className="list-group-item hover:text-blue-700" style={list}>The state of AI in 2023: Generative AI breakout year</li></a>
                    <span className='text-blue-600 font-bold text-2xl'>4</span>
                    <a><li className="list-group-item hover:text-blue-700" style={list}>
                        Meet Lilli, our generative AI tool thats a researcher and a time saver
                    </li></a>
                </ul>
            </div>
        </div>
    )
}

export default Landingpage;