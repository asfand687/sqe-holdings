import React from 'react'
import Logo from '../assets/logo-big.png'
import CubesLeft from '../assets/cubes-group-left.svg'
import CubesRight from '../assets/cubes-group-right.svg'


const ServicesSection = () => {
  return (
    <>
      <section className="py-20 bg-[#031840] text-white services-bg">
        <div className="py-20">
          <h2 className="font-helvetica uppercase font-bold text-5xl text-center pb-4">Services</h2>
          <article className="flex justify-center gap-x-10">
            <div className="bg-hex w-[331px] h-[369px] flex items-center">
              <div className="h-44 px-8">
                <h2 className='text-white text-5xl uppercase font-bold font-helvetica pb-4'>Item</h2>
                <p className="text-2xl font-light">info info info info info info info info info info</p>
              </div>
            </div>
            <div className="bg-hex w-[331px] h-[369px] flex items-center">
              <div className="h-44 px-8">
                <h2 className='text-white text-5xl uppercase font-bold font-helvetica pb-4'>Item</h2>
                <p className="text-2xl font-light">info info info info info info info info info info</p>
              </div>
            </div>
          </article>
          <article className="relative -top-16 flex justify-center gap-x-10">
            <div className="bg-hex w-[331px] h-[369px] flex items-center">
              <div className="h-44 px-8">
                <h2 className='text-white text-5xl uppercase font-bold font-helvetica pb-4'>Item</h2>
                <p className="text-2xl font-light">info info info info info info info info info info</p>
              </div>
            </div>
            <div className="bg-hex w-[331px] h-[369px] flex items-center">
              <div className="h-44 px-8">
                <h2 className='text-white text-5xl uppercase font-bold font-helvetica pb-4'>Item</h2>
                <p className="text-2xl font-light">info info info info info info info info info info</p>
              </div>
            </div>
            <div className="bg-hex w-[331px] h-[369px] flex items-center">
              <div className="h-44 px-8">
                <h2 className='text-white text-5xl uppercase font-bold font-helvetica pb-4'>Item</h2>
                <p className="text-2xl font-light">info info info info info info info info info info</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <article className="flex bg-[#041330] justify-between px-4 pb-20">
        <img className="flex-1" src={CubesLeft} alt="cubes left" />
        <div className="w-56">
          <img className="w-full" src={Logo} alt="SQE Holdings" />
        </div>
        <img className="flex-1" src={CubesRight} alt="cubes right" />
      </article>
    </>
  )
}

export default ServicesSection