import React from 'react'
import { assets } from '../assets/assets'
import styles from './title.module.css';

import HomeSkinCares from './HomeSkinCares'
import { NavLink, useNavigate } from 'react-router-dom';
const CarouselFour = () => {
      const navigate = useNavigate();
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
   
    <div className="card-actions justify-end  ">
      
      {/* <button className="btn btn-outline bg-white mt-8">See more</button> */}
      <button  onClick={()=>navigate('/skincare')} className=" text-gray-600  hover:text-black font-normal mt-6 text-sm btn btn-outline bg-white border-0 rounded-sm pt-[5px] pb-[5px] hover:bg-stone-300 shadow-none transition-colors duration-300 ease-in-out">
                                <span >See more</span> 
                            </button>
    
    </div>
  </div>
</div>
  )
}
export default CarouselFour