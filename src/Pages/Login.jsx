import React, { useState } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as InputPolygon } from '../assets/RegistrationInputPolygon.svg'
import {
  signInWithEmailAndPassword,
} from '@firebase/auth'

import toast from 'react-hot-toast'

import { getDoc, doc } from '@firebase/firestore'

import { auth, db } from '../firebase'

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: '',
    }
  )



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      setLoginData({
        email: '',
        password: '',
      })
      const userData = await getDoc(doc(db, 'users', auth.currentUser.uid))
      if (userData.data().secondPhaseComplete) { return navigate('/dashboard') }
      navigate('/welcome')

    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Wrong Credentials")
      }
    }
  }

  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white min-h-[calc(100vh-190px)]">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Login" />
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* <h3 className="text-sm font-medium">*Please Login to complete your registration</h3> */}

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute w-[330px] md:w-full top-6 left-0" />
            <input
              value={loginData.email}
              onChange={({ target }) => setLoginData({ ...loginData, email: target.value })}
              type="email"
              className="w-full h-[61px]  rounded-[30px] bg-transparent outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="EMAIL ADDRESS" required />
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute w-[330px] md:w-full top-6 left-0" />
            <input
              value={loginData.password}
              onChange={({ target }) => setLoginData({ ...loginData, password: target.value })}
              type="password"
              className="w-full h-[61px] rounded-[30px] bg-transparent outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="PASSWORD" required />
          </div>
          <div className="pt-8 flex justify-center">
            <button type="submit">
              <div className="w-[350px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[345px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
                  <span className="uppercase font-bold bg-gradient text-lg text-gradient">Login</span>
                </div>
              </div>
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Login