import { Button, Stack } from '@mantine/core'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ProcessCard } from 'entities/course/ui'
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
        <div className={styles.button_block}>
          <Button
            className={styles.button}
            onClick={() => handleRedirect('/catalog')}
            variant="green"
          >
            Найти курс
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button
            variant="transparent"
            rightIcon={<ChevronDown />}
            onClick={() => console.log('123')}
          >
            В процессе
          </Button>
          <div
            style={{
              display: 'flex',
              marginTop:"1.5vw",
              // marginBottom: "1.5vw",
              flexDirection: 'column',
              rowGap: '20px',
              width: '100%',
            }}
          >
            <ProcessCard id={1} title="Электротехника" author="Абрамов К. О." progress={11} />
            <ProcessCard id={2} title="Безопасность жизнедеятельности" author="Курочкин Т. В." progress={21} />
            <ProcessCard id={3} title="Взлом Пентагонов омереконских" author="Обама Б. И." progress={31} />
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default Teacher
