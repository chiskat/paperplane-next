import { ReactNode } from 'react'

import GlobalLayout from '@/components/layouts/GlobalLayout'

export default async function RootUILayout({ children }: Readonly<{ children: ReactNode }>) {
  return <GlobalLayout>{children}</GlobalLayout>
}
