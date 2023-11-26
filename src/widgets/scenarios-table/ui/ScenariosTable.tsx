import { Skeleton, Table } from '@mantine/core'
import { Scenario } from 'entities/scenario/types'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { useInitialTable, useTableData } from '../lib'

export const ScenariosTable = ({ data }: { data: Scenario[] }) => {
  // const newData = useTableData()
  // console.log(newData)
  const { table } = useInitialTable(data)
  const { classes } = useTableStyles(false)
  return (
    <Skeleton visible={false} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel()} variant="scenarios" />
      </Table>
    </Skeleton>
  )
}
