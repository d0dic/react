import { Link, Route, Routes as RoutesWrapper } from "react-router"

import Home from "@/pages/Home"
import Contributors from "@/pages/Contributors"
import About from "@/pages/About"

import UserLayout from "@/components/layout/UserLayout"

const NotFound = () => (
  <div>
    <h1 style={{ fontSize: 200, margin: 0 }}>404</h1>
    <p style={{ fontSize: 70 }}>Page Not Found</p>
    <Link to="/">Go to Home Page</Link>
  </div>
)

function Routes() {

  return (
    <RoutesWrapper>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" Component={NotFound} />
    </RoutesWrapper>
  )
}

export default Routes