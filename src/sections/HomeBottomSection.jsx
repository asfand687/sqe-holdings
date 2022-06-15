import React from 'react'
import HomeGrid1 from '../assets/home-grid-01.png'
import HomeGrid2 from '../assets/home-grid-02.png'
import HomeGrid3 from '../assets/home-grid-03.png'
import HomeGrid4 from '../assets/home-grid-04.png'
import PrimaryButton from '../components/PrimaryButton'

const HomeBottomSection = () => {
  return (
    <section className="text-white bg-[#031840]">
      <h2 className="text-3xl font-medium py-6 bg-gradient font-jost text-center">
        SQE makes blockchain simple for everyone.
      </h2>
      <div className="p-6 lg:p-20 bg-[#031840] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="justify-self-end">
            <img className="w-full max-w-[529px] h-[480px]" src={HomeGrid1} alt="No-Code App Development" />
          </article>
          <article>
            <img className="w-full max-w-[529px] h-[480px]" src={HomeGrid2} alt="No-Code App Development" />
          </article>
          <article className="justify-self-end">
            <img className="w-full max-w-[529px] h-[480px]" src={HomeGrid3} alt="No-Code App Development" />
          </article>
          <article>
            <img className="w-full max-w-[529px] h-[480px]" src={HomeGrid4} alt="No-Code App Development" />
          </article>
        </div>
      </div>

      <div className="h-[600px] bg-home-bottom flex flex-col justify-center items-center">
        <h2 className="font-saxmono text-5xl text-center">Our Network</h2>
        <article className="py-6 text-lg font-medium">
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