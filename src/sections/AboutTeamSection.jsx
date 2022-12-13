import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Polygon } from '../assets/polygon.svg'
import Team01 from '../assets/team-01.png'
import Team02 from '../assets/team-02.png'
import Team03 from '../assets/team-03.png'
import Team04 from '../assets/team-04.png'
import Team05 from '../assets/team-05.png'
import Team06 from '../assets/team-06.png'
import Team07 from '../assets/team-07.png'
import Team08 from '../assets/team-08.png'
import Team09 from '../assets/team-09.png'
import Team10 from '../assets/team-10.png'

const AboutTeamSection = () => {
  return (
    <section className="bg-home-bottom team-bg relative">
      <Polygon key={3} className="absolute -top-20 -left-8 w-24 z-0" />
      <Polygon key={5} className="absolute bottom-[400px] -left-52 w-96 z-0" />
      <Polygon key={4} className="hidden md:block absolute top-0 right-8 w-32 z-0" />
      <h2 className="font-black text-center hero-text text-[2.5rem] whitespace-nowrap md:text-7xl 2xl:text-8xl font-montserrat uppercase">
        The SQE Team
      </h2>
      <article className="py-20 space-y-10 px-4">
        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team01} alt="Hamid Pishdadian" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Hamid Pishdadian</h2>
                <p className="italic pb-4">CEO & Co-Founder</p>
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
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team02} alt="Richard Genga" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Richard Genga</h2>
                <p className="italic pb-4">CFO & Co-Founder</p>
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
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team03} alt="Akram Khalis" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Akram Khalis</h2>
                <p className="italic pb-4">CTO & Co-Founder</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  15+ years leader, and a product digital transformation executive with a visionary mindset
                </li>
                <li>
                  Holds several United States patents
                </li>
                <li>
                  AWS and Networking Expert
                </li>
                <li>
                  Holds a special electronic and electrical engineering with mechanical minor degree from Morocco & BS in Electrical Engineering from NJIT
                </li>
              </ul>
            </div>
          </article>

          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team07} alt="Joe Scalise" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Joseph Scalice</h2>
                <p className="italic pb-4">Director Of Marketing</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Bryant University Graduate
                </li>
                <li>
                  15 years sales and marketing experience
                </li>
                <li>
                  Involved in the Crypto and Blockchain space since 2016
                </li>
                <li>
                  Passionate about SQE and our mission
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team08} alt="Julian Quinones" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Julian Quinones</h2>
                <p className="italic pb-4">Research Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Biotech industry vet with 10 years of drug discovery & development experience including helping to take a prominent biotech from startup to IPO to commercial
                </li>
                <li>
                  Expertise in scientific & medical data collection and management
                </li>
                <li>
                  Entrepreneur focused on environmentally sustainable businesses
                </li>
              </ul>
            </div>
          </article>


          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team04} alt="Tomas Girnius" className="w-72 h-72 -mt-12" />
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
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team05} alt="Jade Genga" className="w-72 h-72 -mt-12" />
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
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team06} alt="Thomas Gelfuso" className="w-72 h-72 -mt-12" />
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

        <section className="flex flex-col md:flex-row justify-center md:space-x-20">
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team09} alt="Felicia Morales" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Felicia Morales</h2>
                <p className="italic pb-4">Social Media Advisor</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  BA in political science & human rights
                </li>
                <li>
                  11 years in the Air Force in optometry, 2 years as an equal opportunity specialist
                </li>
                <li>
                  Entrepreneur with years in e-commerce & freelance social media
                </li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col md:flex-row text-center md:text-left justify-center">
            <img src={Team10} alt="Erica Pishdadian" className="w-72 h-72 -mt-12" />
            <div className="max-w-[250px] text-base leading-5">
              <div className="uppercase">
                <h2 className="font-bold">Erica Pishdadian</h2>
                <p className="italic pb-4">Content Consultant</p>
              </div>
              <ul className='list-disc pl-4'>
                <li>
                  Peabody Award-winning media professional
                </li>
                <li>
                  8+ years in editorial, content management and video production
                </li>
                <li>
                  TV producer for a top-rated, national broadcast
                </li>
                <li>
                  Writing professional and editor with numerous bylines in national publications
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