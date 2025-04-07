import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../AuthProvider"

export default function Login() {

  const navigate = useNavigate()
  const ctx = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement)

    await ctx?.logIn(
      formData.get('email') as string,
      formData.get('password') as string
    )
  }

  useEffect(() => {
    if (ctx?.token) navigate('/auth/profile')
  }, [])

  return (
    <>
      <h2 className='text-2xl text-center mt-5'>Login Page</h2>

      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input className="border-1 rounded-md mt-2 p-2" name="email" type="email" required />
        <input className="border-1 rounded-md mt-2 p-2" type="password" name="password" id="pswd" required />

        <button className="text-white rounded-md bg-blue-500 hover:bg-blue-700 px-5 py-2 mt-4" type="submit">
          Log in
        </button>
      </form>
    </>
  )
}