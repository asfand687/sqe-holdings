import React from 'react'
import Instagram from '../assets/insta.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-white border-t border-[#0E2043] relative z-10">
      <div className="w-full lg:max-w-[1400px] text-[#042257] uppercase 2xl:max-w-full px-4 mx-auto flex flex-wrap justify-around md:justify-center space-y-4 md:space-y-0">
        <div className="space-y-2 w-[200px]">
          <h2 className="font-bold pb-2">
            About
          </h2>
          <p>
            <Link to="/" className="font-light">
              SQE
            </Link>
          </p>
          <p>
            <Link to="/about" className="font-light">
              Team
            </Link>
          </p>
        </div>
        <div className=" space-y-2 w-[200px]">
          <h2 className="font-bold pb-2">
            Services
          </h2>
          <p className="font-light">
            <Link to="/services">Apps</Link>
          </p>
          <p className="font-light">
            <Link to="/services">Games</Link>
          </p>
          <p className="font-light">
            <Link to="/services">Mining</Link>
          </p>
          <p className="font-light">
            <Link to="/services">Exchange</Link>
          </p>
        </div>
        <div className=" space-y-2 w-[200px]">
          <p className="font-bold pb-2">
            POE
          </p>
          <p className="font-light">
            <Link to="/about">S.Q.E</Link>
          </p>
        </div>
        <div className=" space-y-2 w-[200px]">
          <h2 className=" font-bold pb-2">
            Outreach
          </h2>
          <p className="font-light">
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className=" space-y-2 flex justify-between w-[200px] md:w-[250px]">
          <div>
            <h2 className=" font-bold pb-2">
              More On SQE
            </h2>
            <p className="font-light">
              <a href="http://www.sqeapp.com">SQE App</a>
            </p>
          </div>

          <div className="flex flex-col space-y-2 relative -top-16 md:top-0">
            <a href="https://instagram.com/securequantum">
              <img className="w-8" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/securequantum">
              <img className="w-8" src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/securequantum">
              <img className="w-8" src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>

      </div>
    </footer >
  )
}

export default Footer