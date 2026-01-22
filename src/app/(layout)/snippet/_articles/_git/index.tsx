import { SnippetCatelog } from '../../list'
import gitattributes from './gitattributes.mdx'
import gitignore from './gitignore.mdx'

export const git: SnippetCatelog = {
  name: 'Git',
  key: 'git',
  icon: require('@/assets/snippet-icons/git.svg').default,
  article: [
    { key: 'gitignore', title: '.gitignore', component: gitignore },
    { key: 'gitattributes', title: '.gitattributes', component: gitattributes },
  ],
}
