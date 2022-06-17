import React, { useEffect } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import PrimaryButton from '../components/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import toast from 'react-hot-toast'
import { signOut } from '@firebase/auth'
import { getDoc, doc, updateDoc } from '@firebase/firestore'
import { db } from '../firebase'

const WelcomeSection = () => {
  const navigate = useNavigate()

  const getUser = async () => {
    const user = await getDoc(doc(db, 'users', auth.currentUser.uid))
    if (user.data().secondPhaseComplete) navigate('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      secondPhaseComplete: true
    })
    navigate('/dashboard')
  }

  useEffect(() => {
    if (!auth?.currentUser?.emailVerified) {
      toast.error("Your email is not verified, please verify your email", {
        id: 'unverified'
      })
      signOut(auth)
      navigate('/')
    }
    getUser()
  }, [])
  return (
    <section className="bg-[#081233] p-4 pb-16  lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Register With SQE" className="pb-8" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-jost font-medium text-2xl">Select which SQE Features you are interested in:</h3>
          <div className="space-y-2">
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Become Mobile Miner</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Become SQ Link {"&"} SQ Node Miner</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Become Partner Component Designer</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Smart Contracts</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">NFTs - Creation</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">NFTs - Marketplace</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Send {"&"} Receive SQC (SQE Cryptocurrency)</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Taxi App (Coming Soon)</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">SecuSign (Coming Soon)</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Send {"&"} Receive Money</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">International Money Exchange</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Gaming</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">How-To Videos & Tutorials</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Become Mobile Miner</span>
              </label>
            </article>
            <article>
              <label className="inline-flex items-center">
                <input type="radio" className="checkbox-round" />
                <span className="ml-4 text-xl">Others</span>
              </label>
            </article>
            <article className="pt-[3rem]">

              <PrimaryButton
                className="lg:max-w-[470px] h-16 text-2xl btn-gradient"
                text="Bring Me To My SQE Dashboard"
                type="submit"
              />

            </article>
          </div>
        </form>
      </article>
    </section>
  )
}

export default WelcomeSection