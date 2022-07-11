import React from 'react'

const HomeBottomSection = () => {
  return (
    <section className="text-white bg-[#020B1D]">
      <div className="h-[800px] bg-home-bottom flex lg:px-20 justify-center items-center lg:space-x-10">
        <article className="space-y-4">
          <h2 className="text-7xl font-bold">Our Network</h2>
          <p className="text-4xl font-medium max-w-lg">
            SQE was designed to be hyper efficient, ultra secure and low cost. We use:
          </p>
        </article>
        <article className="text-2xl font-normal">
          <h2 className="text-3xl font-semibold">We use:</h2>
          <ul className="leading-7 list-disc pl-6 max-w-xl">
            <li>Proof of Knowledge (PoK)</li>
            <li>Distributed and sustainable mining network</li>
            <li>Only one block per transaction</li>
            <li>Advanced patented innovations</li>
            <li>Processing speeds up to 100,000 Transactions per Second (TPS)</li>
          </ul>

        </article>
      </div>


    </section>
  )
}

export default HomeBottomSection