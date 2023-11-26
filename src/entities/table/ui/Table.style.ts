import { createStyles } from '@mantine/core'

export const useTableStyles = createStyles(({ colors }, centered: boolean) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    position: 'static',
    borderRadius: '15px',
    '::-webkit-scrollbar': {
      background: 'white',
      borderRadius: '0 10px 10px 0',
    },
    overflowY: 'auto',
    '::-webkit-scrollbar-corner': {
      background: 'white',
    },
    padding: '0 10px',
  },
  table: {
    position: 'static',
    color: 'black',
    'thead, tbody': {
      'th, td': {
        textAlign: centered ? 'center' : 'left',
        borderLeft: 'none',
        borderRight: 'none',
        ':last-of-type': {
          borderRight: 'none',
        },
        ':first-of-type': {
          borderLeft: 'none',
          borderBottom: 'none',
        },
      },
      tr: {
        height: '60px',
      },
    },
    tbody: {
      'tr > td': {
        borderTop: `1px ${colors.gray[4]} solid`,
      },
    },
  },
  loader: {
    padding: '10px 0 10px 0',
  },
}))
