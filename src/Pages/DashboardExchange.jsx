import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const DashboardExchange = () => {
  return (
    <section className="relative lg:-top-32 w-full max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:space-x-12">
      <article className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
        <div className="h-36 flex items-center px-6">
          <h2 className='text-white text-2xl font-bold pb-1'>Exchange</h2>
        </div>
      </article>
      <article>
        <div className="py-4 text-xl space-y-2 pl-4">
          <p>SQC Owned: xx</p>
          <p>NFTs Owned: xx</p>
        </div>
        <div className="space-y-4">
          <PrimaryButton
            type="button"
            text="NFT Marketplace"
            className="h-11 w-full lg:max-w-[364px] text-2xl bg-gradient"
          />
          <PrimaryButton
            type="button"
            text="SQC Marketplace"
            className="h-11 w-full lg:max-w-[364px] text-2xl bg-gradient"
          />
        </div>
      </article>
    </section>
  )
}

export default DashboardExchange