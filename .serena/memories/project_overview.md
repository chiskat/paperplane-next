# 项目概述：paperplane-next

## 简介
基于 Next.js 的个人博客全栈网站，包含网站导航、个人项目、开源项目、Awesome 项目、代码范例展示，以及在线工具功能。

## 前端技术栈
- **UI 组件**：Mantine UI (`@mantine/*`)，图标库 `@tabler/icons-react`，拖拽 `@dnd-kit/*`
- **CSS**：TailwindCSS + `tailwind-merge`
- **数据请求**：tRPC + `@tanstack/react-query`（支持 Hydration）
- **状态管理**：`zustand`（全局状态），`mitt`（发布订阅），`zod`（表单校验）
- **Markdown**：`@next/mdx`，代码高亮使用 `remark-prism`
- **动效**：`motion`

## 后端技术栈
- **数据库**：Prisma ORM + PostgreSQL，Redis via `ioredis`
- **业务逻辑**：tRPC
- **权限管理**：`better-auth`，Cookie 认证，已接入 OAuth 登录
- **S3 存储**：`@aws-sdk/*`，内部和外部两套存储
- **OpenAPI**：`trpc-to-openapi`，`better-auth` APIKey 插件

## 主要依赖版本
- Next.js: ^16.1.1
- React: ^19.2.3
- TypeScript: ^5.9.2
- Prisma: ^7.2.0
- Mantine: ^8.3.10
- tRPC: ^11.8.1
- better-auth: ^1.4.10
- zod: ^4.1.8
