import { use } from "react";
import { Link, Outlet } from "react-router";

import { AuthContext } from "@/contexts";

import useEvent from "@/hooks/useEvent";
import { events } from "@/events";

import reactLogo from '@/assets/react.svg'

import viteLogo from '/vite.svg' // public resource

function UserLayout() {
  const [user, setUser] = use(AuthContext)

  const { trigger } = useEvent(events.auth.LOGIN)

  const handleLogout = () => {

    if (user) {
      return setUser(null)
    }

    const newUser = { id: 1, name: 'Milos Dodic' }

    setUser(newUser)
    trigger({ user: newUser })
  }

  return <div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <div className='navbar'>
      <span><Link to="/">Home</Link></span> |
      <span><Link to="/contributors">Contributors</Link></span> |
      <span><Link to="/about">About</Link></span> |
      <span><a onClick={handleLogout} href="#" type="button">Log {user ? 'out' : 'in'}</a></span>
    </div>

    <Outlet />
  </div>
}

export default UserLayout