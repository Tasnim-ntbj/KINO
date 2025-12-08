import React from 'react';

const Carousel = ({Carousels}) => {
  
 
  const backgroundStyle = {
    backgroundImage: `url('${Carousels.imageURL}')`
  };

  return (
       
      <div id="carousel-container" className="carousel w-full">
        <div
          
          className="carousel-item relative w-full carousel-item-full bg-cover bg-center"
          
          style={backgroundStyle}
        >
          
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          
          <div
            className="absolute inset-0 flex items-center justify-center z-20 text-center text-white p-8"
          >
            <div>
              <p className="text-xl md:text-2xl tracking-wider mb-4 uppercase">
                New Arrivals
              </p>
              <h1 className="text-5xl md:text-7xl font-light mb-8">
                {Carousels.headerLine1} <br />
                {Carousels.headerLine2}
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
    
  );
}

export default Carousel;