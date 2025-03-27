export const getRefreshToken = () => localStorage.getItem('refresh')

export const setRefreshToken = (token: string) =>
  localStorage.setItem('refresh', token)

export const clearRefreshToken = () => localStorage.removeItem('refresh')
