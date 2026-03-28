import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import * as z from 'zod'
import { zhCN } from 'zod/locales'

import '@/lib/dayjs'

import ClientProvider from './ClientProvider'
import { fontFZYanSong, fontIosevka, fontSwift } from './fonts'

import '@mantine/dates/styles.css'
import '@/styles/app.css'

import { cn } from '@/lib/style'

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
      className={cn(
        fontFZYanSong.variable,
        fontIosevka.variable,
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
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
