import { BrowserRouter } from "react-router"

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import App from "./components/App"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

function Root() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  )

}

export default Root