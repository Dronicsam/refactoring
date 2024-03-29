import { Accordion, Button, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import styles from './style/style.module.css'
import { CompletedList } from 'widgets/completed-list/ui'
import { ProcessList } from 'widgets/process-list/ui'
import { UserCard } from 'entities/profile/ui'

const Student = () => {
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
          onClick={() => handleRedirect('/catalog')}
          variant="green"
        >
          Найти курс
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
        <Accordion.Item value="process">
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
            <ProcessList />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="completed">
          <Accordion.Control
            sx={{
              fontSize: 24,
              '&:hover': {
                background: 'inherit',
              },
            }}
          >
            Пройденные
          </Accordion.Control>
          <Accordion.Panel>
            <CompletedList />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}

export default Student
