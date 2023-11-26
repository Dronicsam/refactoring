import { MantineTheme } from '@mantine/styles'
import { CSSObject } from '@mantine/styles/lib/tss'

type GlobalStylesOptions = (theme: MantineTheme) => CSSObject

export const globalStyles: GlobalStylesOptions = ({ colorScheme, colors }) => ({
  body: {
    maxWidth: '100vw',
    minHeight: '100vh',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    margin: 0,
    backgroundColor:
      colorScheme === 'dark' ? colors.darkBlack[7] : colors.gray[1],
  },
  '#root': {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  '::-webkit-scrollbar': {
    width: '14px',
  },
  '::-webkit-scrollbar-thumb': {
    background: colorScheme === 'dark' ? colors.darkGray[4] : colors.gray[3],
    borderRadius: '999px',
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: colorScheme === 'dark' ? colors.darkGray[3] : colors.gray[4],
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-corner': {
    background: colorScheme === 'dark' ? colors.darkGray[4] : colors.gray[1],
  },
  'input:-webkit-autofill': {
    '-webkit-box-shadow': `0 0 0 1000px ${
      colorScheme === 'dark' ? colors.darkBlack[6] : colors.gray[1]
    } inset`,
    '-webkit-text-fill-color': `${
      colorScheme === 'dark' ? colors.gray[4] : 'colors.gray[7]'
    }`,
  },
})
