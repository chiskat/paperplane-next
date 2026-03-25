import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'
import { VueTag } from '@/components/tags/TechTag'
import Desc from './Desc.mdx'
import { DemosDetailTable } from '../DemosDetailTable'

export default function KinyPage() {
  return (
    <Stack gap={12}>
      <GradientTitle>凯尼科技</GradientTitle>
      <Divider />
      <DemosDetailTable
        href="https://kiny.paperplane.cc"
        hrefHighlight="kiny."
        repo="chiskat/kiny-tech"
        tech={[VueTag]}
      />
      <Divider />
      <Desc />
    </Stack>
  )
}
