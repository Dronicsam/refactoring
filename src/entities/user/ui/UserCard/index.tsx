import { UserCircle2 } from 'lucide-react'
import { useProfileStore } from '../../model/useProfileStore'
import styles from './style.module.css'

export const UserCard = () => {
  const username = useProfileStore((state) => state.username)
  return (
    <div className={styles.user_block}>
      <UserCircle2 size={126} strokeWidth={0.5} />
      <div style={{ width: '100%' }}>
        <p className={styles.user_block_text}>{username}</p>
      </div>
    </div>
  )
}
