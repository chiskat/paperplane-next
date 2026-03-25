'use client'

import { AppProgressProvider } from '@bprogress/next'
import { AuthQueryProvider } from '@daveyplate/better-auth-tanstack'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient } from '@trpc/client'
import { PropsWithChildren, useState } from 'react'

import '@/lib/dayjs'

import appTheme from '@/app/theme'
import { getQueryClient } from '@/lib/query-client'
import { replaceEqualDeep } from '@/lib/structural-sharing'
import type { AppRouter } from './api/appRouter'
import { trpcClientConfig, TRPCProvider } from '../lib/trpc-client'

export default function QueryProvider(props: PropsWithChildren) {
  const [queryClient] = useState(() => getQueryClient())
  const [trpcClient] = useState(() => createTRPCClient<AppRouter>(trpcClientConfig))

  return (
    <MantineProvider theme={appTheme}>
      <ModalsProvider>
        <AppProgressProvider>
          <QueryClientProvider client={queryClient}>
            <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
              <AuthQueryProvider queryOptions={{ structuralSharing: replaceEqualDeep }}>
                <DatesProvider settings={{ locale: 'zh-cn' }}>{props.children}</DatesProvider>
              </AuthQueryProvider>
            </TRPCProvider>
          </QueryClientProvider>
        </AppProgressProvider>
      </ModalsProvider>
      <Notifications />
    </MantineProvider>
  )
}
