import { create } from 'zustand'
import { getAllTokens } from '../api'
import { Token } from '../types'

interface UseTokensStore {
  tokens: Token[]
  loading: boolean
  getTokens: () => void
}

export const useTokensStore = create<UseTokensStore>((set) => ({
  tokens: [],
  loading: true,
  getTokens: async () => {
    set({ loading: true })
    getAllTokens()
      .then(({ data }) => {
        set({ tokens: data })
      })
      .finally(() => set({ loading: false }))
  },
}))
