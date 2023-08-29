import {links} from '../list';
import { FaTwitterSquare,FaLinkedin,FaFacebookSquare,FaYoutubeSquare } from "react-icons/fa";

function Footer(){

    return( 
      <div className='sm:mx-24 mx-16' style={{ paddingTop: '80px'}}>
           <img src={links[5].footer1} className="img-fluid" style={{width: '17rem', height: '6rem'}}  alt="Home"/>
      <footer className="py-3 grid grid-cols-1 md:grid-cols-2">
          <div className="col-md-8">
              <form className='md:mb-0 mb-4'>
                <h5>Subscribe</h5>
                <p>Select topics and stay current with our latest insights</p>
                <div className="d-flex flex-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control border-dark rounded-0 hover:border-blue-600" placeholder="Email address"/>
                  <button className="btn btn-primary px-4 py-2 rounded-0" type="button">Submit</button>
                </div>
              </form>
            </div>
            <div className='grid grid-rows-2'>
              <ul className="nav flex justify-evenly md:mb-0 mb-4">
                <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Contact us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Cookie prefrences</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Term of use</a></li>
                <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Local language information</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black underline-offset-4 hover:underline hover:decoration-blue-600">Accessibility statement</a></li>
              </ul>
              <div className="nav flex flex-row md:justify-end justify-start text-4xl mr-2">
              <FaLinkedin className='hover:text-blue-600 m-2 cursor-pointer'/>
              <FaFacebookSquare className='hover:text-blue-600 m-2 cursor-pointer'/>
              <FaTwitterSquare className='hover:text-blue-600 m-2 cursor-pointer'/>
              <FaYoutubeSquare className='hover:text-blue-600 m-2 cursor-pointer'/>
              </div>
            </div>
        </footer>
        <div className="md:flex flex-sm-row justify-between py-3 my-4 border-top">
            <div className='md:flex justify-start p-1 md:mb-0 mb-4'>
              <p className='w-80'>McKinsey Insights - Get our latest thinking on your iPhone, iPad, or Android device.</p>
              <a><img src={links[5].footer2} className="img-fluid mr-6 mt-2 cursor-pointer" style={{width: '8rem', height: '2rem'}}  alt="Home"/></a>
              <a><img src={links[5].footer3} className="img-fluid mt-2 cursor-pointer" style={{width: '8rem', height: '2rem'}}  alt="Home"/></a>
            </div>
            <p>© 1996-2023 McKinsey & Company</p>
          </div>
        </div>
)}

export default Footer;