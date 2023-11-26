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
    darkBlack: [
      '#373A40',
      '#313543',
      '#2C2F3D',
      '#2C2E39',
      '#252832',
      '#23252F',
      '#1C1E26',
      '#0F1015',
    ],
    darkGray: [
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#868E96',
      '#495057',
      '#343A40',
    ],
    darkBlue: [
      '#4492DB',
      '#307DC6',
      '#29649B',
      '#1F4D78',
      '#293E51',
      '#163A5C',
      '#1C2A38',
    ],
    darkRed: ['#FF6B6B', '#D47272', '#A64848', '#7B3131', '#482C2C'],
    darkYellow: ['#DCB231', '#BC982A', '#9B802B', '#695927'],
  },
}
