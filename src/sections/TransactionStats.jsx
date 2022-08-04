import React from 'react'

const TransactionStats = () => {
  return (
    <section className="bg-gradient-secondary text-[22px] text-white flex px-4 py-6 lg:px-12 text-center">
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">~1500</h2>
        <p className="leading-6 text-xl">
          transactions <br /> per second
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">{"<"} 1 sec</h2>
        <p className="leading-6 text-xl">
          average time to build <br /> block on blockchain
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-white space-y-4">
        <h2 className=" font-extrabold text-5xl">99%</h2>
        <p className="leading-6 text-xl">
          lower carbon <br /> footprint
        </p>
      </article>
      <article className="flex-1 px-4 border-r-2 border-transparent space-y-4">
        <h2 className=" font-extrabold text-5xl">{"<"} $0.0001</h2>
        <p className="leading-6 text-xl">
          average cost <br /> per transaction
        </p>
      </article>
    </section>
  )
}

export default TransactionStats