import React from 'react'
import Search from '../assets/search.svg'
import Location from '../assets/location.svg'

const HomeIntroSection = () => {
  return (
    <section className="p-6 lg:p-20 bg-[#031840] text-white">
      <div className="bg-[#D9D9D9] text-3xl text-[#01165C] h-[512px] flex justify-center items-center mb-8">
        Video
      </div>
      <div className='bg-hexagon py-10'>
        <article>
          <div className="flex items-center space-x-8">
            <img className="h-12 w-12" src={Search} alt="search" />
            <h2 className="font-saxmono text-[55px]">Who We Are</h2>
          </div>
          <p className="max-w-[698px] text-xl leading-6">
            SQE is a quantum secure platform for smart contracts, cryptocurrency, NFTs, and blockchain applications. Not only is SQE revolutionizing the way any user can create and deploy blockchain applications, but it also provides the first quantum secure cryptocurrency for which every unit of currency is its own NFT. Welcome to the future of digital platforms.
          </p>
        </article>
        <article className='flex flex-row-reverse'>
          <div>
            <div className="flex items-center space-x-8">
              <img className="h-12 w-12" src={Location} alt="search" />
              <h2 className="font-saxmono text-[55px]">Our Mission</h2>
            </div>
            <p className="max-w-[698px] text-xl leading-6">
              The creator of SQE Holdings wanted to create a platform for all. Small business owners, developers, entrepreneurs, coders, designers, stay-at-home parents, students, and PhDs alike can use SQE to improve their lives. Whether someone has a lifetime of development experience or none whatsoever, SQE was designed to be accessible to everyone. SQE HOLDINGS is the first quantum secure platform to allow both technical and non-technical creators to easily develop and market their Smart Contracts, WEB3, NFT, and other Blockchain applications.
            </p>
          </div>
        </article>
      </div>
      <div className="bg-[#D9D9D9] text-3xl text-[#01165C] h-[308px] flex justify-center items-center my-8">
        Diagram
      </div>
      <div className="pt-6">
        <h2 className="text-gradient text-5xl text-center font-saxmono">Get Involved</h2>
        <div className="flex justify-center lg:justify-between flex-wrap gap-12 py-6">
          <article className="bg-[#D9D9D9] w-[240px] h-[240px]"></article>
          <article className="bg-[#D9D9D9] w-[240px] h-[240px]"></article>
          <article className="bg-[#D9D9D9] w-[240px] h-[240px]"></article>
          <article className="bg-[#D9D9D9] w-[240px] h-[240px]"></article>
        </div>
      </div>
    </section>
  )
}

export default HomeIntroSection