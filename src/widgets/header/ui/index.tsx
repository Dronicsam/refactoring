import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import { ActionIcon, Button, Flex, Menu } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'

export const Header = () => {
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()
  const courses = ['course1', 'course2', 'course3']
  return (
    <Flex justify="space-between">
      <Flex gap="lg">
        <Menu>
          <Menu.Target>
            <Button variant="transparent" rightIcon={<ChevronDown />}>
              Все курсы
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {courses.map((course) => (
              <Menu.Item key={course}>{course}</Menu.Item>
            ))}
            <Menu.Item>Посмотреть все</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button variant="transparent" onClick={() => navigate(ROUTES.create)}>
          Создать курс
        </Button>
      </Flex>
      <Flex
        sx={{
          alignSelf: 'end',
          gap: 25,
        }}
      >
        <ActionIcon onClick={() => navigate(ROUTES.teacher)} />
        <ActionIcon onClick={() => navigate(ROUTES.student)}>
          <UserCircle2 />
        </ActionIcon>
      </Flex>
    </Flex>
  )
}
