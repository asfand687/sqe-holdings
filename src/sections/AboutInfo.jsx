import React from 'react'

const AboutInfo = () => {
  return (
    <div className=" text-white lg:-mt-14">
      <section>
        <article className="w-full flex items-center h-full">
          <div className="flex-1 lg:-mr-28">
          </div>
          <div className="flex-[2] flex flex-col lg:items-start text-right space-y-8">
            <div className="max-w-3xl text-right">
              <h2 className="text-5xl max-w-md ml-auto leading-tight pb-6 font-bold">
                Secured by simulated quantum entanglement
              </h2>
              <div className="opacity-60 text-xl">
                <p>
                  SQE’s expert team of creators has created never before seen security through the world’s first simulated quantum entanglement driven digital platform. With a decentralized network, one-blockper-contract
                  blockchain, and PoK secure communication, SQE is the fastest and
                  most secure platform for all your apps and services.
                </p>
                <button className="underline underline-offset-2">Get started on SQE</button>
              </div>
            </div>
          </div>
        </article>
      </section>
      <article className="w-full max-w-7xl mx-auto flex items-center">
        <h2 className="text-5xl lg:max-w-[14rem] leading-tight font-bold">A platform for all</h2>
        <div className="flex-1 text-xl max-w-3xl">
          <p className="max-w-3xl opacity-60">
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
        <article className="w-[384px] h-[490px] rounded-[3.5rem] p-8 py-10 bg-[#050D27] space-y-4 custom-shadow-sm">
          <h2 className="font-bold max-w-[100px] text-6xl leading-tight">Our Network</h2>
          <p className="text-xl font-light opacity-60 tracking-tight max-w-xs">SQE was designed to be hyper efficient, ultra secure and low cost.</p>
        </article>
        <article className="w-[384px] rounded-[3.5rem] p-8 py-10 bg-[#050D27] space-y-4 custom-shadow-sm">
          <h2 className="font-bold max-w-[100px] text-6xl leading-tight">We Use:</h2>
          <ul className="leading-7 w-full text-xl font-light tracking-tight opacity-60 list-disc pl-6">
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