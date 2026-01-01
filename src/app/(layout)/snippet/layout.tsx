import { Grid, GridCol, Stack } from '@mantine/core'
import { ReactNode } from 'react'

import { SnippetCatelog } from './SnippetCatelog'
import { catelogs } from './list'

export default function SnippetLayout(props: { children: ReactNode }) {
  return (
    <Grid gutter={48}>
      <GridCol pos="relative" span={3}>
        <Stack pos="sticky" top={130 + 16} left={0} gap={2}>
          {catelogs.map(item => (
            <SnippetCatelog
              name={item.name}
              href={`/${item.key}`}
              icon={item.icon}
              key={item.key}
            />
          ))}
        </Stack>
      </GridCol>

      <GridCol span={9}>{props.children}</GridCol>
    </Grid>
  )
}
