import React from 'react'
import LogoBig from '../assets/logo-big.png'

const HomeHero = () => {
  return (
    <section className="hero-bg p-6 lg:py-16 text-white flex">
      <article className="flex-1 flex flex-col items-center">
        <img className="w-64 h-80" src={LogoBig} alt="Logo" />
        <h2 className="font-jost text-9xl pt-6 pb-2">SQE</h2>
        <p className='text-lg'>A DIGITAL PLATFORM FOR ALL</p>
      </article>
      <article className="flex-1"></article>

    </section>
  )
}

export default HomeHero