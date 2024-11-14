/** @format */

import { FaArrowRightLong } from "react-icons/fa6";
import "./PartnerProgram.css";
const PartnerProgram = () => {
  return (
    <section className='partner-program'>
      <img src='\public\Partner-program.png' alt='' />
      <div className='right'>
        <h1>Join our Preferred Partners Programme</h1>
        <p>
          We proudly offer exclusive benefits to our partners who have
          consistently shown trust in our platform and delivered outstanding
          work.These privileges are designed to ensure business stability and
          promise up to 3x returns to our partners.
        </p>
        <button className='Blue'>
          Connect Sales
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default PartnerProgram;
