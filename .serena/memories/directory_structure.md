# 目录结构

```
prisma/
  models/           # 分模块的 Prisma Schema
  migrations/       # 数据库迁移文件
  schema.prisma     # Prisma 主配置

src/
  app/              # Next.js App Router
    (layout)/       # 带公共布局的页面路由组
      @modal/       # 并行路由（拦截式模态框）
      a/            # 导航页
      awesome/      # Awesome 列表
      demos/        # 项目 Demo 展示
      open/         # 开源项目展示
      registry/     # 个人制品库展示页
      short/        # 短链服务
      snippet/      # 代码样板
    (redirect)/     # 无布局的重定向路由组
      s/            # 短链重定向
    api/            # API 路由
      auth/         # better-auth 认证端点
      trpc/         # tRPC 端点
      [...openapi]/ # OpenAPI 兼容端点
      openapi.json/ # OpenAPI Schema
      appRouter.ts  # tRPC 路由汇总
    ClientProvider.tsx  # 客户端 Provider 汇总
    layout.tsx          # 根布局
    page.tsx            # 首页
    theme.ts            # Mantine 主题配置
    fonts.ts            # Next.js 字体配置
  components/       # 通用组件
  lib/              # 核心库与初始化
    auth.ts         # better-auth 服务端配置
    auth-client.ts  # better-auth 客户端配置
    prisma.ts       # Prisma 客户端实例
    redis.ts        # Redis 连接
    trpc.ts         # tRPC 初始化与 Context
    trpc-server.ts  # tRPC 服务端调用
    trpc-client.ts  # tRPC 客户端调用
    query-client.ts # @tanstack/react-query 客户端
    dayjs.ts        # dayjs 统一初始化
    s3-internal.ts  # S3 内部存储
    s3-public.ts    # S3 公开存储
  prisma/           # Prisma 生成，不应修改
  zod/              # Zod 校验 Schema（前后端共用）
  types/            # TypeScript 类型声明
  styles/
    app.css         # 应用主样式
    theme.css       # 主题变量（工具生成，不应修改）
    mdx.css         # Markdown 样式
  assets/           # 静态资源（图标等）
  fonts/            # 自定义字体文件
  mdx-components.tsx # MDX 组件映射

misc/               # 杂项脚本
```
