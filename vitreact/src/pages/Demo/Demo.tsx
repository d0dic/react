
import { useState } from 'react'

import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'

import './Demo.css'

export default function Demo() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-center mt-5'>TailWind Demo</h1>

      <div className="flex items-center justify-center p-8 space-x-4">
        <span>Click counter:</span>

        {/* Button with custom clases from App.css */}
        <button className="btn btn-green" onClick={() => setCount((count) => count + 1)}>
          you clicked {count} times
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mb-8 space-y-8">
        <img className="h-25 mx-auto rotating" src={reactLogo} alt="React" />
        <img className="h-25 mx-auto animate-pulse" src={viteLogo} alt="Vite" />
        <img className="h-25 mx-auto rotating" src={reactLogo} alt="React" />
        <img className="h-25 mx-auto animate-pulse" src={viteLogo} alt="Vite" />
        <img className="h-25 mx-auto rotating" src={reactLogo} alt="React" />
        <img className="h-25 mx-auto animate-pulse" src={viteLogo} alt="Vite" />
      </div>
    </>
  )
}