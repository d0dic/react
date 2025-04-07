export const TOKEN_KEY = 'token'

export const loginUser = async (baseUrl: string, params: object) => {
  const headers = new Headers()
  headers.append("Accept", "*/*")
  headers.append("Content-Type", "application/json")

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(params),
  })

  const data = await response.json()

  return data
}

export const getUser = async (baseUrl: string) => {

  const token = localStorage.getItem(TOKEN_KEY)

  const response = await fetch(`${baseUrl}/auth/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })

  const data = await response.json()

  return data
}