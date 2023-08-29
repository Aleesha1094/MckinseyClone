import {links} from '../list';
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';

function NavScroll(){
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
      };

    return(
        <nav className="navbar navbar-expand-lg relative">
            {isFormVisible && (
                    <form className="d-flex w-full absolute p-20 bg-white shadow-lg shadow-black " style={{}} role="search">
                        <input className="form-control me-2 w-full bg-white border-0 shadow-none p-10 font-bold text-grey-500" type="search" placeholder="Type to Search" aria-label="Search"/>
                        <button type="button" className="btn-close" aria-label="Close" onClick={toggleForm}></button>
                        <FaSearch className='flex justify-end w-24 h-8' />
                    </form>
            )}
            <div className="container-fluid">
                <button type="button">
                <span className="navbar-toggler-icon text-2xl"></span>
                </button>
                <a className="navbar-brand mx-4" href="#">           
                   <img src={links[5].footer1} className="img-fluid" style={{width: '10rem', height: '3rem'}}  alt="Home"/>
                </a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse md:visible navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item dropdown"> */}
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Industeries
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                {/* </li> */}
                    {/* <li className="nav-item dropdown"> */}
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Capabilities
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown"> */}
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Featured Insight
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown"> */}
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Careers
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    {/* </li> */}
                {/* <li className="nav-item dropdown"> */}
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About us
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                {/* </li> */}
                <li className="nav-item">
                    <a className="nav-link">Mckinsey Blog</a>
                </li>
                </ul>
                </div>
                <div>
                    <div className="flex cursor-pointer">
                        <a className="text-black no-underline hover:underline-offset-4 hover:underline decoration-black">Sign In</a>
                        <span className='border-l-2 border-black m-1'></span>
                        <a className="text-black no-underline hover:underline-offset-4 hover:underline decoration-black">Subscribe</a>
                    </div>
                    <FaSearch className='flex justify-end w-24 h-8'  onClick={() => setIsFormVisible(!isFormVisible)}/>

                </div>
            </div>
        </nav>
    )
}

export default NavScroll;