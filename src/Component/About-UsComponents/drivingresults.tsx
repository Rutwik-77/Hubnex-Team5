import './drivingresults.css';

const Driving = ()=> {
    return (
       <>
         <div className="main-body">
            <h3 className='h3'>3940+ Happy Hubnex Labs Users</h3>
            <h2 className='h2'>Driving results for leaders across the globe</h2>

            <div className="container mt-14 flex justify-center">
                <div className="logo object-cover my-auto">
                <img src="./slack-logo.jpg" height="400px" width="400px" />
                </div>

           <div className="container-text ">
              <h2> Driving results for leaders across the globe </h2>
              <p>"With Landingfolio, the design team can now build designs whih identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening."</p>
              <h2 style={{fontSize: "30px"}}> Slack </h2>
              <p style={{fontSize: "16px", marginBottom: "200px"}}> Product Company </p>
           </div>

            </div>
         </div>
       </>
    )
}

export default Driving;