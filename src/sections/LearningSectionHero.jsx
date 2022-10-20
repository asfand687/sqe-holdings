import React from 'react'
import { ReactComponent as Search } from '../assets/search-icon.svg'
import { ReactComponent as InputPolygon } from '../assets/input-polygon.svg'
import { ReactComponent as Polygon } from '../assets/polygon-light.svg'

const LearningSectionHero = () => {
  return (
    <section className="text-[#003E78] pb-10 relative z-[3]">
      <div className="md:h-screen bg-white relative bg-learning-main">
        <div className="relative w-full md:h-[600px] flex items-center justify-center z-10">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center uppercase py-4 font-montserrat pb-10 text-[#042257]">
            Learning Center
          </h1>
        </div>
        <div className="absolute left-0 top-0 w-full z-0 h-screen bg-learning-hero-01"></div>
        <div className="absolute right-0 top-0 w-full z-0 h-screen bg-learning-hero-02"></div>
      </div>

      <div className="w-full max-w-[900px] mx-auto relative">
        <h2 className="text-center text-2xl max-w-lg mx-auto uppercase font-semibold">
          WELCOME TO THE SQE LEARNING CENTER
        </h2>
        <p className="text-center text-2xl md:text-3xl leading-8 pt-6 pb-10 text-[#042257]">
          Explore everything from how to use our features to the blockchain basics to the complexities of secure quantum entanglement.
        </p>
      </div>
      <section className="relative max-w-2xl mx-auto">
        <Polygon className="absolute w-28 -left-14 -top-20" />
        <InputPolygon className="w-full absolute -bottom-4" />
        <input className="w-full font-semibold text-base md:text-lg px-14 outline-none bg-gradient-to-r from-[#042257] to-[#0036C1] text-gradient relative z-10 py-[3px]" placeholder="SEARCH" />
        <Search className="absolute text-[#042257] text-lg w-3 md:w-5 left-3 lg:left-6 top-1 md:top-[7px]" />
      </section>
    </section>
  )
}

export default LearningSectionHero