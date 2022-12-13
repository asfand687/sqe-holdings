import React, { useEffect } from 'react'
import ServicesBottomSection from '../sections/ServicesBottomSection'
import ServicesHero from '../sections/ServicesHero'
import ServicesInfograph from '../sections/ServicesInfograph'

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <ServicesHero />
      <ServicesInfograph/>
      <ServicesBottomSection/>
    </>
  )
}

export default Services