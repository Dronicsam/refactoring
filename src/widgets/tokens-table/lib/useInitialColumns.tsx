import { Text } from '@mantine/core'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { TableMenu } from 'features/table-menu'
import { Token } from 'entities/token/types'

export const useInitialColumns = () =>
  useMemo<ColumnDef<Token>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Токен',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'usage_remaining',
        header: () => 'Количество оставшихся использований',
        cell: (info) => <Text>{info.getValue<number>()}</Text>,
      },
      {
        accessorKey: 'created_at',
        header: () => 'Дата создания',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'expired_at',
        header: () => 'Дата окончания действия',
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
