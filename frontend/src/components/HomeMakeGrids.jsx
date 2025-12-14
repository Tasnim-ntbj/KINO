import React, { useEffect, useState } from 'react'
import HomeMakeGrid from './HomeMakeGrid';


const HomeMakeGrids = () => {
     const [homeMakeup, setHomeSkinCares] = useState([]);
        useEffect(() => {
            fetch("/public/MakeupProd.json")
                .then((res) => res.json())
                .then((data) => setHomeSkinCares(data));
    
        }, [])
    
        const HomeMakeupSliced = homeMakeup.slice(0, 4);
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            {HomeMakeupSliced.map((product) => (
                <HomeMakeGrid key={product.id} HomeMakeGrids={product} />
            ))}
        
        </div>
  )
}

export default HomeMakeGrids