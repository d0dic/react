import { Route, RouteProps, Routes as RoutesWrapper } from 'react-router'

import Welcome from '../pages/Welcome'
import Demo from '../pages/Demo'

import { RegisterAuthModule } from '../modules/Auth'

const routes: RouteProps[] = [
  { path: '/demo', element: <Demo /> }
]

const NotFound = () => <h1 className='mt-[30vh] text-center text-5xl'>404 - Page Not Found</h1>

function Routes() {

  return (
    <>
      <RoutesWrapper>
        <Route index element={<Welcome />} />
        {RegisterAuthModule()}

        {routes.map(routeProps => (<Route {...routeProps} />))}
        <Route path='*' element={<NotFound />} />
      </RoutesWrapper>
    </>
  )
}

export default Routes
