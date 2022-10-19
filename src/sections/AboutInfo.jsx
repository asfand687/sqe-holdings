import React from 'react'
import { ReactComponent as Arrow } from '../assets/arrow-right.svg'
import AboutBg from '../assets/about-info-bg.png'
import { ReactComponent as Polygon } from '../assets/polygon.svg'


const AboutInfo = () => {
  return (
    <div className="pt-20">
      <section className="w-full max-w-[950px] mx-auto">
        <article className="relative">
          <div className="absolute -bottom-56 -left-[1550px]">
            <img src={AboutBg} alt="Background Asset" />
          </div>
          <section>
            <h2 className="text-[56px] leading-[4rem] w-full max-w-[50rem] font-extrabold font-montserrat uppercase">
              Secure Quantum Exchange & Stimulated Quantum Engagement
            </h2>
            <div className="opacity-80 text-2xl space-y-6 py-6 text-[#effcff]">
              <p>
                SQE stands for Secure Quantum Exchange. This new digital world is a Quantum Secure internet security platform powered by “Simulated Quantum Entanglement”. Using SQE’s patent-pending technology (“Simulated Quantum Entanglement”), SQE components stay in a state of superposition and are linked, much like the real entanglement. The SQE network uses this bleeding-edge technology to communicate between its components with maximum efficiency. Just like with true quantum entanglement in which particles are created at the same time, SQE’s components will stay in a state of superposition until they are disturbed. Much like the real entanglement, SQE’s components (namely Links, Nodes, Servers, Mobile devices and secure cloud servers) are all linked through a mathematical entity, Cellular Automata (CA).
              </p>

              <p>
                This patent-pending system also means that these entanglements will be broken if there is any attempt to hack them. Using these components, SQE has created a transaction processing system that is ultra-secure. Since there are no keys required to create a transaction due to its inherent communication, therefore it is virtually impossible to hack into the SQE system. According to research and calculations made by Brown University PhDs in Mathematics, it’s more likely for a person to win the Powerball every day for a year than it is for someone to hack a single SQE transaction. We believe it’s time to raise the bar. Welcome to the future of digital security.
              </p>
            </div>
            <div className="py-4">
              <button className="uppercase inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center">
                <span className="font-montserrat ">Watch A Video About S.Q.E</span>
                <Arrow />
              </button>
            </div>
          </section>
        </article>
      </section>

      <section className="about-bottom-bg">
        <article className="h-[1000px] flex items-center w-full max-w-[950px] mx-auto">
          <div className="z-10">
            <h2 className="text-5xl leading-[4rem] w-full max-w-[58rem] font-extrabold font-montserrat uppercase">
              Proof Of Entanglement
            </h2>
            <p className="opacity-80 text-2xl py-6 text-[#effcff]">
              This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is. This is detailed information about what Proof of Knowledge is.
            </p>
            <div className="py-4">
              <button className="uppercase inline-flex text-2xl font-extrabold space-x-10 text-[#46CEEC] items-center">
                <span className="font-montserrat ">Watch A Video About POK</span>
                <Arrow />
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="relative h-[90vh] bg-about-bottom-right">
        <article className="flex justify-center py-32">
          <button>
            <div className="w-[650px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[645px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
                <span className="uppercase font-bold bg-gradient text-lg text-gradient">GO TO THE VIDEO LEARNING CENTER</span>
              </div>
            </div>
          </button>
        </article>
        <Polygon className="w-64" />
      </section>

    </div>
  )
}

export default AboutInfo