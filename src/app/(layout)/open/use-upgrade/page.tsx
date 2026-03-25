import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'
import { ReactTag, ViteTag, VueTag, WebpackTag } from '@/components/tags/TechTag'
import Desc from './Desc.mdx'
import { OpenDetailTable } from '../OpenDetailTable'

const name = 'use-upgrade'
const repo = 'chiskat/use-upgrade'

export default function UseUpgradePage() {
  return (
    <Stack gap={12}>
      <GradientTitle>{name}</GradientTitle>
      <Divider />
      <OpenDetailTable
        type="npm"
        name={name}
        repo={repo}
        homepage="https://use-upgrade.paperplane.cc"
        tech={[ReactTag, VueTag, ViteTag, WebpackTag]}
      />
      <Divider />
      <Desc />
    </Stack>
  )
}
