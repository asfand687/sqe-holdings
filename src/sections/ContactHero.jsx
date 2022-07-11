import React from 'react'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Instagram } from '../assets/insta-big.svg'

const ContactHero = () => {
  return (
    <section className="relative bg-[#020B1D] text-white">
      <div className="about-bg h-[500px]">
        <div className="w-full max-w-7xl mx-auto relative z-10 py-20">
          <h1 className="text-7xl font-semibold pt-8">Contact</h1>
        </div>
      </div>
      <article className="w-full max-w-7xl mx-auto">
        <div className="bg-[#385284] relative -top-64 rounded-3xl p-8 shadow-2xl custom-shadow">
          <form className="space-y-3">
            <article className="flex space-x-4">
              <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
            </article>
            <article className="flex space-x-4">
              <input type="email" placeholder="email" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              <input type="text" placeholder="subject" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
            </article>
            <textarea className="w-full rounded-xl p-4 bg-transparent border-2 placeholder-white outline-none border-white" rows="10" placeholder='message'></textarea>
            <button type="submit" className="w-full rounded-full bg-white text-black font-bold py-3 text-lg">Submit</button>
          </form>
          <div className="py-4 flex justify-between">
            <p className="font-semibold text-3xl">Feel free to message us <br />
              for any questions or concerns</p>
            <div className="space-y-2">
              <p className="font-medium text-2xl">info@sqeholdings.com</p>
              <div className="flex justify-end space-x-2 items-center">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ContactHero