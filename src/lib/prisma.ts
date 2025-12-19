import 'server-only'

import { PrismaClient } from '@prisma/client'

export const prisma =
  (globalThis.prisma as PrismaClient) ||
  (process.env.CI ? (null as unknown as PrismaClient) : new PrismaClient())

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
