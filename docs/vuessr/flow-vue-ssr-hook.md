
## flow-vue-ssr-hook

基于`flow-build`，对vue服务端渲染的打包开发插件

### 功能

- 集成`vue-loader`插件
- 集成`vue-server-renderer`的`server-plugin`和`client-plugin`, 生成`server-bundle.json`和`vue-ssr-client-manifest.json`文件
- 自动读取src文件夹下的`app.js`，生成`entry-client.js`和`entry-server.js`两个文件
- 结合`flow-vue-ssr-middleware`中间件，可以往`asyncData`里面注入参数

### 安装

```js
npm install --save-dev @local/flow-vue-ssr-hook
```

### 使用方法

在`flow.config.js`文件中
```js
let VueSSRHook = require("@local/flow-vue-ssr-hook");
module.exports = {
    ....
    hooks: [new VueSSRHook()]; //可以传入参数，例如：new VueSSRHook(options);
}
```


### 参数 options

- entry

是否要使用`flow-vue-ssr-hook`模块提供的entry方案，默认为true。如果要自己提供entry方案，只需如下操作即可：

```js
let VueSSRHook = require("@local/flow-vue-ssr-hook");
module.exports = {
    entry: {
        server: "./src/server.js",
        client: "./src/client.js"
    }
    ....
    hooks: [new VueSSRHook({
        entry: false
    })];
}
```

- serverBundle

webpack插件`vue-server-renderer/server-plugin`生成的json文件，默认为：server-bundle.json

- clientManifest
webpack插件`vue-server-renderer/client-plugin`生成的json文件，默认为：vue-ssr-client-manifest.json