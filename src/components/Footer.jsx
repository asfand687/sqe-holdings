import React from 'react'
import Instagram from '../assets/insta.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-white border-t border-[#0E2043] relative z-10">
      <div className="w-full lg:max-w-[1400px] text-[#042257] uppercase 2xl:max-w-full px-4 mx-auto flex flex-wrap justify-center">
        <div className=" space-y-2 w-[250px] ">
          <h2 className=" font-bold pb-2">
            About
          </h2>
          <p className="font-light">
            SQE
          </p>
          <p className="font-light">
            Team
          </p>
          <p className="font-light">
            Compare
          </p>
        </div>
        <div className=" space-y-2 w-[250px]">
          <h2 className="font-bold pb-2">
            Services
          </h2>
          <p className="font-light">
            Apps
          </p>
          <p className="font-light">
            Games
          </p>
          <p className="font-light">
            Mining
          </p>
        </div>
        <div className=" space-y-2 w-[250px]">
          <h2 className=" font-bold pb-2">
            Learn
          </h2>
          <p className="font-light">
            POK
          </p>
          <p className="font-light">
            S.Q.E
          </p>
          <p className="font-light">
            Quoin
          </p>
        </div>
        <div className=" space-y-2 w-[250px]">
          <h2 className=" font-bold pb-2">
            Contact
          </h2>
          <p className="font-light">
            PR
          </p>
        </div>
        <div className=" space-y-2 w-[250px]">
          <h2 className=" font-bold pb-2">
            More On SQE
          </h2>
          <p className="font-light">
            SQE App
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <img className="w-8" src={Instagram} alt="Instagram" />
          <img className="w-8" src={Linkedin} alt="Linkedin" />
          <img className="w-8" src={Twitter} alt="Twitter" />
          <img className="w-8" src={Facebook} alt="email" />
        </div>
      </div>
    </footer>
  )
}

export default Footer