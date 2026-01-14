'use client'

import { Modal } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

import AwesomeItemDetail from '@/app/(layout)/awesome/[id]/AwesomeItemDetail'
import GradientTitle from '@/components/labels/GradientTitle'
import { useTRPC } from '@/lib/trpc-client'

export default function AwesomeDetailPage(props: PageProps<'/awesome/[id]'>) {
  const { id } = use(props.params)
  const router = useRouter()
  const trpc = useTRPC()

  const [opened, setOpened] = useState(false)
  const { data: awesome, isPending } = useQuery(trpc.awesome.items.get.queryOptions({ id }))

  useEffect(() => {
    if (!isPending) {
      setTimeout(() => void setOpened(true), 0)
    }
  }, [isPending])

  const closeHandler = () => {
    setOpened(false)
    setTimeout(() => void router.back(), 200)
  }

  if (isPending || !awesome) {
    return null
  }

  return (
    <Modal
      title={<GradientTitle>{awesome.label}</GradientTitle>}
      opened={opened}
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      transitionProps={{ duration: 200 }}
      onClose={closeHandler}
      size="lg"
    >
      {awesome ? <AwesomeItemDetail awesome={awesome} /> : null}
    </Modal>
  )
}
