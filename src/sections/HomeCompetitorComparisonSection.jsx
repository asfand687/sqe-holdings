import React from 'react'

const HomeCompetitorComparisonSection = () => {
  return (
    <section className="relative">
      <div className="bg-[#002660] bg-opacity-50 text-white py-20">
        <div className="max-w-6xl mx-auto space-y-14 px-4">
          <article className="flex justify-end">
            <h2 className="font-montserrat text-6xl uppercase font-bold tracking-wider max-w-lg text-right">
              Competitor Comparisons
            </h2>
          </article>
          <article>
            <div className="flex justify-end items-center md:space-x-20 lg:space-x-24 font-extrabold text-[#46CEEC] text-2xl uppercase pr-4 pb-4">
              <h2 className="text-white text-5xl">SQE</h2>
              <h2 className="">Ethereum</h2>
              <h2 className="">Solana</h2>
              <h2 className="">Aglorand</h2>
            </div>
            <div className="home__competitor-border_bg h-[2px] w-full" />
            <div className="home__competitor-border_bg absolute h-[420px] w-[2px] top-60 left-[500px] 2xl:left-[570px]" />
          </article>
          <article className="flex md:space-x-12">
            <div className="w-[300px] space-y-8 uppercase text-right font-montserrat font-extrabold text-lg tracking-wider">
              <h2>Quantum Secure</h2>
              <h2>Block Creation</h2>
              <h2>Protocol</h2>
              <h2>Cost Per Transaction</h2>
              <h2>Need A Private Key</h2>
            </div>
            <div className="flex-1 space-y-8 text-lg">
              <article className="flex md:space-x-48 uppercase">
                <p className="font-semibold relative left-8">Yes</p>
                <p className="relative left-8">No</p>
                <p className="relative left-8">No</p>
                <p className="relative left-6">No</p>
              </article>

              <article className="flex md:space-x-[11rem]">
                <p className="font-semibold uppercase relative left-6">200 ms</p>
                <p className="relative left-[14px]">13 S</p>
                <p className="relative left-3">400 MS</p>
                <p className="relative right-2">2.5 S</p>
              </article>

              <article className="flex md:space-x-[11rem]">
                <p className="font-semibold uppercase relative left-8">POE</p>
                <p className="relative left-[44px]">POS</p>
                <p className="relative left-[48px]">POS</p>
                <p className="relative left-[48px]">POS</p>
              </article>

              <article className="flex md:space-x-[11rem]">
                <p className="font-semibold uppercase relative left-4">{"<"}$0.0001</p>
                <p className="relative right-2">{"<"}$0.01</p>
                <p className="relative right-4">{"<"}$0.01</p>
                <p className="relative right-12">{"<"}$0.00125</p>
              </article>

              <article className="flex md:space-x-48 uppercase">
                <p className="font-semibold  relative left-10">No</p>
                <p className="relative left-10">Yes</p>
                <p className="relative left-10">No</p>
                <p className="relative left-8">No</p>
              </article>

            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeCompetitorComparisonSection