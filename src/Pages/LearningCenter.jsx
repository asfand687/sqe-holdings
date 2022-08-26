import React from 'react'
import LearningSectionHero from '../sections/LearningSectionHero'
import VideoGallery from '../sections/VideoGallery'

const LearningCenter = () => {
  return (
    <section className="bg-[#031A41] text-white services-page-bg">
      <LearningSectionHero />
      <VideoGallery />
    </section>
  )
}

export default LearningCenter