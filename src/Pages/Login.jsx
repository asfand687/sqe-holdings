import React, { useState } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import PrimaryButton from '../components/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
} from '@firebase/auth'

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

  const getUser = async () => {
    const user = await getDoc(doc(db, 'users', auth.currentUser.uid))
    if (user.data().secondPhaseComplete) navigate('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      const userData = await getDoc(doc(db, 'users', auth.currentUser.uid))
      if (userData.data().secondPhaseComplete) { return navigate('/dashboard') }
      setLoginData({
        email: '',
        password: '',
      })
      navigate('/welcome')

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white min-h-[calc(100vh-234px)]">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Login" />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <h3 className="text-sm font-medium">*Please Login to complete your registration</h3> */}
          <div className="space-y-2">
            <p className="text-xl">*Enter Email</p>
            <input
              value={loginData.email}
              onChange={({ target }) => setLoginData({ ...loginData, email: target.value })}
              type="email"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="space-y-2">
            <p className="text-xl">*Enter Password</p>
            <input
              value={loginData.password}
              onChange={({ target }) => setLoginData({ ...loginData, password: target.value })}
              type="password"
              className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
          </div>
          <div className="pt-8">
            <PrimaryButton
              className="w-52 h-10 text-2xl btn-gradient"
              text="Login"
              type="submit"
            />
          </div>
        </form>
      </article>
    </section>
  )
}

export default Login