import React from 'react'

const TransactionStats = () => {
  return (
    <section className="bg-[#001B48] text-[22px] text-white flex px-4 py-6 lg:px-12 text-center">
      <article className="flex-1 px-4 border-r-2 border-white space-y-6">
        <h2 className="text-[#18A6EE] font-bold text-3xl">100,000</h2>
        <p className="leading-6 text-xl">
          possible transactions <br /> per second
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-6">
        <h2 className="text-[#18A6EE] font-bold text-3xl">0</h2>
        <p className="leading-6 text-xl">
          carbon <br /> footprint
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-6">
        <h2 className="text-[#18A6EE] font-bold text-3xl">1000</h2>
        <p className="leading-6 text-xl">
          active <br /> users
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-transparent space-y-6">
        <h2 className="text-[#18A6EE] font-bold text-3xl">10,000</h2>
        <p className="leading-6 text-xl">
          international <br /> miners
        </p>
      </article>
    </section>
  )
}

export default TransactionStats