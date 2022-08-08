import React from 'react'
import { ReactComponent as Search } from '../assets/search-icon.svg'

const LearningSectionHero = () => {
  return (
    <>
      <div className="about-bg h-[400px]">
        <div className="relative w-full max-w-7xl mx-auto z-10 py-20">
          <h1 className="text-7xl font-semibold pt-8">Learning Center</h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <h2 className="-mt-48 text-center text-5xl leading-tight lg:pt-20 font-bold pb-4">
          This is a heading <br />
          for the learning center.
        </h2>

        <div className="max-w-4xl mx-auto opacity-60 flex flex-col items-center leading-5 pb-6 lg:pb-8">
          <p className="text-center">
            SQE’s expert team of creators has created never before seen security through the world’s first simulated quantum entanglement driven digital platform. With a decentralized network, one-block-per blockchain, and PoK
            secure communication, SQE is the fastest and most secure platform for all your apps and services.
          </p>
          <button className="underline underline-offset-2">
            Get started on SQE
          </button>
        </div>

        <section className="bg-[#050D27] relative text-white rounded-lg px-2 lg:px-6 py-3 w-full mb-8 custom-shadow-white flex justify-center text-2xl font-bold cursor-pointer hover:opacity-80">
          <input className="w-full outline-none bg-transparent placeholder-white text-base font-normal border-b border-white" placeholder="Search" />
          <Search className="absolute w-5 right-2 lg:right-6 top-2" />
        </section>
      </div>
    </>
  )
}

export default LearningSectionHero