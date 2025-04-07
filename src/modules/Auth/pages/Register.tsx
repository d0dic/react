import { useEffect } from "react"
import { useNavigate } from "react-router"

import { useAuth } from "../AuthProvider"

export default function Register() {

  const navigate = useNavigate()
  const ctx = useAuth()

  useEffect(() => {
    if (ctx?.token) navigate('/auth/profile')
  }, [])

  return (
    <>
      <h2 className='text-2xl text-center mt-5'>Register Page</h2>
    </>
  )
}