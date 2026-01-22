import { SnippetCatelog } from '../../list'
import cdn from './cdn.mdx'
import css from './css.mdx'
import env from './env.mdx'
import react from './react.mdx'

export const vite: SnippetCatelog = {
  name: 'Vite',
  key: 'vite',
  icon: require('@/assets/snippet-icons/vite.svg').default,
  article: [
    { key: 'react', title: 'React', component: react },
    { key: 'cdn', title: '静态资源 CDN', component: cdn },
    { key: 'css', title: 'CSS 预处理器', component: css },
    { key: 'env', title: '环境变量', component: env },
  ],
}
