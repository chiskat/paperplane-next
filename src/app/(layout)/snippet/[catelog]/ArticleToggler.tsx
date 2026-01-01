'use client'

import { SegmentedControl, SegmentedControlProps } from '@mantine/core'
import { usePathname, useRouter } from 'next/navigation'

export function ArticleToggler(props: SegmentedControlProps & { catelog: string }) {
  const { catelog, onChange, ...restProps } = props

  const router = useRouter()
  const pathname = usePathname()

  const current = pathname.match(new RegExp(`^/snippet/${catelog}/([^/]+)/?`))?.[1]

  const changeHandler = (key: string) => {
    router.replace(key)
    onChange?.(key)
  }

  return <SegmentedControl {...restProps} value={current} onChange={changeHandler} />
}
