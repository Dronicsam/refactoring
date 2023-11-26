import { $api } from 'shared/api'

export const deleteToken = (id: number) =>
  $api.delete('/api/delete', {
    params: {
      id,
    },
  })
