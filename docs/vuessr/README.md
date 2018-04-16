## 快速开始

### 安装

```js
npm install --save-dev @local/flow-vue-ssr-hook @local/flow-vue-ssr-middleware
```

### flow.config.js配置文件

```js
let VueSSRHook = require("@local/flow-vue-ssr-hook");
module.exports = {
    ....
    hooks: [new VueSSRHook()]; //可以传入参数，例如：new VueSSRHook(options);
}
```
可以往`flow-vue-ssr-hook`中传入参数，具体请查看[配置文档](./flow-vue-ssr-hook.md)


### server.js文件

```js
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const vueSSRMiddleware = require("@local/flow-vue-ssr-middleware");
const resolve = file => path.resolve(__dirname, file)



const isProd = process.env.NODE_ENV === 'production'

const app = express()


const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(favicon('./public/logo-48.png'))

// static
app.use('/static', serve('./dist/static', true))

let instance = vueSSRMiddleware({
  template: resolve('./src/index.template.html'),
  context: {
    title: 'Vue 2.0', // default title
  }
});

app.use(instance);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
  instance.openBrowser && instance.openBrowser("localhost", port);
})
```

### src/app.js

```js
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'


export default {

  el: "#app",

  data(client) { //client：是否是前端
    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const app = new Vue({
      router,
      store,
      render: h => h(App)
    })

    return { app, router, store }
  },

  methods: {
    asyncDataBefore() {

    },

    asyncDataComplete() {

    }
  }
}
```