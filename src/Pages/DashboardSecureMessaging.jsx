import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { ReactComponent as MessageIcon } from '../assets/message-icon.svg'

const DashboardSecureMessaging = () => {
  return (
    <section className="relative lg:-top-32 w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:space-x-12">
      <article className="bg-hex w-[280px] h-[330px] flex justify-center items-center">
        <div className="h-36 flex items-center px-6">
          <h2 className='text-white text-2xl font-bold pb-1 text-center'>Secure <br /> Messaging</h2>
        </div>
      </article>
      <article className="flex flex-col items-center text-center">
        <div className="py-4 text-2xl space-y-2 pl-4">
          <div className="flex items-center space-x-3">
            <p>Unread Messages</p>
            <div className="relative">
              <MessageIcon className="w-8" />
              <p className="absolute top-3 left-2 text-black text-base">10</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <PrimaryButton
            type="button"
            text="Go To Messages"
            className="h-11 w-full lg:max-w-[364px] text-2xl bg-gradient"
          />
          <PrimaryButton
            type="button"
            text="Update Security/Password"
            className="h-8 w-full lg:max-w-[300px] text-lg bg-gradient"
          />
        </div>
      </article>
    </section>
  )
}

export default DashboardSecureMessaging