import { MantineTheme } from '@mantine/styles'
import { CSSObject } from '@mantine/styles/lib/tss'

type GlobalStylesOptions = (theme: MantineTheme) => CSSObject

export const globalStyles: GlobalStylesOptions = ({ colors }) => ({
  body: {
    maxWidth: '100vw',
    minHeight: '100vh',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    margin: 0,
    backgroundColor: '#C1B8B8',
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
    background: colors.gray[2],
    borderRadius: '999px',
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: colors.gray[1],
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-corner': {
    background: colors.gray[1],
  },
  'input:-webkit-autofill': {
    '-webkit-box-shadow': `0 0 0 1000px ${colors.gray[1]} inset`,
    '-webkit-text-fill-color': colors.gray[4],
  },
})
