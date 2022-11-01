import React from 'react'
import ServicesGraphics from '../assets/services-graphics.png'
import HomeServicesBottomHeading from '../assets/home-services-bottom-heading.png'

const ServicesSection = () => {
  return (
    <section className="text-white relative bg-[#002660] bg-opacity-50 py-10 px-4">
      <img className="px-4 mx-auto py-4" src={HomeServicesBottomHeading} alt="Stimuilated Quantum Entaglement at Work" />
      <section className="flex flex-col md:flex-row justify-center items-center px-4">
        <article className="uppercase leading-10 font-black space-y-2 md:pt-96 tracking-wider px-4">
          <h2 className="text-[2.5rem] md:text-6xl 2xl:text-7xl">Transactions</h2>
          <h3 className="text-[2.5rem] md:text-6xl 2xl:text-7xl">per Second</h3>
          <h3 className="text-3xl md:text-4xl 2xl:text-5xl pb-14">Capability</h3>
          <p className="text-[8px] font-normal text-[#666666] max-w-lg">
            *Based on statistics provided by the companies themselves  on each company’s business website.
          </p>
        </article>
        <article className="md:-ml-32 lg:-ml-24 2xl:-ml-16 2xl:-mt-16">
          <img className="w-full" src={ServicesGraphics} alt="Services Infographics" />
        </article>
      </section>
    </section>
  )
}

export default ServicesSection