import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const HomeSkinCare= ({id, image, name, price}) => {
     const {currency} = useContext(ShopContext);
  return (
     <Link to={`/skincare/${id}`}>
    <div className="card w-full bg-stone-200 shadow-none rounded-none cursor-pointer"> 
        <div className='hover:bg-black/20'>
            
            
            <figure className="relative h-75  w-full rounded-none overflow-hidden">
                
                
                <img 
                    src={image} 
                    alt={name} 
                    className="h-full w-full object-cover" 
                />
                
                
                <div className="absolute inset-0 bg-purple-400/10"></div> 
            
            </figure>
            
            <div className="card-body p-4">
                <h2 className="card-title font-normal text-base">{name}</h2>
                <p className="text-sm text-gray-500"><span className='font-bold text-stone-600'>{currency} </span> {price}</p>
            </div>
            
        
        </div>
        </div>
</Link>
   
            
    );
}

export default HomeSkinCare