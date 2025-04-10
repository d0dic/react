
export const emitter = new EventTarget()

const events = {
  auth: {
    LOGIN: 'login',
    LOGOUT: 'logout',
  }
}

export {
  events
}