export interface Replica {
  id: number
  text: string
  interval: string
}

export type Scenario = {
  id?: number
  name: string
  description: string
  created_at?: string
  call_text?: string
}
