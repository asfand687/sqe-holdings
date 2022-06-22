import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { auth } from '../firebase'
import { updatePassword } from "@firebase/auth"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const UpdatePassword = () => {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("")
  const user = auth.currentUser
  const updateUserPassword = (e) => {
    e.preventDefault()
    updatePassword(user, newPassword).then(() => {
      toast.success("Password updated successfully")
      navigate('/dashboard')
    })
      .catch(error => {
        console.log(error.message)
        toast.error(error.message)
      })
  }
  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white relative min-h-[calc(100vh-234px)]">
      <form onSubmit={updateUserPassword} className="space-y-2">
        <div className="space-y-2">
          <p className="text-xl">*Enter New Password</p>
          <input
            value={newPassword}
            onChange={({ target }) => setNewPassword(target.value)}
            type="password"
            className="w-full max-w-[537px] h-10 rounded-[30px] bg-[#DEDEDE] outline-none px-4 text-gray-700" required />
        </div>
        <div>
          <PrimaryButton
            className="w-52 h-10 text-2xl btn-gradient"
            text="Update"
            type="submit"
          />
        </div>
      </form >
    </section >
  )
}

export default UpdatePassword