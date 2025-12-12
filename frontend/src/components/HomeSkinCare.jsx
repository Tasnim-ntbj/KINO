import React from 'react'

const HomeSkinCare = ({HomeSkinCares}) => {
  return (
    <div className="card w-full bg-base-100 shadow-none rounded-none cursor-pointer">
            
            
            <figure className="relative h-75  w-full rounded-none overflow-hidden">
                
                
                <img 
                    src={HomeSkinCares.image} 
                    alt={HomeSkinCares.name} 
                    className="h-full w-full object-cover" 
                />
                
                
                <div className="absolute inset-0 bg-purple-400/10"></div> 
            
            </figure>
            
            <div className="card-body p-4">
                <h2 className="card-title font-normal text-base">{HomeSkinCares.name}</h2>
                <p className="text-sm text-gray-500">BDT {HomeSkinCares.price}</p>
            </div>
            
        </div>
  )
}

export default HomeSkinCare