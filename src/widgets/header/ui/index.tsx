import { ActionIcon, Button, Flex, Menu } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

export const Header = () => {
  const [opened, setOpened] = useState(false)
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()
  const courses = ['course1', 'course2', 'course3']

  return (
    <Flex justify="space-between">
      <Flex gap="lg">
        <Menu opened={opened} onChange={setOpened}>
          <Menu.Target>
            <Button
              variant="transparent"
              rightIcon={
                <ChevronDown
                  style={{ rotate: opened ? '180deg' : '', transition: '0.3s' }}
                />
              }
            >
              Все курсы
            </Button>
          </Menu.Target>
          <Menu.Dropdown bg="white" p={0}>
            {courses.map((course) => (
              <Menu.Item
                key={course}
                sx={{
                  borderBottom: '1px solid #D9D9D9',
                  borderRadius: 0,
                  '&:hover': {
                    background: '#d9d9d9',
                  },
                }}
              >
                {course}
              </Menu.Item>
            ))}
            <Menu.Item
              sx={{
                '&:hover': {
                  background: '#d9d9d9',
                },
              }}
              onClick={() => navigate(ROUTES.courses)}
            >
              Посмотреть все
            </Menu.Item>
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
