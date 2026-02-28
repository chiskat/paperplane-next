# AGENTS.md

> `paperplane-next` 项目的开发指南 - 为 AI 编程助手提供项目上下文和开发规范。

# 项目概述

这是一个基于 Next.js 的个人博客全栈网站，介绍作者的网站导航、个人项目、开源项目、Awesome 项目、代码范例等，同时还提供一些在线工具。

# 前端技术栈

- UI 组件： 全站使用 Mantine UI，这包含 `@mantine/*` 相关的依赖包；使用 `@dnd-kit/*` 处理拖拽放置；使用 `@tabler/icons-react` 作为图标库
- CSS 样式： 使用 `tailwindcss` 和 `tailwind-merge`
- 数据请求： 使用 tRPC 和 `@tanstack/react-query`，支持 Hydration
- 数据管理： 全局状态使用 `zustand`；发布与订阅使用 `mitt`；表单校验使用 `zod`
- Markdown： 使用 Next.js 的 `@next/mdx` 解决 Markdown 渲染，其中代码高亮使用 `remark-prism`
- 动效： 使用 `motion` 设计组件过渡动效

# 后端技术栈

- 数据库： 通过 `prisma` 管理数据库 ORM；通过 `ioredis` 连接到 Redis
- 业务处理： 使用 tRPC 来运行业务逻辑
- 权限管理： 使用 `better-auth` 管理权限，使用 Cookie 认证，目前已接入 OAuth 登录
- S3 存储： 使用 `@aws-sdk/*` 处理，有内部和外部两套存储
- 杂项： 部分对外的端点使用 `trpc-to-openapi` 兼容 OpenAPI，对外端点使用 `better-auth` 的 APIKey 插件

# 开发命令

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建项目
pnpm build:prod       # 生产环境构建（使用 production 环境变量）
pnpm start            # 启动生产服务器（Next.js 默认）
pnpm start:prod       # 启动生产服务器（standalone 模式）
pnpm lint             # 使用 ESLint 检查代码
pnpm format           # 使用 Prettier 检查代码
pnpm check-types      # 使用 tsc 检查代码
pnpm theme            # 根据 Mantine 主题配置生成 theme.css
pnpm db:generate      # 生成 Prisma Client（别名 db:gen）
pnpm db:migrate       # 执行数据库迁移（别名 db:mi）
pnpm db:push          # 将 Schema 推送到数据库（不生成迁移文件）
pnpm db:deploy        # 在生产环境部署迁移
pnpm db:reset         # 重置数据库
pnpm db:studio        # 打开 Prisma Studio
pnpm auth:generate    # 生成 better-auth 相关代码（别名 auth:gen）
```

# 目录结构

```
├── prisma/                        # Prisma 数据库
│   ├── models/                    # 分模块的 Prisma Schema
│   ├── migrations/                # 数据库迁移文件
│   └── schema.prisma              # Prisma 主配置
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (layout)/              # 带公共布局的页面路由组
│   │   │   ├── @modal/            # 并行路由（拦截式模态框）
│   │   │   ├── a/                 # 导航页
│   │   │   ├── awesome/           # Awesome 列表
│   │   │   ├── demos/             # 项目 Demo 展示
│   │   │   ├── open/              # 开源项目展示
│   │   │   ├── registry/          # 个人制品库展示页
│   │   │   ├── short/             # 短链服务
│   │   │   └── snippet/           # 代码样板
│   │   ├── (redirect)/            # 无布局的重定向路由组
│   │   │   └── s/                 # 短链重定向
│   │   ├── api/                   # API 路由
│   │   │   ├── auth/              # better-auth 认证端点
│   │   │   ├── trpc/              # tRPC 端点
│   │   │   ├── [...openapi]/      # OpenAPI 兼容端点
│   │   │   ├── openapi.json/      # OpenAPI Schema
│   │   │   └── appRouter.ts       # tRPC 路由汇总
│   │   ├── ClientProvider.tsx     # 客户端 Provider 汇总（tRPC、QueryClient 等）
│   │   ├── layout.tsx             # 根布局
│   │   ├── page.tsx               # 首页
│   │   ├── theme.ts               # Mantine 主题配置
│   │   └── fonts.ts               # Next.js 字体配置
│   ├── components/                # 通用组件
│   ├── lib/                       # 核心库与初始化
│   │   ├── auth.ts                # better-auth 服务端配置
│   │   ├── auth-client.ts         # better-auth 客户端配置
│   │   ├── prisma.ts              # Prisma 客户端实例
│   │   ├── redis.ts               # Redis 连接
│   │   ├── trpc.ts                # tRPC 初始化与 Context
│   │   ├── trpc-server.ts         # tRPC 服务端调用
│   │   ├── trpc-client.ts         # tRPC 客户端调用
│   │   ├── query-client.ts        # @tanstack/react-query 客户端
│   │   ├── dayjs.ts               # dayjs 统一初始化
│   │   ├── s3-internal.ts         # S3 内部存储
│   │   ├── s3-public.ts           # S3 公开存储
│   │   ├── structural-sharing.ts  # 在 @tanstack/react-query 和 tRPC 集成时处理 Date 字段
│   │   └── form-data-transformer.ts # 处理 tRPC 传输 FormData
│   ├── prisma/                    # 由 Prisma 生成，不应自行修改
│   ├── zod/                       # Zod 校验 Schema（前后端共用）
│   ├── types/                     # TypeScript 类型声明
│   ├── styles/                    # 全局样式
│   │   ├── app.css                # 应用主样式
│   │   ├── theme.css              # 主题变量，由工具生成，不应自行修改
│   │   └── mdx.css                # Markdown 样式
│   ├── assets/                    # 静态资源（图标等）
│   ├── fonts/                     # 自定义字体文件
│   └── mdx-components.tsx         # MDX 组件映射
└── misc/                          # 杂项脚本
```
