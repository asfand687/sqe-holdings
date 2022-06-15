import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="py-2 text-sm">
      <div className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto flex justify-between lg:items-center">
        <article className="flex lg:items-center space-x-8">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex space-x-10">
            <article>
              Item
            </article>
            <article>
              Item
            </article>
            <article>
              Item
            </article>
            <article>
              Item
            </article>
            <article>
              Item
            </article>
          </div>
        </article>
        <article className="flex space-x-6">
          <button
            type="button"
            className="btn-gradient w-28 h-8 text-white rounded-full text-center hover:opacity-80 transition-opacity ease-in-out">
            login
          </button>
          <button
            type="button"
            className="btn-gradient w-28 h-8 text-white rounded-full text-center hover:opacity-80 transition-opacity ease-in-out">
            register
          </button>
        </article>
      </div>
    </nav>
  )
}

export default Navbar