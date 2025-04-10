import { useState } from 'react'

import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + TanStack</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
