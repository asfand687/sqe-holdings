import React from 'react'
import { ReactComponent as About } from '../assets/about-title.svg'

const AboutHero = () => {
  return (
    <section className="text-white relative z-10">
      <div className="flex h-[40vh] md:h-[35vh] items-end justify-center px-4">
        <div className="w-full max-w-[950px]">
          <About />
          <p className="text-[#effcffcc] text-2xl font-semibold pt-6">LEARN ABOUT THE SECURE QUANTUM EXCHANGE</p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero