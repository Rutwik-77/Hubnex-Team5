/** @format */
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import './ContactLocation.css';
const ContactLoaction = () => {
  const Data = [
    { img: "/India.png", name: "INDIA" },
    { img: "/icons8-us-48 1.png", name: "USA" },
    { img: "/icons8-uae-48 (1) 1.png", name: "UAE" },
    { img: "/icons8-indonesia-48 1.png", name: "INDO" },
  ];
  return (
    <div className='contact-location'>
      <div className='location-main'>
        <h1>Our Locations</h1>

        <div className='location-cards'>
          {Data.map((item, index) => (
            <div className='location-card' key={index}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <div className='location-cities'>
          <h1>Gurugram</h1>
          <h1>Bangalore</h1>
          <h1>Pune</h1>
          <h1>Lucknow</h1>
        </div>
        <div className='loaction-address'>
          <p>
            <FaMapMarkerAlt />
            Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE
          </p>
          <p>
            <FaMessage />
            hello@hubnex.in
          </p>
          <p>
            <FaPhoneAlt />
            +91 1223432544
          </p>
        </div>
        <button className="blue">Contact Us</button>
      </div>
      <div className='location-img-right'>
        <img src='\Contact-bg.png' alt='' />
      </div>
    </div>
  );
};

export default ContactLoaction;
