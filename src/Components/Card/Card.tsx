import { cards } from "./cardlist";
import { FaArrowRight } from "react-icons/fa";

function Card(){
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
                <img src={cards[0].pic} className="h-full w-full" alt="Home"/>                  
                <div className="sm:p-12 p-5">
                    <h1 className="font-bold sm:text-5xl font-serif text-3xl">{cards[0].text}</h1>
                    <p className="py-2 sm:text-xl text-lg">{cards[0].ptag}</p>
                    <p className='flex flex-row hover:text-blue-600 font-bold cursor-pointer group'>
                        {cards[0].anchor1}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                    <p className='flex flex-row hover:text-blue-600 cursor-pointer group font-bold '>
                        {cards[0].anchor2}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="sm:p-12 p-5">
                    <h1 className="font-bold sm:text-5xl font-serif text-3xl">{cards[1].text}</h1>
                    <p className="py-2 text-xl">{cards[1].ptag}</p>
                    <p className='flex flex-row hover:text-blue-600 font-bold cursor-pointer group'>
                        {cards[1].anchor1}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                    <p className='flex flex-row hover:text-blue-600 font-bold cursor-pointer group'>
                        {cards[1].anchor2}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                </div>
                <img src={cards[1].pic} className=" h-full order-2 md:order-1" alt="Home"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-100">
                <img src={cards[2].pic} className="h-full"  alt="Home"/>       
                <div className="sm:p-12 p-5">
                    <h1 className="font-bold sm:text-5xl text-3xl font-serif">{cards[2].text}</h1>
                    <p className="py-2 text-xl">{cards[2].ptag}</p>
                    <p className='flex flex-row hover:text-blue-600 font-bold cursor-pointer group'>
                        {cards[2].anchor1}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                    <p className='flex flex-row hover:text-blue-600 font-bold cursor-pointer group'>
                        {cards[2].anchor2}
                        <span className='text-blue-500 ml-1.5 mt-1.5 transition transform translate-x-0 ease-in-out group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;