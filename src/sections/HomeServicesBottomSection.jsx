import React from 'react'

const HomeServicesBottomSection = () => {
  return (
    <div className="bg-[#0C132E] text-white">
      <section className="flex justify-center md:space-x-12 py-14">
        <article className="text-2xl text-right max-w-[260px]">You’re more likely to win the Lottery</article>
        <h2 className="text-center font-black text-7xl tracking-wider font-montserrat">5 DAYS IN <br /> <span className="contact__title-bg-gradient">A ROW</span></h2>
        <article className="text-2xl max-w-[260px]">than to hack a single SQE transaction</article>
      </section>
      <p className="text-[10px] font-normal text-[#666666] text-center pb-2">*Based on whitepaper findings of Mathematics PhD Dr. Zeky Murra from Brown University</p>
    </div>
  )
}

export default HomeServicesBottomSection