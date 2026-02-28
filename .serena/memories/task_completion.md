# 任务完成检查清单

完成代码修改后，按顺序执行以下检查：

1. **类型检查**：`pnpm check-types` - 确保无 TypeScript 错误
2. **Lint 检查**：`pnpm lint` - 确保无 ESLint 问题
3. **格式检查**：`pnpm format` - 确保代码格式正确

## 特定场景

### 修改数据库 Schema
- 执行 `pnpm db:migrate` 生成迁移文件
- 执行 `pnpm db:generate` 重新生成 Prisma Client

### 修改 better-auth 配置
- 执行 `pnpm auth:generate` 重新生成相关代码

### 修改 Mantine 主题
- 执行 `pnpm theme` 重新生成 `src/styles/theme.css`

## 注意事项
- 不要手动修改 `src/prisma/`（Prisma 自动生成）
- 不要手动修改 `src/styles/theme.css`（工具生成）
- Commit 信息需遵循 Conventional Commits 规范
