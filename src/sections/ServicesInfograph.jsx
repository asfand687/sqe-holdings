import React, { useState } from 'react'

let servicesData = [
  {
    title: "Create",
    text: "Create no-code apps and smart contracts on a user-friendly, quantum-secure platform."
  },
  {
    title: "Game",
    text: "Play, wager, and explore an expanding world of secure, ad free gaming."
  },
  {
    title: "Automate",
    text: "Personal Digital Assistant (PDA) uses Web3 tech to automate your critical everyday tasks."
  },
  {
    title: "Exchange",
    text: "Invest, buy & sell QueCoin, the world’s most secure semi-stable crypto."
  },
  {
    title: "Communicate",
    text: "Secure messaging powered by simulated quantum entanglement."
  },
  {
    title: "Participate",
    text: "Earn QueCoin by becoming part of our distributed mining network."
  }
]

const ServicesInfograph = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0])
  return (
    <div className="px-4 mx-auto lg:max-w-[1450px] -space-y-20 pt-72 pb-8 text-white">

      <article className="flex justify-center lg:space-x-36">
        <div onClick={() => setSelectedService(servicesData[0])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[0].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[0].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[0].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[0].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div onClick={() => setSelectedService(servicesData[1])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[1].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[1].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[1].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[1].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>

      <article className="flex justify-center items-center lg:space-x-4">
        <div onClick={() => setSelectedService(servicesData[2])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[2].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[2].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[2].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[2].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="w-[597px] h-[640px] p-8 py-10 bg-polygon-xl">
          <div className="w-[400px] text-center relative top-24 mx-auto">
            <h2 className="font-bold uppercase text-4xl leading-tight font-montserrat">{selectedService.title}</h2>
            <p className="text-xl font-light tracking-tight pt-12 pb-32">{selectedService.text}</p>
            <button className="mt-2">
              <div className="hexagon w-[120px] h-[63px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[115px] h-[58px] uppercase flex items-center justify-center bg-[#02376F] '}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div onClick={() => setSelectedService(servicesData[3])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[3].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[3].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[3].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[3].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>

      <article className="flex justify-center lg:space-x-48">
        <div onClick={() => setSelectedService(servicesData[4])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[4].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[4].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[4].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[4].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div onClick={() => setSelectedService(servicesData[5])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[5].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-xl tracking-wider font-bold font-montserrat uppercase'>
              {servicesData[5].title}
            </h2>
            <div className="opacity-100">
              <p className="text-lg font-light leading-5">
                {servicesData[5].text.substring(0, 80) + "..."}
              </p>
            </div>
            <button className="mt-2">
              <div className="hexagon w-[90px] h-[53px] flex justify-center items-center bg-gradient">
                <div className={`hexagon w-[85px] h-[48px] uppercase flex items-center justify-center ${selectedService.title === servicesData[5].title ? 'bg-[#02376F]' : 'bg-[#021943]'}`}>
                  <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ServicesInfograph