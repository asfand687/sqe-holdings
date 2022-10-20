import React from 'react'
import ServicesGraphics from '../assets/services-graphics.png'

const ServicesSection = () => {
  return (
    <section className="text-white relative bg-[#002660] bg-opacity-50 py-10 px-4">
      <div className="flex items-center">
        <h2 className="uppercase text-gradient font-black text-[2.5rem] leading-10 lg:text-7xl 2xl:text-8xl text-center pb-6 lg:pb-16 mx-auto z-10 relative hero-text max-w-4xl md:max-w-5xl">Simulated Quantum <br /> <span className="contact__title-bg-gradient">Entanglement At Work</span></h2>
      </div>
      <section className="flex flex-col md:flex-row justify-center items-center px-4">
        <article className="uppercase leading-10 font-black space-y-2 md:pt-96 tracking-wider px-4">
          <h2 className="text-[2.5rem] md:text-6xl 2xl:text-7xl">Transactions</h2>
          <h3 className="text-[2.5rem] md:text-6xl 2xl:text-7xl">per Second</h3>
          <h3 className="text-3xl md:text-4xl 2xl:text-5xl pb-14">Capability</h3>
          <p className="text-[8px] font-normal text-[#666666] max-w-lg">
            *Based on statistics provided by the companies themselves  on each company’s business website.
          </p>
        </article>
        <article className="md:-ml-32">
          <img className="w-full" src={ServicesGraphics} alt="Services Infographics" />
        </article>
      </section>
    </section>
  )
}

export default ServicesSection