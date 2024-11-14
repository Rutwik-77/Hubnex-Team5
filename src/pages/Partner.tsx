/** @format */

import "./Partner.css";
import SparklesText from "@/components/ui/sparkles-text";
import NumberTicker from "@/components/ui/number-ticker";
import PartnerMarquee from "./PartnerMarquee";
import RetroGrid from "@/components/ui/retro-grid";
import StepsGrid from "@/Component/StepsGrid";
import PartnerProgram from "@/Component/partner-program/PartnerProgram";
import PartnerSlider from "@/Component/Partner-slider/PartnerSlider";
import PartnerNewsletter from "@/Component/P-Newsletter/PartnerNewsletter";
import PartnerBlogs from "@/Component/Partner-blogs/PartnerBlogs";
import PartnerContact from "@/Component/PartnerContact/PartnerContact";
const Partner = () => {
  return (
    <>
      <section className='partner-hero'>
        <div className='nagivation'>
          <a href='#'>Home</a> &gt; <span>Partner Page</span>
        </div>

        <div className='partner-content'>
          <div className='text-content'>
            <SparklesText
              text={
                <h1>
                  Join Your
                  <br /> Partner
                  <br /> Network
                </h1>
              }
            />

            <p>
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page, or admin panel for your
              SaaS. Clarity gives you the blocks & components you need. Clarity
              gives you the blocks.
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
                  <span>Companies are using & it’s growing everyday</span>
                </div>
              </div>
              <div className='stat-item'>
                <div className='rating My-rating'>
                  <span className='stat-number'>4.5/5</span>
                  <span>Trusted by the top companies worldwide</span>
                </div>

                <span className='stars'>★★★★★</span>
              </div>
            </div>
          </div>

          <div className='image-content'>
            <img src='\public\partner-hero-img.png' alt='Partner network' />
          </div>
        </div>
      </section>
      <section className='partner-technologies'>
        <div className='partner-technologies-container'>
          <h2 className='technologies-title'>
            <span>Technologies We Use!</span>
          </h2>
          <div className='technologies-marquee'>
            <PartnerMarquee />
          </div>
        </div>
      </section>
      <section className='partner-choose'>
        <div className='background-grid'>
          <RetroGrid />
        </div>

        <div className='cards-container'>
          <div className='card'>
            <div className='image-placeholder'>
              <img src='\public\image 30.png' alt='' />
            </div>
            <div className='advance'>
              <h1 className='card-heading'>Fast MVP Development</h1>
              <p className='card-text'>
                We develop the prototypes and MVP for the ERP System within a
                few months and optimise the final product based on its
                performance metrics and your feedback.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='image-placeholder'>
              <img src='\public\image 30 (1).png' alt='' />
            </div>
            <div className='advance'>
              <h1 className='card-heading'>Maintenance & Support</h1>
              <p className='card-text'>
                Our work does not end with delivery. We offer complete support
                and maintenance post the launch of the ERP systems to ensure
                their smooth functioning.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='image-placeholder'>
              <img src='\public\image 30 (2).png' alt='' />
            </div>
            <div className='advance'>
              <h1 className='card-heading'>Smooth ERP Intergration</h1>
              <p className='card-text'>
                We ensure smooth ERP integration with other business parts,
                including other ERPs, Salesforce, Office Suite, and IoT systems,
                for effective, seamless business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='globe'>
        <div className='text-content'>
          <h1>Unleash the full power of data</h1>
          <p>
            We guide global businesses through the challenges of developing
            purposeful technology that addresses their needs and advances their
            growth. We have established offices in India, the UAE, and the USA.
          </p>
          <div className='stats'>
            <div>
              <span className='number'>
                <NumberTicker value={60} className='number-ticker' />+
              </span>
              <span>Integrations</span>
            </div>
            <div>
              <span className='number'>
                <NumberTicker value={600} className='number-ticker' />%
              </span>
              <span>Return on Investment</span>
            </div>
            <div>
              <span className='number'>4K+</span>
              <span>Global Customers</span>
            </div>
          </div>
          <div className='featured'>
            <span>Featured in</span>
            <div className='logos'>
              <img src='\public\Logos.png' alt='DailyHunt' />
            </div>
          </div>
        </div>
        <div className='globe-image'>
          {/* Place for globe image */}
          <img src='\public\globe (2).png' alt='Globe' />
        </div>
      </section>
      <section className='positives'>
        <StepsGrid></StepsGrid>
      </section>
      <section className='program'>
        <PartnerProgram />
      </section>
      <section className='Partner-Slider'>
        <PartnerSlider />
      </section>
      <section className='newsletter'>
        <PartnerNewsletter />
      </section>
      <section className='blogs'>
        <PartnerBlogs />
      </section>
      <section className='contact'>
        <PartnerContact />
      </section>
    </>
  );
};

export default Partner;
