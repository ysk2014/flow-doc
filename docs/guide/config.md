## 配置

### 配置文件

首先，要保证你的项目中的根目录下，有`flow.config.js`文件，没有则创建一个。

配置大纲如下：

::: danger 注意：
不要被这么多配置吓到，因为`flow-build`的宗旨就是创建`webapck`零配置服务，所以这些配置都有默认选项，详情请查阅[配置](../config/)，以获取完整的配置列表。
::: 

```js
module.exports = {
    // 入口文件, 继承webpack的entry特性，在ssr模式下有所变化，详情请看服务端渲染章节
    entry: {
        "app": './src/js/index.js'
    },

    srcDir: "./src"，   //项目源码目录

    // 开发环境配置项
    dev: {},

    //打包环境配置
    build: {},

    //image的基础配置
    image: {},

    // css的基础配置
    css: {},

    //js的基础配置
    js: {},

    //html的基础配置
    html: {},

    //font的基础配置
    font: {},

    //白名单
    white: {},

    //项目应用类型，vue/ssr/multiple/spa
    mode: "spa",

    //项目环境，dev/test/prod
    env: "dev",

    // webpack的alias
    alias: {},

    //webpack的extensions
    extensions: [],

    //对webpack的loader进行补充、关闭、覆盖
    loaders: {},

    //对webpack的plugin进行补充、关闭、覆盖
    plugins: {},

    //打包插件
    hooks: {}
}

```


