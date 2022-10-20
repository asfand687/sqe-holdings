import React from 'react'
import { ReactComponent as Arrow } from '../assets/arrow-right.svg'
import { ReactComponent as Polygon } from '../assets/polygon-lg.svg'
import LogoPolygon from '../assets/logo-mark-solid.png'

const LearningCenterBottom = () => {
  return (
    <section className="pb-20 md:h-[550px] space-y-16 md:space-y-32 relative">
      <Polygon className="absolute w-36 left-16 -top-32" />
      <div className="absolute right-48 top-0">
        <img src={LogoPolygon} alt="Logo Polygon" />
      </div>
      <div className="py-4 flex justify-center relative z-10">
        <button className="uppercase inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center">
          <span className="font-montserrat ">View More</span>
          <Arrow />
        </button>
      </div>

      <article className="flex relative justify-center pb-32">
        <button>
          <div className="w-[390px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
            <div className="w-[385px] h-[85px] clip-primary bg-white flex items-center justify-center">
              <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
            </div>
          </div>
        </button>
      </article>
    </section>
  )
}

export default LearningCenterBottom