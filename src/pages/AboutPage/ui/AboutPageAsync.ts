import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => {
  return await import('./AboutPage')
})
