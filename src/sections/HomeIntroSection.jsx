import React from 'react'

import Block2 from '../assets/blocks-02.svg'
import Block1 from '../assets/blocks-01.svg'
import Line from '../assets/line.svg'

const HomeIntroSection = () => {
  return (
    <section className="lg:py-20 bg-[#031840] text-white">
      <div className='bg-hexagon'>
        <div className="w-full relative lg:max-w-7xl mx-auto lg:space-y-20">
          <div className="absolute top-[36%] left-[26%]">
            <img src={Line} alt="line" />
          </div>
          <article className="flex flex-row-reverse items-center">
            <div className="flex-[2] flex flex-col items-end">
              <div>
                <h2 className="font-helvetica text-[55px] font-bold">WHAT IS SQE</h2>
                <p className="text-xl font-jost leading-6 max-w-lg">
                  SQE is a quantum secure platform for smart contracts, cryptocurrency, NFTs, and blockchain applications. Not only is SQE revolutionizing the way any user can create and deploy blockchain applications, but it also provides the first quantum secure cryptocurrency for which every unit of currency is its own NFT. Welcome to the future of digital platforms.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src={Block1} alt="block" />
            </div>
          </article>
          <article className='flex'>
            <div className="flex-[2]">
              <div className="">
                <h2 className="font-helvetica text-[55px] font-bold">Our Mission</h2>
              </div>
              <p className="text-xl font-jost leading-6 max-w-lg">
                The creator of SQE Holdings wanted to create a platform for all. Small business owners, developers, entrepreneurs, coders, designers, stay-at-home parents, students, and PhDs alike can use SQE to improve their lives. Whether someone has a lifetime of development experience or none whatsoever, SQE was designed to be accessible to everyone. SQE HOLDINGS is the first quantum secure platform to allow both technical and non-technical creators to easily develop and market their Smart Contracts, WEB3, NFT, and other Blockchain applications.
              </p>
            </div>
            <div className="flex-1">
              <img src={Block2} alt="block" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeIntroSection