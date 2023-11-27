import { Flex } from '@mantine/core'
import { RowModel, flexRender } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { ROUTES, copyToClipboard } from 'shared/lib'
import { useBodyStyles } from './Body.styles'

interface BodyProps {
  rows: RowModel<any>
  variant?: 'scenarios' | 'tokens' | 'operators'
}

export const Body = ({ rows, variant = 'tokens' }: BodyProps) => {
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
        >
          {row.getVisibleCells().map((cell) => {
            if (cell.id.includes('id') && !cell.id.includes('telegram'))
              return (
                <td key={cell.id} role="gridcell">
                  <Flex justify="end">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Flex>
                </td>
              )
            return (
              <td
                role="gridcell"
                key={cell.id}
                onClick={() => {
                  if (variant === 'scenarios')
                    navigate(`${ROUTES.scenarios}/${row.original.id}`)
                  if (variant === 'tokens') {
                    copyToClipboard(row.original.token)
                  }
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
