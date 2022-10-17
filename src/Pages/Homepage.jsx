import React from 'react'
import HomeHero from '../sections/HomeHero'
import HomeBottomSection from '../sections/HomeBottomSection'
import HomeMainSection from '../sections/HomeMainSection'
import ImageLeft from '../assets/home-left.png'
import ImageRight from '../assets/home-right.png'
import HomeCompetitorComparisonSection from '../sections/HomeCompetitorComparisonSection'


const Homepage = () => {
  return (
    <main className="bg-[#011132]">
      <img className="absolute left-0 top-[2560px]" src={ImageLeft} alt="background" />
      <img className="absolute right-0 top-[2650px]" src={ImageRight} alt="background" />
      <HomeHero />
      <HomeMainSection />
      <HomeCompetitorComparisonSection />
      <HomeBottomSection />
    </main>
  )
}

export default Homepage