import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Token } from 'entities/token/types'
import { useInitialColumns } from './useInitialColumns'

export const useInitialTable = (data: Token[]) => {
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return { table }
}
