import React from 'react'

const PrimaryButton = ({ text, className, type }) => {
  return (
    <button type={type} className={`text-white rounded-full text-center hover:opacity-80 transition-opacity ease-in-out w-full ${className}`}>
      {text}
    </button>
  )
}

export default PrimaryButton