import React from 'react'
import Logo from '../assets/logo.png'
import PrimaryButton from './PrimaryButton'

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
          <PrimaryButton
            text="login"
            type="button"
            className="w-28 h-8 text-sm"
          />
          <PrimaryButton
            text="register"
            type="button"
            className="w-28 h-8 text-sm"
          />
        </article>
      </div>
    </nav>
  )
}

export default Navbar