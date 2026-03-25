import 'server-only'

import { awesome } from './trpc/_awesome'
import { short } from './trpc/_short'
import { user } from './trpc/_user'
import { router } from '../../lib/trpc'

export type AppRouter = typeof appRouter

export const appRouter = router({
  user,
  awesome,
  short,
})
