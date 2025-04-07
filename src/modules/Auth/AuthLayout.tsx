import { NavLink, Outlet } from "react-router";
import { useAuth } from "./AuthProvider";

export default function AuthLayout() {
  const auth = useAuth()

  return (
    <>
      <h1 className='text-3xl text-center mt-5'>Auth Layout</h1>
      <nav className="flex justify-center space-x-4 mt-3">
        {
          auth?.token ? <>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to={'profile'}>
              Profile
            </NavLink>
            <div onClick={auth.logOut}>
              Log out
            </div>
          </> : <>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to={'login'}>Login</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to={'register'}>Register</NavLink>
          </>
        }
      </nav>

      <Outlet />
    </>
  )
}