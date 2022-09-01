import React from 'react'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Instagram } from '../assets/insta-big.svg'

const ContactHero = () => {
  return (
    <section className="relative text-white z-10">
      <div className="w-full max-w-5xl mx-auto relative z-10 py-10 pb-20">
        <h1 className="text-7xl font-semibold pt-8 font-montserrat uppercase contact__title-bg-gradient">Contact</h1>
      </div>
      <article className="w-full max-w-5xl mx-auto">
        <div className="w-full bg-white rounded-3xl custom-shadow shadow-2xl flex justify-center items-center p-[2px] bg-gradient-contact">
          <div className={`bg-[#0A1436] rounded-3xl p-8 w-full`}>
            <form className="space-y-3">
              <article className="flex space-x-4">
                <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
                <input type="text" placeholder="first name" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              </article>
              <article className="flex space-x-4">
                <input type="email" placeholder="email" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
                <input type="text" placeholder="subject" className="flex-1 bg-transparent border-2 text-lg font-medium outline-none placeholder-white border-white rounded-full p-2 px-4" />
              </article>
              <textarea className="w-full text-lg rounded-xl px-4 bg-transparent border-2 placeholder-white outline-none border-white" rows="7" placeholder='message'> </textarea>
              <button type="submit" className="w-full rounded-full py-3 bg-white text-black text-lg font-bold">Submit</button>
            </form>
            <div className="py-4 flex justify-between">
              <p className="font-semibold leading-snug text-2xl">Feel free to message us <br />
                for any questions or concerns</p>
              <div className="space-y-4">
                <p className="font-medium text-xl leading-snug">info@sqeholdings.com</p>
                <div className="flex justify-end space-x-2 items-center">
                  <Instagram className="w-7" />
                  <Twitter className="w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ContactHero