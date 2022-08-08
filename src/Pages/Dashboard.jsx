import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"

// import { auth, db } from '../firebase'
// import { getDoc, doc } from '@firebase/firestore'
import DashboardHeader from '../sections/DashboardHeader'
import '../App.css';
import DashboardHome from './DashboardHome'
import DashboardGame from './DashboardGame'
import DashboardExchange from './DashboardExchange'
import DashboardSecureMessaging from './DashboardSecureMessaging'
import DashboardNoCodeCreatorCenter from './DashboardNoCodeCreatorCenter'

const Dashboard = () => {
  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const userData = await getDoc(doc(db, 'users', auth.currentUser.uid))
  //     setUser(userData.data())
  //   }
  //   getUserInfo()
  // }, [])

  return (
    <section className="bg-[#071328] pb-16  text-white relative min-h-[calc(100vh-234px)">
      <DashboardHeader />
      {/* <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="My SQE Dashboard" className="pb-8" />
        <aside className="absolute right-5 top-10">
          <img src={QRCode} alt="QR Code" />
        </aside>
        <article className='flex pb-8'>
          <div className='flex-1 space-y-2 text-2xl'>
            <p className="pl-4">{user?.username}</p>
            <Link to="/update-password">
              <PrimaryButton
                type="button"
                text="Update Security/Password"
                className="h-11 w-full lg:max-w-[364px] text-2xl bg-[#1786FF]"
              />
            </Link>
            <div className="py-4 space-y-2 pl-4">
              <p>SQC Owned: xx</p>
              <p>NFTs Owned: xx</p>
            </div>
            <div className="space-y-4">
              <PrimaryButton
                type="button"
                text="NFT Marketplace"
                className="h-11 w-full lg:max-w-[364px] text-2xl bg-[#1786FF]"
              />
              <PrimaryButton
                type="button"
                text="SQC Marketplace"
                className="h-11 w-full lg:max-w-[364px] text-2xl bg-[#1786FF]"
              />
            </div>
          </div>
          <div className='flex-1 border-l min-h-[374px] border-blue-400 px-6'>
            <article className="pt-9 space-y-4">
              <div className="flex items-center space-x-4">
                <img className="w-6 h-6" src={Fox} alt="Fox" />
                <PrimaryButton
                  type="button"
                  text="MetaMask"
                  className="h-10 w-36 text-xl bg-[#1786FF]"
                />
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-6 h-6" src={Shield} alt="Shield" />
                <PrimaryButton
                  type="button"
                  text="Trust Wallet"
                  className="h-10 w-36 text-xl bg-[#1786FF]"
                />
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-6 h-6" src={Rainbow} alt="Rainbow" />
                <PrimaryButton
                  type="button"
                  text="Rainbow"
                  className="h-10 w-36 text-xl bg-[#1786FF]"
                />
              </div>
              <div className="pt-3">
                <PrimaryButton
                  type="button"
                  text="Connect Mask"
                  className="h-10 w-52 text-xl btn-gradient"
                />
              </div>
            </article>
          </div>
        </article>
      </article> */}
      <Routes className="text-white">
        <Route exact path="/" element={<DashboardHome />} />
        <Route exact path="/game" element={<DashboardGame />} />
        <Route exact path="/exchange" element={<DashboardExchange />} />
        <Route exact path="/secure-messaging" element={<DashboardSecureMessaging />} />
        <Route exact path="/no-code-creator-center" element={<DashboardNoCodeCreatorCenter />} />
      </Routes>
    </section>
  )
}

export default Dashboard