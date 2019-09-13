# Button 按钮组件

按钮组件是最常见的交互组件之一。

## 基础用法

<c-button style="margin: 10px;">按钮</c-button>

```html
<c-button>按钮</c-button>
```

通过指定`color`属性，可以使按钮带有边框和填充色。

<c-button style="margin: 10px;" color="primary">按钮</c-button>
<c-button style="margin: 10px;" color="info">按钮</c-button>
<c-button style="margin: 10px;" color="pink">按钮</c-button>
<c-button style="margin: 10px;" color="teal">按钮</c-button>
<c-button style="margin: 10px;" color="warning">按钮</c-button>
<c-button style="margin: 10px;" color="success">按钮</c-button>

```html
<c-button color="primary">按钮</c-button>
<c-button color="info">按钮</c-button>
<c-button color="pink">按钮</c-button>
<c-button color="teal">按钮</c-button>
<c-button color="warning">按钮</c-button>
<c-button color="success">按钮</c-button>
```

## 图标

为按钮添加图标可以增强按钮的可读性。使用`icon`属性指定一个图标。

<c-button style="margin: 10px;" icon="face" color="primary">你好</c-button>
<c-button style="margin: 10px;" icon="thumb_up" color="success">赞同</c-button>

```html
<c-button icon="face" color="primary">你好</c-button>
```

## 不同尺寸的按钮

按钮拥有几种尺寸，从大到小分别是`large`，默认，`small`和`mini`。通过`size`属性可以为按钮指定一个尺寸。

<c-button style="margin: 10px;" color="primary" size="large">大号按钮</c-button>
<c-button style="margin: 10px;" color="info">默认尺寸</c-button>
<c-button style="margin: 10px;" color="pink" size="small">小号按钮</c-button>
<c-button style="margin: 10px;" color="teal" size="mini">迷你尺寸</c-button>

```html
<c-button color="primary" size="large">大号按钮</c-button>
<c-button color="info">默认尺寸</c-button>
<c-button color="pink" size="small">小号按钮</c-button>
<c-button color="teal" size="mini">迷你尺寸</c-button>
```

## 边框按钮

通过为按钮组件添加`outlined`属性，可以突出按钮的边框，同时只在鼠标指针悬浮在按钮之上时才显示填充色。

<c-button style="margin: 10px;" outlined color="primary">边框按钮</c-button>
<c-button style="margin: 10px;" outlined color="danger">边框按钮</c-button>
<c-button style="margin: 10px;" outlined color="warning">边框按钮</c-button>
<c-button style="margin: 10px;" outlined color="indigo">边框按钮</c-button>
<c-button style="margin: 10px;" outlined color="success">边框按钮</c-button>

```html
<c-button outlined color="primary">边框按钮</c-button>
<c-button outlined color="danger">边框按钮</c-button>
<c-button outlined color="warning">边框按钮</c-button>
<c-button outlined color="indigo">边框按钮</c-button>
<c-button outlined color="success">边框按钮</c-button>
```

## 简化按钮

可以为按钮组件添加`flat`属性，让按钮的样式“简化”。简化按钮在默认状态下不显示边框和填充色，只用指定的颜色标识按钮的文本。当鼠标指针悬浮其上时，显示一个比文字颜色略浅的填充色。

:::warning 注意
试图在未指明`color`属性的按钮上使用`flat`属性时，`flat`将不会起作用。
:::

<c-button style="margin: 10px;" flat color="primary">简化按钮</c-button>
<c-button style="margin: 10px;" flat color="danger">简化按钮</c-button>
<c-button style="margin: 10px;" flat color="info">简化按钮</c-button>
<c-button style="margin: 10px;" flat color="success">简化按钮</c-button>
<c-button style="margin: 10px;" flat color="pink">简化按钮</c-button>

```html
<c-button flat color="primary">简化按钮</c-button>
<c-button flat color="danger">简化按钮</c-button>
<c-button flat color="info">简化按钮</c-button>
<c-button flat color="success">简化按钮</c-button>
<c-button flat color="pink">简化按钮</c-button>
```

## 凸起按钮

