import { ThemeComponent } from 'shared/config'

export const ActionIconTheme: ThemeComponent = {
  styles: ({ colors }) => ({
    root: {
      color: 'black',
      '&:hover': {
        background: 'inherit',
        color: colors.gray[7],
      },
    },
  }),
}
