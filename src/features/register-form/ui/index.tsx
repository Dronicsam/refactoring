import {
  Stack,
  TextInput,
  Button,
  PasswordInput,
  Flex,
  Select,
  Box,
  Checkbox,
  Text,
} from '@mantine/core'
import { DateInput, DateValue } from '@mantine/dates'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

export const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState<DateValue>(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')

  const onSubmit = () => {}
  return (
    <Stack spacing={10} w="600px">
      <Flex gap={10} w="100%" justify="center">
        <TextInput
          label="Имя"
          w="350px"
          withAsterisk
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          label="Почта"
          w="350px"
          withAsterisk
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Flex>
      <Flex gap={10} w="100%" justify="center">
        <TextInput
          label="ФИО"
          w="350px"
          withAsterisk
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <TextInput
          label="Телефон"
          w="350px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Flex>
      <Flex gap={10} w="100%" justify="center">
        <Select
          label="Пол"
          placeholder="Не выбрано"
          w="350px"
          clearable
          data={[
            { value: 'male', label: 'Мужской' },
            { value: 'female', label: 'Женский' },
          ]}
          value={gender}
          onChange={(value) => setGender(String(value))}
        />
        <DateInput
          label="Дата рождения"
          w="350px"
          value={date}
          onChange={(e) => setDate(e)}
          lang="ru"
        />
      </Flex>
      <Stack align="center" spacing={5}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          withAsterisk
          label="Пароль"
        />
        <PasswordInput
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          withAsterisk
          label="Подтвердите пароль"
        />
        {password !== confirmPassword && (
          <Text color="red">Пароли должны совпадать!</Text>
        )}
        <Button
          variant="green"
          w="200px"
          onClick={onSubmit}
          mt={10}
          disabled={
            !username ||
            !fullname ||
            !email ||
            !password ||
            password !== confirmPassword
          }
        >
          Зарегистрироваться
        </Button>
        <Link style={{ color: 'black' }} to={ROUTES.login}>
          Уже есть аккаунт? Войдите
        </Link>
      </Stack>
    </Stack>
  )
}
