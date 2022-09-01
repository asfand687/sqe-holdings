import React from 'react'
import Ellipse from '../assets/ellipse.png'

const DashboardHeader = () => {
  return (
    <header className="w-full">
      <section>
        <div className="w-full max-w-6xl mx-auto relative z-10 space-y-6">
          <h1 className="text-8xl uppercase leading-[7rem] font-montserrat font-bold pt-8 max-w-lg">My SQE Dashboard</h1>
          <div className="flex items-center space-x-4">
            <img src={Ellipse} alt="ellipse" />
            <p className="font-semibold">User#1000</p>
          </div>
        </div>
      </section>
    </header>
  )
}

export default DashboardHeader