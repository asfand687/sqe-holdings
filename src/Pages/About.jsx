import React from 'react'
import AboutCostSection from '../sections/AboutCostSection'
import AboutHero from '../sections/AboutHero'
import AboutInfo from '../sections/AboutInfo'

const About = () => {
  return (
    <main className="bg-[#071328]">
      <AboutHero />
      <AboutInfo />
      <AboutCostSection />
    </main>
  )
}

export default About