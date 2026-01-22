import { SnippetCatelog } from '../../list'
import project from './project.mdx'
import publish from './publish.mdx'

export const package_json: SnippetCatelog = {
  name: 'package.json',
  key: 'package_json',
  icon: require('@/assets/snippet-icons/nodejs.svg').default,
  article: [
    { key: 'project', title: '通常项目', component: project },
    { key: 'publish', title: '发布 npm 包', component: publish },
  ],
}
