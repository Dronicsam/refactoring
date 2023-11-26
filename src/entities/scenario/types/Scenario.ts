export interface Replica {
  id: number
  text: string
  interval: number
}

export type Scenario = {
  id?: number
  description?: string
  name: string
  replics?: Replica[]
}
