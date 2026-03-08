# Tencent EdgeOne App Template

## 功能介绍

 - 这是一个针对 Tencent EdgeOne 平台的 App 开发的模版项目
 - 用于帮助非研发人员或者新手更加方便地通过 AI 开发 Tencent EdgeOne Pages 项目
 - 项目前端包含一个登录页面，用户输入用户名和密码
 - 项目后端使用 EdgeOne Functions 实现，用于验证登录
 - 项目数据存放在 EdgeOne KV 存储中

## 项目结构

 - @docs/ 目录下存放所有的文档和开发指引
 - @scripts/ 目录下存放常用的脚本工具
 - edge-functions/ - EdgeOne Functions 后端代码
 - src/ 目录存放源代码

## 项目管理

 - 必须通过 edgeone cli 来管理项目，包括创建，本地开发，部署 等
 - 项目要分为 preview 环境 和 prod 正式环境
 - 常用命令：
   - `edgeone login` - 登录
   - `edgeone pages link` - 连接远端项目
   - `edgeone pages dev` - 本地开发启动
   - `edgeone pages deploy -e preview` - 部署到 preview 环境
   - `edgeone pages deploy` - 部署到 prod 环境

## 开发要求

 - 项目使用 Git 进行版本管理
 - 所有的模块要添加必要的日志
 - 前端代码使用 TypeScript
 - 函数代码遵循 EdgeOne Functions 开发规范
 - KV 存储操作需包含错误处理和重试机制
 - 敏感信息禁止提交到代码仓库

## 参考文档

 - 必要时请加载并仔细阅读相关文档
 - Edge Functions 概述: https://cloud.tencent.com/document/product/1552/127416
 - KV 存储: https://cloud.tencent.com/document/product/1552/127420
 - EdgeOne CLI: https://cloud.tencent.com/document/product/1552/127423
 - Vue3 文档: https://vuejs.org/
 - Vite 文档: https://vitejs.dev/
