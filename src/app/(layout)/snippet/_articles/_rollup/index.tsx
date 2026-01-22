import { SnippetCatelog } from '../../list'
import external from './external.mdx'
import node from './node.mdx'
import typescript from './typescript.mdx'

export const rollup: SnippetCatelog = {
  name: 'Rollup',
  key: 'rollup',
  icon: require('@/assets/snippet-icons/rollup.svg').default,
  article: [
    { key: 'typescript', title: 'TypeScript 包', component: typescript },
    { key: 'external', title: '外部依赖', component: external },
    { key: 'node', title: 'Node.js 包', component: node },
  ],
}
