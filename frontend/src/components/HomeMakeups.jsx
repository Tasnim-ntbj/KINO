
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeMakeup from './HomeMakeup';
import { useNavigate } from 'react-router-dom';
const HomeMakeups = () => {
  const {products} = useContext(ShopContext);
    const [makeups, setMakeups] = useState([]);
      const navigate = useNavigate();
    useEffect(()=>{
      setMakeups(products.slice(21,29))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
       {makeups.map((item, index) => (
                 <HomeMakeup key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
             ))}

<div className="mt-12 col-span-full flex justify-center">
                
               <button  onClick={()=>navigate('/makeup')}
                     className="btn btn-ghost btn-outline border-solid text-base px-10 py-2 rounded-4xl shadow-none antialiased"
                  
               >
                   Discover the Selection
                </button>
                
            </div>
    </div>
  )
}

export default HomeMakeups