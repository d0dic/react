import React from "react"

import { Test, TestStyled, TestChart, Section } from 'ui-kit'

const App = () => {
  return (
    <div style={{ padding: 30 }}>
      <h1>React Native Web</h1>
      <TestStyled />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Test />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <TestChart />
      </div>
      {/* <Section title="Section Title">
          Section Content
      </Section> */}
    </div>
  )
}

export default App