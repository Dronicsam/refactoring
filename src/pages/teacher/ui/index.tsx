import { Accordion, Button, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { SelfCourse } from 'entities/course/ui'
import { UserCard } from 'entities/user/ui'
import styles from './style/style.module.css'

const Teacher = () => {
  const navigate = useNavigate()

  const handleRedirect = (path: string) => {
    navigate(path)
  }

  return (
    <Stack className={styles.container}>
      <div className={styles.user_container}>
        <UserCard />
        <Button
          className={styles.button}
          onClick={() => handleRedirect('/create')}
          variant="green"
        >
          Создать курс
        </Button>
      </div>

      <Accordion
        multiple
        sx={{
          '&:hover': {
            background: 'inherit',
          },
        }}
      >
        <Accordion.Item value="courses">
          <Accordion.Control
            sx={{
              fontSize: 24,
              '&:hover': {
                background: 'inherit',
              },
            }}
          >
            Ваши курсы
          </Accordion.Control>
          <Accordion.Panel>
            <SelfCourse
              id={1}
              title="Введение в ИТ"
              duration="10 часов"
              lectures={1}
              students="32 студента"
              tests={1}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}

export default Teacher
