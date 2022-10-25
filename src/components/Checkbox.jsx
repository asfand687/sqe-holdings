import React, { useState } from 'react'
import { ReactComponent as CheckboxPolygon } from '../assets/checkbox-polygon.svg'
import { ReactComponent as CheckboxPolygonFilled } from '../assets/checkbox-polygon-filled.svg'

const Checkbox = ({ value, label }) => {
  const [checked, setChecked] = useState(false)
  return (
    <article>
      <label className="inline-flex items-center ">
        <CheckboxPolygon className={`absolute md:left-[71px] w-6 ${checked ? 'hidden' : 'block'}`} />
        <CheckboxPolygonFilled className={`absolute md:left-[71px] w-6 checkpolygon-filled ${checked ? 'block' : 'hidden'}`} />
        <input
          value={value}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          className="checkbox-round"
          checked={checked} />
        <span className="ml-8 text-sm md:text-xl font-bold max-w-[300px] md:max-w-full">{label}</span>
      </label>
    </article>
  )
}

export default Checkbox