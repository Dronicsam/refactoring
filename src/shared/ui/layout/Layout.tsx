import { Box } from '@mantine/core'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      width: '100vw',
      height: '100vh',
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
