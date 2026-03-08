# EdgeOne App Template

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 KV 存储

在 EdgeOne 控制台创建 KV 存储并绑定到项目：

1. 登录 EdgeOne 控制台
2. 进入 KV Storage 创建命名空间
3. 使用 `edgeone pages link` 命令关联项目

### 4. 本地开发

```bash
edgeone pages link
edgeone pages dev
```

### 5. 部署

```bash
# 预览环境
edgeone pages deploy -e preview

# 生产环境
edgeone pages deploy
```

## 项目结构

```
src/
├── functions/          # 后端函数
│   ├── login/         # 登录验证
│   └── init/          # 初始化默认用户
├── pages/             # 前端页面
├── App.vue            # 登录页面组件
└── main.ts            # 入口文件
```
