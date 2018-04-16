
## vue 解决方案

`flow-vue-hook`是基于`flow-build`创建的`hook`插件，目的在于解决`vue`前端开发的需求。`flow-vue-hook`整合了`vue-loader`及其相关的配置，提供了默认的配置。

::: tip 提示
`flow-vue-hook`并非唯一vue的解决方法。

开发者可以根据自己的需求，重写个hook插件也可，具体创建`hook`的方法请查看[hook配置](../config/hooks.md)。
:::

## 安装

```js
npm install --save-dev @local/flow-vue-hook
```


### flow.config.js配置文件

``` js
let VueHook = require("@local/flow-vue-hook");
module.exports = {
    ....
    hooks: [new VueHook()];
}
```

## alias

`flow-vue-hook`默认会在webpack中设置别名

```js
base.setAlias({
    "@": path.resolve(builder.options.srcDir), //源码目录
    "vue$": "vue/dist/vue.esm.js"
});
```