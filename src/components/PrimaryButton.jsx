import React from 'react'

const PrimaryButton = ({ onSubmit, text, className, type }) => {
  return (
    <button onSubmit={onSubmit} type={type} className={`btn-gradient text-white rounded-full text-center hover:opacity-80 transition-opacity ease-in-out w-full ${className}`}>
      {text}
    </button>
  )
}

export default PrimaryButton