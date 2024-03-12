import { Box } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './layout.module.css'

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    className={styles.container}
    sx={{
      width: '100vw',
      height: '100vh',
      flexGrow: 1,
      overflowY: 'scroll',
      boxSizing: 'border-box',
      position: 'relative',
    }}
  >
    {children}
  </Box>
)
