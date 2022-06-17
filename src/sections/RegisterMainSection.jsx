import React, { useState } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { collection, setDoc, doc } from '@firebase/firestore'

import {
  createUserWithEmailAndPassword,
  sendEmailVerification
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
      console.log(error.message)
    }
  }


  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Register With SQE" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-sm font-medium">*Required Field</h3>
          <div className="space-y-2">
            <p className="text-xl">*Create Username</p>
            <input
              value={registerData.username}
              onChange={({ target }) => setRegisterData({ ...registerData, username: target.value })}
              type="text"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Confirm Username </p>
            <input
              value={registerData.confirmUsername}
              onChange={({ target }) => setRegisterData({ ...registerData, confirmUsername: target.value })}
              type="text"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Create Password</p>
            <input
              value={registerData.password}
              onChange={({ target }) => setRegisterData({ ...registerData, password: target.value })}
              type="password"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Confirm Password </p>
            <input
              value={registerData.confirmPassword}
              onChange={({ target }) => setRegisterData({ ...registerData, confirmPassword: target.value })}
              type="password"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Enter Email</p>
            <input
              value={registerData.email}
              onChange={({ target }) => setRegisterData({ ...registerData, email: target.value })}
              type="email"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="pt-8">
            <PrimaryButton
              className="w-52 h-10 text-2xl btn-gradient"
              text="Complete"
              type="submit"
            />
          </div>
        </form>
      </article>
    </section>
  )
}

export default RegisterMainSection