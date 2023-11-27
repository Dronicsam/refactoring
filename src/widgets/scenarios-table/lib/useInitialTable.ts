import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useScenariosStore } from 'entities/scenario/model'
import { useInitialColumns } from './useInitialColumns'

export const useInitialTable = () => {
  const data = useScenariosStore((state) => state.scenarios)
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return { table }
}
