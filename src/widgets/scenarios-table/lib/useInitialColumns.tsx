import { Text } from '@mantine/core'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { TableMenu } from 'features/table-menu'
import { Scenario } from 'entities/scenario/types'

export const useInitialColumns = () =>
  useMemo<ColumnDef<Scenario>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Название',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'id',
        header: () => null,
        cell: ({ row }) => <TableMenu data={row.original} />,
        enableSorting: false,
      },
    ],
    []
  )
