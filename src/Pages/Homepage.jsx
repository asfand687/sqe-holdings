import React from 'react'
import HomeHero from '../sections/HomeHero'
import TransactionStats from '../sections/TransactionStats'
import HomeIntroSection from '../sections/HomeIntroSection'
import HomeBottomSection from '../sections/HomeBottomSection'
import ServicesSection from '../sections/ServicesSection'


const Homepage = () => {
  return (
    <>
      <HomeHero />
      <TransactionStats />
      <HomeIntroSection />
      <ServicesSection />
      <HomeBottomSection />
    </>
  )
}

export default Homepage