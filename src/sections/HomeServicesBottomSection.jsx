import React from 'react'
import HundredYearsHeading from "../assets/forhundredyears.png"

const HomeServicesBottomSection = () => {
  return (
    <div className="bg-[#0C132E] text-white">
      <section className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-12 py-14">
        <article className="text-2xl text-center md:text-right max-w-[260px]">You’re more likely to win the Lottery</article>
        <article>
          <img className="w-full max-w-[400px] px-4" src={HundredYearsHeading} alt="EVERY DAY FOR 100 YEARS" />
        </article>
        <article className="text-2xl text-center md:text-left max-w-[260px]">than to hack a single SQE transaction</article>
      </section>
      <p className="text-[10px] uppercase font-normal text-[#666666] text-center pb-2">*Based on whitepaper findings of Mathematics PhD Dr. Zeky Murra from Brown University</p>
    </div>
  )
}

export default HomeServicesBottomSection