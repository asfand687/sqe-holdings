import React from 'react'

const HomeHero = () => {
  return (
    <section className="pt-20 text-white">
      <article className="mx-auto flex flex-col items-center">
        <h3 className="font-medium text-2xl">WELCOME TO SQE</h3>
        <h2 className='text-5xl md:text-xl lg:text-7xl 2xl:text-8xl font-black text-center uppercase hero-text py-4 font-montserrat pb-10'>Your World.<br /> Quantum Secure.</h2>
        <p className="font-medium text-2xl max-w-[53rem] mx-auto text-center leading-7 py-4 pb-16 px-4">
          SQE is a blockchain-based digital platform for everyday apps and services built on the first quantum secure, decentralized platform.
        </p>
        <button>
          <div className="w-[350px] h-[80px] clip-primary bg-gradient flex justify-center items-center">
            <div className="w-[345px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
              <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
            </div>
          </div>
        </button>
      </article>
      <section className="hero-bg md:h-[180vh] md:-mt-32">
      </section>
    </section>
  )
}

export default HomeHero