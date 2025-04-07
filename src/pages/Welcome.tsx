import { Suspense } from "react"

import Hero from "../components/Hero"

import { Button } from 'ui-kit'

const Welcome = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center py-5">
        <Suspense fallback="Loading deps...">
          <Button onClick={() => location.href = "mailto:dmilos91@gmail.com"} label="Contact us" size="large" primary />
        </Suspense>
      </div>
    </>
  )
}

export default Welcome