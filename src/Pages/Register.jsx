import React, { useEffect } from 'react'
import RegisterMainSection from '../sections/RegisterMainSection'

const Register = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <RegisterMainSection />
    </>
  )
}

export default Register