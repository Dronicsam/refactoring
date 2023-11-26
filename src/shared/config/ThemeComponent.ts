import { MantineTheme } from '@mantine/core'
import { ContextStylesParams } from '@mantine/styles/lib/theme/types/MantineTheme'
import { CSSObject } from '@mantine/styles/lib/tss'

export interface ThemeComponent {
  defaultProps?:
    | Record<string, any>
    | ((theme: MantineTheme) => Record<string, any>)
  classNames?: Record<string, string>
  styles?:
    | Record<string, CSSObject>
    | ((
        theme: MantineTheme,
        params: any,
        context: ContextStylesParams
      ) => Record<string, CSSObject>)
  variants?: Record<
    PropertyKey,
    (
      theme: MantineTheme,
      params: any,
      context: ContextStylesParams
    ) => Record<string, CSSObject>
  >
  sizes?: Record<
    PropertyKey,
    (
      theme: MantineTheme,
      params: any,
      context: ContextStylesParams
    ) => Record<string, CSSObject>
  >
}
