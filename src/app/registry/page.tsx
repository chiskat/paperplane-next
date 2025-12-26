'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import Loading from '@/components/layouts/Loading'

export default function RegistryPage() {
  useEffect(() => void redirect('/registry/docker-mirror'), [])

  return <Loading className="w-full" />
}
