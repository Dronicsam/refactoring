import { createStyles } from '@mantine/core'

export const useHeadStyles = createStyles(({ colors }, centered: boolean) => ({
  thead: {
    background: 'white',
    position: 'sticky',
    zIndex: 1,
    left: 0,
    top: '-0.5%',
    textAlign: 'center',
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      background: colors.gray[4],
      width: '100%',
    },
    '::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '.7px',
      background: colors.gray[4],
      width: '100%',
    },
  },
  thChildren: {
    gap: '8px',
    color: 'black',
    fontSize: '14px',
    fontWeight: 400,
    width: '100%',
    alignItems: 'center',
    justifyContent: centered ? 'center' : 'start',
  },

  headTagDefault: {
    color: colors.gray[5],
  },
  headTag: {
    color: colors.blue[5],
  },
}))
