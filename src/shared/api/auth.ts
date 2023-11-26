import { $api } from '.'

export function login(loginValue: string, password: string) {
  return $api.post('/login', {
    login: loginValue,
    password,
    remember_me: true,
  })
}

export function logout() {
  return $api.delete('/login').then(() => localStorage.removeItem('refresh'))
  // .catch((e) => console.error(e))
}

export function refresh(token: string) {
  return $api.post(
    '/login/refresh',
    { refresh: token },
    { withCredentials: true }
  )
}
