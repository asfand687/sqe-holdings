import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  return (
    <section className="text-white">
      <div className="relative lg:-top-32 gap-y-10 w-full max-w-[1400px] mx-auto">
        <article className="flex justify-center gap-y-10 px-4 flex-wrap lg:space-x-10">
          <Link to="/dashboard/exchange" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
            <div className="h-36 flex items-center px-6">
              <h2 className='text-white text-2xl font-bold pb-1'>Exchange</h2>
            </div>
          </Link>

          <Link to="/dashboard/game" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
            <div className="h-36 flex items-center px-6">
              <h2 className='text-white text-2xl font-bold pb-1'>Game</h2>
            </div>
          </Link>

          <Link to="/dashboard/my-sqe-app" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
            <div className="h-36 flex items-center px-6">
              <h2 className='text-white text-2xl font-bold pb-1'>My SQE App</h2>
            </div>
          </Link>
        </article>

        <article className="flex justify-center gap-y-10 px-4 flex-wrap lg:space-x-10">
          <Link to="/dashboard/secure-messaging" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
            <div className="h-36 flex items-center px-6">
              <h2 className='text-white text-2xl text-center font-bold pb-1'>Secure <br /> Messaging</h2>
            </div>
          </Link>

          <Link to="/dashboard/no-code-creator-center" className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
            <div className="h-36 flex items-center px-6">
              <h2 className='text-white text-center text-2xl font-bold pb-1'>No-Code Creator Center</h2>
            </div>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default DashboardHome