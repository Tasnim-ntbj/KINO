import React from 'react'
import Footer from '../components/Footer'
import CarouseOne from '../components/CarouseOne'
import CarouselTwo from '../components/CarouselTwo'
import CarouselThree from '../components/CarouselThree'
import HomeMakeups from '../components/HomeMakeups'
// import HomeMakeup from '../components/HomeMakeup'



const Home = () => {
  return (
    <div>

      
      <CarouseOne></CarouseOne>
      <CarouselTwo></CarouselTwo>
      <div className='max-w-7xl mx-auto px-4 my-20'>
<HomeMakeups></HomeMakeups>
      </div>
      

      <CarouselThree></CarouselThree>
      <Footer></Footer>
      
     
    </div>
  )
}

export default Home