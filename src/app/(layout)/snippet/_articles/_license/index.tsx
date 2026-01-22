import { SnippetCatelog } from '../../list'
import intro from './intro.mdx'
import mit from './mit.mdx'

export const license: SnippetCatelog = {
  name: 'LICENSE 许可',
  key: 'license',
  icon: require('@/assets/snippet-icons/license.svg').default,
  article: [
    { key: 'intro', title: '什么是开源许可', component: intro },
    { key: 'mit', title: 'MIT 许可', component: mit },
  ],
}
