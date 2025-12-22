import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeSkinCare from '../components/HomeSkinCare';


const Skincare = () => {
   const {products} = useContext(ShopContext);
    const [perfumes, setPerfumes] = useState([]);
      useEffect(()=>{
        setPerfumes(products.slice(41,53))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    
  return (
 <div className='max-w-7xl mx-auto px-4 my-20'>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
             {perfumes.map((item, index) => (
                 <HomeSkinCare key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
             ))}
        
      </div>
      </div>
  )
}

export default Skincare