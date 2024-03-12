import { Button, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { Usericon } from 'shared/iconpack/usericon'
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
        <div className={styles.user_block}>
          <Usericon />
          <div style={{ width: '100%' }}>
            <p className={styles.user_block_text}>{tempName}</p>
          </div>
        </div>
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
    </Stack>
  )
}

export default Teacher
