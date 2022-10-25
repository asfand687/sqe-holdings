import React, { useState } from 'react'
import RegisterSectionTitle from '../components/RegisterSectionTitle'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../firebase'
import { ReactComponent as CheckboxPolygon } from '../assets/checkbox-polygon.svg'

const WelcomeSection = () => {

  const navigate = useNavigate()
  const [secureMessagingSelected, setSecureMessagingSelected] = useState(false)
  const [queCoinSelected, setQueCoinSelected] = useState(false)
  const [digitalWalletSelected, setDigitalWalletSelected] = useState(false)
  const [secureGamingSelected, setSecureGamingSelected] = useState(false)
  const [pdaSelected, setPdaSelected] = useState(false)
  const [handsFreeMinerSelected, setHandsFreeMinerSelected] = useState(false)
  const [noCodeSmartContractsSelected, setNoCodeSmartContractsSelected] = useState(false)
  const [noCodeMobileAppBuilderSelected, setNoCodeMobileAppBuilderSelected] = useState(false)
  const [noCodeSmartContractComponenetsSelected, setNoCodeSmartContractComponentsSelected] = useState(false)
  const [noCodeAppBuilderComponenetsSelected, setNoCodeAppBuilderComponentsSelected] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    let selectedOptionsArray = []
    if (secureMessagingSelected) selectedOptionsArray.push("Secure Messaging")
    if (queCoinSelected) selectedOptionsArray.push('QueCoin')
    if (digitalWalletSelected) selectedOptionsArray.push('Digital Wallet')
    if (secureGamingSelected) selectedOptionsArray.push('Secure Gaming')
    if (pdaSelected) selectedOptionsArray.push('PDA')
    if (handsFreeMinerSelected) selectedOptionsArray.push("Hands Free Miners")
    if (noCodeSmartContractsSelected) selectedOptionsArray.push("No Code Smart Contracts")
    if (noCodeMobileAppBuilderSelected) selectedOptionsArray.push("Mobile App Builder")
    if (noCodeSmartContractComponenetsSelected) selectedOptionsArray.push("No Code Smart Contract Components")
    if (noCodeAppBuilderComponenetsSelected) selectedOptionsArray.push("No Code App Builder Components")

    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      secondPhaseComplete: true,
      selectedOptions: selectedOptionsArray
    })
    navigate('/dashboard')
  }


  // useEffect(() => {

  //   const getUser = async () => {
  //     const user = await getDoc(doc(db, 'users', auth.currentUser.uid))
  //     setDashboardOptions(user.data().selectedOptions)
  //   }

  //   if (!auth?.currentUser?.emailVerified) {
  //     toast.error("Your email is not verified, please verify your email", {
  //       id: 'unverified'
  //     })
  //     signOut(auth)
  //     navigate('/')
  //   }
  //   getUser()
  // }, [])


  return (
    <section className="p-4 pb-16 relative lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <RegisterSectionTitle text="Customize Your Dashboard" className="max-w-3xl text-center mx-auto pb-8 contact__title-bg-gradient" />
        <form onSubmit={handleSubmit} className="space-y-4 uppercase flex">
          <div className="space-y-4">
            <article className="checkbox-container">
              <label className="inline-flex items-center ">
                <CheckboxPolygon className="absolute md:left-[71px] w-6 z-20" />
                <input onChange={() => setSecureMessagingSelected(!secureMessagingSelected)} type="checkbox" className="checkbox-round" value="Secure Messaging" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">Secure Messaging</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setQueCoinSelected(!queCoinSelected)} type="checkbox" className="checkbox-round" value="QUECOIN" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">QUECOIN - SQE’S QUANTUM SECURE SEMI-STABLE CRYPTO</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setDigitalWalletSelected(!digitalWalletSelected)} type="checkbox" className="checkbox-round" value="Digital Wallet" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">DIGITAL WALLET & CRYPTO EXCHANGE</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setSecureGamingSelected(!secureGamingSelected)} type="checkbox" className="checkbox-round" value="Secure Gaming" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">SECURE GAMING</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setPdaSelected(!pdaSelected)} type="checkbox" className="checkbox-round" value="PDA" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">PERSONAL DIGITAL ASSISTANT (PDA) - AUTOMATE DAILY TASKS & WORKFLOW</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setHandsFreeMinerSelected(!handsFreeMinerSelected)} type="checkbox" className="checkbox-round" value="Hands-Free Miner" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">BECOMING A HANDS-FREE MINER FOR SQE</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setNoCodeSmartContractsSelected(!noCodeSmartContractsSelected)} type="checkbox" className="checkbox-round" value="No Code Smart Contracts" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">NO-CODE SMART CONTRACTS</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setNoCodeMobileAppBuilderSelected(!noCodeMobileAppBuilderSelected)} type="checkbox" className="checkbox-round" value="Mobile App Builder" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">NO-CODE MOBILE APP BUILDER</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setNoCodeSmartContractComponentsSelected(!noCodeSmartContractComponenetsSelected)} type="checkbox" className="checkbox-round" value="Smart Contract Components" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">BECOMING A DEVELOPER FOR NO-CODE SMART CONTRACT COMPONENTS</span>
              </label>
            </article>

            <article>
              <label className="inline-flex items-center">
                <CheckboxPolygon className="absolute md:left-[71px] w-6" />
                <input onChange={() => setNoCodeAppBuilderComponentsSelected(!noCodeAppBuilderComponenetsSelected)} type="checkbox" className="checkbox-round" value="No-Code App Builder" />
                <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">BECOMING A DEVELOPER FOR NO-CODE APP BUILDER COMPONENTS</span>
              </label>
            </article>

            <article className="pt-[3rem] text-center">
              <button type="submit">
                <div className="w-[430px] h-[80px] clip-primary bg-gradient flex justify-center items-center">
                  <div className="w-[425px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
                    <span className="uppercase font-bold bg-gradient text-lg text-gradient">Go To My Dashboard</span>
                  </div>
                </div>
              </button>
            </article>
          </div>
        </form>
      </article>
    </section >
  )
}

export default WelcomeSection