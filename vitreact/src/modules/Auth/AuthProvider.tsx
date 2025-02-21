import { createContext, ReactElement, useContext, useState } from "react";
import { useNavigate } from "react-router";

import { getUser, loginUser, TOKEN_KEY } from "./api";

type AuthContextType = {
  user: null | any
  token: null | string
  logIn: (email: string, password: string) => Promise<any>
  logOut: () => void
  getMe: () => Promise<any>
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children, apiUrl = 'http://localhost:3000' }: { children: ReactElement, apiUrl: string }) => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY))

  const logIn = async (email: string, password: string) => {

    try {
      const data = await loginUser(apiUrl, { email, password })

      setToken(data.access_token)

      localStorage.setItem(TOKEN_KEY, data.access_token)

      navigate('/auth/profile')
    } catch (error) {
      console.warn(error)
    }

  }

  const logOut = () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)

    navigate('/auth/login')
  }

  const getMe = async () => {
    try {
      const data = await getUser(apiUrl)

      setUser(data)
    } catch (error) {
      logOut()
      console.warn(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, logIn, logOut, getMe }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

