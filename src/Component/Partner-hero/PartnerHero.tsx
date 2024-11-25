/** @format */

import SparklesText from "@/components/ui/sparkles-text";
import NumberTicker from "@/components/ui/number-ticker";
import "./PartnerHero.css";
const PartnerHero = () => {
  return (
    <section className='partner-hero'>
      <div className='nagivation'>
        <a href='#'>Home </a>
        <span className='seperator'></span> &gt; <span className='seperator'> Partner Page</span>
      </div>

      <div className='partner-content'>
        <div className='text-content'>
          <SparklesText text={<h1>Join Your Partner Network</h1>} />

          <p>
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives
            you the blocks.
          </p>

          <div className='button-group'>
            <button className='contact-button'>Contact Us →</button>
            <button className='join-button'>Join Us →</button>
          </div>

          <div className='stats'>
            <div className='stat-item'>
              <div className='avatars'>
                <img src='\public\Image.png' alt='User 1' />
              </div>
              <div className='stat-text'>
                <span className='stat-number'>
                  <NumberTicker value={910} />+
                </span>
                <span className='rtext1'>
                  Companies are using & it’s growing everyday
                </span>
              </div>
            </div>
            <div className='stat-item'>
              <div className='rating My-rating'>
                <span className='stat-number'>
                  4.5/5<span className='stars'>★★★★★</span>
                </span>
                <span className='rtext'>
                  Trusted by the top companies worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='image-content'>
          <img src='\public\partner-hero-img.png' alt='Partner network' />
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
