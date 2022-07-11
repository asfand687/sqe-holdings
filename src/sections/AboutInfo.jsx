import React from 'react'

const AboutInfo = () => {
  return (
    <div className="bg-[#020B1D] text-white pb-20">
      <section className="about-info-bg h-[600px]">
        <article className="w-full max-w-5xl mx-auto flex items-center h-full flex-row-reverse">
          <div className="text-right space-y-8">
            <h2 className="text-6xl font-bold">SQE is a quantum <br />
              secure platform</h2>
            <p className="text-[20px] max-w-[808px]">
              for smart contracts, cryptocurrency, NFTs, and blockchain applications.
              Not only is SQE revolutionizing the way any user can create and deploy
              blockchain applications, but it also provides the first quantum secure
              cryptocurrency for which every unit of currency is its own NFT.
            </p>
          </div>
        </article>
      </section>
      <article className="w-full max-w-7xl mx-auto flex items-center">
        <h2 className="text-6xl max-w-xs leading-tight bold">A platform for all</h2>
        <div className="flex-1 text-[2-px] max-w-[745px]">
          <p className="max-w-3xl">
            The creator of SQE Holdings wanted to create a platform for all. Small
            business owners, developers, entrepreneurs, coders, designers,
            stay-at-home parents, students, and PhDs alike can use SQE to improve
            their lives. Whether someone has a lifetime of development experience or
            none whatsoever, SQE was designed to be accessible to everyone. SQE
            Holdings is the first quantum secure platform to allow both technical and
            non-technical creators to easily develop and market their Smart Contracts,
            WEB3, NFT, and other Blockchain applications.
          </p>
        </div>
      </article>

      <section className="py-10 flex justify-center space-x-12 text-white">
        <article className="w-[482px] h-[588px] rounded-3xl p-8 py-10 bg-[#375284] space-y-4 custom-shadow-sm">
          <h2 className="font-bold max-w-[100px] text-[75px] leading-tight">Our Network</h2>
          <p className="text-[28px] font-medium max-w-[360px]">SQE was designed to be hyper efficient, ultra secure and low cost.</p>
        </article>
        <article className="w-[482px] h-[588px]  rounded-3xl p-8 py-10 bg-[#375284] space-y-4 custom-shadow-sm">
          <h2 className="font-bold max-w-[100px] text-[75px] leading-tight">We Use:</h2>
          <ul className="leading-7 text-[22px] list-disc pl-6">
            <li>Proof of Knowledge (PoK)</li>
            <li>Distributed and sustainable mining network</li>
            <li>Only one block per transaction</li>
            <li>Advanced patented innovations</li>
            <li>Processing speeds up to 100,000 Transactions per Second (TPS)</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default AboutInfo