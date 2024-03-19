import { Box } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './layout.module.css'

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    className={styles.container}
    sx={{
      width: '100vw',
      flexGrow: 1,
      overflowY: 'scroll',
      boxSizing: 'border-box',
      padding: '24px 60px 24px 60px',
      position: 'relative',
    }}
  >
    {children}
  </Box>
)
