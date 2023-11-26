import { $api } from 'shared/api'

export const createToken = (
  name: string,
  usage_remaining: number,
  expired_at: Date
) =>
  $api.post('/token/generate', {
    name,
    usage_remaining,
    expired_at,
  })
