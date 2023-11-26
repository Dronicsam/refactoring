import { UseFormReturnType, useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { login } from 'shared/api/auth'
import { ROUTES } from 'shared/lib'

export interface FormValues {
  login: string
  password: string
}

export const useLoginForm = (): [
  UseFormReturnType<FormValues>,
  (values: ReturnType<(values: FormValues) => FormValues>) => void,
] => {
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },
  })

  const submitLogin = (values: FormValues) => {
    login(values.login, values.password)
      .then(({ data }) => {
        localStorage.setItem('refresh', data.refresh)
      })
      .then(() => {
        navigate(ROUTES.scenarios)
      })
      .catch(() => {
        form.setFieldError('password', 'Неверный логин или пароль')
      })
  }
  return [form, submitLogin]
}
