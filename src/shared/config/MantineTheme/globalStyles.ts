import { MantineTheme } from '@mantine/styles'
import { CSSObject } from '@mantine/styles/lib/tss'

type GlobalStylesOptions = (theme: MantineTheme) => CSSObject

export const globalStyles: GlobalStylesOptions = ({ colors }) => ({
  body: {
    maxWidth: '100vw',
    minHeight: '100vh',
    margin: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: '#EBE5E5',
  },
  '#root': {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  '::-webkit-scrollbar': {
    width: '0px',
  },
  '::-webkit-scrollbar-thumb': {
    background: colors.gray[5],
    borderRadius: '999px',
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: colors.gray[6],
    border: '4px solid rgba(0, 0, 0, 0)',
    backgroundClip: 'padding-box',
  },
  '::-webkit-scrollbar-corner': {
    background: colors.gray[6],
  },
  'input:-webkit-autofill': {
    '-webkit-box-shadow': `0 0 0 100px white inset`,
    '-webkit-text-fill-color': 'black',
    border: 0,
  },
})
