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
    <nav className="py-2 text-sm bg-white">
      <div className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 uppercase mx-auto flex justify-between lg:items-center">
        <article className="flex lg:items-center space-x-8 text-base text-[#01165C]">
          <div>
            <Link className="flex" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex space-x-10">
            <Link className="font-montserrat" to="/">
              Home
            </Link>
            <Link className="font-montserrat" to="/about">
              About
            </Link>
            <article className="font-montserrat">
              <Link className="font-montserrat" to="/services">
                Services
              </Link>
            </article>
            <article className="font-montserrat">
              <Link className="font-montserrat" to="/app">
                The App
              </Link>
            </article>
            <article className="font-montserrat">
              <Link className="font-montserrat" to="/learning-center">
                Learn
              </Link>
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
                  <button>
                    <div className="w-[350px] h-[80px] clip-primary bg-gradient flex justify-center items-center">
                      <div className="w-[345px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
                        <span className="uppercase font-bold bg-gradient text-lg text-gradient">Login</span>
                      </div>
                    </div>
                  </button>
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
                  <button className="-mr-20">
                    <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                      <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                        <span className="uppercase font-bold bg-gradient text-sm text-gradient">Dashboard</span>
                      </div>
                    </div>
                  </button>
                </Link>
                <div onClick={logout}>
                  <button>
                    <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                      <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                        <span className="uppercase font-bold bg-gradient text-sm text-gradient">Signout</span>
                      </div>
                    </div>
                  </button>
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