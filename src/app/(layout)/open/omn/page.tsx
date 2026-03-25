import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'
import Desc from './Desc.mdx'
import { OpenDetailTable } from '../OpenDetailTable'

const name = 'omn'
const repo = 'chiskat/omn'

export default function OmnPage() {
  return (
    <Stack gap={12}>
      <GradientTitle>{name}</GradientTitle>
      <Divider />
      <OpenDetailTable type="npm" name={name} repo={repo} homepage="https://omn.paperplane.cc" />
      <Divider />
      <Desc />
    </Stack>
  )
}
