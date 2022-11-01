import React from 'react'
import ComparisonTable from '../assets/comparison-table.png'

const HomeCompetitorComparisonSection = () => {
  return (
    <section className="relative competitor-comparison hidden md:block">
      <div className="bg-[#002660] bg-opacity-50 text-white py-32 2xl:py-40">
        <div className="max-w-6xl mx-auto space-y-14 px-4">
          <img src={ComparisonTable} alt="Comparison Table" />
        </div>
      </div>
    </section>
  )
}

export default HomeCompetitorComparisonSection