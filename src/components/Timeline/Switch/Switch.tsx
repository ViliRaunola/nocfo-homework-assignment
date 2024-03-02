import React from 'react'
import './Switch.css'

type Props = {
  toggleValue: Function
  isChecked: boolean
}

const Switch = ({ toggleValue, isChecked }: Props) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={() => toggleValue()} />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default Switch
