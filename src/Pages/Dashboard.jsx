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
  return (
    <section className="bg-white pb-16  text-[#042257] relative min-h-screen ">
      <div className="dashboard-hero-bg w-full max-w-[1550px] relative">
        <div className="absolute dashboard-bottom-bg w-full max-w-[1550px] h-[170vh] right-0 top-0 z-0"></div>
        <DashboardHeader />
        <Routes className="text-[#042257]">
          <Route exact path="/" element={<DashboardHome />} />
          <Route exact path="/game" element={<DashboardGame />} />
          <Route exact path="/exchange" element={<DashboardExchange />} />
          <Route exact path="/secure-messaging" element={<DashboardSecureMessaging />} />
          <Route exact path="/no-code-creator-center" element={<DashboardNoCodeCreatorCenter />} />
        </Routes>
      </div>
    </section>
  )
}

export default Dashboard