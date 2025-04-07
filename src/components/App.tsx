import { AuthProvider } from '../modules/Auth'

import Routes from './Routes'

const API_URL = 'http://localhost:3000'

function App() {
  return (
    <>
      <AuthProvider apiUrl={API_URL}>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
