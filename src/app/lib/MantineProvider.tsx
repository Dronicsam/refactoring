import { MantineProvider as MantineCoreProvider } from '@mantine/core'
import { ReactNode } from 'react'
import { CustomFonts, OurMantineTheme } from 'shared/config'

export const MantineProvider = ({ children }: { children: ReactNode }) => (
  <MantineCoreProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      ...OurMantineTheme,
      fontFamily: 'Commissioner, sans-serif',
    }}
  >
    <CustomFonts />
    {children}
  </MantineCoreProvider>
)
