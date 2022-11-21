import React from 'react'
import AboutBg from '../assets/about-info-bg.png'
import { ReactComponent as Polygon } from '../assets/polygon.svg'
import { Link } from 'react-router-dom'


const AboutInfo = () => {
  return (
    <div className="pt-20 md:pt-36 px-4">
      <section className="w-full max-w-[950px] mx-auto">
        <article className="relative pb-20">
          <div className="absolute -bottom-56 -left-[1550px]">
            <img src={AboutBg} alt="Background Asset" />
          </div>
          <section className="text-center md:text-left">
            <h2 className="text-[2.3rem] md:text-[56px] leading-[3.5rem] md:leading-[4rem] w-full font-extrabold font-montserrat uppercase">
              SQE: Stimulated Quantum Entanglement
            </h2>
            <div className="opacity-80 text-2xl space-y-6 py-6 text-[#effcff]">
              <p>
                SQE is a Quantum Secure digital platform powered by our
                patent-pending Simulated Quantum Entanglement technology, which
                links SQE’s nodes together, allowing our mining components to
                communicate without internet connection. SQE's entangled hardware
                generates a different key with every transmission. Encryption keys are
                never transmitted, therefore transactions on SQE are unhackable.
              </p>
            </div>
          </section>
        </article>
      </section>

      <section className="about-bottom-bg text-center md:text-left">
        <article className="md:h-[1000px] flex items-center w-full max-w-[950px] mx-auto">
          <div className="z-10">
            <h2 className="text-[2.4rem] md:text-[56px] leading-[3.5rem] md:leading-[4rem] w-full max-w-[58rem] font-extrabold font-montserrat uppercase">
              Proof Of Entanglement
            </h2>
            <p className="opacity-80 text-2xl py-6 text-[#effcff]">
              SQE Holdings has introduced
              the novel concept of Proof of Entanglement (POE) to the world of
              blockchains. POE is the most secure mechanism by which transactions
              between users are verified. The beauty of POE is that users don’t need to
              transmit encryption keys to secure transactions. And because users don’t
              need keys to authenticate, SQE’s transaction speeds are unparalleled.
            </p>
          </div>
        </article>
      </section>

      <section className="relative h-[90vh] bg-about-bottom-right">
        <article className="flex justify-center py-32 px-4">
          <Link to="/register">
            <button>
              <div className="w-[580px] md:w-[650px] h-[125px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[575px] md:w-[645px] h-[120px] clip-primary bg-[#011132] flex items-center justify-center">
                  <span className="uppercase font-bold bg-gradient text-lg text-gradient">Get Started On SQE</span>
                </div>
              </div>
            </button>
          </Link>
        </article>
        <Polygon className="w-64" />
      </section>

    </div>
  )
}

export default AboutInfo