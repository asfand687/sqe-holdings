import React from 'react'
import { ReactComponent as MessageIcon } from '../assets/message-icon.svg'

const DashboardSecureMessaging = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:space-x-12">
      <article className="bg-hex w-[330px] h-[380px] flex justify-center items-center">
        <div className="h-36 flex justify-center items-center pl-6 w-full">
          <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat px-4'>
            Secure <br /> Messaging
          </h2>
        </div>
      </article>
      <article className="flex flex-col items-center text-center">
        <div className="py-4 text-2xl space-y-2 pl-4">
          <div className="flex items-center space-x-3">
            <p className="font-medium">Unread Messages</p>
            <div className="relative">
              <MessageIcon className="w-12" />
              <p className="absolute top-[24px] left-[13px] text-black font-medium text-xl">10</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <button>
            <div className="w-[467px] h-[69px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[463px] h-[65px] clip-primary bg-white flex items-center justify-center">
                <span className="uppercase font-bold text-medium text-lg ">Go To Messages</span>
              </div>
            </div>
          </button>
          <br />
          <button>
            <div className="w-[400px] h-[49px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[395px] h-[44px] clip-primary bg-white flex items-center justify-center">
                <span className="uppercase font-bold text-semibold text-xs ">Update Security/Password</span>
              </div>
            </div>
          </button>
        </div>
      </article>
    </section >
  )
}

export default DashboardSecureMessaging