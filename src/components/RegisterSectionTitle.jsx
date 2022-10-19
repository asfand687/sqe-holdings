import React from 'react'

const RegisterSectionTitle = ({ className, text }) => {
  return (
    <h2 className={`text-6xl lg:text-7xl 2xl:text-8xl font-montserrat font-extrabold uppercase text-center py-4 ${className}`}>{text}</h2>
  )
}

export default RegisterSectionTitle