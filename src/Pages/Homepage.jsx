import React from 'react'
import HomeHero from '../sections/HomeHero'
import TransactionStats from '../sections/TransactionStats'
import HomeBottomSection from '../sections/HomeBottomSection'
import HomeMainSection from '../sections/HomeMainSection'


const Homepage = () => {
  return (
    <main className="bg-[#031A41]">
      <HomeHero />
      <TransactionStats />
      <HomeMainSection />
      <HomeBottomSection />
    </main>
  )
}

export default Homepage