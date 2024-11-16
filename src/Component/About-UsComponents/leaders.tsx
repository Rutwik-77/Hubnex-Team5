import './leaders.css';
import { HiArrowUpRight } from "react-icons/hi2";

const Leaders = ()=> {
    return (
        <>
          <div className='body'>
           
            <h1 className='body-heading'>Meet the leaders driving it all</h1>
            <p className='body-title'>Spearheading a team of 250+ Xpanders committed to delivering exceptional tech solutions.</p>
           
            <div className="main flex gap-36 mt-28">

            <div className="first flex">
                <div className="first-img">
                <img src="\public\Ranveer Sir.png" className='ranveer-sir-img'/>
                </div>

                <div className="first-text w-96 p-3">
                <h2 className='first-text-heading'> Ranveer Singh </h2>
                <p className='first-text-para'> CEO & Founder</p>
                <p className='first-text-para'> Yatra sought to optimise and improve verticals to facilitate greater cooperation with its partners, boost customer experience, and streamline operations.verticals to facilitate greater cooperation with its partners, boost customer experience.</p>
                <a href="" className='first-text-link flex gap-1'> Follow on Linkedin <HiArrowUpRight style={{marginTop: "3px"}}/></a>
                </div>
            </div> {/* FIRST DIV ENDS HERE.......... */}

            
            
            </div>

          </div>


        </>
    )
}

export default Leaders;