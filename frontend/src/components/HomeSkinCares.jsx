
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeSkinCare from './HomeSkinCare';


const HomeSkinCares = () => {
     const {products} = useContext(ShopContext);
     const [homeSkinCare, setHomeSkinCares] = useState([]);
        
     useEffect(()=>{
        setHomeSkinCares(products.slice(41,45))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
             {homeSkinCare.map((item, index) => (
                 <HomeSkinCare key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
             ))}
        
        </div>
  )
}

export default HomeSkinCares