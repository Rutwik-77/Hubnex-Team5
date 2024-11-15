import React from 'react'
import NumberTicker from "@/components/ui/number-ticker";
import './PartnerGlobe.css'
const PartnerGlobe = () => {
  return (
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
          
          <img src='\public\globe (2).png' alt='Globe' />
        </div>
      </section>
  )
}

export default PartnerGlobe