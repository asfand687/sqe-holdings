import React from 'react'
import ImageLeft from '../assets/home-left-cropped.png'
const ServicesBottomSection = () => {
  return (
    <section className="relative h-[550px] overflow-y-hidden flex justify-center overflow-hidden">
      <img className="absolute left-0 top-0" src={ImageLeft} alt="background" />
      <article className="flex justify-center relative -top-16">
        <button>
          <div className="w-[350px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
            <div className="w-[345px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
              <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
            </div>
          </div>
        </button>
      </article>
    </section>
  )
}

export default ServicesBottomSection