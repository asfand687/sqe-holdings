import React from 'react'

const TransactionStats = () => {
  return (
    <section className="bg-gradient-secondary text-[22px] text-white flex px-4 py-6 lg:px-12 text-center">
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">100,000</h2>
        <p className="leading-6 text-xl">
          possible transactions <br /> per second
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">0</h2>
        <p className="leading-6 text-xl">
          carbon <br /> footprint
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">1000</h2>
        <p className="leading-6 text-xl">
          active <br /> users
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-transparent space-y-4">
        <h2 className=" font-extrabold text-5xl">10,000</h2>
        <p className="leading-6 text-xl">
          international <br /> miners
        </p>
      </article>
    </section>
  )
}

export default TransactionStats