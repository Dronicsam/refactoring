import { Global } from '@mantine/core'

import mediumMain from 'shared/assets/Commissioner/Commissioner-Medium.ttf'
import regularMain from 'shared/assets/Commissioner/Commissioner-Regular.ttf'
import semiBoldMain from 'shared/assets/Commissioner/Commissioner-SemiBold.ttf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Commissioner',
            src: `url('${regularMain}') format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Commissioner',
            src: `url('${mediumMain}') format("truetype")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Commissioner',
            src: `url('${semiBoldMain}') format("truetype")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  )
}
