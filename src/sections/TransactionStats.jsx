import React from 'react'

const TransactionStats = () => {
  return (
    <section className="bg-gradient text-[22px] text-white flex px-4 lg:px-0">
      <article className="flex justify-center space-x-6 items-center flex-1 px-4 border-r border-white py-10">
        <p className="leading-6 font-saxmono">
          Transactions<br /> Per Second
        </p>
        <h3 className="font-bold text-3xl">100</h3>
      </article>
      <article className="flex justify-center space-x-6 items-center flex-2 px-4 border-r border-white py-10">
        <p className="leading-6 font-saxmono">
          Total<br /> Transactions
        </p>
        <h3 className="font-bold text-3xl">50,000,000</h3>
      </article>
      <article className="flex justify-center space-x-6 items-center  flex-2 px-4 border-r border-white py-10">
        <p className="leading-6 font-saxmono">
          Avg. Cost Per<br /> Transaction
        </p>
        <h3 className="font-bold text-3xl">$0.0050</h3>
      </article>
      <article className="flex justify-center space-x-6 items-center  flex-1 px-4 py-10">
        <p className="leading-6 font-saxmono">
          Transactions<br /> Per Second
        </p>
        <h3 className="font-bold text-3xl">100</h3>
      </article>
    </section>
  )
}

export default TransactionStats