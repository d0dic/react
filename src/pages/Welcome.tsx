import { Suspense } from "react"

import { Button } from 'ui-kit'

import Hero from "../components/Hero"
import useDebounce from "../hooks/useDebounce"

const Welcome = () => {

  const goToMail = () => {
    location.href = "mailto:dmilos91@gmail.com"
    return 'Openning mail'
  }

  const debouncedMail = useDebounce(goToMail, 500)

  const handleContact = async () => {
    try {
      const res = await debouncedMail()

      console.log('Debounced response: ', res)
    } catch (error) {
      console.log('Debounced error: ', error)
    }
  }

  return (
    <>
      <Hero />
      <div className="flex justify-center py-5">
        <Suspense fallback="Loading deps...">
          <Button onClick={handleContact} label="Contact us" size="large" primary />
        </Suspense>
      </div>
    </>
  )
}

export default Welcome