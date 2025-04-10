import { useContext } from "react"

import { AppContext } from "@/contexts"

function About() {

  const { data, isPending } = useContext(AppContext)

  return (
    <>
      <h1>About</h1>
      <div className="card">
        {isPending ? 'Loading...' : (
          <div style={{ maxWidth: 450 }}>

            <h2>{data.owner.login}</h2>
            <p>{data.description}</p>

            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
          </div>
        )}
      </div>
    </>
  )
}

export default About
