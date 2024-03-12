import { Button, Stack } from '@mantine/core'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { MiniCard, ProcessCard } from 'entities/course/ui'
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
            onClick={() => handleRedirect('/new_course')}
            variant="green"
          >
            Создать курс
          </Button>
        </div>
      </div>
      <div>
        <h1 style={{marginTop:"0", fontWeight:"medium"}}></h1>
        <ProcessCard id={1} title="1" author="1" progress={11} />
        <ProcessCard id={2} title="2" author="2" progress={21} />
        <ProcessCard id={3} title="3" author="3" progress={31} />
      </div>
    </Stack>
  )
}

export default Teacher
