import React, { useState } from 'react'
import { ReactComponent as CheckboxPolygon } from '../assets/checkbox-polygon.svg'
import { ReactComponent as Info } from '../assets/info-icon.svg'

const Checkbox = ({ onChange, label, info, right, infoPos }) => {
  const [showInfo, setShowInfo] = useState(false)
  console.log(showInfo)
  return (
    <article className="checkbox-container relative">
      <div className={`absolute ${right}`}>
        <Info onClick={() => setShowInfo(!showInfo)} className="w-6 cursor-pointer" />
      </div>
      <div className={`absolute border border-gray-300 w-[300px] h-32 text-sm rounded-xl ${infoPos} ${showInfo ? "block" : "hidden"}`}>{info}</div>
      <label className="inline-flex items-center ">
        <CheckboxPolygon className="absolute md:-left-[2px] w-6 z-20" />
        <input onChange={onChange} type="checkbox" className="checkbox-round" />
        <div className="flex items-center space-x-4">
          <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">{label}</span>
        </div>
      </label>
    </article>
  )
}

export default Checkbox