import { Skeleton, Table } from '@mantine/core'
import { useEffect } from 'react'
import { useScenariosStore } from 'entities/scenario/model'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { useInitialTable } from '../lib'

export const ScenariosTable = () => {
  const loading = useScenariosStore((state) => state.loading)
  const getScenarios = useScenariosStore((state) => state.getScenarios)

  const { table } = useInitialTable()
  const { classes } = useTableStyles(false)

  useEffect(() => {
    getScenarios()
  }, [getScenarios])

  return (
    <Skeleton visible={loading} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel()} variant="scenarios" />
      </Table>
    </Skeleton>
  )
}
