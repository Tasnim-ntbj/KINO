import React, { useEffect, useState } from 'react'
import HomeSkinCare from './HomeSkinCare';


const HomeSkinCares = () => {
     const [homeSkinCare, setHomeSkinCares] = useState([]);
        useEffect(() => {
            fetch("/public/SkincareProd.json")
                .then((res) => res.json())
                .then((data) => setHomeSkinCares(data));
    
        }, [])
    
        const HomeSkincareSliced = homeSkinCare.slice(0, 4);
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            {HomeSkincareSliced.map((product) => (
                <HomeSkinCare key={product.id} HomeSkinCares={product} />
            ))}
        
        </div>
  )
}

export default HomeSkinCares