import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  return (
    <section className="text-white">
      <div className="relative  gap-y-10 w-full max-w-[1400px] mx-auto">
        <article className="flex justify-center gap-y-10 px-4 flex-wrap lg:space-x-10">
          <Link to="/dashboard/exchange" className="bg-hex w-[330px] h-[380px] flex items-center">
            <div className="h-36 flex justify-center items-center pl-6 w-full">
              <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>Exchange</h2>
            </div>
          </Link>

          <Link to="/dashboard/game" className="bg-hex w-[330px] h-[380px] flex justify-center items-center">
            <div className="h-36 flex justify-center items-center pl-6 w-full">
              <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>Game</h2>
            </div>
          </Link>

          <Link to="/dashboard/my-sqe-app" className="bg-hex w-[330px] h-[380px] flex justify-center items-center">
            <div className="h-36 flex justify-center items-center pl-6 w-full">
              <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>My SQE App</h2>
            </div>
          </Link>
        </article>

        <article className="flex justify-center gap-y-10 px-4 flex-wrap lg:space-x-10">
          <Link to="/dashboard/secure-messaging" className="bg-hex w-[330px] h-[380px] flex justify-center items-center">
            <div className="h-36 flex justify-center items-center pl-6 w-full">
              <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>Secure <br /> Messaging</h2>
            </div>
          </Link>

          <Link to="/dashboard/no-code-creator-center" className="bg-hex w-[330px] h-[380px] flex justify-center items-center">
            <div className="h-36 flex justify-center items-center pl-6 w-full">
              <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat px-4'>No-Code Creator Center</h2>
            </div>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default DashboardHome