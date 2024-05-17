import { $api } from 'shared/api'

export const signup = (
  username: string,
  email: string,
  password: string,
  name: string,
  surname: string,
  patronymic: string,
  gender: string,
  phone: string,
  date_of_birth: Date,
  student: boolean
) =>
  $api.post('user/signup', {
    username,
    email,
    password,
    name,
    surname,
    patronymic,
    gender,
    phone,
    date_of_birth,
    student,
  })

export const login = (
  loginValue: string,
  password: string,
  remember_me: boolean
) =>
  $api.post<{ refresh: string }>('user/login', {
    login: loginValue,
    password,
    remember_me,
  })

export const refresh = (token: string) =>
  $api.post('user/refresh', {
    refresh: token,
  })

export const logout = () =>
  $api.delete('user/logout').then(() => localStorage.removeItem('refresh'))
