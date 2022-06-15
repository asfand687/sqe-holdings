import React from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import PrimaryButton from '../components/PrimaryButton'

const LoginMainSection = () => {
  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle />
        <form className="space-y-4">
          <h3 className="text-sm font-medium">*Required Field</h3>
          <div className="space-y-2">
            <p className="text-xl">*Create Username</p>
            <input type="text" className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Confirm Username </p>
            <input type="text" className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Create Password</p>
            <input type="password" className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Confirm Password </p>
            <input type="password" className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Enter Email</p>
            <input type="email" className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="pt-8">
            <PrimaryButton
              className="w-52 h-10 text-2xl"
              text="Complete"
              type="submit"
            />
          </div>
        </form>
      </article>
    </section>
  )
}

export default LoginMainSection