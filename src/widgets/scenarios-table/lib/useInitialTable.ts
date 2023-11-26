import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Scenario } from 'entities/scenario/types'
import { useInitialColumns } from './useInitialColumns'

export const useInitialTable = (data: Scenario[]) => {
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return { table }
}