凸起按钮通过添加`raised`属性实现。凸起按钮默认包含一个立体阴影效果。当鼠标指针悬浮在按钮组件上的时候，立体阴影效果加剧。这个样式的灵感来源于 Google 的 [Material Design](https://www.material.io/)。

<c-button style="margin: 10px;" raised color="primary">凸起按钮</c-button>
<c-button style="margin: 10px;" raised color="danger">凸起按钮</c-button>
<c-button style="margin: 10px;" raised color="info">凸起按钮</c-button>
<c-button style="margin: 10px;" raised color="success">凸起按钮</c-button>
<c-button style="margin: 10px;" raised color="pink">凸起按钮</c-button>

```html
<c-button raised color="primary">凸起按钮</c-button>
<c-button raised color="danger">凸起按钮</c-button>
<c-button raised color="info">凸起按钮</c-button>
<c-button raised color="success">凸起按钮</c-button>
<c-button raised color="pink">凸起按钮</c-button>
```

## 圆角按钮与尖锐按钮

默认的按钮带有`4px`的边框弧度。如果你想要这个弧度变的更大，可以为按钮添加`round`属性使之变成圆角按钮。反之，如果你不想使用边框弧度这个设计，可以为按钮组件添加`sharp`属性使之变成尖锐按钮。

:::warning 注意
显而易见地，一个按钮的`round`和`sharp`相互冲突。你最多只能同时在一个按钮上使用`round`或`sharp`中的一个属性。
:::

<c-button style="margin: 10px;" round color="primary">圆角按钮</c-button>
<c-button style="margin: 10px;" round outlined color="danger">圆角按钮</c-button>
<c-button style="margin: 10px;" round flat color="info">圆角按钮</c-button>
<c-button style="margin: 10px;" round raised color="info">圆角按钮</c-button>
<br>
<c-button style="margin: 10px;" sharp color="success">尖锐按钮</c-button>
<c-button style="margin: 10px;" sharp outlined color="pink">尖锐按钮</c-button>
<c-button style="margin: 10px;" sharp flat color="pink">尖锐按钮</c-button>
<c-button style="margin: 10px;" sharp raised color="pink">尖锐按钮</c-button>

```html
<c-button round color="primary">圆角按钮</c-button>
<c-button round outlined color="danger">圆角按钮</c-button>
<c-button round flat color="info">圆角按钮</c-button>
<c-button round raised color="info">圆角按钮</c-button>
<br>
<c-button sharp color="success">尖锐按钮</c-button>
<c-button sharp outlined color="pink">尖锐按钮</c-button>
<c-button sharp flat color="pink">尖锐按钮</c-button>
<c-button sharp raised color="pink">尖锐按钮</c-button>
```

## 圆形按钮

圆形按钮完全是圆形的，可以通过`circle`属性指定。

:::danger 注意
圆形按钮不能包含任何的文本，它的内容只能通过`icon`属性指定一个图标。
:::

<c-button style="margin: 10px;" circle color="success" icon="thumb_up"></c-button>
<c-button style="margin: 10px;" circle outlined color="danger" icon="done"></c-button>
<c-button style="margin: 10px;" circle flat color="pink" icon="face"></c-button>
<c-button style="margin: 10px;" circle raised color="info" icon="settings"></c-button>

```html
<c-button circle color="success" icon="thumb_up"></c-button>
<c-button circle outlined color="danger" icon="done"></c-button>
<c-button circle flat color="pink" icon="face"></c-button>
<c-button circle raised color="info" icon="settings"></c-button>
```

## 纯文本按钮

纯文本按钮在鼠标指针悬浮其上时略微加深颜色。除此之外，纯文本按钮没有任何其他样式。

:::warning 注意
纯文本按钮必须指定一个`color`属性才能生效。这样设计的原因是避免纯文本按钮与普通的文本看上去太过于相似。
:::

<c-button style="margin: 10px;" pure-text color="primary">纯文本按钮</c-button>
<c-button style="margin: 10px;" pure-text color="info" icon="cached">刷新</c-button>

```html
<c-button style="margin: 10px;" pure-text color="primary">纯文本按钮</c-button>
<c-button style="margin: 10px;" pure-text color="info" icon="cached">刷新</c-button>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| icon | 按钮的图标 | string | — | — |
| size | 按钮的尺寸 | string | large/—/small/mini | — |
| color | 按钮的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| outlined | 突出按钮的边框（边框按钮） | boolean | — | false |
| flat | 简化按钮 | boolean | — | false |
| raised | 凸起按钮 | boolean | — | false |
| round | 圆角按钮 | boolean | — | false |
| circle | 圆形按钮 | boolean | — | false |
| sharp | 尖锐按钮 | boolean | — | false |
| pure-text | 纯文本按钮 | boolean | — | false |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，按钮的文本 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 按钮被点击时触发的事件 | — |