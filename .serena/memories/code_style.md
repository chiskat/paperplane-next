# 代码风格与规范

## Prettier 配置
- `printWidth`: 100
- `singleQuote`: true（使用单引号）
- `semi`: false（不使用分号）
- `trailingComma`: "es5"（ES5 尾随逗号）
- `tabWidth`: 2
- `arrowParens`: "avoid"（单参数箭头函数不加括号）
- `endOfLine`: "lf"

## Import 排序（由 @trivago/prettier-plugin-sort-imports 管理）
1. `server-only` / `client-only`
2. 外部库（`@?[a-zA-Z]+...`）
3. 内部路径（`@/...`，非 CSS）
4. 相对路径（非 CSS）
5. 无扩展名的相对路径
6. CSS 文件

## 语言规范
- 所有注释和交流使用中文
- 只写必要的注释，逻辑简单直观时无需注释
- TypeScript 严格模式

## Commit 规范
- 遵循 Conventional Commits（由 commitlint 强制）
- 示例：`feat(open): 新增功能`，`fix(auth): 修复登录问题`

## Lint-staged 配置
- 提交前自动运行 ESLint 和 Prettier 检查（`.lintstagedrc`）

## 代码约定
- 使用 Mantine UI 组件，尽量不自定义 CSS
- tRPC + React Query 处理所有数据请求
- Zod 用于前后端共用的数据校验（`src/zod/`）
- 不修改 `src/prisma/`（Prisma 自动生成）和 `src/styles/theme.css`（工具生成）
