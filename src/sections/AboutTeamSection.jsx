import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hexagon } from '../assets/hex-shape.svg'
import { ReactComponent as Polygon } from '../assets/polygon.svg'
import Team01 from '../assets/team-01.png'
import Team02 from '../assets/team-02.png'
import Team03 from '../assets/team-03.png'
import Team04 from '../assets/team-04.png'
import Team05 from '../assets/team-05.png'
import Team06 from '../assets/team-06.png'

const AboutTeamSection = () => {
  return (
    <section className="bg-home-bottom team-bg relative">
      <Polygon key={3} className="absolute -top-20 -left-8 w-24 z-0" />
      <Polygon key={5} className="absolute bottom-[400px] -left-52 w-96 z-0" />
      <Polygon key={4} className="hidden md:block absolute top-0 right-8 w-32 z-0" />
      <h2 className="font-black text-center hero-text text-[2.5rem] whitespace-nowrap md:text-7xl 2xl:text-8xl font-montserrat uppercase">
        The SQE Team
      </h2>
      <article className="py-20 gap-y-20 px-4">
        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <img src={Team01} alt="Hamid Pishdadian" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Hamid Pishdadian</h2>
                <p className="italic pb-4">CEO & Creator</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Award-winning design engineer & inventor
                </li>
                <li>
                  35+ years as expert engineer & inventor
                </li>
                <li>
                  Master of 20 high-level and low-level programming languages
                </li>
                <li>
                  40+ patents
                </li>
              </ul>
            </div>
          </article>
          <article className="flex justify-center items-center">
            <img src={Team02} alt="Richard Genga" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Richard Genga</h2>
                <p className="italic pb-4">CEO & Creator</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Multi-patent holding expert mechanical engineer & product development
                </li>
                <li>
                  35+ years as expert entrepreeur & engineer
                </li>
                <li>
                  DFMA certified innovator
                </li>
                <li>
                  BS in Mechanical Engineering from URI
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <img src={Team03} alt="Julian Quinones" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Julian Quinones</h2>
                <p className="italic pb-4">Research Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Molecular biologist for 10 years of experience in biotech
                </li>
                <li>
                  8+ years at Moderna Entrepreneur, business & scientific advisor
                </li>
                <li>
                  Expert in health & medical industry
                </li>
              </ul>
            </div>
          </article>
          <article className="flex justify-center items-center">
            <img src={Team04} alt="Tomas Girnius" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Tomas Girnius</h2>
                <p className="italic pb-4">Research Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Principal Scientist in Catastrophe Modeling
                </li>
                <li>
                  Mathematical Modeling, Applied Mathematics, Statistics, Data Science, Python, R, C++, ArcGIS, and Risk Management
                </li>
                <li>
                  PhD in Applied Mathematics from California Institute of Technology
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex justify-center items-center">
            <img src={Team05} alt="Jade Genga" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Jade Genga</h2>
                <p className="italic pb-4">User Experience Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  8+ years in media & user experience
                </li>
                <li>
                  8+ years content management
                </li>
                <li>
                  BA in Behavioral Psychology from University of Mississippi
                </li>
                <li>
                  Consultant, artist & teacher
                </li>
              </ul>
            </div>
          </article>
          <article className="flex justify-center items-center">
            <img src={Team06} alt="Thomas Gelfuso" className="w-72 h-72" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Thomas Gelfuso</h2>
                <p className="italic pb-4">Business Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  40+ years in IT Services
                </li>
                <li>
                  Extensive experience in IT workstation & networking management
                </li>
                <li>
                  Expert in project management, quality control, and IT procedures & policies
                </li>
              </ul>
            </div>
          </article>
        </section>
      </article>

      <article className="flex relative justify-center pb-32">
        <Link to="/register">
          <button>
            <div className="w-[390px] h-[100px] clip-primary bg-gradient flex justify-center items-center">
              <div className="w-[385px] h-[95px] clip-primary bg-[#011132] flex items-center justify-center">
                <span className="uppercase font-bold bg-gradient text-lg text-gradient">Get Started Now</span>
              </div>
            </div>
          </button>
        </Link>
      </article>
    </section>
  )
}

export default AboutTeamSection