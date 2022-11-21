import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../firebase'
import Checkbox from '../components/Checkbox'
import CustomizeDashboardHeading from "../assets/customize-dashboard-heading.png"

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

  const [showSecureMessagingInfo, setShowSecureMessagingInfo] = useState(false)
  const [showQuecoinInfo, setShowQuecoinInfo] = useState(false)
  const [showDigitalWalletInfo, setShowDigitalWalletInfo] = useState(false)
  const [showSecureGamingInfo, setShowSecureGamingInfo] = useState(false)
  const [showPDAInfo, setShowPDAInfo] = useState(false)
  const [showHandsFreeMinerInfo, setShowHandsFreeMinerInfo] = useState(false)
  const [showNoCodeSmartContractInfo, setShowNoCodeSmartContractInfo] = useState(false)
  const [showNoCodeMobileAppBuilderInfo, setShowNoCodeMobileAppBuilderInfo] = useState(false)
  const [showNoCodeSmartContractComponenetsInfo, setShowNoCodeSmartContractComponenetsInfo] = useState(false)
  const [showNoCodeAppBuilderComponenetsInfo, setShowNoCodeAppBuilderComponenetsInfo] = useState(false)


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

  const resetInfoBoxes = () => {
    setShowSecureMessagingInfo(false)
    setShowQuecoinInfo(false)
    setShowDigitalWalletInfo(false)
    setShowSecureGamingInfo(false)
    setShowPDAInfo(false)
    setShowHandsFreeMinerInfo(false)
    setShowNoCodeSmartContractInfo(false)
    setShowNoCodeMobileAppBuilderInfo(false)
    setShowNoCodeSmartContractComponenetsInfo(false)
    setShowNoCodeAppBuilderComponenetsInfo(false)
  }

  const handleToggle = (info) => {
    resetInfoBoxes()
    if (info === "showSecureMessagingInfo") setShowSecureMessagingInfo(!showSecureMessagingInfo);
    if (info === "showQuecoinInfo") setShowQuecoinInfo(!showQuecoinInfo)
    if (info === "showDigitalWalletInfo") setShowDigitalWalletInfo(!showDigitalWalletInfo)
    if (info === "showSecureGamingInfo") setShowSecureGamingInfo(!showSecureGamingInfo)
    if (info === "showPDAInfo") setShowPDAInfo(!showPDAInfo)
    if (info === "showHandsFreeMinerInfo") setShowHandsFreeMinerInfo(!showHandsFreeMinerInfo)
    if (info === "showNoCodeSmartContractInfo") setShowNoCodeSmartContractInfo(!showNoCodeSmartContractInfo)
    if (info === "showNoCodeMobileAppBuilderInfo") setShowNoCodeMobileAppBuilderInfo(!showNoCodeMobileAppBuilderInfo)
    if (info === "showNoCodeSmartContractComponenetsInfo") setShowNoCodeSmartContractComponenetsInfo(!showNoCodeSmartContractComponenetsInfo)
    if (info === "showNoCodeAppBuilderComponenetsInfo") setShowNoCodeAppBuilderComponenetsInfo(!showNoCodeAppBuilderComponenetsInfo)

  }


  return (
    <section className="p-4 py-16 relative lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <img className="w-full max-w-[1100px] mx-auto py-6" src={CustomizeDashboardHeading} alt="Customize Dashboard" />
        <form onSubmit={handleSubmit} className="space-y-4 uppercase flex">
          <div className="space-y-4">

            <Checkbox
              label="Secure Messaging" info="info text info text info text info text text inf"
              right="right-[500px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showSecureMessagingInfo}
              showInfoToggle={() => handleToggle("showSecureMessagingInfo")}
              onChange={() => setSecureMessagingSelected(!secureMessagingSelected)}
            />

            <Checkbox
              label="QUECOIN - SQE’S QUANTUM SECURE SEMI-STABLE CRYPTO"
              info="info text info text info text info text text inf"
              right="right-[150px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showQuecoinInfo}
              showInfoToggle={() => handleToggle("showQuecoinInfo")}
              onChange={() => setQueCoinSelected(!queCoinSelected)}
            />

            <Checkbox
              label="DIGITAL WALLET & CRYPTO EXCHANGE"
              info="info text info text info text info text text inf"
              right="right-[350px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showDigitalWalletInfo}
              showInfoToggle={() => handleToggle("showDigitalWalletInfo")}
              onChange={() => setDigitalWalletSelected(!digitalWalletSelected)}
            />

            <Checkbox
              label="SECURE GAMING"
              info="info text info text info text info text text inf"
              right="right-[570px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showSecureGamingInfo}
              showInfoToggle={() => handleToggle("showSecureGamingInfo")}
              onChange={() => setSecureGamingSelected(!secureGamingSelected)}
            />

            <Checkbox
              label="PERSONAL DIGITAL ASSISTANT (PDA) - AUTOMATE DAILY TASKS & WORKFLOW"
              right="-right-[30px] -top-2"
              info="info text info text info text info text text inf"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showPDAInfo}
              showInfoToggle={() => handleToggle("showPDAInfo")}
              onChange={() => setPdaSelected(!pdaSelected)}
            />

            <Checkbox
              label="BECOMING A HANDS-FREE MINER FOR SQE"
              right="right-[310px] -top-2" info="info text info text info text info text text inf"
              infoPos="p-4 -top-[20px] -right-[400px]"
              showInfo={showHandsFreeMinerInfo}
              showInfoToggle={() => handleToggle("showHandsFreeMinerInfo")}
              onChange={() => setHandsFreeMinerSelected(!handsFreeMinerSelected)}
            />

            <Checkbox
              label="NO-CODE SMART CONTRACTS"
              right="right-[430px] -top-2"
              info="info text info text info text info text text inf"
              infoPos="p-4 -top-[20px] -right-[400px]"
              showInfo={showNoCodeSmartContractInfo}
              showInfoToggle={() => handleToggle("showNoCodeSmartContractInfo")}
              onChange={() => setNoCodeSmartContractsSelected(!noCodeSmartContractsSelected)}
            />

            <Checkbox
              label="NO-CODE MOBILE APP BUILDER"
              right="right-[430px] -top-2"
              info="info text info text info text info text text inf"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showNoCodeMobileAppBuilderInfo}
              showInfoToggle={() => handleToggle("showNoCodeMobileAppBuilderInfo")}
              onChange={() => setNoCodeMobileAppBuilderSelected(!noCodeMobileAppBuilderSelected)}
            />

            <Checkbox
              label="BECOMING A DEVELOPER FOR NO-CODE SMART CONTRACT COMPONENTS"
              right="-right-[10px] -top-2"
              info="info text info text info text info text text inf"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showNoCodeSmartContractComponenetsInfo}
              showInfoToggle={() => handleToggle("showNoCodeSmartContractComponenetsInfo")}
              onChange={() => setNoCodeSmartContractComponentsSelected(!noCodeSmartContractComponenetsSelected)}
            />

            <Checkbox
              label="BECOMING A DEVELOPER FOR NO-CODE APP BUILDER COMPONENTS"
              right="-right-[10px] -top-2" info="info text info text info text info text text inf"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showNoCodeAppBuilderComponenetsInfo}
              showInfoToggle={() => handleToggle("showNoCodeAppBuilderComponenetsInfo")}
              onChange={() => setNoCodeAppBuilderComponentsSelected(!noCodeAppBuilderComponenetsSelected)}
            />

            <article className="pt-[3rem] text-center">
              <button type="submit">
                <div className="w-[430px] h-[80px] clip-primary bg-gradient flex justify-center items-center">
                  <div className="w-[425px] h-[75px] clip-primary bg-[#011132] flex items-center justify-center">
                    <span className="uppercase font-bold bg-gradient text-lg text-gradient">Complete <br /> Pre-Registration</span>
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