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
    <section className="bg-[#071328] pb-16  text-white relative min-h-[calc(100vh-234px) bg-dashboard">
      <DashboardHeader />

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