import React from 'react'
import Footer from '../components/Footer'
import CarouseOne from '../components/CarouseOne'
import CarouselTwo from '../components/CarouselTwo'
import CarouselThree from '../components/CarouselThree'
import HomeMakeups from '../components/HomeMakeups'
import CarouselFour from '../components/CarouselFour'
import HomeSkinCares from '../components/HomeSkinCares'
import CardScroller from '../components/CardScroller'
import Title from '../components/Title'
import TitlePerfume from '../components/TitlePerfume'
import HomePerfumes from '../components/HomePerfumes'

// import HomeMakeup from '../components/HomeMakeup'



const Home = () => {
  return (
    <div>

      
      <CarouseOne></CarouseOne>
      <TitlePerfume></TitlePerfume>
      <div className='max-w-7xl mx-auto px-4 my-20'>
        <HomePerfumes></HomePerfumes>
      </div>
      
      {/* <CarouselFive></CarouselFive> */}
      <CarouselFour></CarouselFour>
      <div className='mt-30'>
      <CarouselTwo></CarouselTwo></div>
      <div >
      <Title></Title></div>
      <div className='max-w-7xl mx-auto px-4 my-20'>
<HomeMakeups></HomeMakeups>
      </div>
      


      <CarouselThree></CarouselThree>
      
      
     
    </div>
  )
}

export default Home