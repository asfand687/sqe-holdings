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
  const [nftMarketplaceSelected, setNftMarketplaceSelected] = useState(false)
  const [noCodeSmartContractsSelected, setNoCodeSmartContractsSelected] = useState(false)
  const [noCodeMobileAppBuilderSelected, setNoCodeMobileAppBuilderSelected] = useState(false)
  const [noCodeSmartContractComponenetsSelected, setNoCodeSmartContractComponentsSelected] = useState(false)
  const [noCodeAppBuilderComponenetsSelected, setNoCodeAppBuilderComponentsSelected] = useState(false)
  const [showQuecoinSelected, setShowQuecoinSelected] = useState(false)

  const [showSecureMessagingInfo, setShowSecureMessagingInfo] = useState(false)
  const [showQuecoinInfo, setShowQuecoinInfo] = useState(false)
  const [showDigitalWalletInfo, setShowDigitalWalletInfo] = useState(false)
  const [showSecureGamingInfo, setShowSecureGamingInfo] = useState(false)
  const [showPDAInfo, setShowPDAInfo] = useState(false)
  const [showQuecoin, setShowQuecoin] = useState(false)
  const [showNftMarketplaceInfo, setShowNftMarketplaceInfo] = useState(false)
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
    if (nftMarketplaceSelected) selectedOptionsArray.push("NFT Marketplace")
    if (noCodeSmartContractsSelected) selectedOptionsArray.push("No Code Smart Contracts")
    if (noCodeMobileAppBuilderSelected) selectedOptionsArray.push("Mobile App Builder")
    if (noCodeSmartContractComponenetsSelected) selectedOptionsArray.push("No Code Smart Contract Components")
    if (noCodeAppBuilderComponenetsSelected) selectedOptionsArray.push("No Code App Builder Components")
    if (showQuecoinSelected) selectedOptionsArray.push("Earn Quecoin")
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
    setShowNftMarketplaceInfo(false)
    setShowNoCodeSmartContractInfo(false)
    setShowNoCodeMobileAppBuilderInfo(false)
    setShowNoCodeSmartContractComponenetsInfo(false)
    setShowNoCodeAppBuilderComponenetsInfo(false)
    setShowQuecoin(false)
  }

  const handleToggle = (info) => {
    resetInfoBoxes()
    if (info === "showSecureMessagingInfo") setShowSecureMessagingInfo(!showSecureMessagingInfo);
    if (info === "showQuecoinInfo") setShowQuecoinInfo(!showQuecoinInfo)
    if (info === "showDigitalWalletInfo") setShowDigitalWalletInfo(!showDigitalWalletInfo)
    if (info === "showSecureGamingInfo") setShowSecureGamingInfo(!showSecureGamingInfo)
    if (info === "showPDAInfo") setShowPDAInfo(!showPDAInfo)
    if (info === "showNftMarketplaceInfo") setShowNftMarketplaceInfo(!showNftMarketplaceInfo)
    if (info === "showNoCodeSmartContractInfo") setShowNoCodeSmartContractInfo(!showNoCodeSmartContractInfo)
    if (info === "showNoCodeMobileAppBuilderInfo") setShowNoCodeMobileAppBuilderInfo(!showNoCodeMobileAppBuilderInfo)
    if (info === "showNoCodeSmartContractComponenetsInfo") setShowNoCodeSmartContractComponenetsInfo(!showNoCodeSmartContractComponenetsInfo)
    if (info === "showNoCodeAppBuilderComponenetsInfo") setShowNoCodeAppBuilderComponenetsInfo(!showNoCodeAppBuilderComponenetsInfo)
    if (info === "showQuecoin") setShowQuecoin(!showQuecoin)
  }


  return (
    <section className="p-4 py-16 relative lg:px-6 text-white">
      <article className="w-full lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto">
        <img className="w-full max-w-[1100px] mx-auto py-6" src={CustomizeDashboardHeading} alt="Customize Dashboard" />
        <form onSubmit={handleSubmit} className="space-y-4 uppercase flex">
          <div className="space-y-4">

            <Checkbox
              label="Secure Messaging"
              info="SQE’s Secure Messaging is raising the bar for security standards.
              Because SQE’s Secure Messaging runs on Proof of Entanglement
              (PoE) and simulated quantum entanglement, messages sent
              between users are encrypted with key-less security. When you send
              a message on SQE’s Secure Messaging, you’re more likely to win
              the lottery every day for a week than to have one message hacked."
              right="right-[500px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showSecureMessagingInfo}
              showInfoToggle={() => handleToggle("showSecureMessagingInfo")}
              onChange={() => setSecureMessagingSelected(!secureMessagingSelected)}
            />

            <Checkbox
              label="QUECOIN - SQE’S QUANTUM SECURE SEMI-STABLE CRYPTO"
              info="Get on the secure SQE Crypto Exchange to buy, sell and market our
              semi-stable cryptocurrency, QueCoin. QueCoin provides security for
              all. Other cryptocurrencies experiencing more than $1.4 billion in
              theft. SQE’s QueCoin is built on a platform developed for quantum
              security so you can rest knowing your investments are always safe."
              right="right-[150px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showQuecoinInfo}
              showInfoToggle={() => handleToggle("showQuecoinInfo")}
              onChange={() => setQueCoinSelected(!queCoinSelected)}
            />

            <Checkbox
              label="DIGITAL WALLET & CRYPTO EXCHANGE"
              info="Get on the secure SQE Crypto Exchange to buy, sell and market our
              semi-stable cryptocurrency, QueCoin. QueCoin provides security for
              all. Other cryptocurrencies experiencing more than $1.4 billion in
              theft. SQE’s QueCoin is built on a platform developed for quantum
              security so you can rest knowing your investments are always safe"
              right="right-[350px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showDigitalWalletInfo}
              showInfoToggle={() => handleToggle("showDigitalWalletInfo")}
              onChange={() => setDigitalWalletSelected(!digitalWalletSelected)}
            />

            <Checkbox
              label="SECURE GAMING"
              info="Play, wager, and explore an expanding world of secure, ad free gaming.
              With a constantly growing market of games, SQE’s gaming platform
              makes ad-free gaming more secure than ever. A platform powered
              by Proof of Entanglement (PoE) and simulated quantum
              entanglement means:"
              list={["secure wagers", "ad-free gaming", "community-created gaming", "unparalleled gaming speeds and more"]}
              right="right-[570px] -top-2"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showSecureGamingInfo}
              showInfoToggle={() => handleToggle("showSecureGamingInfo")}
              onChange={() => setSecureGamingSelected(!secureGamingSelected)}
            />

            <Checkbox
              label="PERSONAL DIGITAL ASSISTANT (PDA) - AUTOMATE DAILY TASKS & WORKFLOW"
              right="-right-[30px] -top-2"
              info="Personal Digital Assistant (PDA) uses Web3 tech to automate your
              critical everyday tasks. SQE’s PDA can help you automate your
              daily life with:"
              list={["smart alarm clock", "smart contract calender integration", "secure messaging integrations", "exchange automations and more"]}
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showPDAInfo}
              showInfoToggle={() => handleToggle("showPDAInfo")}
              onChange={() => setPdaSelected(!pdaSelected)}
            />

            <Checkbox
              label="Earn QueCoin"
              right="left-56 -top-2"
              info="Becoming a Hands-Free Miner for SQE
              ◦ Mining QueCoin is an inexpensive and Green way to earn passive
              income. All you need to get started is one of our discreet in-house
              nodes and an internet connection!"
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showQuecoin}
              showInfoToggle={() => handleToggle("showQuecoin")}
              onChange={() => setShowQuecoinSelected(!showQuecoinSelected)}
            />

            <Checkbox
              label="NO-CODE SMART CONTRACTS"
              right="right-[430px] -top-2"
              info="Not a developer? No problem. SQE’s quantum secure drag and drop
              Smart Contract Builder can help you automate the most important
              tasks. Whether you are creating a lease agreement, a will and
              testament, a real estate contract, or anything else, you can
              automate and link transactions together to minimize room for error."
              infoPos="p-4 -top-[20px] -right-[400px]"
              showInfo={showNoCodeSmartContractInfo}
              showInfoToggle={() => handleToggle("showNoCodeSmartContractInfo")}
              onChange={() => setNoCodeSmartContractsSelected(!noCodeSmartContractsSelected)}
            />

            <Checkbox
              label="NO-CODE MOBILE APP BUILDER"
              right="right-[430px] -top-2"
              info="Not a developer? No problem. SQE’s quantum secure drag and drop
              No-Code App Builder can help you design a clean, branded, and
              efficient app for your business or brand."
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showNoCodeMobileAppBuilderInfo}
              showInfoToggle={() => handleToggle("showNoCodeMobileAppBuilderInfo")}
              onChange={() => setNoCodeMobileAppBuilderSelected(!noCodeMobileAppBuilderSelected)}
            />

            <Checkbox
              label="NFT Marketplace"
              right="left-[16.5rem] -top-2"
              info="Our NFT marketplace allows you to buy or sell your NFT on our secure
              blockchain. You can also use our App Builder to create and
              monetize your very own NFT!"
              infoPos="p-4 -top-[20px] -right-[400px]"
              showInfo={showNftMarketplaceInfo}
              showInfoToggle={() => handleToggle("showNftMarketplaceInfo")}
              onChange={() => setNftMarketplaceSelected(!nftMarketplaceSelected)}
            />


            <Checkbox
              label="Becoming A Smart Contract Component Developer"
              right="right-[150px] -top-2"
              info="Are you an expert developer looking to make money on your designs?
              SQE is seeking skilled developers to create universal components
              for our No-Code Smart Contract Builder. Everytime a user utilizes
              your component, you as a developer will be paid a percentage in
              QueCoin, SQE’s quantum secure cryptocurrency."
              infoPos="p-4 -top-[50px] -right-[400px]"
              showInfo={showNoCodeSmartContractComponenetsInfo}
              showInfoToggle={() => handleToggle("showNoCodeSmartContractComponenetsInfo")}
              onChange={() => setNoCodeSmartContractComponentsSelected(!noCodeSmartContractComponenetsSelected)}
            />

            <Checkbox
              label="Becoming An App Builder Component Developer"
              right="right-[180px] -top-2"
              info="Are you an expert developer looking to make money on your designs?
              SQE is seeking skilled developers to create universal components
              for our No-Code App Builder. Everytime a user utilizes your
              component, you as a developer will be paid a percentage in
              QueCoin, SQE’s quantum secure cryptocurrency."
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