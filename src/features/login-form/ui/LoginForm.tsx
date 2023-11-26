import { Button, Box, PasswordInput, TextInput } from '@mantine/core'
import { useLoginForm } from '../lib'

export const LoginForm = () => {
  const [form, submitLogin] = useLoginForm()
  return (
    <Box
      miw={320}
      component="form"
      onSubmit={form.onSubmit((values) => submitLogin(values))}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <TextInput placeholder="Логин" {...form.getInputProps('login')} />
      <PasswordInput placeholder="Пароль" {...form.getInputProps('password')} />
      <Button
        w="100px"
        mx="auto"
        type="submit"
        disabled={!form.values.login || !form.values.password}
      >
        Войти
      </Button>
    </Box>
  )
}
