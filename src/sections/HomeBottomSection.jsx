import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hexagon } from '../assets/hex-shape.svg'

const HomeBottomSection = () => {
  return (
    <section className="text-white bg-home-bottom">
      <div className="relative top-32">
        <article className="text-center pt-20">
          <h2 className="text-6xl font-extrabold uppercase leading-snug font-montserrat">
            Build Your World
          </h2>
          <p className="uppercase text-2xl font-light">On The SQE Platform</p>
        </article>

        <article className="max-w-[1450px] mx-auto py-10 pb-72 flex justify-center gap-x-20 flex-wrap">
          <div className="relative">
            <Hexagon />
            <div className="absolute w-[220px] top-24 left-[50%] transform translate-x-[-50%] space-y-4 text-center">
              <h2 className="text-2xl font-montserrat font-bold uppercase">Communicate</h2>
              <p className="font-light text-lg leading-5">Secure Messaging powered by simulated quantum entanglement.</p>
              <Link to="/services" className="block">
                <button>
                  <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                    <div className="hexagon w-[85px] h-[48px] bg-[#021943] uppercase flex items-center justify-center">
                      <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Hexagon />
            <div className="absolute w-[220px] top-24 left-[50%] transform translate-x-[-50%] space-y-2 text-center">
              <h2 className="text-2xl font-montserrat font-bold uppercase pb-0">Create</h2>
              <p className="font-light leading-5 pb-2 text-lg">Create no-code apps and smart contracts on a user-friendly, quantum-secure platform. </p>
              <Link to="/services" className="block">
                <button>
                  <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                    <div className="hexagon w-[85px] h-[48px] bg-[#021943] uppercase flex items-center justify-center">
                      <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Hexagon />
            <div className="absolute w-[220px] top-24 left-[50%] transform translate-x-[-50%] space-y-4 text-center">
              <h2 className="text-2xl font-montserrat font-bold uppercase">Exchange</h2>
              <p className="font-light text-lg leading-5">Invest, buy & sell SQC, the world’s most secure semi-stable crypto.</p>
              <Link to="/services" className="block">
                <button>
                  <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                    <div className="hexagon w-[85px] h-[48px] bg-[#021943] uppercase flex items-center justify-center">
                      <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Hexagon />
            <div className="absolute w-[220px] top-24 left-[50%] transform translate-x-[-50%] space-y-4 text-center">
              <h2 className="text-2xl font-montserrat font-bold uppercase">Game</h2>
              <p className="font-light text-lg leading-5">Play, wager, and explore an expanding world of secure, ad free gaming.</p>
              <Link to="/services" className="block">
                <button>
                  <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                    <div className="hexagon w-[85px] h-[48px] bg-[#021943] uppercase flex items-center justify-center">
                      <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Hexagon />
            <div className="absolute w-[220px] top-24 left-[50%] transform translate-x-[-50%] space-y-4 text-center">
              <h2 className="text-2xl font-montserrat font-bold uppercase">Automate</h2>
              <p className="font-light text-lg leading-5">Personal Digital Assistant (PDA) uses Web3 tech to automate your critical everyday tasks.</p>
              <Link to="/services" className="block">
                <button>
                  <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                    <div className="hexagon w-[85px] h-[48px] bg-[#021943] uppercase flex items-center justify-center">
                      <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>

      <article className="flex relative justify-center md:top-24 pb-32">
        <Link to="/register">
          <button>
            <div className="w-[390px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[385px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
                <span className="uppercase font-bold bg-gradient text-lg text-gradient">Get Started Now</span>
              </div>
            </div>
          </button>
        </Link>
      </article>
    </section>
  )
}

export default HomeBottomSection