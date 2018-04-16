(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{44:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础配置")]),a("h2",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[t._v("#")]),t._v(" entry")]),a("p",[t._v("webpack的entry配置，但是不支持function")]),a("ul",[a("li",[t._v("类型： "),a("code",[t._v("array")]),t._v(" 或 "),a("code",[t._v("Object")])])]),a("p",[a("strong",[t._v("提示：")]),t._v(" 该配置在"),a("code",[t._v("mode")]),t._v("为"),a("code",[t._v("ssr")]),t._v("时候，类型必须为"),a("code",[t._v("Object")]),t._v("，且必须为如下格式:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    client"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./src/js/app.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    server"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./src/server.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vendor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"vue-router"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//非必选")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"srcdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#srcdir","aria-hidden":"true"}},[t._v("#")]),t._v(" srcDir")]),a("p",[t._v("项目源码目录")]),a("ul",[a("li",[t._v("类型： "),a("code",[t._v("string")])]),a("li",[t._v("默认： "),a("code",[t._v("./src")])])]),a("h2",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js","aria-hidden":"true"}},[t._v("#")]),t._v(" js")]),a("p",[t._v("js配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("ul",[a("li",[a("p",[t._v("babel")]),a("p",[t._v("babel的配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])]),a("li",[t._v("默认：")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"modules"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"stage-2"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("strong",[t._v("提示：")]),t._v(" 如果配置该属性，会覆盖掉默认配置，不会合并")])]),a("li",[a("p",[t._v("dirname")]),a("p",[t._v("js输出文件夹")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),a("li",[t._v("默认："),a("code",[t._v("js")])])])]),a("li",[a("p",[t._v("hash")]),a("p",[t._v("js输出hash值的长度")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),a("li",[t._v("默认：16")])])])]),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[t._v("#")]),t._v(" css")]),a("p",[t._v("css配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("ul",[a("li",[a("p",[t._v("engine")]),a("p",[t._v("css引擎，可以为[“css”,“less”,“sass”,“postcss”,“stylus”]中的任意一个或者多个")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")]),t._v(" or "),a("code",[t._v("array")])]),a("li",[t._v("默认："),a("code",[t._v("css")])])])]),a("li",[a("p",[t._v("postcss")]),a("p",[t._v("postcss配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])]),a("li",[t._v("默认：")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    useConfigFile"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ident"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'postcss'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourceMap"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-flexbugs-fixes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            browsers"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'>1%'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'last 4 versions'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'Firefox ESR'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'not ie < 9'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            flexbox"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'no-2009'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("strong",[t._v("提示：")]),t._v(" 如果配置该属性，会覆盖掉默认配置，不会合并")])]),a("li",[a("p",[t._v("dirname")]),a("p",[t._v("css输出文件夹")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),a("li",[t._v("默认："),a("code",[t._v("css")])])])]),a("li",[a("p",[t._v("hash")]),a("p",[t._v("hash值的长度")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),a("li",[t._v("默认：16")])])])]),a("h2",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[t._v("#")]),t._v(" image")]),a("p",[t._v("图片配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("ul",[a("li",[a("p",[t._v("limit")]),a("p",[t._v("图片base64的限制大小,单位为Byte")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),a("li",[t._v("默认："),a("code",[t._v("1000")])])])]),a("li",[a("p",[t._v("dirname")]),a("p",[t._v("image输出文件夹")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),a("li",[t._v("默认："),a("code",[t._v("images")])])])]),a("li",[a("p",[t._v("hash")]),a("p",[t._v("hash值的长度")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),a("li",[t._v("默认：16")])])]),a("li",[a("p",[t._v("imerge")]),a("p",[t._v("是否要合图")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),a("li",[t._v("默认："),a("code",[t._v("false")])])])])]),a("h2",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" html")]),a("p",[t._v("html配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("ul",[a("li",[a("p",[t._v("template")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin")]),t._v("配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")]),t._v(" or "),a("code",[t._v("array")])])]),a("ul",[a("li",[a("p",[t._v("filename")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin")]),t._v("的filename配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])])])]),a("li",[a("p",[t._v("path")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin")]),t._v("的template配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])])])]),a("li",[a("p",[t._v("excludeChunks")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin")]),t._v("的excludeChunks配置")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("array")])])]),a("p",[a("strong",[t._v("提示：")]),t._v(" 该属性只有在"),a("code",[t._v("template")]),t._v("为"),a("code",[t._v("array")]),t._v("类型时候才会起作用")])])])])]),a("h2",{attrs:{id:"white"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#white","aria-hidden":"true"}},[t._v("#")]),t._v(" white")]),a("p",[t._v("白名单，使用"),a("a",{attrs:{href:"https://www.npmjs.com/package/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin")]),t._v("实现")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("ul",[a("li",[a("p",[t._v("patterns")]),a("p",[t._v("要配置的白名单列表，"),a("a",{attrs:{href:"https://www.npmjs.com/package/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin")]),t._v("中的第一个参数")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("array")])])])]),a("li",[a("p",[t._v("rules")]),a("p",[t._v("白名单规则，"),a("a",{attrs:{href:"https://www.npmjs.com/package/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin")]),t._v("中的第二参数")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])])])]),a("h2",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[t._v("#")]),t._v(" mode")]),a("p",[t._v("项目应用类型，在"),a("code",[t._v("vue/ssr/multiple/spa")]),t._v("中的一个")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])])]),a("h2",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[t._v("#")]),t._v(" env")]),a("p",[t._v("环境变量, dev、test、prod")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),a("li",[t._v("默认：‘dev’")])]),a("h2",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[t._v("#")]),t._v(" alias")]),a("p",[t._v("webpack的alias")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("object")])])]),a("h2",{attrs:{id:"extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions","aria-hidden":"true"}},[t._v("#")]),t._v(" extensions")]),a("p",[t._v("webpack的extensions")]),a("ul",[a("li",[t._v("类型："),a("code",[t._v("array")])])])])}],!1,null,null,null);s.default=e.exports}}]);