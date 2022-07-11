import React from 'react'
import Logo from '../assets/logo.png'
import FooterTitle from '../assets/footer-title.svg'
import Instagram from '../assets/insta.svg'
import Envelope from '../assets/envelope.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-[#0E2043] py-8 text-white border-t border-[#0E2043]">
      <div className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto flex justify-between lg:items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <img src={FooterTitle} alt="SQE Holdings" />
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