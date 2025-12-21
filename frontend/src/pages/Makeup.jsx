import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeMakeup from '../components/HomeMakeup';


const Makeup = () => {
   const {products} = useContext(ShopContext);
      const [makeups, setMakeups] = useState([]);
      useEffect(()=>{
            setMakeups(products.slice(21,41))
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[])
        
  return (
    <div className='max-w-7xl mx-auto px-4 my-20'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
       {makeups.map((item, index) => (
                 <HomeMakeup key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
             ))}
    </div>
    </div>
  )
}

export default Makeup


