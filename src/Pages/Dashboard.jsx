import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"


import HeroRight from '../assets/services-hero-right.png'

// import { auth, db } from '../firebase'
// import { getDoc, doc } from '@firebase/firestore'
import DashboardHeader from '../sections/DashboardHeader'
import '../App.css';
import DashboardHome from './DashboardHome'
import DashboardGame from './DashboardGame'
import DashboardExchange from './DashboardExchange'
import DashboardSecureMessaging from './DashboardSecureMessaging'
import DashboardNoCodeCreatorCenter from './DashboardNoCodeCreatorCenter'
import { ReactComponent as Polygon } from '../assets/polygon.svg'
import LogoPolygon from '../assets/logo-polygon.png'




const Dashboard = () => {

  return (
    <section className=" pb-16  text-[#042257] relative min-h-screen bg-[#011942]">
      <img src={HeroRight} className="absolute -top-28 z-0 right-0" alt="Hero Background Right" />
      <Polygon key={1} className="absolute right-64 -top-48 w-48" />
      <Polygon key={2} className="absolute right-0 top-48 w-28" />
      <img src={LogoPolygon} className="absolute right-0 top-0 w-72" alt="SQE Logo" />
      <div className="w-full max-w-[1550px] relative">
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