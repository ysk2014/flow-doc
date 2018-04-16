## 打包

`flow-build`是前端工作流生态的重要组成之一。意在解决webpack零配置问题，介绍如下：

- `flow-build` 是对 Webpack 配置进行封装简化, 是 Webpack 的上层框架, 有自己的一套简单的配置规则, 让开发者从复杂的各种具体 loader, plugin 中解脱出来.
- `flow-build` 本身提供了良好的扩展能力, 目前已扩展出 `flow-vue-ssr-hook`、`flow-vue-hook`, 你可以直接使用这些扩展.
- `flow-build` 兼容 Webpack 原生节点配置。

### 基本功能

- 支持vue服务端渲染，前端渲染，静态页面渲染三种方式
- 默认支持`dev`,`test`,`prod`环境配置
- 支持es6 class继承方式编写webpack配置
- 支持js/css/image压缩，内置CDN特性
- 支持css/sass/less/stylus, 支持css module和css extract特性
- 支持loader是否启用，合并，覆盖配置
- 支持plugin是否启用，合并，覆盖配置
- 支持 loader 和 plugin npm module 是否启用，按需安装
- 支持eslint, postcss等特性
- 提供`imerge-loader`进行合图


## 扩展

- [flow-vue-hook](http://gitlab.taihenw.com/fe-flow/flow-vue-hook)
- [flow-vue-ssr-hook](http://gitlab.taihenw.com/fe-flow/flow-vue-ssr-hook)