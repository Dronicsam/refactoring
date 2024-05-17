import { Stack } from '@mantine/core'
import { LoginForm } from 'features/login-form/ui'
import { Logo } from 'shared/ui'

const Login = () => (
  <Stack h="100%" align="center" justify="center">
    <Logo />
    <LoginForm />
  </Stack>
)

export default Login
