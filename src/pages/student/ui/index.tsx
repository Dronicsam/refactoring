import { Button, Stack } from '@mantine/core'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MiniCard, ProcessCard } from 'entities/course/ui'
import { Card } from 'entities/course/user/ui'
import styles from './style/style.module.css'

const Student = () => {
  const navigate = useNavigate()

  const [proccessOpen, setProccessOpen] = useState(true)
  const [miniOpen, setMiniOpen] = useState(true)

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
          <Button
            variant="transparent"
            rightIcon={
              <ChevronDown
                style={{ rotate: proccessOpen ? '180deg' : '0deg' }}
              />
            }
            onClick={() => setProccessOpen(!proccessOpen)}
          >
            В процессе
          </Button>
          <div
            style={{
              display: proccessOpen ? 'flex' : 'none',
              marginTop: '1.5vw',
              marginBottom: '1.5vw',
              flexDirection: 'column',
              rowGap: '20px',
              width: '100%',
            }}
          >
            <ProcessCard
              id={1}
              title="Электротехника"
              author="Абрамов К. О."
              progress={11}
            />
            <ProcessCard
              id={2}
              title="Безопасность жизнедеятельности"
              author="Курочкин Т. В."
              progress={21}
            />
            <ProcessCard
              id={3}
              title="Взлом Пентагонов омереконских"
              author="Обама Б. И."
              progress={31}
            />
          </div>
        </div>
        <div className={styles.completed}>
          <Button
            variant="transparent"
            rightIcon={
              <ChevronDown style={{ rotate: miniOpen ? '180deg' : '0deg' }} />
            }
            onClick={() => setMiniOpen(!miniOpen)}
          >
            Пройденные
          </Button>
          <div
            className={styles.miniContainer}
            style={{
              marginTop: '1vw',
              marginBottom: '5vw',
              display: miniOpen ? 'grid' : 'none',
            }}
          >
            <MiniCard
              id={1}
              key={1}
              title="123"
              author="123123"
              duration="123"
              count={1}
            />
            <MiniCard
              id={2}
              key={2}
              title="123"
              author="123123"
              duration="123"
              count={2}
            />
            <MiniCard
              id={3}
              key={3}
              title="123"
              author="123123"
              duration="123"
              count={3}
            />
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default Student
