import { Route } from "react-router"

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import AuthProvider, { useAuth } from './AuthProvider'

import AuthLayout from "./AuthLayout";

const routes = [
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: 'profile', element: <Profile /> },
]

const RegisterAuthModule = () => (
  <Route path="auth" element={<AuthLayout />}>
    {routes.map(routeProps => (<Route {...routeProps} />))}
  </Route>
)

export {
  RegisterAuthModule,
  AuthProvider,
  useAuth
}