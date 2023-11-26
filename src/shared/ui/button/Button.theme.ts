import { ThemeComponent } from '../../config'

export const ButtonTheme: ThemeComponent = {
  styles: ({ colorScheme, colors }) => {
    const isDark = colorScheme === 'dark'
    return {
      root: {
        borderRadius: '8px',
        backgroundColor: isDark ? colors.darkBlue[2] : colors.blue[5],
        color: isDark ? colors.gray[3] : 'white',
        transition: '.3s',
        '&:hover': {
          backgroundColor: isDark ? colors.darkBlue[3] : colors.blue[6],
        },
        '&:disabled': {
          color: isDark ? colors.gray[3] : colors.gray[5],
          backgroundColor: isDark ? colors.darkBlack[5] : colors.gray[2],
        },
      },
    }
  },
  variants: {
    outline: ({ colorScheme, colors }) => {
      const isDark = colorScheme === 'dark'
      return {
        root: {
          backgroundColor: `${
            isDark ? colors.darkBlack[6] : 'white'
          } !important`,
          border: '1px solid',
          borderColor: isDark ? colors.darkBlack[1] : colors.blue[6],
          '&:hover': {
            backgroundColor: `${
              isDark ? colors.darkBlack[5] : colors.blue[0]
            } !important`,
          },
        },
        label: {
          color: colors.blue[6],
        },
      }
    },
    // cancel: ({ colorScheme, colors }) => {
    //   const isDark = colorScheme === 'dark'
    //   return {
    //     root: {
    //       backgroundColor: `${
    //         isDark ? colors.darkBlack[6] : 'white'
    //       } !important`,
    //       color: `${colors.gray[5]} !important`,
    //       '&:hover': {
    //         backgroundColor: `${
    //           isDark ? colors.darkBlack[5] : colors.gray[2]
    //         } !important`,
    //       },
    //     },
    //   }
    // },
    // navigate: () => ({
    //   label: {
    //     justifyContent: 'center',
    //     width: '100%',
    //   },
    // }),
  },
}
