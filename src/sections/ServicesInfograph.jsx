import React, { useState } from 'react'

let servicesData = [
  {
    title: "Create",
    text: "SQE’s No-Code App Generator and No-Code Smart Contract Generator are changing the game for businesses, individuals, creators, and non-technical users everywhere. Use SQE’s No-Code App Generator to:",
    list: "grow your business or brand awareness, simplify your most important interactions with the built-in No-Code Smart Contract Builder, give your customers peace of mind with quantum security",
    secondParagraph: "Developers can also earn QueCoin by creating components for no-code apps and smart contracts we use everyday. Get registered to get started."
  },
  {
    title: "Game",
    text: "Play, wager, and explore an expanding world of secure, ad free gaming. With a constantly growing market of games, SQE’s gaming platform makes ad-free gaming more secure than ever. A platform powered by Proof of Entanglement (PoE) and simulated quantum entanglement means:",
    list: "secure wagers, ad-free gaming, community-created gaming, unparalleled gaming speeds",
  },
  {
    title: "Automate",
    text: "Personal Digital Assistant (PDA) uses Web3 tech to automate your critical everyday tasks. SQE’s PDA can help you automate your daily life with:",
    list: "smart alarm clock, smart contact calender integration, secure messaging integrations, exchange automations"
  },
  {
    title: "Exchange",
    text: "Get on the secure SQE Crypto Exchange to buy, sell and market our semi-stable cryptocurrency, QueCoin. QueCoin provides security for all. Other cryptocurrencies experiencing more than $1.4 billion in theft. SQE’s QueCoin  is built on a platform developed for quantum security so you can rest knowing your investments are always safe.",
    secondParagraph: "You can also hop on over to our NFT Marketplace to buy, sell, and verify NFTs. (Coming Soon)"
  },
  {
    title: "Communicate",
    text: "SQE’s Secure Messaging is raising the bar for security standards. Because SQE’s Secure Messaging runs on Proof of Entanglement (PoE) and simulated quantum entanglement, messages sent between users are encrypted with key-less security. When you send a message on SQE’s Secure Messaging, you’re more likely to win the lottery every day for a week than to have one message hacked.",
    secondParagraph: "Register to get on our quantum secure messaging app today."
  },
  {
    title: "Participate",
    text: "Want to get involved with SQE in a meaningful way? Becoming an SQE Miner is easier than any other system. Simply register, apply, and receive your device. Each SQE Mining Link has secured software and hardware that prevent hacking on any level. And the best part? You don’t have to do anything to start making profits. Make QueCoin by simply keeping the device in your home. ",
    secondParagraph: "Learn more about making QueCoin with an SQE Mining Link by clicking below."
  }
]


const ServicesInfograph = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0])
  return (
    <div className="px-4 mx-auto lg:max-w-[1450px] -space-y-20 pt-72 pb-8 text-white">

      <article className="flex flex-col md:flex-row justify-center lg:space-x-36">
        <div onClick={() => setSelectedService(servicesData[0])} className={`bg-hex w-[336px] h-[378px] flex items-center cursor-pointer ${selectedService.title === servicesData[0].title ? 'clr-white' : ''}`}>
          <div className="h-48 w-64 relative -top-0 space-y-6 left-12 text-center">
            <h2 className='text-white text-lg tracking-wider font-bold font-montserrat uppercase'>
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

      <article className="flex pt-12 md:pt-0 flex-col md:flex-row justify-center items-center lg:space-x-4">
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

        <div className="hidden md:block w-[597px] h-[640px] p-8 py-10 bg-polygon-xl relative">
          <div className="w-[450px] relative top-16 mx-auto px-4">
            <h2 className="font-bold uppercase text-2xl leading-tight font-montserrat text-center tracking-wider pb-4">{selectedService.title}</h2>
            <p className=" font-light tracking-tight">{selectedService.text}</p>
            {
              selectedService.list ? (
                <ul className="pl-8 py-4">
                  {
                    selectedService.list?.split(",").map((item, i) => (
                      <li key={i} className="list-disc font-light tracking-tight">{item}</li>
                    ))
                  }
                </ul>
              ) :
                (
                  <div className="pb-4" />
                )
            }

            {
              selectedService.secondParagraph && (
                <p className="font-light tracking-tight">{selectedService.secondParagraph}</p>
              )
            }

            <div className="flex justify-center">
              <button className="mt-2 absolute top-[370px]">
                <div className="hexagon w-[120px] h-[63px] flex justify-center items-center bg-gradient">
                  <div className={`hexagon w-[115px] h-[58px] uppercase flex items-center justify-center bg-[#02376F] '}`}>
                    <h2 className="uppercase bg-gradient text-gradient font-semibold">More</h2>
                  </div>
                </div>
              </button>
            </div>
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

      <article className="flex pt-12 md:pt-0 flex-col md:flex-row justify-center lg:space-x-48">
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