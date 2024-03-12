import { Usericon } from 'shared/iconpack/usericon'
import styles from './style.module.css'

interface CardProps {
  tempNameProp: string
}

export const Card = ({ tempNameProp }: CardProps) => (
  <div className={styles.user_block}>
    <Usericon />
    <div style={{ width: '100%' }}>
      <p className={styles.user_block_text}>{tempNameProp}</p>
    </div>
  </div>
)
