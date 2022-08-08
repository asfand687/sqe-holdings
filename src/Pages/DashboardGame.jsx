import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'
import { ReactComponent as Dots } from '../assets/dots.svg'

const DashboardGames = () => {
  return (
    <section className="relative lg:-top-32 w-full max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:space-x-12">
      <article to="/dashboard/exchange" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
        <div className="h-36 flex items-center px-6">
          <h2 className='text-white text-2xl font-bold pb-1'>Game</h2>
        </div>
      </article>
      <article className="flex-1">
        <h2 className="font-semibold text-lg pb-4">Active Games (15)</h2>
        <div className="relative flex max-w-3xl gap-6 flex-wrap">
          <ArrowRight className="absolute  right-0 top-[47%]" />
          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>

          <article className="bg-white text-gray-800 h-40 w-40 rounded-lg flex justify-center items-center">
            Game
          </article>
        </div>
        <div className="max-w-3xl pt-8 flex justify-center">
          <Dots />
        </div>

      </article>
    </section>
  )
}

export default DashboardGames