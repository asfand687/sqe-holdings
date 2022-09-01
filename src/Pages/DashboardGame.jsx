import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'
import { ReactComponent as Dots } from '../assets/dots.svg'

const DashboardGames = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:space-x-12">
      <article className="bg-hex w-[330px] h-[380px] flex items-center">
        <div className="h-36 flex justify-center items-center pl-6 w-full">
          <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>Game</h2>
        </div>
      </article>
      <article className="flex-1">
        <h2 className="font-semibold text-lg pb-4">Active Games (15)</h2>
        <div className="relative flex max-w-3xl gap-6 flex-wrap">
          <ArrowRight className="absolute  right-0 top-[47%]" />
          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
          </article>

          <article className="bg-gradient-accent p-[2px] text-gray-800 h-40 w-40 rounded-xl flex justify-center items-center">
            <div className="bg-white rounded-xl w-full h-full flex justify-center items-center font-medium">
              Game
            </div>
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