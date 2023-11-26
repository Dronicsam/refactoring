import { create } from 'zustand'
import { Scenario } from '../types'

interface UseScenarioStore {
  // scenario: Scenario
  name: string
  description: string
  setName: (name: string) => void
  setDescription: (description: string) => void
}

export const useScenarioStore = create<UseScenarioStore>((set) => ({
  // scenario: {
  //     name: '',
  //     description: ''
  // }
  name: '',
  description: '',
  setName: (name: string) => set(() => ({ name })),
  setDescription: (description: string) => set(() => ({ description })),
}))
