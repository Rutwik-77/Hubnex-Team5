import './location.css';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Locationpage = ()=> {
    return (
       <>
         <div className="location-section flex justify-center ">
             
           
           {/* LOCATION INFO TEXT STARTS HERE */}
          <div className="location-info">
            <h1 style={{fontSize: "36px", textAlign: "left"}}> Our Locations </h1>
          
            <div className="location-place flex gap-3 text-center mt-4">
            <div className="loct-1">  
              <img src="./public/india.png" className="mx-auto " />
              <h3> IND </h3>
            </div>

            <div className="loct-1" style={{backgroundColor : "#0000000D", boxShadow: 'none'}}>
              <p><span> Coming soon!</span></p>
              <img src="./public/uae.png" className="mx-auto " />
              <h3> UAE </h3>
            </div>

            <div className="loct-1" style={{backgroundColor : "#0000000D", boxShadow: 'none'}}>
            <p><span> Coming soon!</span></p>
              <img src="./public/usa.png" className="mx-auto " />
              <h3> USA </h3>
            </div>

            <div className="loct-1 " style={{backgroundColor : "#0000000D", boxShadow: 'none'}}>
            <p><span> Coming soon!</span></p>
              <img src="./public/indo.png" className="mx-auto " />
              <h3> INDO </h3>
            </div>
            </div>
            {/* LOCATION PLACES DIVs ENDS HERE....... */}

            <div className="location-links mt-4 ">
              <a href="" className='linkg link'> Gurugram </a>
              <a href="" className='link'> banglore </a>
              <a href="" className='link'> pune </a>
              <a href="" className='link'> lucknow </a>
            </div>
            {/* LOCATION LINKS ENDS............ */}

            <div className="location-address mt-6">
              <div className="add1 flex gap-2">
              <IoLocationOutline className='add-icon'/>
                <p className='address-text'>Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE</p>
              </div>
              <div className="add1 flex gap-2 mt-2">
              <MdOutlineMail className='add-icon'/>
                <p className='address-text'>hello@hubnex.in</p>
              </div>
              <div className="add1 flex gap-2 mt-2">
              <MdOutlinePhone className='add-icon'/>
                <p className='address-text'>+91 1223432544</p>
              </div>
              <button className='contact-btn'> Contact Us </button>
            </div>

          </div> {/* LOCATION INFO TEXT ENDS HERE */}

          {/* LOCATION IMAGE STARTS HERE */}
          <div className="location-image">
             <img src="./public/location.png" className="location-img" />
          </div> {/* LOCATION IMAGE ENDS HERE */}

         </div>
       </>
    )
}

export default Locationpage;