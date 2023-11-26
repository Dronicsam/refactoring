import { Skeleton, Table } from '@mantine/core'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { useInitialTable, useTableData } from '../lib'

export const TokensTable = () => {
  const { classes } = useTableStyles(true)
  const { loading } = useTableData()
  const { table } = useInitialTable()
  console.log(loading)
  return (
    <Skeleton visible={loading} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} centered />
        <Body rows={table.getRowModel()} />
      </Table>
    </Skeleton>
  )
}
