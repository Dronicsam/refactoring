import { Scenario } from '../types'

export const prepareReplicas = (data: Scenario) => {
  const text = data.call_text!.split(/[<>]/)
  const phrases = text.filter((replica, idx) => !(idx % 2)).slice(0, -1)
  const intervals = text.filter((replica, idx) => idx % 2)
  const replicas = phrases.map((item, idx) => ({
    id: idx,
    text: item,
    interval: `<${intervals[idx]}>`,
  }))
  return replicas
}
