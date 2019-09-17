# Button-Group 按钮组

按钮组是多个按钮的组合，常用于一组类似的操作。

## 基础用法

<c-button-group style="margin-top: 20px;">
  <c-button>左按钮</c-button>
  <c-button>中间按钮</c-button>
  <c-button>右按钮</c-button>
</c-button-group>

```html
<c-button-group>
  <c-button>左按钮</c-button>
  <c-button>中间按钮</c-button>
  <c-button>右按钮</c-button>
</c-button-group>
```

每个按钮可以像按钮组件里那样单独通过`color`属性指定颜色。如果想把按钮组中的所有按钮设置成相同的颜色，可以通过按钮组的`color`属性实现。

<c-button-group style="margin-top: 20px;">
  <c-button color="warning">左按钮</c-button>
  <c-button color="success">中间按钮</c-button>
  <c-button color="danger">右按钮</c-button>
</c-button-group>
<c-button-group style="margin-top: 20px; margin-left: 10px;" color="blue">
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>

```html
<c-button-group>
  <c-button color="warning">左按钮</c-button>
  <c-button color="success">中间按钮</c-button>
  <c-button color="danger">右按钮</c-button>
</c-button-group>
<c-button-group color="blue">
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>
```

## 边框弧度

可以为每个按钮单独设置边框弧度，或者通过按钮组组件的`round`和`sharp`属性为同组所有按钮进行相同的设置。

<c-button-group style="margin-top: 20px;">
  <c-button color="warning" round>左按钮</c-button>
  <c-button color="success" round>中间按钮</c-button>
  <c-button color="danger" sharp>右按钮</c-button>
</c-button-group>
<c-button-group style="margin-top: 20px; margin-left: 10px;" color="blue" round>
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>

```html
<c-button-group>
  <c-button color="warning" round>左按钮</c-button>
  <c-button color="success" round>中间按钮</c-button>
  <c-button color="danger" sharp>右按钮</c-button>
</c-button-group>
<c-button-group color="blue" round>
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>
```

## 按钮组的尺寸

为按钮组指定`size`属性，可以调整按钮组内所有按钮的`size`属性。

:::danger 注意
与颜色和边框弧度的设置不同，无论在任何时候，你都不应该分别调整按钮组内每个按钮的`size`，而都应当为按钮组内所有按钮设置相同的`size`。
:::

<c-button-group style="margin-top: 20px;" size="large">
  <c-button color="warning">左按钮</c-button>
  <c-button color="success">中间按钮</c-button>
  <c-button color="danger">右按钮</c-button>
</c-button-group>
<c-button-group style="margin-top: 20px; margin-left: 10px;" color="blue" size="small" round>
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>

```html
<c-button-group size="large">
  <c-button color="warning">左按钮</c-button>
  <c-button color="success">中间按钮</c-button>
  <c-button color="danger">右按钮</c-button>
</c-button-group>
<c-button-group color="blue" size="small" round>
  <c-button icon="fas fa-play">播放</c-button>
  <c-button icon="fas fa-pause">暂停</c-button>
  <c-button icon="fas fa-stop">停止</c-button>
</c-button-group>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| size | 按钮组中所有按钮的尺寸 | string | large/—/small/mini | — |
| color | 按钮组中所有按钮的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| round | 为按钮组内所有按钮设置圆角 | boolean | — | false |
| sharp | 为按钮组内所有按钮设置尖角 | boolean | — | false |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，按钮组内容。只能是`<c-button>`按钮组件 |