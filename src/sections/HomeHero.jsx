import React from 'react'
import LogoBig from '../assets/logo-big.png'

const HomeHero = () => {
  return (
    <section className="hero-bg px-6 py-20 text-white flex justify-center items-center">
      <article className="mx-auto flex flex-col items-center">
        <img className="w-64 h-80" src={LogoBig} alt="Logo" />
        <h2 className='text-4xl font-semibold'>A digital platform for all</h2>
      </article>
    </section>
  )
}

export default HomeHero