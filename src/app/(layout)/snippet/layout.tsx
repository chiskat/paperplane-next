import { Grid, GridCol } from '@mantine/core'

import SnippetCatelogList from './SnippetCatelogList'

export default function SnippetLayout(props: LayoutProps<'/snippet'>) {
  return (
    <Grid gutter={48}>
      <GridCol span={3}>
        <SnippetCatelogList />
      </GridCol>

      <GridCol span={9}>{props.children}</GridCol>
    </Grid>
  )
}
