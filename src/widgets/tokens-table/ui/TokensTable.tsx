import { Skeleton, Table } from '@mantine/core'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { Token } from 'entities/token/types'
import { useInitialTable } from '../lib'

const data: Token[] = [
  {
    id: 0,
    token: 'a',
    name: 'a',
    usage_remaining: 0,
    expired_at: '2023-11-25T22:24:54.941Z',
    created_at: '2023-11-25T22:24:54.941Z',
  },
  {
    id: 1,
    token: 'a',
    name: 'a',
    usage_remaining: 1,
    expired_at: '2023-11-25T22:24:54.941Z',
    created_at: '2023-11-25T22:24:54.941Z',
  },
  {
    id: 2,
    token: 'a',
    name: 'a',
    usage_remaining: 1,
    expired_at: '2023-11-25T22:24:54.941Z',
    created_at: '2023-11-25T22:24:54.941Z',
  },
  {
    id: 3,
    token: 'a',
    name: 'a',
    usage_remaining: 1,
    expired_at: '2023-11-25T22:24:54.941Z',
    created_at: '2023-11-25T22:24:54.941Z',
  },
]
export const TokensTable = () => {
  const { table } = useInitialTable(data)
  const { classes } = useTableStyles(true)
  return (
    <Skeleton visible={false} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} centered />
        <Body rows={table.getRowModel()} />
      </Table>
    </Skeleton>
  )
}
