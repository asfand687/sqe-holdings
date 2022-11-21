import React from 'react'
import ImageLeft from '../assets/services-bottom-bg.png'
import { ReactComponent as Polygon } from '../assets/polygon.svg'
import { Link } from 'react-router-dom'

const ServicesBottomSection = () => {
  return (
    <section className="relative h-[550px] overflow-y-hidden flex justify-center overflow-hidden">
      <img className="absolute left-0 -top-44" src={ImageLeft} alt="background" />
      <Polygon key={1} className="absolute left-32 -top-12 w-48" />
      <Polygon key={2} className="absolute -left-32 -bottom-44 w-96" />
      <article className="flex justify-center relative top-16">
        <Link to="/register">
          <button>
            <div className="w-[350px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[345px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
                <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
              </div>
            </div>
          </button>
        </Link>
      </article>
    </section>
  )
}

export default ServicesBottomSection