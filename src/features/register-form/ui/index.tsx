import {
  Stack,
  TextInput,
  Button,
  PasswordInput,
  Flex,
  Select,
  Text,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from 'entities/user/api'
import { ROUTES } from 'shared/lib'

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullname: '',
    phone: '',
    date: new Date(),
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const navigate = useNavigate()

  // Универсальный обработчик изменений формы
  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const {
    username,
    email,
    fullname,
    phone,
    date,
    password,
    confirmPassword,
    gender,
  } = formData

  // Парсим ФИО — защититься от некорректного ввода
  const nameParts = fullname.trim().split(' ')
  const lastName = nameParts[0] || ''
  const firstName = nameParts[1] || ''
  const middleName = nameParts[2] || ''

  const passwordsMatch = password === confirmPassword
  const passwordValid = password.length >= 8
  const isFormValid =
    username && email && fullname && password && passwordsMatch && passwordValid

  const onSubmit = async () => {
    if (!isFormValid) return

    try {
      await signup(
        username,
        email,
        password,
        firstName,
        lastName,
        middleName,
        gender,
        phone,
        date,
        false
      )
      navigate(ROUTES.login)
    } catch (error) {
      // TODO: обработать ошибку (показать сообщение пользователю)
      console.error(error)
    }
  }

  return (
    <Stack spacing="md" w={600} mx="auto">
      <Flex gap="md" justify="center">
        <TextInput
          label="Имя аккаунта"
          withAsterisk
          w="50%"
          value={username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
        <TextInput
          label="Почта"
          withAsterisk
          w="50%"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </Flex>

      <Flex gap="md" justify="center">
        <TextInput
          label="ФИО"
          withAsterisk
          w="50%"
          placeholder="Фамилия Имя Отчество"
          value={fullname}
          onChange={(e) => handleChange('fullname', e.target.value)}
        />
        <TextInput
          label="Телефон"
          w="50%"
          value={phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </Flex>

      <Flex gap="md" justify="center">
        <Select
          label="Пол"
          placeholder="Не выбрано"
          clearable
          w="50%"
          data={[
            { value: 'male', label: 'Мужской' },
            { value: 'female', label: 'Женский' },
          ]}
          value={gender}
          onChange={(value) => handleChange('gender', value || '')}
        />
        <DateInput
          label="Дата рождения"
          w="50%"
          value={date}
          onChange={(date) => handleChange('date', date || new Date())}
          lang="ru"
        />
      </Flex>

      <Stack align="center" spacing={6}>
        <PasswordInput
          label="Пароль"
          withAsterisk
          value={password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        <PasswordInput
          label="Подтвердите пароль"
          withAsterisk
          value={confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
        />

        {!passwordsMatch && <Text color="red">Пароли должны совпадать!</Text>}
        {!passwordValid && (
          <Text color="red">Пароль должен быть не менее 8 символов.</Text>
        )}

        <Button
          variant="green"
          w={200}
          mt="md"
          onClick={onSubmit}
          disabled={!isFormValid}
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
