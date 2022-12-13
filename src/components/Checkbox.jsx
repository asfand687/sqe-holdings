import React from 'react'
import { ReactComponent as CheckboxPolygon } from '../assets/checkbox-polygon.svg'
import { ReactComponent as Info } from '../assets/info-icon.svg'

const Checkbox = ({ onChange, label, info, right, infoPos, showInfo, showInfoToggle, list }) => {
  return (
    <article className="checkbox-container relative md:block">
      <div className={`absolute ${right}`}>
        <Info onClick={showInfoToggle} className="w-6 cursor-pointer hidden md:block" />
      </div>
      <div className={`absolute border border-gray-300 bg-[#071328] w-[300px] z-50 text-sm rounded-xl ${infoPos} ${showInfo ? "block" : "hidden"}`}>
        <p>{info}</p>
        <ul className="list-disc pt-2">
          {list && list.map((item, i) => (
            <li className="ml-4" key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <label className="inline-flex items-center ">
        <CheckboxPolygon className="absolute md:-left-[2px] w-6 z-20" />
        <input onChange={onChange} type="checkbox" className="checkbox-round" />
        <div className="flex items-center space-x-4">
          <span className="ml-8 text-sm md:text-xl font-bold max-w-[250px] md:max-w-[300px] lg:max-w-full">{label}</span>
        </div>
      </label>
    </article>
  )
}

export default Checkbox