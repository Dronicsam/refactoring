export type Token = {
  id: number
  token: string
  name: string
  usage_remaining: number
  expired_at: Date | string
  created_at: Date | string
}
