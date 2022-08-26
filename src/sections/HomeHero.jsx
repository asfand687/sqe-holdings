import React from 'react'
import LogoBig from '../assets/logo-big.png'

const HomeHero = () => {
  return (
    <section className="hero-bg px-6 py-20 text-white flex justify-center items-center">
      <article className="mx-auto flex flex-col items-center">
        <img className="w-64 h-80" src={LogoBig} alt="Logo" />
        <h3 className="font-medium text-2xl">WELCOME TO SQE</h3>
        <h2 className='text-4xl font-semibold capitalize py-4'>A digital platform for all</h2>
        <p className="font-medium text-2xl max-w-[53rem] mx-auto text-center leading-7">
          SQE is a constantly-growing digital world of everyday apps and services built on the first quantum secure, decentralized platform.
        </p>
      </article>
    </section>
  )
}

export default HomeHero