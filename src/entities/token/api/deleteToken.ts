import { $api } from 'shared/api'

export const deleteToken = (token_id: number) =>
  $api.delete(`/token/${token_id}`)
