import { SnippetCatelog } from '../../list'
import git from './git.mdx'
import macos from './macos.mdx'
import npm from './npm.mdx'
import windows from './windows.mdx'

export const command: SnippetCatelog = {
  name: '常用命令行',
  key: 'command',
  icon: require('@/assets/snippet-icons/terminal.svg').default,
  article: [
    { key: 'npm', title: '配置 npm/yarn/pnpm', component: npm },
    { key: 'git', title: 'Git 相关', component: git },
    { key: 'macos', title: 'macOS 常用命令', component: macos },
    { key: 'windows', title: 'Windows 常用命令', component: windows },
  ],
}
