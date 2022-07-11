import React from 'react'

const AboutCostSection = () => {
  return (
    <section className="bg-[#041330] text-white h-[980px] flex items-center services-bg services-bg-full">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-6">
        <h2 className="font-semibold text-6xl leading-tight max-w-2xl">
          Keeping costs down across the charts
        </h2>
        <article className='flex space-x-6 items-center'>
          <h2 className="text-7xl font-semibold">VISA</h2>
          <div className='flex-1 space-y-2'>
            <p className="text-xl font-medium">processes</p>
            <div className="bar-gradient w-full h-3"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-6xl font-semibold">$XX.XX</h2>
            <p className="text-right">/transaction</p>
          </div>
        </article>

        <article className='flex space-x-6 items-center'>
          <h2 className="text-7xl font-semibold pr-4">SQE</h2>
          <div className='space-y-2'>
            <p className="text-xl font-medium">processes</p>
            <div className="bar-gradient w-64 h-3"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-6xl font-semibold">$XX.XX</h2>
            <p className="text-right">/transaction</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutCostSection