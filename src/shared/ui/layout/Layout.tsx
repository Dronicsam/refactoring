import { Box } from '@mantine/core'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      flexGrow: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '2vh 10%',
    }}
  >
    {children}
  </Box>
)
