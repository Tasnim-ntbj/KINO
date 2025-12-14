import React from 'react'
import { assets } from '../assets/assets'
import styles from './title.module.css';

import HomeSkinCares from './HomeSkinCares'
import { NavLink } from 'react-router-dom';
const CarouselFour = () => {
  return (
    <div className="card card-side bg-black/80 shadow-none rounded-none">
  <figure>
    <img src={assets.carousel_5}/>
  </figure>
  <div className="card-body">
    <div className={styles.titleText}>
    <h2 className="card-title text-4xl mt-5 mb-12 text-white ">Skincare</h2>
     </div>
    <HomeSkinCares></HomeSkinCares>
   
    <div className="card-actions justify-end ">
      <NavLink to="/skincare">
      <button className="btn btn-outline bg-white mt-8">See more</button>
      </NavLink>
    </div>
  </div>
</div>
  )
}
export default CarouselFour