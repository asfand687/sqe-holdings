import React from 'react'
import ComparisonTable from '../assets/comparison-table.png'

const HomeCompetitorComparisonSection = () => {
  return (
    <section className="relative competitor-comparison hidden md:block">
      <div className="bg-[#002660] bg-opacity-50 text-white py-16 2xl:py-20">
        <article className="max-w-7xl mx-auto">
          <div className="flex md:flex-row-reverse text-right tracking-widest font-extrabold uppercase font-montserrat lg:text-6xl 2xl:text-7xl">
            <h2 className="pr-10">Competitor <br /> Comparison</h2>
          </div>
          <div className="w-full max-w-7xl mx-auto space-y-14 px-4">
            <img src={ComparisonTable} alt="Comparison Table" />
          </div>
          <p className="text-[#666666] text-[8px] tracking-widest uppercase">*Based on statistics provided by the companies themselves  on each company’s business website.</p>
        </article>
      </div >
    </section >
  )
}

export default HomeCompetitorComparisonSection