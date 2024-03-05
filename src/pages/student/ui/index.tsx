import { Stack } from '@mantine/core'
import { Usericon } from 'shared/iconpack/usericon'
import styles from './style/style.module.css'

const Student = () => {
  console.log('123')
  const tempName = 'Гатауллова Алина Альфредовна'
  return (
    <Stack className={styles.container}>
      <div className={styles.user_block}>
        <Usericon />
        <p className={styles.user_block_text}>{tempName}</p>
      </div>
    </Stack>
  )
}

export default Student
