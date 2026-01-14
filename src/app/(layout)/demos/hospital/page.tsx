import { Divider, Stack } from '@mantine/core'

import GradientTitle from '@/components/labels/GradientTitle'
import { MongoDBTag, MuiTag, ReactTag, RestifyTag } from '@/components/tags/TechTag'

import { DemosDetailTable } from '../details'
import Desc from './Desc.mdx'

export default function HospitalPage() {
  return (
    <Stack gap={12}>
      <GradientTitle>核酸登记 Demo</GradientTitle>
      <Divider />
      <DemosDetailTable
        href="https://hospital.paperplane.cc"
        hrefHighlight="hospital."
        repo="chiskat/hospital-app"
        backendRepo="chiskat/hospital-api"
        tech={[ReactTag, MuiTag, RestifyTag, MongoDBTag]}
      />
      <Divider />
      <Desc />
    </Stack>
  )
}
