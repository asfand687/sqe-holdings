import React, { useEffect } from 'react'
import AboutHero from '../sections/AboutHero'
import AboutInfo from '../sections/AboutInfo'
import AboutTeamSection from '../sections/AboutTeamSection'
import AboutVideoSection from '../sections/AboutVideoSection'

const About = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <main className="bg-[#011132] text-white">
      <AboutHero />
      <AboutVideoSection />
      <AboutInfo />
      <AboutTeamSection />
    </main>
  )
}

export default About