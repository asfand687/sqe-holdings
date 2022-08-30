import React from 'react'
import HeroRight from '../assets/services-hero-right.png'
import HeroLeft from '../assets/services-hero-left.png'
import {ReactComponent as Polygon} from '../assets/polygon.svg'
import LogoPolygon from '../assets/logo-polygon.png'


const ServicesHero = () => {
  
  return (
    <div className="text-white relative">
      <img src={HeroRight} className="absolute -top-24 z-0 right-0" alt="Hero Background Right"/>
      <img src={HeroLeft} className="absolute -top-24 z-0 left-0" alt="Hero Background Left"/>
      <Polygon key={1} className="absolute -left-12 -top-48 w-48"/>
      <Polygon key={2} className="absolute -left-12 top-48 w-28"/>
      <Polygon key={3} className="absolute -right-8 top-52 w-28"/>
      <img src={LogoPolygon} className="absolute right-0 top-0 w-72" alt="SQE Logo"/>
      <div className="w-full max-w-4xl mx-auto pt-10 lg:pt-32 lg:pb-10 relative z-10">
      <h1 className='text-8xl font-black uppercase hero-text py-4 font-montserrat pb-10'>
        Services
      </h1>
      <h2 className="text-3xl text-[#EFFCFF]">Explore all the things you can do on the SQE platform.</h2>
      </div>
    </div>
  )
}

export default ServicesHero