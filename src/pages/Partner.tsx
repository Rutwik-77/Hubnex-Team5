/** @format */

import "./Partner.css";
// import SparklesText from "@/components/ui/sparkles-text";

import PartnerMarquee from "./PartnerMarquee";
// import RetroGrid from "@/components/ui/retro-grid";
import StepsGrid from "@/Component/StepsGrid";
import PartnerProgram from "@/Component/partner-program/PartnerProgram";
import PartnerSlider from "@/Component/Partner-slider/PartnerSlider";
import PartnerNewsletter from "@/Component/P-Newsletter/PartnerNewsletter";
import PartnerBlogs from "@/Component/Partner-blogs/PartnerBlogs";
import PartnerContact from "@/Component/PartnerContact/PartnerContact";
import PartnerHero from "@/Component/Partner-hero/PartnerHero";
import PartnerChoose from "@/Component/PartnerChoose/PartnerChoose";
import PartnerGlobe from "@/Component/PartnerGlobe/PartnerGlobe";
const Partner = () => {
  return (
    <>
      <PartnerHero/>
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
      <PartnerChoose/>
      <PartnerGlobe/>
      <section className='positives'>
        <StepsGrid/>
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
