import React from 'react'
import { ReactComponent as Arrow } from '../assets/arrow-right.svg'

const HomeIntroSection = () => {
  return (
    <section className="relative text-white py-10 space-y-20">
      <article className="flex justify-center items-center lg:space-x-48">
        <aside className="text-right max-w-[640px]">
          <h2 className="text-6xl font-extrabold uppercase leading-snug font-montserrat">
            Proof Of Knowledge
          </h2>
          <p className="pb-8">
            Bleeding-edge technology secures SQE’s platform by Proof of Knowledge (PoK). Using less energy and more secure than Proof of Stake, Work or History, PoK keeps all your transactions private and secure.
          </p>
          <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center"><span>Learn About POK</span> <Arrow /></button>
        </aside>
        <aside>
          <h2 className="text-3xl font-extrabold uppercase">Explainer Graphic</h2>
        </aside>
      </article>

      <article className="flex justify-center items-center lg:space-x-48">
        <aside className="text-right max-w-[640px]">
          <h2 className="text-6xl font-extrabold uppercase leading-snug font-montserrat">
            Simulated Quantum Entanglement
          </h2>
          <p className="pb-8">
            SQE’s expert team of creators has created the future of digital security through the world’s first simulated quantum entanglement driven digital platform. This patented technology has changed how security is defined on the blockchain.
          </p>
          <button className="uppercase font-montserrat inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center"><span>Learn About S.Q.E</span> <Arrow /></button>
        </aside>
        <aside>
          <h2 className="text-3xl font-extrabold uppercase">Explainer Graphic</h2>
        </aside>
      </article>
    </section>
  )
}

export default HomeIntroSection