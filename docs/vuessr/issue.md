# 优化方案

## asyncData函数

在vue同构中有统一的标准，就是用`asyncData`函数去请求API，但是`asyncData`中接收固定的参数：store，router，这样在服务端请求API时，不能随意往`asyncData`中传入参数，比如：`cookie`等。

由`flow-vue-ssr-hook`和`flow-vue-ssr-middleware`提供优化方案，可以向`asyncData`函数中传递`context`参数，该参数会默认包含一个`express`的`req`对象，用法如下：

server.js

```js
const vueSSRMiddleware = require("@local/flow-vue-ssr-middleware");

...

let instance = vueSSRMiddleware({
  template: resolve('./src/index.template.html'),
  context: {
    title: 'Vue 2.0', // default title
  }
});
```

flow.config.js

```js
let VueSSRHook = require("@local/flow-vue-ssr-hook");
module.exports = {
    ....
    hooks: [new VueSSRHook()]; //可以传入参数，例如：new VueSSRHook(options);
}
```

home.vue

```js
asyncData(store, router, context) {
    console.log(context.title) // 输出：Vue 2.0
}
```

## app.js书写规范

app.js文件设计成vue的js书写模式，对开发者更加友好，方便快速入门


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
    asyncDataBefore() { //asyncData加载前

    },

    asyncDataComplete() { //asyncData加载后

    }
  }
}
```