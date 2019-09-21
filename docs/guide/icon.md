# Icon 图标组件

Giraffe UI 内置了 12 个简单的图标，包含确认、关闭、箭头等。同时，Giraffe UI 也对 [Font Awesome](https://fontawesome.com/start) 和  [mdi](http://materialdesignicons.com/) 这两个图标集提供了“开箱即用”的支持。你只需要在项目中添加这两个图标库的依赖，就可以使用这两个图标库中的任何图标。

在 Giraffe UI 设计之初，采用了 Google material design 的[图标集](https://material.io/resources/icons/?style=baseline)。可因为某些原因，material design 的网站加载速度越来越慢，同时图标也一直处于加载状态无法显示。因此在 Giraffe UI 的正式版本中放弃了 material design 图标。但是别误会，material design 是一个相当优秀的设计原则，它的开源图标字体制作也非常精良。

## 使用内置图标

通过指定`icon-set`属性为`giraffe`，可以使用 Giraffe UI 的内置图标。下面列出了所有 12 个 Giraffe UI 内置的图标：

<div style="margin-top: 20px;">
  <c-icon icon-set="giraffe" style="margin-right: 10px;">expand-more</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">expand-less</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">close</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">done</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">arrow-back</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">arrow-forward</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">arrow-drop-down</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">arrow-drop-up</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">chevron-left</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">chevron-right</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;">first-page</c-icon>
  <c-icon icon-set="giraffe">last-page</c-icon>
</div>

```html
<c-icon icon-set="giraffe">expand-more</c-icon>
<c-icon icon-set="giraffe">expand-less</c-icon>
<c-icon icon-set="giraffe">close</c-icon>
<c-icon icon-set="giraffe">done</c-icon>
<c-icon icon-set="giraffe">arrow-back</c-icon>
<c-icon icon-set="giraffe">arrow-forward</c-icon>
<c-icon icon-set="giraffe">arrow-drop-down</c-icon>
<c-icon icon-set="giraffe">arrow-drop-up</c-icon>
<c-icon icon-set="giraffe">chevron-left</c-icon>
<c-icon icon-set="giraffe">chevron-right</c-icon>
<c-icon icon-set="giraffe">first-page</c-icon>
<c-icon icon-set="giraffe">last-page</c-icon>
```

使用`color`属性可以为图标添加颜色。

<div style="margin-top: 20px;">
  <c-icon icon-set="giraffe" style="margin-right: 10px;" color="primary">expand-more</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;" color="blue">expand-less</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;" color="danger">close</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;" color="green">done</c-icon>
  <c-icon icon-set="giraffe" style="margin-right: 10px;" color="lime">arrow-back</c-icon>
  <c-icon icon-set="giraffe" color="cyan">arrow-forward</c-icon>
</div>

```html
<c-icon icon-set="giraffe" color="primary">expand-more</c-icon>
<c-icon icon-set="giraffe" color="blue">expand-less</c-icon>
<c-icon icon-set="giraffe" color="danger">close</c-icon>
<c-icon icon-set="giraffe" color="green">done</c-icon>
<c-icon icon-set="giraffe" color="lime">arrow-back</c-icon>
<c-icon icon-set="giraffe" color="cyan">arrow-forward</c-icon>
```

## 使用 Font Awesome 图标

当为组件的`icon-set`属性指定为`fa`或者省略该属性时，将会使用 Font Awesome 图标集渲染当前图标。想要使用 Font Awesome，你必须先通过包管理工具安装 Font Awesome，然后在你的应用入口`main.js`中引入 Font Awesome 的脚本文件和样式文件。

:::tip 注意
你可以在[这里](https://fontawesome.com/icons?d=gallery&m=free)看到所有 Font Awesome 的可用图标。关于安装、配置和使用 Font Awesome，请查看[官方文档](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)。
:::

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;" color="primary">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;" color="pink">fas fa-address-card</c-icon>
  <c-icon style="margin-right: 10px;" color="teal">fas fa-clipboard</c-icon>
  <c-icon style="margin-right: 10px;" color="info">fab fa-alipay</c-icon>
  <c-icon>fas fa-bell</c-icon>
</div>

```html
<c-icon color="primary">fas fa-camera</c-icon>
<c-icon color="pink">fas fa-address-card</c-icon>
<c-icon color="teal">fas fa-clipboard</c-icon>
<c-icon color="info">fab fa-alipay</c-icon>
<c-icon>fas fa-bell</c-icon>
```


## 使用 mdi 图标

当为组件指定`icon-set`属性为`mdi`时，就可以使用 mdi 图标集。如果你想要使用 mdi 图标集，则先需要通过包管理工具安装和引入。

:::tip 注意
你可以在[这里](http://materialdesignicons.com/)看到所有 mdi 的可用图标。关于安装、配置和使用 mdi 图标，请查看[官方文档](https://dev.materialdesignicons.com/getting-started/webfont)。
:::

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;" icon-set="mdi" color="info">account-badge-horizontal</c-icon>
  <c-icon style="margin-right: 10px;" icon-set="mdi" color="primary">account-circle</c-icon>
  <c-icon style="margin-right: 10px;" icon-set="mdi" color="success">thumb-up</c-icon>
  <c-icon style="margin-right: 10px;" icon-set="mdi" color="warning">alert</c-icon>
  <c-icon icon-set="mdi" color="danger">google-fit</c-icon>
</div>

```html
<c-icon icon-set="mdi" color="info">account-badge-horizontal</c-icon>
<c-icon icon-set="mdi" color="primary">account-circle</c-icon>
<c-icon icon-set="mdi" color="success">thumb-up</c-icon>
<c-icon icon-set="mdi" color="warning">alert</c-icon>
<c-icon icon-set="mdi" color="danger">google-fit</c-icon>
```

## 不同尺寸的图标

使用图标的`size`属性可以为图标指定尺寸大小。`size`属性接收一个`String`或`Number`，如果传入的值是一个`String`，那么请务必在值后面加上单位，例如例子中的`px`。

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;" color="teal" size="38px">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;" color="pink" size="30px">fas fa-address-card</c-icon>
  <c-icon style="margin-right: 10px;" color="cyan" size="28px">fas fa-clipboard</c-icon>
  <c-icon style="margin-right: 10px;" color="blue">fab fa-alipay</c-icon>
  <c-icon color="primary" size="20px">fas fa-bell</c-icon>
</div>

```html
<c-icon color="teal" size="38px">fas fa-camera</c-icon>
<c-icon color="pink" size="30px">fas fa-address-card</c-icon>
<c-icon color="cyan" size="28px">fas fa-clipboard</c-icon>
<c-icon color="blue">fab fa-alipay</c-icon>
<c-icon color="primary" size="20px">fas fa-bell</c-icon>
```

## 使用帮助类修饰图标

:::tip 注意
使用的图标集不同，所支持的帮助类也就不同。你可以分别访问 [Font Awesome 图标帮助类](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)和 [mdi 图标帮助类](https://dev.materialdesignicons.com/getting-started/webfont#helper-classes)来查看两种图标集所支持的帮助类。

内置的 Giraffe UI 图标集**不**支持帮助类。  
:::

通过`helper`可以为图标组件添加帮助类。

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;" helper="2x">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;" helper="rotate-90">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;" helper="spin">fas fa-circle-notch</c-icon>
  <c-icon style="margin-right: 10px;" :helper="['2x','spin']">fas fa-sync</c-icon>
  <c-icon style="margin-right: 10px;" helper="pulse">fas fa-spinner</c-icon>
</div>

```html
<c-icon helper="2x">fas fa-camera</c-icon>
<c-icon helper="rotate-90">fas fa-camera</c-icon>
<c-icon helper="spin">fas fa-circle-notch</c-icon>
<c-icon :helper="['2x','spin']">fas fa-sync</c-icon>
<c-icon helper="pulse">fas fa-spinner</c-icon>
```


## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| size | 图标的尺寸 | string, number | — | 24px |
| color | 图标的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| icon-set | 图标组件采用的图标集 | string | 'fa'/'mdi'/'giraffe' | 'fa' |
| helper | 图标的帮助类，可以方便地实现图标旋转、矢量缩放、脉冲旋转、动画和排列 | string, array | — | — |

### Slots

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，图标的名称 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 图标被点击时触发的事件 | — |