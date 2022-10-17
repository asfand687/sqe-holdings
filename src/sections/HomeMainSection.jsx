import React from 'react'
import HomeIntroSection from './HomeIntroSection'
import HomeServicesBottomSection from './HomeServicesBottomSection'
import Services from './ServicesSection'

const HomeMainSection = () => {
  return (
    <div className="relative">
      <HomeIntroSection />
      <Services />
      <HomeServicesBottomSection />
    </div>
  )
}

export default HomeMainSection