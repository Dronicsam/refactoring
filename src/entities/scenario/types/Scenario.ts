export interface Replica {
  id: number
  text: string
  interval: number
}

export type Scenario = {
  id?: number
  name: string
  description?: string
  created_at?: string
  replics?: Replica[]
}
