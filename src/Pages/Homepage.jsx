import React from 'react'
import HomeHero from '../sections/HomeHero'
import TransactionStats from '../sections/TransactionStats'
import HomeIntroSection from '../sections/HomeIntroSection'
import HomeBottomSection from '../sections/HomeBottomSection'
import ServicesSection from '../sections/ServicesSection'


const Homepage = () => {
  return (
    <main className="bg-[#071328]">
      <HomeHero />
      <TransactionStats />
      <HomeIntroSection />
      <ServicesSection />
      <HomeBottomSection />
    </main>
  )
}

export default Homepage