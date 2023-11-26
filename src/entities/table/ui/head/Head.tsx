import { Flex } from '@mantine/core'
import { HeaderGroup, flexRender } from '@tanstack/react-table'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'shared/iconpack'
import { useHeadStyles } from './Head.styles'

interface HeadProps<T> {
  headerGroups: HeaderGroup<T>[]
  centered?: boolean
}

export const Head = <T,>({ headerGroups, centered = false }: HeadProps<T>) => {
  const { classes } = useHeadStyles(centered)

  return (
    <thead className={classes.thead}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder ? null : (
                <Flex
                  className={classes.thChildren}
                  sx={{
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: <ArrowUp size={16} className={classes.headTag} />,
                    desc: <ArrowDown size={16} className={classes.headTag} />,
                  }[header.column.getIsSorted() as string] ??
                    (header.column.getCanSort() && (
                      <ArrowUpDown
                        size={16}
                        className={classes.headTagDefault}
                      />
                    ))}
                </Flex>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
