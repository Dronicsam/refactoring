import { Flex } from '@mantine/core'
import { RowModel, flexRender } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import { useBodyStyles } from './Body.styles'

interface BodyProps {
  rows: RowModel<any>
  onClick?: (id: any) => void
}

export const Body = ({ rows, onClick }: BodyProps) => {
  const { classes } = useBodyStyles()
  const navigate = useNavigate()
  return (
    <tbody>
      {rows.rows.map((row) => (
        <tr
          key={row.id}
          className={
            row.original.usage_remaining === 0 ? classes.disabledTr : classes.tr
          }
          onClick={() => {
            if (row.original.token) {
              console.log('token')
            } else navigate(`${ROUTES.scenarios}/${row.original.id}`)
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} role="gridcell">
              {cell.id.includes('id') ? (
                <Flex justify="end" onClick={() => console.log('a')}>
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
