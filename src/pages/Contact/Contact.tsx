/** @format */



import "./Contact.css";
import ContactLoaction from "@/Component/ContactsPage/ContactLoaction";
import PartnerContact from "@/Component/PartnerContact/PartnerContact";
const Contact = () => {
  return (
    <>
    <section className='contact-main'>
        <div className="contact-main-left">
            <img src="\public\Frame 583.png" alt="" /> 
        </div>
      
      <form className='contact-form'>
        <div className="texts">
        <h1>Lets's Talk- Contact Our Experts</h1>
        <p>Tell us a little about youself and your Queries. Our Customer experiance team will reach out to you within 24 hours</p>
        </div>
        
        
        <div className='form-group'>
          <div className='half-width'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='half-width'>
            <label htmlFor='businessName'>Business Name</label>
            <input type='text' id='businessName' name='businessName' required />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='businessEmail'>Business Email</label>
          <input
            type='email'
            id='businessEmail'
            name='businessEmail'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='contactNumber'>Contact Number</label>
          <input type='number' id='contactNumber' name='contactNumber' required />
        </div>

        <div className='form-group'>
          <label htmlFor='reason'>Reason for Contact</label>
          <textarea id='reason' name='reason' rows = {9} required></textarea>
        </div>

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </section>
    <section className="Location">
    <ContactLoaction/>
    </section>
    <section className='contact'>
        <PartnerContact />
      </section>
    </>
    
  );
};

export default Contact;


