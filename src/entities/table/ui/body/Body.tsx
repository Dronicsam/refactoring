import { Flex } from '@mantine/core'
import { RowModel, flexRender } from '@tanstack/react-table'
import { useBodyStyles } from './Body.styles'

interface BodyProps {
  rows: RowModel<any>
}

export const Body = ({ rows }: BodyProps) => {
  const { classes } = useBodyStyles()

  return (
    <tbody>
      {rows.rows.map((row) => (
        <tr
          key={row.id}
          className={
            row.original.usage_remaining === 0 ? classes.disabledTr : classes.tr
          }
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} role="gridcell">
              {cell.id.includes('id') ? (
                <Flex justify="end">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Flex>
              ) : (
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
