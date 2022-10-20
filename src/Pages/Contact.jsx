import React from 'react'
import ContactHero from '../sections/ContactHero'

const Contact = () => {
  return (
    <main className="bg-[#030B31] pt-10 md:h-[140vh] relative">
      <div className="absolute left-0 top-0 w-full max-w-[1550px] contact-hero-bg h-[700px] z-0"></div>
      <div className="absolute left-0 top-0 w-full max-w-[1550px] contact-bottom-bg h-[1000px] z-0"></div>
      <ContactHero />
    </main>
  )
}

export default Contact