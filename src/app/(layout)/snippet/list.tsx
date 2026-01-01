import { FC } from 'react'

import { babel } from './babel'
import { command } from './command'
import { cra } from './cra'
import { editorconfig } from './editorconfig'
import { eslint } from './eslint'
import { git } from './git'
import { license } from './license'
import { monorepo } from './monorepo'
import { next_js } from './next_js'
import { npm } from './npm'
import { package_json } from './package_json'
import { prettier } from './prettier'
import { rollup } from './rollup'
import { typescript } from './typescript'
import { vite } from './vite'
import { vscode } from './vscode'
import { webpack } from './webpack'

import { postcss } from './postcss'
import { tailwindcss } from './tailwindcss'

export const catelogs: SnippetCatelog[] = [
  {
    name: '常用命令行',
    key: 'command',
    icon: require('@/assets/snippet-icons/terminal.svg').default,
    article: command,
  },
  {
    name: 'VSCode',
    key: 'vscode',
    icon: require('@/assets/snippet-icons/vscode.svg').default,
    article: vscode,
  },
  {
    name: 'LICENSE 开源许可',
    key: 'license',
    icon: require('@/assets/snippet-icons/license.svg').default,
    article: license,
  },
  {
    name: 'EditorConfig',
    key: 'editorconfig',
    icon: require('@/assets/snippet-icons/editorconfig.svg').default,
    article: editorconfig,
  },
  {
    name: 'Git',
    key: 'git',
    icon: require('@/assets/snippet-icons/git.svg').default,
    article: git,
  },
  {
    name: 'package.json',
    key: 'package_json',
    icon: require('@/assets/snippet-icons/nodejs.svg').default,
    article: package_json,
  },
  {
    name: 'npm',
    key: 'npm',
    icon: require('@/assets/snippet-icons/npm.svg').default,
    article: npm,
  },
  {
    name: 'TypeScript',
    key: 'typescript',
    icon: require('@/assets/snippet-icons/typescript.svg').default,
    article: typescript,
  },
  {
    name: 'Prettier',
    key: 'prettier',
    icon: require('@/assets/snippet-icons/prettier.svg').default,
    article: prettier,
  },
  {
    name: 'ESLint',
    key: 'eslint',
    icon: require('@/assets/snippet-icons/eslint.svg').default,
    article: eslint,
  },
  {
    name: 'Babel',
    key: 'babel',
    icon: require('@/assets/snippet-icons/babel.svg').default,
    article: babel,
  },
  {
    name: 'Next.js',
    key: 'next_js',
    icon: require('@/assets/snippet-icons/nextjs.svg').default,
    article: next_js,
  },
  {
    name: 'Vite',
    key: 'vite',
    icon: require('@/assets/snippet-icons/vite.svg').default,
    article: vite,
  },
  {
    name: 'Rollup',
    key: 'rollup',
    icon: require('@/assets/snippet-icons/rollup.svg').default,
    article: rollup,
  },
  {
    name: 'Webpack',
    key: 'webpack',
    icon: require('@/assets/snippet-icons/webpack.svg').default,
    article: webpack,
  },
  {
    name: 'Create React App',
    key: 'cra',
    icon: require('@/assets/snippet-icons/cra.svg').default,
    article: cra,
  },
  {
    name: 'TailwindCSS',
    key: 'tailwindcss',
    icon: require('@/assets/snippet-icons/tailwindcss.svg').default,
    article: tailwindcss,
  },
  {
    name: 'PostCSS',
    key: 'postcss',
    icon: require('@/assets/snippet-icons/postcss.svg').default,
    article: postcss,
  },
  {
    name: 'Monorepo',
    key: 'monorepo',
    icon: require('@/assets/snippet-icons/monorepo.svg').default,
    article: monorepo,
  },
]

export interface SnippetCatelog {
  name: string
  key: string
  icon?: string
  desc?: string
  article?: SnippetArticleCatelog[]
}

export interface SnippetArticleCatelog {
  key: string
  title: string
  desc?: string
  component: FC
}
