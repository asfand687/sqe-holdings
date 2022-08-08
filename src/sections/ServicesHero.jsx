import React, { useState } from 'react'

let servicesData = [
  {
    title: "Service 1",
    text: "If you’re here, you’re probably pretty well read. Congratulations you! Still, it’s one thing to read a great book, but quite another to retain it. Especially considering most of us read a number of the classics in our teenage years, when we were only half paying attention anyway. And it’s one thing to know that Shakespeare wrote something (as the sages say: when in doubt, it’s from Shakespeare),"
  },
  {
    title: "Service 2",
    text: "So to test our collective memories (and libraries), and to break up the pandemic tedium with a little bit of competition, and also because it’s fun, I’ve picked out 100 of the most referenced, quoted, reused, and generally well-known passages of literature, from single memorable lines of dialogue to longer sections of prose or verse, and turned them into a quiz. To guide my selections, I looked at what seemed like an endless stream of quote"
  },
  {
    title: "Service 3",
    text: "judgement; I’ve been doing this for a while.) I limited myself to one passage per distinct work, though some authors are quoted more than once. Some should be pretty obvious, but I also think a few will be a challenge—so if you think you’re equal to it, step right up and test your skills!"
  },
  {
    title: "Service 4",
    text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair"
  },
  {
    title: "Service 5",
    text: "it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair. it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."
  }
]
const ServicesHero = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0])
  return (
    <div className="services-page-bg text-white">
      <div className="w-full max-w-6xl mx-auto pt-10 lg:pt-32 lg:pb-10">
        <h1 className="font-bold text-7xl">Services</h1>
      </div>
      <div className="px-4 mx-auto lg:max-w-[1450px] space-y-10 pb-8">

        <article className="flex justify-center">
          <div onClick={() => setSelectedService(servicesData[0])} className={`bg-hex w-[280px] h-[330px] flex items-center cursor-pointer ${selectedService.title === servicesData[0].title ? 'clr-white' : ''}`}>
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl font-bold'>{servicesData[0].title}</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">
                  {servicesData[0].text.substring(0, 80) + "..."}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex justify-center lg:space-x-20">
          <div onClick={() => setSelectedService(servicesData[1])} className={`bg-hex w-[280px] h-[330px] flex items-center cursor-pointer ${selectedService.title === servicesData[1].title ? 'clr-white' : ''}`}>
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold'>{servicesData[1].title}</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">
                  {servicesData[1].text.substring(0, 80) + "..."}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[384px] h-[490px] flex flex-col justify-end rounded-[3.5rem] p-8 py-10 bg-[#050D27] space-y-1 custom-shadow-sm">
            <h2 className="font-bold max-w-[160px] text-4xl leading-tight">{selectedService.title}</h2>
            <p className="text-xl font-light opacity-60 tracking-tight max-w-xs">{selectedService.text}</p>
          </div>

          <div onClick={() => setSelectedService(servicesData[2])} className={`bg-hex w-[280px] h-[330px] flex items-center cursor-pointer ${selectedService.title === servicesData[2].title ? 'clr-white' : ''}`}>
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold'>{servicesData[2].title}</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">
                  {servicesData[2].text.substring(0, 80) + "..."}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex justify-center lg:space-x-48">
          <div onClick={() => setSelectedService(servicesData[3])} className={`bg-hex w-[280px] h-[330px] flex items-center cursor-pointer ${selectedService.title === servicesData[3].title ? 'clr-white' : ''}`}>
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold'>{servicesData[3].title}</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">
                  {servicesData[3].text.substring(0, 80) + "..."}
                </p>
              </div>
            </div>
          </div>

          <div onClick={() => setSelectedService(servicesData[4])} className={`bg-hex w-[280px] h-[330px] flex items-center cursor-pointer ${selectedService.title === servicesData[4].title ? 'clr-white' : ''}`}>
            <div className="h-36 px-6">
              <h2 className='text-white text-2xl  font-bold'>{servicesData[4].title}</h2>
              <div className="opacity-60">
                <p className="text-lg font-light leading-5">
                  {servicesData[4].text.substring(0, 80) + "..."}
                </p>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-[#050d278c] py-6 w-full mb-8 custom-shadow-white flex justify-center text-2xl font-bold cursor-pointer hover:opacity-80">
          Register Now!
        </section>
      </div>
    </div>
  )
}

export default ServicesHero