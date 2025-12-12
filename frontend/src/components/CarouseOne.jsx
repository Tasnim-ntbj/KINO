import React from 'react';
import { assets, carousels } from '../assets/assets';
import styles from './carousel.module.css';

const CarouseOne = () => {
 const carouselsData = carousels[0];
    
  const backgroundStyle = {
    backgroundImage: `url('${assets.carousel_1}')`
  };

  return (
        //  <header class="w-full relative -mt-[68px]">
       <div id="carousel-container" class="carousel w-full">
     
        <div
          
          className="carousel-item relative w-full carousel-item-full bg-cover bg-center"
          
          style={backgroundStyle}
        >
          <div className={styles.headerText}>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          
          <div
            className="absolute inset-0 flex items-center justify-center z-20 text-center text-white p-10"
          >
            <div>
              <p className="text-xl md:text-2xl tracking-wider mb-4 uppercase">
                {carouselsData.preHeader}
              </p>
              <h1 className="text-5xl md:text-7xl font-light mb-8">
                {carouselsData.headerLine1} <br />
                {carouselsData.headerLine2}
              </h1>
              
              <div>
                <a
                  href="#"
                  className="text-white text-lg uppercase underline mt-8"
                >
                  Discover the Collection
                </a>
              </div>
            </div>
          </div>


          
        </div>
        </div>
        // </div>
        // </header>
      

  

  );
}

export default CarouseOne 
 