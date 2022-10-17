import React from 'react'
import { ReactComponent as Arrow } from '../assets/arrow-right.svg'
import HomeIntroOne from '../assets/home-intro-01.png'
import HomeIntroTwo from '../assets/home-intro-02.png'

const HomeIntroSection = () => {
  return (
    <section className="relative text-white pt-10 pb-32 space-y-20">
      <article className="flex justify-center items-center lg:space-x-8">
        <aside className="text-right max-w-[640px]">
          <h2 className="text-6xl font-black uppercase leading-[70px]">
            Proof Of Entaglement
          </h2>
          <p className="pb-8 md:pl-14">
            Bleeding-edge technology secures SQE’s platform by Proof of Entanglement (PoE). Using less energy and more secure than Proof of Stake, Work or History, PoE keeps all your transactions private and secure.
          </p>
          <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center"><span>Learn About POK</span> <Arrow /></button>
        </aside>
        <aside>
          <img src={HomeIntroOne} alt="Home Intro Graphic 01" />
        </aside>
      </article>

      <article className="flex flex-row-reverse justify-center items-center lg:space-x-88">
        <aside className="text-right max-w-[640px]">
          <h2 className="text-6xl font-black uppercase leading-[70px]">
            Simulated Quantum Entanglement
          </h2>
          <p className="pb-8 md:pl-14">
            SQE’s expert team of creators has created the future of digital security through the world’s first simulated quantum entanglement driven digital platform. This patented technology has changed how security is defined on the blockchain.
          </p>
          <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center"><span>Learn About S.Q.E</span> <Arrow /></button>
        </aside>
        <aside>
          <img src={HomeIntroTwo} alt="Home Intro Graphic 02" />
        </aside>
      </article>
    </section>
  )
}

export default HomeIntroSection