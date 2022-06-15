import React from 'react'

const NavbarButton = ({ text, className }) => {
  return (
    <button
      type="button"
      className={`btn-gradient text-white rounded-full text-center hover:opacity-80 transition-opacity ease-in-out ${className}`}>
      {text}
    </button>
  )
}

export default NavbarButton