import { Button, Flex } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from 'shared/api/auth'
import { LogOut } from 'shared/iconpack'
import { ROUTES } from 'shared/lib'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Flex justify="left" align="center" gap={20} fw={500} fz={16}>
      <Button
        leftIcon={<LogOut transform="scale(-1, 1)" size={18} />}
        bg="none"
        sx={{
          color: 'black',
          ':hover': {
            background: 'none',
          },
        }}
        onClick={() => {
          logout().then(() => navigate(ROUTES.login))
        }}
        p="0"
      >
        Выход
      </Button>
      <Link
        to={ROUTES.scenarios}
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Сценарии
      </Link>
      <Link
        to={ROUTES.tokens}
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Токены
      </Link>
    </Flex>
  )
}
