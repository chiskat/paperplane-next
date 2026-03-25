import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'
import { DockerTag, NodejsTag } from '@/components/tags/TechTag'
import Desc from './Desc.mdx'
import { OpenDetailTable } from '../OpenDetailTable'

const name = 'chiskat/baseline-node'
const repo = 'chiskat/baseline-node'
const shieldName = name + '20'

export default function PaperPlaneApiBasePage() {
  return (
    <Stack gap={12}>
      <GradientTitle>{name}</GradientTitle>
      <Divider />
      <OpenDetailTable
        type="docker"
        name={name}
        repo={repo}
        tech={[NodejsTag, DockerTag]}
        overrideNameInLink={shieldName}
      />
      <Divider />
      <Desc />
    </Stack>
  )
}
