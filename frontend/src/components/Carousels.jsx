// import React, { useEffect, useState } from 'react'
// import Carousel from './Carousel'
// const Carousels = () => {
//     const [carousels, setCarousels]= useState([]);
//     useEffect(()=>{
//         fetch("/public/Carousels.json")
//         .then((res)=>res.json())
//         .then((data)=>setCarousels(data));
//     },[])

//   return (
    
//    <>
   
//     <header class="w-full relative -mt-[68px]">
//       {/* <div id="carousel-container" class="carousel w-full"> */}
     
//             {carousels.map((Carousels)=>(
//                 <Carousel key={Carousels.id} Carousels={Carousels}></Carousel>
//             ))}
           
//     {/* </div> */}
//     </header>
//       </>
    
//   )
// }

// export default Carousels