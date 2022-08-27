import React from 'react'
import HomeHero from '../sections/HomeHero'
import HomeBottomSection from '../sections/HomeBottomSection'
import HomeMainSection from '../sections/HomeMainSection'


const Homepage = () => {
  return (
    <main className="bg-[#011132]">
      <HomeHero />
      <HomeMainSection />
      <HomeBottomSection />
    </main>
  )
}

export default Homepage