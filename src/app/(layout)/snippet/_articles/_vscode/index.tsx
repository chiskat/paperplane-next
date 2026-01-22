import { SnippetCatelog } from '../../list'
import settings from './settings.mdx'

export const vscode: SnippetCatelog = {
  name: 'VSCode',
  key: 'vscode',
  icon: require('@/assets/snippet-icons/vscode.svg').default,
  article: [{ key: 'settings', title: '用户设置 settings.json', component: settings }],
}
