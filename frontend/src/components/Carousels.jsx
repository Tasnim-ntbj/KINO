import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
const Carousels = () => {
    const [carousels, setCarousels]= useState([]);
    useEffect(()=>{
        fetch("/public/Carousels.json")
        .then((res)=>res.json())
        .then((data)=>setCarousels(data));
    },[])

  return (
    <div>
    <div id="carousel-container" className="carousel w-full relative -mt-[68px]">
    
        
         

            {carousels.map((Carousels)=>(
                <Carousel key={Carousels.id} Carousels={Carousels}></Carousel>
            ))}
        
      </div>
      </div>
    
  )
}

export default Carousels