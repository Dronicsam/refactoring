import { $api } from '.'

export function login(loginValue: string, password: string) {
  return $api.post('/user/login', {
    login: loginValue,
    password,
    remember_me: true,
  })
}

export function logout() {
  return $api
    .delete('/user/login')
    .then(() => localStorage.removeItem('refresh'))
}

export function refresh(token: string) {
  return $api.post(
    '/user/refresh',
    { refresh: token },
    { withCredentials: true }
  )
}
