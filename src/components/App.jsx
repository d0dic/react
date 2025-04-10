import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import Routes from "./Routes"
import ErrorBoundary from "./ErrorBoundary"

import useEvent from "../hooks/useEvent"
import { events } from "@/events"

import { AppContext, AuthContext } from "@/contexts"

const fetchGeneral = async () => {
  const res = await fetch("https://api.github.com/repos/TanStack/query")

  if (!res.ok) throw new Error("Response not OK!")

  return res.json()
}

function App() {
  const userState = useState({ name: 'Milos dodic', id: 1 })

  const loggedOut = (payload) => console.log('User Logged In: ', payload.detail)

  useEvent(events.auth.LOGIN, loggedOut)

  const { data, isPending, error } = useQuery({
    queryKey: ['tanstackQuery'],
    queryFn: fetchGeneral
  })

  if (error) return <h1>Application could not be loaded at the moment, please hold on.</h1>

  return (
    <AppContext value={{ data, isPending }}>
      <AuthContext value={userState}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </AuthContext>
    </AppContext>
  )
}

export default App