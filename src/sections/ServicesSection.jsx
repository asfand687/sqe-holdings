import React from 'react'
import ServicesGraphics from '../assets/services-graphics.png'
import HomeServicesBottomHeading from '../assets/home-services-bottom-heading.png'

const ServicesSection = () => {
  return (
    <section className="text-white relative bg-[#002660] bg-opacity-50 py-10 px-4">
      <img className="w-full max-w-[1150px] px-4 mx-auto pt-10 pb-32" src={HomeServicesBottomHeading} alt="Stimuilated Quantum Entaglement at Work" />
      <section className="">
        <article>
          <img className="w-full mx-auto max-w-[1200px]" src={ServicesGraphics} alt="Services Infographics" />
        </article>

        <article className="uppercase leading-10 font-black space-y-2 tracking-wider pt-20 w-full max-w-[1280px] mx-auto px-4">
          <h2 className="text-[2rem] md:text-3xl xl:4xl 2xl:6xl">Transactions per Second</h2>
          <h3 className="text-3xl md:text-4xl 2xl:text-5xl">Capability</h3>
          <p className="text-[8px] font-normal text-[#666666] max-w-lg">
            *Based on statistics provided by the companies themselves  on each company’s business website.
          </p>
        </article>
      </section>
    </section>
  )
}

export default ServicesSection