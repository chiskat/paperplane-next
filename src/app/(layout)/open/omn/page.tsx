import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'

import { OpenDetailTable } from '../OpenDetailTable'
import Desc from './Desc.mdx'

const name = 'omn'
const repo = 'chiskat/omn'

export default function OmnPage() {
  return (
    <Stack gap={12}>
      <GradientTitle>{name}</GradientTitle>
      <Divider />
      <OpenDetailTable type="npm" name={name} repo={repo} />
      <Divider />
      <Desc />
    </Stack>
  )
}
