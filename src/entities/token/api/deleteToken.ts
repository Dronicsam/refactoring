import { $api } from 'shared/api'

export const deleteToken = (token_id: number) =>
  $api.delete('/token/', {
    params: {
      token_id,
    },
  })
