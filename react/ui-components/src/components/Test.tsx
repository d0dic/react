import React from "react"

import logo from '../assets/ts-icon.svg'
import data from '../assets/data.json'

const Test: React.FC = () => {


  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ padding: 10 }} src={logo} alt="TS Logo" />
        <h1 style={{ margin: 0 }}>UI-Component.TS</h1>
      </div>
      <p>by @{data.name}</p>
    </div>

  )
}

export default Test