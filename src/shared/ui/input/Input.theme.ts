import { ThemeComponent } from '../../config'

export const InputTheme: ThemeComponent = {
  styles: (theme) => {
    const isDark = theme.colorScheme === 'dark'
    return {
      root: { width: '100%' },
      input: {
        height: '42px',
        color: 'black',
      },
    }
  },
  defaultProps: {
    icon: null,
  },
}
