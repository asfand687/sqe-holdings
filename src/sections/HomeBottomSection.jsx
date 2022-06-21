import React from 'react'

import PrimaryButton from '../components/PrimaryButton'

const HomeBottomSection = () => {
  return (
    <section className="text-white bg-[#031840]">


      <div className="h-[600px] bg-home-bottom flex flex-col justify-center items-center">
        <h2 className="font-helvetica text-5xl uppercase font-bold text-center">Our Network</h2>
        <article className="py-6 text-lg font-normal">
          <p className=" pb-6">
            SQE was designed to be hyper efficient, ultra secure and low cost. We use:
          </p>
          <ul className="leading-6 list-disc pl-6">
            <li>Proof of Knowledge (PoK)</li>
            <li>Distributed and sustainable mining network</li>
            <li>Only one block per transaction</li>
            <li>Advanced patented innovations</li>
            <li>Processing speeds up to 100,000 Transactions per Second (TPS)</li>
          </ul>
          <div className="flex justify-center gap-8 pt-10 flex-wrap">
            <PrimaryButton
              text="Learn More"
              type="button"
              className="h-16 w-80 text-2xl btn-gradient"
            />
            <PrimaryButton
              text="Register"
              type="button"
              className="h-16 w-80 text-2xl btn-gradient"
            />
          </div>
        </article>
      </div>


    </section>
  )
}

export default HomeBottomSection