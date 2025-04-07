import { useEffect } from "react"
import { useAuth } from "../AuthProvider"
import { useNavigate } from "react-router"

export default function Profile() {

  const navigate = useNavigate()
  const ctx = useAuth()

  const handleLanding = () => {
    if (!ctx?.user) {
      if (ctx?.token) return ctx?.getMe()
      navigate('/auth/login')
    }
  }

  // TODO: Show user data
  console.log(ctx?.user)

  useEffect(() => {
    handleLanding()
  }, [])

  return (
    <>
      <h2 className='text-2xl text-center mt-5'>Welcome {ctx?.user?.name}</h2>
    </>
  )
}