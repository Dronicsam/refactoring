import axios from 'axios'
import { $api } from '.'

export function login(loginValue: string, password: string) {
  return $api.post('/api/login', {
    login: loginValue,
    password,
    remember_me: true,
  })
}

export function logout() {
  return axios
    .delete('/api/login', {
      withCredentials: true,
    })
    .then(() => localStorage.removeItem('refresh'))
  // .catch((e) => console.error(e))
}

export function refresh(token: string) {
  return axios.post(
    '/api/login/refresh',
    { refresh: token },
    { withCredentials: true }
  )
}
