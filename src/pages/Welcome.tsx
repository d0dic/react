import { Suspense } from "react"

import Hero from "../components/Hero"

import { Button } from 'ui-kit'
import useDebounce from "../hooks/useDebounce"

const Welcome = () => {

   const goToMail = () => {
    console.log('Openning mail')
    location.href = "mailto:dmilos91@gmail.com"
   }

  const debouncedMail = useDebounce(goToMail, 500)

  return (
    <>
      <Hero />
      <div className="flex justify-center py-5">
        <Suspense fallback="Loading deps...">
          <Button onClick={debouncedMail} label="Contact us" size="large" primary />
        </Suspense>
      </div>
    </>
  )
}

export default Welcome