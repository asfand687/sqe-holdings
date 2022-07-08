import React from 'react'


const ServicesSection = () => {
  return (
    <>
      <section className="py-20 relative bg-[#020E26] text-white services-bg">
        <div className="py-20 realtive z-10">
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
    </>
  )
}

export default ServicesSection