import { Skeleton, Table } from '@mantine/core'
import { useEffect } from 'react'
import { Body, Head, useTableStyles } from 'entities/table/ui'
import { useTokensStore } from 'entities/token/model'
import { useInitialTable } from '../lib'

export const TokensTable = () => {
  const loading = useTokensStore((state) => state.loading)
  const getTokens = useTokensStore((state) => state.getTokens)

  const { table } = useInitialTable()
  const { classes } = useTableStyles(true)

  useEffect(() => {
    getTokens()
  }, [getTokens])

  return (
    <Skeleton visible={loading} className={classes.container}>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} centered />
        <Body rows={table.getRowModel()} />
      </Table>
    </Skeleton>
  )
}
