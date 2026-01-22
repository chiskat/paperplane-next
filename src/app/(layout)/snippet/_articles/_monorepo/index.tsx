import { SnippetCatelog } from '../../list'
import config from './config.mdx'

export const monorepo: SnippetCatelog = {
  name: 'Monorepo',
  key: 'monorepo',
  icon: require('@/assets/snippet-icons/monorepo.svg').default,
  article: [{ key: 'config', title: '配置', component: config }],
}
