import React from 'react'
import { Link } from 'react-router-dom'
import HeroHeading from '../assets/home-hero-heading.png'

const HomeHero = () => {
  return (
    <section className="pt-20 relative text-white md:h-screen home-hero">
      <article className="mx-auto relative z-10 flex flex-col items-center">
        <h3 className="font-medium text-2xl tracking-widest text-[#EFFCFF] opacity-80">WELCOME TO SQE</h3>
        <img className="py-4 px-4" src={HeroHeading} alt="Your World. Quantum Secure" />
        <p className="font-medium text-2xl max-w-[53rem] mx-auto text-center leading-7  pb-16 px-4">
          SQE is a blockchain-based digital platform for everyday apps and services built on the first quantum secure, decentralized platform.
        </p>
        <Link to="/register">
          <button>
            <div className="w-[350px] h-[80px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[345px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
                <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
              </div>
            </div>
          </button>
        </Link>
      </article>
    </section>
  )
}

export default HomeHero