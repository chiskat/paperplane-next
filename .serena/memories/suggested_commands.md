# 常用开发命令

## 开发与构建
```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建项目
pnpm build:prod       # 生产环境构建（使用 production 环境变量）
pnpm start            # 启动生产服务器（Next.js 默认）
pnpm start:prod       # 启动生产服务器（standalone 模式）
```

## 代码质量
```bash
pnpm lint             # ESLint 检查
pnpm format           # Prettier 检查（列出不符合格式的文件）
pnpm check-types      # TypeScript 类型检查
```

## 数据库
```bash
pnpm db:generate      # 生成 Prisma Client（别名 db:gen）
pnpm db:migrate       # 执行数据库迁移（别名 db:mi）
pnpm db:push          # 将 Schema 推送到数据库（不生成迁移文件）
pnpm db:deploy        # 生产环境部署迁移
pnpm db:reset         # 重置数据库
pnpm db:studio        # 打开 Prisma Studio
```

## 其他
```bash
pnpm theme            # 根据 Mantine 主题配置生成 theme.css
pnpm auth:generate    # 生成 better-auth 相关代码（别名 auth:gen）
```

## 任务完成后应运行
1. `pnpm lint` - 检查 ESLint 问题
2. `pnpm format` - 检查代码格式
3. `pnpm check-types` - 确保没有 TypeScript 错误
