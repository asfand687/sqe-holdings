import React from 'react'
import LearningCenterBottom from '../sections/LearningCenterBottom'
import LearningCenterFeaturedContent from '../sections/LearningCenterFeaturedContent'
import LearningSectionHero from '../sections/LearningSectionHero'

const LearningCenter = () => {
  return (
    <section className="bg-white">
      <LearningSectionHero />
      <LearningCenterFeaturedContent />
      <LearningCenterBottom />
    </section>
  )
}

export default LearningCenter