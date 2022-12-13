import React, { useEffect } from 'react'
import { ReactComponent as InputPolygon } from '../assets/RegistrationInputPolygon.svg'
import { ReactComponent as TextboxPolygon } from '../assets/contact-textbox.svg'
import { ReactComponent as ContactTitle } from '../assets/contact-title.svg'


const Contact = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="bg-[#011842] relative px-4">
      <div className="flex justify-center py-10 w-full max-w-[450px] mx-auto">
        <ContactTitle className="w-full" />
      </div>
      <div className="w-full max-w-[40rem] mx-auto pb-20">
        <form className="space-y-3">
          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute w-full top-6 left-0" />
            <input
              type="text"
              className="w-full h-[61px] bg-transparent rounded-[30px] outline-none px-4 pt-1 relative z-10 top-[9px] left-8 placeholder:text-[#46CEEC]" placeholder="NAME" required />
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute w-full top-6 left-0" />
            <input
              type="text"
              className="w-full h-[61px] bg-transparent rounded-[30px] outline-none px-4 pt-1 relative z-10 top-[9px] left-8 placeholder:text-[#46CEEC]" placeholder="EMAIL" required />
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold max-w-[650px]">
            <TextboxPolygon className="w-full absolute -top-24 md:-top-8" />
            <textarea style={{ resize: "none" }} className="w-full h-[200px] placeholder:uppercase placeholder:text-[#46CEEC] bg-transparent px-8 py-14 md:px-8 md:py-16 relative z-10 outline-0" placeholder='How Can We Help You?'></textarea>
          </div>

          <div className="pt-20 flex justify-center">
            <button type="submit">
              <div className="w-[350px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[345px] h-[85px] clip-primary bg-[#011842] flex items-center justify-center">
                  <span className="uppercase font-bold bg-gradient text-lg text-gradient">Submit</span>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact