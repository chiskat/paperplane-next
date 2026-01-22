import { SnippetCatelog } from '../../list'
import config from './config.mdx'

export const postcss: SnippetCatelog = {
  name: 'PostCSS',
  key: 'postcss',
  icon: require('@/assets/snippet-icons/postcss.svg').default,
  article: [{ key: 'config', title: 'postcss.config.js', component: config }],
}
