import { Button, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { CourseCard } from "entities/course/ui"
import { Card } from 'entities/course/user/ui'
import styles from './style/style.module.css'

const Teacher = () => {
  const navigate = useNavigate()
  
  const handleRedirect = (path: string) => {
    navigate(path)
  }
  const tempName = 'Гатауллова Алина Альфредовна'
  return (
    <Stack className={styles.container}>
      <div className={styles.user_container}>
        <Card tempNameProp={tempName} />
        <Button
          className={styles.button}
          onClick={() => handleRedirect('/catalog')}
          variant="green"
        >
          Найти курс
        </Button>
      </div>
      <div>
        <div className={styles.inProcess}>
          <h1>Ваши курсы</h1>
          <div
            style={{
              marginTop: '1.5vw',
              marginBottom: '1.5vw',
              flexDirection: 'column',
              rowGap: '20px',
              width: '100%',
            }}
          >
            <CourseCard
              id={1}
              title="Электротехника"
              students={32}
              testTasks={1}
              timeLengh={1}
              lectures={1}
            />
            <CourseCard
              id={2}
              title="Электротехника"
              students={32}
              testTasks={1}
              timeLengh={1}
              lectures={1}
            />
            <CourseCard
              id={3}
              title="Электротехника"
              students={32}
              testTasks={1}
              timeLengh={1}
              lectures={1}
            />
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default Teacher
