import React from 'react'

const HomeBottomSection = () => {
  return (
    <section className="text-white border-b border-[#0E2043]">
      <div className="h-[800px] 2xl:h-[950px] bg-home-bottom">
        <div className="max-w-7xl flex justify-center lg:space-x-32 h-full items-center mx-auto">
          <article className="space-y-1">
            <h2 className="text-[55px] font-bold">Our Network</h2>
            <p className="text-2xl font-medium max-w-[400px]">
              SQE was designed to be
              hyper efficient, ultra secure
              and low cost.
            </p>
          </article>
          <article className="text-2xl pt-16 font-light opacity-80">
            <h2 className="text-3xl">We use:</h2>
            <ul className="leading-7 list-disc pl-10 max-w-[580px]">
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