# Icon 图标组件

在 Giraffe UI 设计之初，采用了 Google material design 的[图标集](https://material.io/resources/icons/?style=baseline)。可因为某些原因，material design 的网站加载速度越来越慢，同时图标也一直处于加载状态无法显示。因此，我们决定使用 [Font Awesome](https://fontawesome.com/start) 替换 material design 图标。但是别误会，material design 是一个相当优秀的设计原则，它的开源图标字体制作也非常精良。

同时，为了避免 Font Awesome 的网站加载速度慢或图标不满足开发需要，Giraffe UI 也支持使用 materialdesignicons，也就是 [mdi 图标](http://materialdesignicons.com/)。但与 Font Awesome 不同，mdi 图标没有内置于 Giraffe UI 中，需要你通过包管理工具安装和引入。

## 基础用法

:::tip 注意
你可以在[这里](https://fontawesome.com/icons?d=gallery&m=free)看到所有 Font Awesome 的可用图标。
:::

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;">fas fa-address-card</c-icon>
  <c-icon style="margin-right: 10px;">fas fa-clipboard</c-icon>
  <c-icon style="margin-right: 10px;">fab fa-alipay</c-icon>
  <c-icon>fas fa-bell</c-icon>
</div>

```html
<c-icon>fas fa-camera</c-icon>
<c-icon>fas fa-address-card</c-icon>
<c-icon>fas fa-clipboard</c-icon>
<c-icon>fab fa-alipayy</c-icon>
<c-icon>fas bell</c-icon>
```

使用`color`属性可以为图标添加颜色。

<div style="margin-top: 20px;">
  <c-icon style="margin-right: 10px;" color="teal">fas fa-camera</c-icon>
  <c-icon style="margin-right: 10px;" color="pink">fas fa-address-card</c-icon>
  <c-icon style="margin-right: 10px;" color="cyan">fas fa-clipboard</c-icon>
  <c-icon style="margin-right: 10px;" color="blue">fab fa-alipay</c-icon>
  <c-icon color="primary">fas fa-bell</c-icon>
</div>

```html
<c-icon color="teal">fas fa-camera</c-icon>
<c-icon color="pink">fas fa-address-card</c-icon>
<c-icon color="cyan">fas fa-clipboard</c-icon>
<c-icon color="blue">fas fa-alipay</c-icon>
<c-icon color="primary">fas fa-bell</c-icon>
```

## 使用 mdi 图标

通过为组件指定`icon-set`属性为`fa`或`mdi`，就可以使用 Font Awesome 或者 mdi 图标集。默认使用的是 Font Awesome。与 Font Awesome 不同，mdi 图标没有内置于 Giraffe UI 中。如果你想要使用 mdi 图标集，则先需要通过包管理工具安装和引入。安装和引入 mdi 图标的方法请参看 [mdi 文档](https://dev.materialdesignicons.com/getting-started/webfont)。

:::tip 注意
你可以在[这里](http://materialdesignicons.com/)看到所有 mdi 的可用图标。
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
| size | 图标的尺寸 | string, number | — | 26px |
| color | 图标的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| icon-set | 图标组件采用的图标集 | string | 'fa'/'mdi' | 'fa' |
| helper | 图标的帮助类，可以方便地实现图标旋转、矢量缩放、脉冲旋转、动画和排列 | string | — | — |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，图标的名称 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 图标被点击时触发的事件 | — |