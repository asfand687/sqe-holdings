import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../assets/arrow-right.svg'
import HomeIntroOne from '../assets/home-intro-01.png'
import HomeIntroTwo from '../assets/home-intro-02.png'

const HomeIntroSection = () => {
  return (
    <section className="relative text-white pt-10 pb-32 space-y-20">
      <article className="flex flex-col md:flex-row justify-center items-center lg:space-x-8 px-4">
        <aside className="order-2 md:order-1 md:text-right max-w-[640px]">
          <h2 className="text-center md:text-right text-4xl md:text-6xl font-black uppercase md:leading-[70px] pb-4">
            Proof Of Entanglement
          </h2>
          <p className="pb-8 md:pl-14 text-center md:text-right">
            Cutting-edge technology secures SQE’s platform via our unique Proof of Entanglement (POE), while other platforms and blockchains use methods of consensus such as Proof of Stake or Proof of Work.This is why POE operates at much faster speeds and lower costs per transaction.
          </p>
          <Link to="/about">
            <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center">
              <span>Learn About POE</span> <Arrow />
            </button>
          </Link>
        </aside>
        <aside className="order-1 md:order-2">
          <img src={HomeIntroOne} alt="Home Intro Graphic 01" />
        </aside>
      </article>

      <article className="flex flex-col-reverse md:flex-row-reverse justify-center items-center lg:space-x-8 px-4">
        <aside className="text-right max-w-[640px]">
          <h2 className="text-center md:text-right text-4xl md:text-6xl font-black uppercase md:leading-[70px] pb-4">
            Simulated Quantum Entanglement
          </h2>
          <p className="pb-8 md:pl-14 text-center md:text-right">
            SQE has created the future of digital security through the world’s first simulated quantum entanglement platform. This patent-pending technology has changed how security is defined on the blockchain.
          </p>
          <Link to="/about">
            <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center">
              <span>Learn About SQE</span> <Arrow />
            </button>
          </Link>
        </aside>
        <aside>
          <img src={HomeIntroTwo} alt="Home Intro Graphic 02" />
        </aside>
      </article>
    </section>
  )
}

export default HomeIntroSection