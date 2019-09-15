# 快速上手

:::warning
**注意**

在[安装](installation.md)中使用“通过 Github 克隆”获取 Giraffe UI 时，**无需进行全局引入**。在 Giraffe UI 未发布成为 npm 包时，本节中“全局引入 Giraffe UI ”的内容暂不可用。
:::

## 全局引入 Giraffe UI <Badge text="暂不可用" type="error"/>

在项目的 `main.js` 中引入如下内容：

```js
import Vue from 'vue'
import GiraffeUI from 'giraffe-ui'
import 'giraffe-ui/src/styles/cui.scss'
import App from './App.vue'

Vue.use(GiraffeUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 Giraffe UI 的引入。需要注意的是，第 3 行单独引入了样式文件，这一步是不可缺少的。

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

并且打开浏览器的 `http://localhost:8080` 来查看应用的运行效果。如果能够看到拥有 Giraffe UI 主题颜色紫色的按钮，则表示组件的引入正常，你可以开始开发了。