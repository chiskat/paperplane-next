import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import * as z from 'zod'
import { zhCN } from 'zod/locales'

import appTheme from '@/app/theme'

import { QueryProvider } from './QueryProvider'
import { fontFZYanSong, fontSourceCodePro, fontSwift } from './fonts'

import '@/styles/app.css'

z.config(zhCN())

export const metadata: Metadata = {
  title: 'PaperPlane 🌠',
  description: '',
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      {...mantineHtmlProps}
      className={clsx(
        fontFZYanSong.variable,
        fontSourceCodePro.variable,
        fontSwift.variable,
        'antialiased'
      )}
    >
      <head>
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <ColorSchemeScript />
      </head>

      <body style={{ marginRight: '0 !important' }}>
        <QueryProvider>
          <MantineProvider theme={appTheme}>
            <ModalsProvider>{children}</ModalsProvider>
            <Notifications />
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
