import { create } from 'zustand'
import { Token } from '../types'

interface UseTokensStore {
  tokens: Token[]
  setTokens: (tokens: Token[]) => void
  removeToken: (id: number) => void
}

export const useTokensStore = create<UseTokensStore>((set) => ({
  tokens: [],
  setTokens: (tokens) => set(() => ({ tokens })),
  removeToken: (id) =>
    set((state) => ({
      tokens: state.tokens.filter((token) => token.id !== id),
    })),
}))
