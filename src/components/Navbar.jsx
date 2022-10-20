import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-nav.png'
import { auth } from '../firebase'
import { signOut } from '@firebase/auth'


const Navbar = () => {
  const navigate = useNavigate()
  const [showDrawer, setShowDrawer] = useState(false)
  const logout = async () => {
    await signOut(auth)
    navigate("/")
  }
  return (
    <nav className="sm:py-2 text-sm sm:bg-white z-50 relative">
      <div onClick={() => setShowDrawer(!showDrawer)} className='absolute top-4 right-4 text-white cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="hidden w-full lg:max-w-[1400px] 2xl:max-w-full px-4 uppercase mx-auto sm:flex justify-between lg:items-center">
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
                  <button className="-mr-20">
                    <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                      <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                        <span className="uppercase font-bold bg-gradient text-sm text-gradient">Login</span>
                      </div>
                    </div>
                  </button>
                </Link>
                <Link to="register">
                  <button>
                    <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                      <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                        <span className="uppercase font-bold bg-gradient text-sm text-gradient">Register</span>
                      </div>
                    </div>
                  </button>
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
      <div className={`fixed sm:hidden right-0 w-80 bg-white h-screen transition-all ease-in-out duration-300 ${showDrawer ? 'right-0' : '-right-full'} text-black`}>
        <div onClick={() => setShowDrawer(false)} className="absolute right-2 top-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <article className="flex justify-center py-4 space-y-4">
            <div>
              <Link className="flex" to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </article>

          <article className="flex flex-col space-y-6 text-center py-10 text-xl uppercase">

            <Link className="font-montserrat" to="/about">
              About
            </Link>

            <Link className="font-montserrat" to="/services">
              Services
            </Link>

            <Link className="font-montserrat" to="/app">
              The App
            </Link>

            <Link className="font-montserrat" to="/learning-center">
              Learn
            </Link>

            <Link className="font-montserrat" to="/contact">
              Contact
            </Link>

          </article>

          <article className="flex space-x-6">
            {!auth.currentUser ?
              (
                <>
                  <Link to="/login">
                    <button className="-mr-20">
                      <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                        <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                          <span className="uppercase font-bold bg-gradient text-sm text-gradient">Login</span>
                        </div>
                      </div>
                    </button>
                  </Link>
                  <Link to="register">
                    <button>
                      <div className="w-[200px] h-[50px] clip-primary bg-gradient-accent flex justify-center items-center">
                        <div className="w-[195px] h-[45px] clip-primary bg-white flex items-center justify-center">
                          <span className="uppercase font-bold bg-gradient text-sm text-gradient">Register</span>
                        </div>
                      </div>
                    </button>
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
      </div>
    </nav>
  )
}

export default Navbar