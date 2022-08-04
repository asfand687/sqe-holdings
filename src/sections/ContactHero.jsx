import React from 'react'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Instagram } from '../assets/insta-big.svg'

const ContactHero = () => {
  return (
    <section className="relative text-white">
      <div className="about-bg h-[500px]">
        <div className="w-full max-w-[1076px] mx-auto relative z-10 py-20">
          <h1 className="text-[96px] font-semibold pt-8">Contact</h1>
        </div>
      </div>
      <article className="w-full max-w-[1076px] mx-auto">
        <div className="bg-[#385284] relative -top-52 rounded-3xl p-8 shadow-2xl custom-shadow">
          <form className="space-y-3">
            <article className="flex space-x-4">
              <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-[24px] font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-[24px] font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
            </article>
            <article className="flex space-x-4">
              <input type="email" placeholder="email" className="flex-1 bg-transparent border-2 text-[24px] font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              <input type="text" placeholder="subject" className="flex-1 bg-transparent border-2 text-[24px] font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
            </article>
            <textarea className="w-full text-[24px] rounded-xl px-4 bg-transparent border-2 placeholder-white outline-none border-white" rows="10" placeholder='message'> </textarea>
            <button type="submit" className="w-full rounded-full h-[76px] bg-white text-black text-[40px] font-bold">Submit</button>
          </form>
          <div className="py-4 flex justify-between">
            <p className="font-semibold leading-snug text-[36px]">Feel free to message us <br />
              for any questions or concerns</p>
            <div className="space-y-4">
              <p className="font-medium text-[30px] leading-snug">info@sqeholdings.com</p>
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