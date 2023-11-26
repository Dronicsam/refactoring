import { Skeleton, Table } from '@mantine/core'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { useInitialTable, useTableData } from '../lib'

export const OperatorsTable = () => {
  const { classes } = useTableStyles(false)
  const { data, loading } = useTableData()
  const { table } = useInitialTable(data)

  return (
    <Skeleton visible={loading} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel()} />
      </Table>
    </Skeleton>
  )
}
