import React from 'react'
import Logo from '../assets/logo.png'

const HomeHero = () => {
  return (
    <section className="hero-bg p-6 lg:p-20 text-white flex flex-col justify-between">
      <article className="space-y-3">
        <h1 className="font-saxmono text-5xl">SQEHOLDINGS</h1>
        <p className="text-lg">A Digital Platform For All.</p>
      </article>
      <article>
        <img src={Logo} alt="Logo" />
      </article>
    </section>
  )
}

export default HomeHero