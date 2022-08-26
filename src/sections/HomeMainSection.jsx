import React from 'react'
import HomeIntroSection from './HomeIntroSection'
import Services from './ServicesSection'

const HomeMainSection = () => {
  return (
    <div className="home-main-bg inset-shadow-top">
      <HomeIntroSection />
      <Services />
    </div>
  )
}

export default HomeMainSection