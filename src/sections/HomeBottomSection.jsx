import React from 'react'

const HomeBottomSection = () => {
  return (
    <section className="text-white border-b border-[#0E2043]">
      <div className="h-[800px] 2xl:h-[950px] bg-home-bottom">
        <div className="max-w-7xl flex justify-between h-full items-center mx-auto">
          <article className="space-y-4">
            <h2 className="text-[80px] leading-[6rem] font-bold">Our Network</h2>
            <p className="text-4xl font-medium max-w-[477px]">
              SQE was designed to be hyper efficient, ultra secure and low cost. We use:
            </p>
          </article>
          <article className="text-2xl font-normal pt-8">
            <h2 className="text-3xl font-semibold">We use:</h2>
            <ul className="leading-7 list-disc pl-6 max-w-[580px]">
              <li>Proof of Knowledge (PoK)</li>
              <li>Distributed and sustainable mining network</li>
              <li>Only one block per transaction</li>
              <li>Advanced patented innovations</li>
              <li>Processing speeds up to 100,000 Transactions per Second (TPS)</li>
            </ul>
          </article>
        </div>
      </div>


    </section>
  )
}

export default HomeBottomSection