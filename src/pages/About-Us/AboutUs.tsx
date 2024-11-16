// import React from 'react'

import Index from "@/Component/About-UsComponents/Benefitstojoin"
// import Locationpage from "@/Component/About-UsComponents/Location"
import ContactLoaction from "@/Component/ContactsPage/ContactLoaction"
import Leaders from "@/Component/About-UsComponents/leaders"
import PartnerSlider from "@/Component/Partner-slider/PartnerSlider"
import PartnerGlobe from "@/Component/PartnerGlobe/PartnerGlobe"
import './AboutUs.css'
import NumberTicker from "@/components/ui/number-ticker"
import PartnerNewsletter from "@/Component/P-Newsletter/PartnerNewsletter"
import PartnerContact from "@/Component/PartnerContact/PartnerContact"


const AboutUs = () => {
  return (
    <>
     <section className="about-hero-content">
      <h1>We’re empowering businesses with the technology they need to lead change and innovate in a business landscape that waits for no one.</h1>
      <div className="Two-btns">
      <button className='contact-button'>Contact Us →</button>
            <button className='join-button'>Join Us →</button>
      </div>
      <div className='Mystats'>
            <div className='Mystat-item'>
              <div className='Myavatars'>
                <img src='\public\Image.png' alt='User 1' />
              </div>
              <div className='Mystat-text'>
                <span className='Mystat-number'>
                  <NumberTicker value={910} />+
                </span>
                <span className="Myrtext1">Companies are using & it’s growing everyday</span>
              </div>
            </div>
            <div className='Mystat-item'>
              <div className='Myrating My-rating'>
                <span className='Mystat-number'>4.5/5<span className='Mystars'>★★★★★</span></span>
                <span className="Myrtext" >Trusted by the top companies worldwide</span>
              </div>
           
            </div>
          </div>
     </section>
        <PartnerGlobe/>
        <Index/>
        <ContactLoaction/>
        <Leaders/>
        <PartnerSlider />
        <PartnerNewsletter /><br /><br />
        <PartnerContact />

    </>
  )
}

export default AboutUs