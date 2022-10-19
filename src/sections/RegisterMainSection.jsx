import React, { useState } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { collection, setDoc, doc } from '@firebase/firestore'
import { ReactComponent as InputPolygon } from '../assets/RegistrationInputPolygon.svg'

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from '@firebase/auth'


import { db } from '../firebase'
import { auth } from '../firebase'


const RegisterMainSection = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState(
    {
      username: '',
      confirmUsername: '',
      password: '',
      confirmPassword: '',
      email: ''
    }
  )
  const usersCollectionRef = collection(db, "users")
  const actionCodeSettings = {
    url: 'https://sqe-holdings.netlify.app/login'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (registerData.username !== registerData.confirmUsername) {
      return toast.error('Username and confirm username fields dont match')
    }
    if (registerData.password !== registerData.confirmPassword) {
      return toast.error('Password and confirm password fields dont match')
    }
    try {
      await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
      await sendEmailVerification(auth.currentUser, actionCodeSettings)
      await setDoc(doc(usersCollectionRef, auth.currentUser.uid), {
        username: registerData.username,
        secondPhaseComplete: false
      })
      await signOut(auth)
      toast.success("Your registeration is complete, please check your email for verification", {
        id: 'reg'
      })
      setRegisterData({
        username: '',
        confirmUsername: '',
        password: '',
        confirmPassword: '',
        email: ''
      })
      navigate('/')

    } catch (error) {
      setRegisterData({
        username: '',
        confirmUsername: '',
        password: '',
        confirmPassword: '',
        email: ''
      })
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email Already In Use")
      }
      console.log(error.message)
    }
  }


  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white min-h-[calc(100vh-234px)">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Register" />
        <form onSubmit={handleSubmit} className=" max-w-2xl mx-auto">
          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute top-6 left-0" />
            <input
              value={registerData.username}
              onChange={({ target }) => setRegisterData({ ...registerData, username: target.value })}
              type="text"
              className="w-full h-[61px] bg-transparent  rounded-[30px] bg-[#DEDEDE] outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="USERNAME" required />
            <p className="pt-1 pl-8 uppercase">Username</p>
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute top-6 left-0" />
            <input
              value={registerData.confirmUsername}
              onChange={({ target }) => setRegisterData({ ...registerData, confirmUsername: target.value })}
              type="text"
              className="w-full h-[61px] bg-transparent rounded-[30px] bg-[#DEDEDE] outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="CONFIRM USERNAME" required />
            <p className="pt-1 pl-8 uppercase">Confirm Username</p>
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute top-6 left-0" />
            <input
              value={registerData.password}
              onChange={({ target }) => setRegisterData({ ...registerData, password: target.value })}
              type="password"
              className="w-full h-[61px] bg-transparent rounded-[30px] bg-[#DEDEDE] outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="PASSWORD" required />
            <p className="pt-1 pl-8 uppercase">Password</p>
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute top-6 left-0" />
            <input
              value={registerData.confirmPassword}
              onChange={({ target }) => setRegisterData({ ...registerData, confirmPassword: target.value })}
              type="password"
              className="w-full h-[61px] bg-transparent rounded-[30px] bg-[#DEDEDE] outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="CONFIRM PASSWORD" required />
            <p className="pt-1 pl-8 uppercase">Confirm Password</p>
          </div>

          <div className="space-y-2 relative text-[#46CEEC] font-semibold">
            <InputPolygon className="absolute top-6 left-0" />
            <input
              value={registerData.email}
              onChange={({ target }) => setRegisterData({ ...registerData, email: target.value })}
              type="email"
              className="w-full h-[61px] bg-transparent rounded-[30px] bg-[#DEDEDE] outline-none px-4  relative z-10 top-[9px] left-4 uppercase  placeholder:text-[#46CEEC]" placeholder="EMAIL ADDRESS" required />
            <p className="pt-1 pl-8 uppercase">Email Address</p>
          </div>

          <div className="pt-8 flex justify-center">
            <button type="submit">
              <div className="w-[350px] h-[90px] clip-primary bg-gradient flex justify-center items-center">
                <div className="w-[345px] h-[85px] clip-primary bg-[#011132] flex items-center justify-center">
                  <span className="uppercase font-bold bg-gradient text-lg text-gradient">Register Now</span>
                </div>
              </div>
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default RegisterMainSection