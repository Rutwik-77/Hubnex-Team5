// /** @format */

// import OrbitingCircles from "@/components/ui/orbiting-circles";
// import "./orbit.css";
// const Orbit = () => {
//   return (
//     <div className='relative flex h-[400px] max-w-[400px] flex-col items-center justify-center overflow-hidden  bg-background  orbital'>
    

//       {/* Inner Circles */}
//       <div className='absolute top-20 right-0'>
//         <OrbitingCircles
//           className='size-[30px] border-none bg-transparent'
//           duration={80}
//           delay={20}
//           radius={160}
//         >
//           <img src='\public\Avatar.png' alt='' />
//         </OrbitingCircles>

//         <OrbitingCircles
//           className='size-[30px] border-none bg-transparent'
//           duration={20}
//           delay={10}
//           radius={120}
//         >
//           <img src='\public\Avatar (1).png' alt='' />
//         </OrbitingCircles>

//         {/* Outer Circles (reverse) */}
//         <OrbitingCircles
//           className='size-[40px] border-none bg-black'
//           radius={80}
//           duration={20}
//           reverse
//         >
//           <img src='\public\Avatar (2).png' alt='' />
//         </OrbitingCircles>

//         <OrbitingCircles
//           className='size-[40px] border-none bg-black '
//           radius={40}
//           duration={20}
//           delay={20}
//           reverse
//         >
//           <img src='\public\Avatar (1).png' alt='' />
//         </OrbitingCircles>
        
//       </div>\
//       <div className="z-10">
      
//         <p>More content that will be visible below the cropped section.</p>
//     </div>
    
//     </div>
//   );
// };

// export default Orbit;


/** @format */

// import OrbitingCircles from "@/components/ui/orbiting-circles";
// import "./orbit.css";

// const Orbit = () => {
//   return (
//     <div className='relative flex h-[400px] max-w-[400px] flex-col items-center justify-center overflow-hidden bg-background orbital'>
//       {/* Inner Circles */}
//       <div className='absolute top-0'>
//         <OrbitingCircles
//           className='size-[30px] border-none bg-transparent'
//           duration={80}
//           delay={20}
//           radius={160}
//         >
//           <img src='\public\Avatar.png' alt='' />
//         </OrbitingCircles>

//         <OrbitingCircles
//           className='size-[30px] border-none bg-transparent'
//           duration={20}
//           delay={10}
//           radius={120}
//         >
//           <img src='\public\Avatar (1).png' alt='' />
//         </OrbitingCircles>

//         {/* Outer Circles (reverse) */}
//         <OrbitingCircles
//           className='size-[40px] border-none bg-black'
//           radius={80}
//           duration={20}
//           reverse
//         >
//           <img src='\public\Avatar (2).png' alt='' />
//         </OrbitingCircles>

//         <OrbitingCircles
//           className='size-[40px] border-none bg-black'
//           radius={40}
//           duration={20}
//           delay={20}
//           reverse
//         >
//           <img src='\public\Avatar (1).png' alt='' />
//         </OrbitingCircles>
//       </div>

//       {/* Content visible below the cropped section */}
//       <div className="z-10 mt-24">  {/* Adjust the mt-24 as needed */}
//         <p>More content that will be visible below the cropped section.</p>
//       </div>
//     </div>
//   );
// };

// export default Orbit;

/** @format */

import OrbitingCircles from "@/components/ui/orbiting-circles";
import "./orbit.css";

const Orbit = () => {
  return (
    <div className='absolute flex h-[400px] max-w-[400px] flex-col items-center justify-center overflow-hidden bg-background orbital '>
      {/* Inner Circles */}
      <div className='absolute top-10 right-0 flex justify-center items-center'>
        <OrbitingCircles
          className='size-[30px] border-none bg-transparent'
          duration={80}
          delay={20}
          radius={160}
        >
          <img src='\public\Avatar.png' alt='' />
        </OrbitingCircles>

        <OrbitingCircles
          className='size-[30px] border-none bg-transparent'
          duration={20}
          delay={10}
          radius={120}
        >
          <img src='\public\Avatar (1).png' alt='' />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className='size-[40px] border-none bg-black'
          radius={80}
          duration={20}
          reverse
        >
          <img src='\public\Avatar (2).png' alt='' />
        </OrbitingCircles>

        <OrbitingCircles
          className='size-[40px] border-none bg-black'
          radius={40}
          duration={20}
          delay={20}
          reverse
        >
          <img src='\public\Avatar (1).png' alt='' />
        </OrbitingCircles>
      </div>

      {/* Content visible below the cropped section */}
      <div className="z-10 mt-24">  {/* Adjust margin-top as needed */}
        <p>More content that will be visible below the cropped section.</p>
      </div>
    </div>
  );
};

export default Orbit;


