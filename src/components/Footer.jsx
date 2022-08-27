import React from 'react'
import Instagram from '../assets/insta.svg'
import Envelope from '../assets/envelope.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-white border-t border-[#0E2043]">
      <div className="w-full lg:max-w-[1400px] text-[#042257] uppercase 2xl:max-w-full px-4 mx-auto flex flex-wrap justify-between">
        <div className="flex-1 space-y-2 ">
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
        <div className="flex-1 space-y-2">
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
        <div className="flex-1 space-y-2">
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
        <div className="flex-1 space-y-2">
          <h2 className=" font-bold pb-2">
            Contact
          </h2>
          <p className="font-light">
            PR
          </p>
        </div>
        <div className="flex-1 space-y-2">
          <h2 className=" font-bold pb-2">
            More On SQE
          </h2>
          <p className="font-light">
            SQE App
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <img src={Instagram} alt="Instagram" />
          <img src={Envelope} alt="email" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </footer>
  )
}

export default Footer