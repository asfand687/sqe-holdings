import React from 'react'

const DashboardExchange = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:space-x-12 min-h-screen">
      <article className="bg-hex w-[330px] h-[380px] flex items-center">
        <div className="h-36 flex justify-center items-center pl-6 w-full">
          <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>Exchange</h2>
        </div>
      </article>
      <article className="space-y-4 text-center flex-1 lg:flex lg:justify-start">
        <div>
          <div className="py-4 text-xl space-y-2 pl-4 font-semibold">
            <p>SQC Owned: xx</p>
            <p>NFTs Owned: xx</p>
          </div>
          <div className="w-full max-w-[364px] space-y-4">
            <button>
              <div className="w-[467px] h-[69px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[463px] h-[65px] clip-primary bg-white flex items-center justify-center">
                  <span className="uppercase font-bold text-black text-lg ">NFT Marketplace</span>
                </div>
              </div>
            </button>
            <button>
              <div className="w-[467px] h-[69px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[463px] h-[65px] clip-primary bg-white flex items-center justify-center">
                  <span className="uppercase font-bold text-black text-lg ">SQC Marketplace</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default DashboardExchange