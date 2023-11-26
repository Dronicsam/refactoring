import { createStyles } from '@mantine/core'

export const useBodyStyles = createStyles(({ colors }) => ({
  tr: {
    cursor: 'pointer',
    ':hover': {
      transition: '0.3s',
      background: '#DEE2E640',
    },
    height: '60px',
  },
  disabledTr: {
    cursor: 'initial',
    color: colors.gray[4],
    ':hover': { background: 'none' },
  },
}))
