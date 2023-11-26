import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Operator } from 'entities/operator/types'
import { useInitialColumns } from './useInitialColumns'

export const useInitialTable = (data: Operator[]) => {
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return { table }
}
