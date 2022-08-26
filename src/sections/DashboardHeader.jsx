import React from 'react'
import Ellipse from '../assets/ellipse.png'

const DashboardHeader = () => {
  return (
    <header className="w-full">
      <section className="h-[450px]">
        <div className="w-full max-w-7xl mx-auto relative z-10 py-20 space-y-6">
          <h1 className="text-7xl font-semibold pt-8">My SQE Dashboard</h1>
          <div className="flex items-center space-x-4">
            <img src={Ellipse} alt="ellipse" />
            <p>User#1000</p>
          </div>
        </div>
      </section>
    </header>
  )
}

export default DashboardHeader