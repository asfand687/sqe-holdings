import React from 'react'
import Home1 from '../assets/home-main-01.png'
import Home2 from '../assets/home-main-02.png'

const HomeIntroSection = () => {
  return (
    <section className="relative lg:pb-32 text-white">
      <div className="w-full h-[100px] absolute bottom-0 inset-shadow-bottom" />
      <div className=''>
        <div className="w-full relative lg:space-y-32">
          <article className="flex flex-col items-center space-y-36">
            <div className="flex lg:pt-44 flex-col">
              <div className="space-y-4">
                <h2 className=" text-5xl font-bold max-w-[500px] leading-[3.4rem]">Powered by Proof Of Knowledge </h2>
                <div>
                  <p className="text-base leading-6 max-w-[540px] opacity-60">
                    Bleeding-edge technology secures SQE’s platform by Proof of Knowledge (PoK). Never fear for your data again. More secure than Proof of Stake, Work or History, PoK keeps all your transactions private and secure.
                  </p>
                  <button className="underline underline-offset-1 opacity-60">Learn About PoK</button>
                </div>
              </div>
            </div>
            <img className="absolute w-[500px] left-0 -top-[270px]" src={Home1} alt="pattern" />

            <div className="flex-1 flex flex-col lg:items-center">
              <div className="relative max-w-[540px] space-y-4">
                <h2 className="w-full text-5xl font-bold max-w-[450px] leading-[3.4rem]">Welcome to a secure space for all your needs</h2>
                <div>
                  <p className="text-base opacity-60 leading-6">
                    The SQE digital platform is a space for all your needs. Game, create, automate, invest, and develop. Build your world on SQE.
                  </p>
                  <button className="underline underline-offset-1 opacity-60">Learn About PoK</button>
                </div>
              </div>
            </div>

            <img className="absolute w-[700px] right-0 -bottom-[470px] z-0" src={Home2} alt="pattern" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeIntroSection