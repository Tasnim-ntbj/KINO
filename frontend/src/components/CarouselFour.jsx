import React from 'react'
import { assets } from '../assets/assets'

import HomeSkinCares from './HomeSkinCares'
const CarouselFour = () => {
  return (
    <div className="card card-side bg-base-100 shadow-none">
  <figure>
    <img src={assets.carousel_5}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-4xl mt-5 mb-10">Skincare</h2>
    <HomeSkinCares></HomeSkinCares>
    
    <div className="card-actions justify-end">
      <button className="btn btn-outline mt-8">See more</button>
    </div>
  </div>
</div>
  )
}
export default CarouselFour