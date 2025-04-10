import { useEffect } from "react"

import { emitter } from "../events"

function useEvent(eventName = '', callback = () => { }, deps = []) {

  const trigger = (detail) => emitter.dispatchEvent(new CustomEvent(eventName, { detail }))

  useEffect(() => {
    emitter.addEventListener(eventName, callback)

    return () => {
      emitter.removeEventListener(eventName, callback)
    }
  }, deps)

  return {
    trigger
  }
}

export default useEvent