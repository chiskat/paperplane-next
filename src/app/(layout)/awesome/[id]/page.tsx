'use client'

import { Button, Group, Stack } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { use } from 'react'

import GradientTitle from '@/components/labels/GradientTitle'
import Loading from '@/components/layouts/Loading'
import { useTRPC } from '@/lib/trpc-client'

import AwesomeItemDetail from './AwesomeItemDetail'

export default function AwesomeDetailPage(props: PageProps<'/awesome/[id]'>) {
  const { id } = use(props.params)
  const trpc = useTRPC()

  const { data: awesome, isPending } = useQuery(trpc.awesome.items.get.queryOptions({ id }))

  return (
    <Stack>
      <Group>
        <Link href="/awesome">
          <Button leftSection={<IconChevronLeft className="raw" size={14} />} variant="light">
            返回 Awesome 页面
          </Button>
        </Link>
      </Group>

      {!isPending && awesome ? <GradientTitle>{awesome.label}</GradientTitle> : null}

      {!isPending && awesome ? <AwesomeItemDetail awesome={awesome} /> : <Loading />}
    </Stack>
  )
}
