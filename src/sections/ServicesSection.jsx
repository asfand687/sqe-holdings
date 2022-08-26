import React from 'react'


const ServicesSection = () => {
  return (
    <section className="text-white lg:pt-36">
      <div className="realtive z-20 lg:pt-24 2xl:pt-32">
        <h2 className="font-bold text-7xl 2xl:text-8xl text-center pb-6 lg:pb-16 tracking-wider z-10 relative">Build your world on SQE</h2>

        <article className="flex justify-center gap-x-10">
          <div className="bg-hex w-[320px] h-[370px] flex items-center">
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold pb-1'>Communicate</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">Secure messaging powered by simulated quantum entanglement.
                </p>
                <button className="underline underline-offset-2">Learn More</button>
              </div>
            </div>
          </div>

          <div className="bg-hex w-[320px] h-[370px] flex items-center">
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold pb-1'>Game</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">Play, wager, and explore an expanding world of secure gaming.
                </p>
                <button className="underline underline-offset-2">Learn More</button>
              </div>
            </div>
          </div>
        </article>

        <article className="relative -top-16 flex justify-center gap-x-10">
          <div className="bg-hex w-[320px] h-[370px] flex items-center">
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold pb-1'>Automate</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">Personal Digital Assistant (PDA) automates all your daily tasks from wake ups, to scheduling, to emails.
                </p>
                <button className="underline underline-offset-2">Learn More</button>
              </div>
            </div>
          </div>

          <div className="bg-hex w-[320px] h-[370px] flex items-center">
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold pb-1'>Create</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">Build no-code mobile apps and smart-contracts on a quantum secure platform.
                </p>
                <p>(Coming Soon)</p>
              </div>
            </div>
          </div>

          <div className="bg-hex w-[320px] h-[370px] flex items-center">
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold pb-1'>Exchange</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">Invest, buy & sell SQC, the world’s most secure semi-stable crypto.
                </p>
                <button className="underline underline-offset-2">Learn More</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ServicesSection