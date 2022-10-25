import React from 'react'

import { ReactComponent as Hexagon } from '../assets/checkbox-polygon-filled.svg'

const DashboardHeader = () => {
  return (
    <header className="w-full text-white">
      <section>
        <div className="w-full max-w-6xl mx-auto relative z-10 space-y-6">
          <h1 className='text-6xl md:text-7xl 2xl:text8xl font-black uppercase hero-text py-4 font-montserrat md:pt-32 pb-4'>
            Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <Hexagon />
            <p className="font-semibold">User#1000</p>
          </div>
        </div>
      </section>
    </header>
  )
}

export default DashboardHeader