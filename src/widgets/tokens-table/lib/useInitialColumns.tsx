import { Flex, Text, Tooltip } from '@mantine/core'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { deleteToken } from 'entities/token/api'
import { useTokensStore } from 'entities/token/model'
import { Token } from 'entities/token/types'
import { Copy } from 'shared/iconpack'
import { prepareDate } from 'shared/lib'
import { DeleteButton } from 'shared/ui'

export const useInitialColumns = () => {
  const removeToken = useTokensStore((state) => state.removeToken)
  return useMemo<ColumnDef<Token>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Имя токена',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'token',
        header: () => 'Токен',
        cell: (info) => 
        <Tooltip label="Нажмите, чтобы скопировать токен">
          <Flex gap={10} align="center">
            <Copy size={16} color='gray' />
          <Text>{info.getValue<string>()}</Text>
          </Flex>
          
        </Tooltip>
        ,
      },
      {
        accessorKey: 'usage_remaining',
        header: () => 'Количество оставшихся использований',
        cell: (info) => <Text>{info.getValue<number>()}</Text>,
      },
      {
        accessorKey: 'created_at',
        header: () => 'Дата создания',
        cell: (info) => (
          <Text>{prepareDate(new Date(info.getValue<string>()))}</Text>
        ),
      },
      {
        accessorKey: 'expired_at',
        header: () => 'Дата окончания действия',
        cell: (info) => (
          <Text>{prepareDate(new Date(info.getValue<string>()))}</Text>
        ),
      },
      {
        accessorKey: 'id',
        header: () => null,
        cell: ({ row }) => (
          <DeleteButton
            onClick={() =>
              deleteToken(Number(row.original.id)).then(() =>
                removeToken(row.original.id)
              )
            }
          />
        ),
        enableSorting: false,
      },
    ],
    [removeToken]
  )
}
