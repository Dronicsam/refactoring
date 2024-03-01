import { MantineThemeOverride } from '@mantine/core'
import { rem } from '@mantine/styles'
import { ThemedComponents } from './ComponentsTheme'
import { globalStyles } from './globalStyles'

export const OurMantineTheme: MantineThemeOverride = {
  globalStyles,
  components: ThemedComponents,
  fontSizes: {
    md: rem(14),
  },
  breakpoints: {
    xs: '800',
    sm: '1000',
    md: '1200',
    lg: '1400',
    xl: '1800',
  },
  colors: {
    green: [
      '#1B7E78',
      '#4DBBB5',
      '#83CDC9',
      '#83CDC980'
    ],
    gray: [
      '#4B4F4FCC',
      '#898989',
      '#D9D9D9',
      '#C7C7C780',
      '#DADADA'
    ]
  },
}
