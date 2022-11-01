import React from 'react'
import { ReactComponent as Polygon } from '../assets/polygon.svg'

const AboutVideoSection = () => {
  return (
    <section className="text-white -mt-56 relative px-4">
      <article className="flex justify-center items-center">
        <div className="w-full max-w-5xl flex justify-center items-center bg-[#003E78] uppercase h-[500px] z-10">
          Video
        </div>
      </article>
      <div className="flex w-full absolute -bottom-96 max-w-8xl mx-auto justify-end -mt-8">
        <Polygon key={2} className=" z-0" />
      </div>
      <div className="absolute -left-28 -top-64 z-0">
        <svg width="600" height="680" viewBox="0 0 386 427" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter1_f_0_1)">
            <path d="M193.008 103.634L288.271 158.634V268.634L193.008 323.634L97.745 268.634V158.634L193.008 103.634Z" fill="url(#paint0_linear_0_1)" />
          </g>
          <defs>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default AboutVideoSection