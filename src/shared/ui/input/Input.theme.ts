import { ThemeComponent } from '../../config'

export const InputTheme: ThemeComponent = {
  styles: () => ({
    root: { width: '100%' },
    input: {
      height: '42px',
      color: 'black',
    },
  }),
  defaultProps: {
    icon: null,
  },
}
