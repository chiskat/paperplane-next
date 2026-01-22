import { SnippetCatelog } from '../../list'
import npmrc from './npmrc.mdx'

export const npm: SnippetCatelog = {
  name: 'npm',
  key: 'npm',
  icon: require('@/assets/snippet-icons/npm.svg').default,
  article: [{ key: 'npmrc', title: '.npmrc', component: npmrc }],
}
