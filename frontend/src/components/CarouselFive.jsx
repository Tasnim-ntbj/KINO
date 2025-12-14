import React from 'react'
import { assets } from '../assets/assets'
import HomeMakeGrids from './HomeMakeGrids'

const CarouselFive = () => {
    return (

        <div className="card card-side bg-base-100 shadow-none rounded-none w-full h-[650px]">
        
            <div className="card-body w-1/2 py-5 px-8">
                <h2 className="card-title text-4xl mt-5 mb-10">Makeup</h2>
                <HomeMakeGrids></HomeMakeGrids>
                
                <div className="card-actions justify-start">
                    <button className="btn btn-outline mt-8">See more</button>
                </div>
            </div>
            
           
            <figure className="h-full w-1/3 overflow-hidden">
                
                <img 
                    src={assets.carousel_2} 
                    alt="Makeup Promotion"
                    className="h-full w-full object-cover"
                />
            </figure>
            
        </div>
    )
}

export default CarouselFive