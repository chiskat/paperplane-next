import { SnippetCatelog } from '../../list'
import editorconfigMDX from './editorconfig.mdx'

export const editorconfig: SnippetCatelog = {
  name: 'EditorConfig',
  key: 'editorconfig',
  icon: require('@/assets/snippet-icons/editorconfig.svg').default,
  article: [{ key: 'editorconfig', title: '.editorconfig', component: editorconfigMDX }],
}
