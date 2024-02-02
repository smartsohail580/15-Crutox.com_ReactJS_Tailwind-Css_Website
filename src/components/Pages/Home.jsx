import React from 'react'
import HeroSection from '../Hero'
import Journey from '../Journey'
import Services from '../Services'
import Roadmap from './Roadmap'
import HorizontalSlider from '../Slider'


function Home() {
  return (
    <>
    <HeroSection />
    <Services />
    <Journey />
    <Roadmap />
    <HorizontalSlider />
    </>
  )
}

export default Home
