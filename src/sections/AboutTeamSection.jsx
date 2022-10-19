import React from 'react'
import { ReactComponent as Hexagon } from '../assets/hex-shape.svg'
import { ReactComponent as Polygon } from '../assets/polygon.svg'

const AboutTeamSection = () => {
  return (
    <section className="bg-home-bottom team-bg relative">
      <Polygon key={3} className="absolute -top-20 -left-8 w-24 z-0" />
      <Polygon key={5} className="absolute bottom-[400px] -left-52 w-96 z-0" />
      <Polygon key={4} className="absolute top-0 right-8 w-32 z-0" />
      <h2 className="font-black text-center hero-text text-8xl font-montserrat uppercase">
        The SQE Team
      </h2>
      <article className="py-20 gap-y-20">
        <section className="flex justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
        </section>

        <section className="flex justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
          <article className="flex justify-center items-center relative">
            <Polygon key={1} className="absolute bottom-0 left-[13px] w-24 z-0" />
            <Hexagon className="w-72 h-72 z-10" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
        </section>

        <section className="flex justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
        </section>

        <section className="flex justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <Hexagon className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
          <article className="flex justify-center items-center relative">
            <Polygon key={2} className="absolute top-0 left-[190px] w-24 z-0" />
            <Hexagon className="w-72 h-72 z-10" />
            <div className="max-w-[250px] text-base leading-5 uppercase">
              <h2 className="font-bold">Hamid Pishdadian</h2>
              <p className="italic pb-4">CEO & Creator</p>
              <p className="text-xs">This is about Hamid.</p>
            </div>
          </article>
        </section>
      </article>

      <article className="flex relative justify-center pb-32">
        <button>
          <div className="w-[390px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
            <div className="w-[385px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
              <span className="uppercase font-bold bg-gradient text-lg text-gradient">Get Started Now</span>
            </div>
          </div>
        </button>
      </article>
    </section>
  )
}

export default AboutTeamSection