# 企业定制首页 Weex

### Build Setup

```bash
# install dependencies
npm install

# 启动 vue web dev 环境，自启服务器 at localhost:8080
npm run dev:web

# build vue web release 环境
npm run build:web

# 启动 一个临时服务器，用于访问 weex bundle 资源
python -m SimpleHTTPServer 8089

# 启动 weex dev 环境
npm run dev:weex

# 启动 weex release 环境
npm run build:weex

# 编译可发布的Weex和Vue项目资源
npm run build
```
