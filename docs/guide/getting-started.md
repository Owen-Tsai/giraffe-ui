# 快速上手

这篇文档假设你已经下载和安装了 Giraffe UI 的最新版本，并指引你完成整个导入的过程。

## 全局引入 Giraffe UI

在项目的`main.js`中写入如下内容：

```js
import Vue from 'vue'
import GiraffeUI from 'giraffe-ui'
// 必须单独引入样式：
import 'giraffe-ui/lib/giraffe-ui.css'
import App from './App.vue'

Vue.use(GiraffeUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 Giraffe UI 的引入。需要注意的是，第 3 行单独引入了样式文件，这一步是不可缺少的。

Giraffe UI 使用了 sass 作为样式预处理语言。你也可以在项目目录中，运行下面的代码来安装 sass 的环境。这是一个开发时依赖，而不是运行时。你因此无需担心你的用户必须额外安装这些依赖。

```bash
yarn add -D sass node-sass sass-loader
# 或者
npm install --save-dev sass node-sass sass-loader
```

使用 sass 将会给你带来额外的好处，你会发现自己可以更方便地修改和书写样式，并且还可以客制化 Giraffe UI 的颜色。

## 使用 Bootstrap-Template <Badge text="暂不可用" type="error"/>

Bootstrap-Template 是 Giraffe UI 为快速原型开发（Rapid Prototyping）准备的模板。

[未完成]

## 开始开发

至此，你已经完成了 Giraffe UI 的引入。为了验证是否能够正常使用 Giraffe UI，可以在 `App.vue` 中试着使用一下 Giraffe UI 的按钮组件：

```vue
<template>
  <c-button color="primary">按钮</c-button> 
</template>
```

在控制台中运行下面的指令开启服务环境，

```bash
yarn serve
# 或者
npm run serve
```

并且打开浏览器的 `http://localhost:8080` 来查看应用的运行效果。如果能够看到拥有 Giraffe UI 主题颜色紫色的按钮，则表示组件的引入正常，你可以开始开发了。同时，为了进一步进行确认，你可以打开控制台，控制台中会显示你当前使用的 Giraffe UI 版本，以及成功导入的组件个数：

```bash
Welcome using Giraffe-UI, you are currenlty using v0.0.23
Giraffe-UI is loaded successfully with 22 component(s)
```