/** @format */

import "./PartnerChoose.css";
import RetroGrid from "@/components/ui/retro-grid";
const PartnerChoose = () => {
  return (
    <section className='partner-choose'>
      <div className='background-grid'>
        <h1>Why Choose Us?</h1>

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
              We develop the prototypes and MVP for the ERP System within a few
              months and optimise the final product based on its performance
              metrics and your feedback.
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
              Our work does not end with delivery. We offer complete support and
              maintenance post the launch of the ERP systems to ensure their
              smooth functioning.
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
  );
};

export default PartnerChoose;
