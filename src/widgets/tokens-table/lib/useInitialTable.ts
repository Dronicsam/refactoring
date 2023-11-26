import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTokensStore } from 'entities/token/model'
import { useInitialColumns } from './useInitialColumns'

export const useInitialTable = () => {
  const tokens = useTokensStore((state) => state.tokens)
  const columns = useInitialColumns()

  const table = useReactTable({
    data: tokens,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return { table }
}
