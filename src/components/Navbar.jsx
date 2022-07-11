import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-nav.png'
import PrimaryButton from './PrimaryButton'
import { auth } from '../firebase'
import { signOut } from '@firebase/auth'


const Navbar = () => {
  const navigate = useNavigate()
  const logout = async () => {
    await signOut(auth)
    navigate("/")
  }
  return (
    <nav className="py-2 text-sm">
      <div className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto flex justify-between lg:items-center">
        <article className="flex lg:items-center space-x-8 text-base text-[#01165C]">
          <div>
            <Link className="flex" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex space-x-10">
            <Link className="font-montserrat" to="/about">
              About
            </Link>
            <article className="font-montserrat">
              Services
            </article>
            <article className="font-montserrat">
              Learning Center
            </article>
            <Link className="font-montserrat" to="/contact">
              Contact
            </Link>
          </div>
        </article>
        <article className="flex space-x-6">
          {!auth.currentUser ?
            (
              <>
                <Link to="/login">
                  <PrimaryButton
                    text="login"
                    type="button"
                    className="w-28 h-8 text-sm btn-gradient"
                  />
                </Link>
                <Link to="register">
                  <PrimaryButton
                    text="register"
                    type="button"
                    className="w-28 h-8 text-sm btn-gradient"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <PrimaryButton
                    text="dashboard"
                    type="button"
                    className="w-28 h-8 text-sm btn-gradient"
                  />
                </Link>
                <div onClick={logout}>
                  <PrimaryButton text="signout" type="button" className="w-28 h-8 text-sm bg-red-400" />
                </div>
              </>
            )
          }
        </article>
      </div>
    </nav>
  )
}

export default Navbar