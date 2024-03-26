import { Center, Stack } from '@mantine/core'
import { RegisterForm } from 'features/register-form/ui'
import { Logo } from 'shared/ui'

const Register = () => (
  <Stack h="100%" align="center" justify='center'>
    <Logo />
    <RegisterForm />
  </Stack>
)

export default Register
