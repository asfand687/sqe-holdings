import React from 'react'
import ImageLeft from '../assets/home-left.png'
import ImageRight from '../assets/home-right.png'

const ServicesSection = () => {
  return (
    <section className="text-white relative">
      <img className="absolute left-0 top-0" src={ImageLeft} alt="background" />
      <img className="absolute right-0 top-0" src={ImageRight} alt="background" />
      <div className="h-[750px] flex items-center">
        <h2 className="font-extrabold text-7xl 2xl:text-8xl text-center pb-6 lg:pb-16 mx-auto z-10 relative font-montserrat hero-text max-w-4xl">WHAT REAL SECURITY LOOKS LIKE</h2>
      </div>
      <section className="h-[300px] flex justify-center items-end">
        <h2 className="text-2xl font-bold text-center">COMPARISONS: GRAPHIC EXPLAINERS</h2>
      </section>
      <div className="min-h-[400px]" />
    </section>
  )
}

export default ServicesSection