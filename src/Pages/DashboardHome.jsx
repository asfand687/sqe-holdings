import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDoc, doc } from '@firebase/firestore'
import { db } from '../firebase'
import { auth } from '../firebase'

const DashboardHome = () => {

  const [dashboardOptions, setDashboardOptions] = useState([])

  useEffect(() => {

    const getUser = async () => {
      const user = await getDoc(doc(db, 'users', auth.currentUser.uid))
      setDashboardOptions(user.data().selectedOptions)
    }
    getUser()
  }, [])

  console.log(dashboardOptions)
  return (
    <section className="text-white md:pt-20">
      <div className="relative gap-y-10 w-full max-w-6xl mx-auto">
        <article className="flex justify-center gap-y-10 px-4 flex-wrap lg:space-x-10">
          {
            dashboardOptions.map((item, i) => (
              <Link key={i} to={`/dashboard/${item.toLowerCase().split(" ").join("-")}`} className="bg-hex w-[310px] h-[360px] flex items-center">
                <div className="h-36 flex justify-center items-center w-full">
                  <h2 className='text-white text-2xl text-center font-bold pb-1 font-montserrat'>{item}</h2>
                </div>
              </Link>
            ))
          }
        </article>
        <article className="md:pt-10">
          <h2 className="uppercase font-bold text-xl">STANDARD MID-SIZE TITLE - ALL CAPS</h2>
          <p className="max-w-5xl text-lg leading-snug py-16">Standard body text. Public Sans. Please also use this sheet banner as a background distinction for when you are clicked into the different tiles. Exchange page, Game page, etc</p>

          <article>
            <button type="button">
              <Link to="/welcome">
                <div className="w-[430px] h-[80px] clip-primary bg-gradient flex justify-center items-center -ml-20">
                  <div className="w-[425px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
                    <span className="uppercase font-bold bg-gradient text-lg text-gradient">Customize Dashboard</span>
                  </div>
                </div>
              </Link>
            </button>
          </article>
        </article>
      </div>
    </section>
  )
}

export default DashboardHome