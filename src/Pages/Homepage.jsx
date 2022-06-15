import React from 'react'
import HomeHero from '../sections/HomeHero'
import TransactionStats from '../sections/TransactionStats'
import HomeIntroSection from '../sections/HomeIntroSection'
import HomeBottomSection from '../sections/HomeBottomSection'

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <TransactionStats />
      <HomeIntroSection />
      <HomeBottomSection />
    </>
  )
}

export default Homepage