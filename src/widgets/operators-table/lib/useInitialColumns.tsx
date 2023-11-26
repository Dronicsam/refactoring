import { Text } from '@mantine/core'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Operator } from 'entities/operator/types'

export const useInitialColumns = () =>
  useMemo<ColumnDef<Operator>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Оператор',
        cell: (info) => (
          <Text>{`${info.row.original.name} ${info.row.original.surname} ${info.row.original.patronymic}`}</Text>
        ),
      },
      {
        accessorKey: 'phone',
        header: () => 'Телефон',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
    ],
    []
  )
