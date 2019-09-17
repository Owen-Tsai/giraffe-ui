# Input 输入框组件

:::tip 注意
该组件被标记为“需要重构”。在下一版本中可能导致较大范围的API变化。
:::

输入框组件是对`<input>`标签的封装，是表单的常见元素之一。

## 基础用法

基础的输入框包含一个灰色的边框。当鼠标指针悬浮在输入框上时，边框颜色会加深。当输入框被用户聚焦时，边框会自动变为主要色紫色，以醒目的方式提示用户当前的焦点。

或者，也可以通过`color`属性指定边框的颜色。当制定了边框颜色时，即使在未被鼠标指针指向和聚焦的默认状态下，也会显示带有颜色的边框。当输入框被聚焦后，则会显示颜色加深的边框色来提示用户。

输入框在默认状态下横向宽度为`100%`，占满整个父元素空间。若想要输入框具备一个最大宽度限制，可以为输入框指定`width`属性。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" placaholder="请输入文字"></c-input>
  <c-input width="48%" color="danger"></c-input>
</div>

```html
<c-input width="50%" placaholder="请输入文字"></c-input>
<c-input width="50%" color="danger"></c-input>
```

## 带有图标

输入框的内部可以添加前缀和后缀图标，对应的属性名称分别称为`prefix-icon`和`suffix-icon`。图标既可以直接通过属性名称设置，也可以通过具名插槽传入。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" color="danger" prefix-icon="far fa-smile"></c-input>
  <c-input width="48%" suffix-icon="fas fa-check"></c-input>
</div>
<div style="display: flex; justify-content: space-between; margin-top: 10px;">
  <c-input width="48%">
    <c-icon slot="prefix">far fa-smile</c-icon>
  </c-input>
  <c-input width="48%" color="info">
    <c-icon slot="suffix">fas fa-check</c-icon>
  </c-input>
</div>

```html
<c-input width="48%" color="danger" prefix-icon="far fa-smile"></c-input>
<c-input width="48%" suffix-icon="fas fa-check"></c-input>

<c-input width="48%">
  <c-icon slot="prefix">far fa-smile</c-icon>
</c-input>
<c-input width="48%" color="info">
  <c-icon slot="suffix">fas fa-check</c-icon>
</c-input>
```

## 输入框组

输入框的外部可以添加前缀和后缀，表现为与输入框相连接的一组元素。前缀和后缀可以通过具名插槽传入。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" color="danger" prepend-caption="https://" placeholder="example.com"></c-input>
  <c-input width="48%" append-caption="done" placeholder="请输入待办事项"></c-input>
</div>
<div style="display: flex; justify-content: space-between; margin-top: 10px;">
  <c-input width="48%">
    <c-icon slot="prefix">fas fa-search</c-icon>
    <c-button slot="append">谷歌搜索</c-button>
  </c-input>
  <c-input width="48%" color="info">
    <c-icon slot="suffix">fas fa-envelope</c-icon>
    <span slot="prepend">Gmail</span>
  </c-input>
</div>

```html
<c-input width="48%" color="danger" prepend-caption="https://" placeholder="example.com"></c-input>
<c-input width="48%" append-caption="done" placeholder="请输入待办事项"></c-input>

<c-input width="48%">
  <c-icon slot="prefix">fas fa-search</c-icon>
  <c-button slot="append">谷歌搜索</c-button>
</c-input>
<c-input width="48%" color="info">
  <c-icon slot="suffix">fas fa-envelope</c-icon>
  <span slot="prepend">Gmail</span>
</c-input>
```

## 输入框风格

:::danger 注意
圆角和简化两种样式均不可用于输入框组。
:::

### 圆角输入框

默认的输入框带有`4px`的边框弧度。使用`round`属性可以使输入框带有圆角样式。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" suffix-icon="giraffe giraffe-close" round></c-input>
  <c-input width="48%" prefix-icon="fas fa-envelope" round></c-input>
</div>

```html
<c-input width="48%" suffix-icon="fas fa-search" round></c-input>
<c-input width="48%" prefix-icon="fas fa-envelope" round></c-input>
```

### 简化输入框

简化的输入框可以用`simplified`属性指定。简化输入框没有边框，只在输入框文字下方包含一条横线，用于标识输入框位置。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" simplified color="primary"></c-input>
  <c-input width="48%" prefix-icon="fas fa-envelope" simplified color="danger"></c-input>
</div>

```html
<c-input width="48%" simplified color="primary"></c-input>
<c-input width="48%" prefix-icon="fas fa-envelope" simplified color="danger"></c-input>
```

## 输入框尺寸

输入框有已定义好的4种尺寸，由大到小分别是`large`，默认，`small`和`mini`。通过输入框的`size`属性就可以指定输入框的大小。

<div style="margin-top: 20px">
  <c-input style="margin-bottom: 10px" width="48%" color="primary" size="large" placeholder="大号输入框"></c-input><br>
  <c-input style="margin-bottom: 10px" width="48%" color="danger" placeholder="普通尺寸输入框"></c-input><br>
  <c-input style="margin-bottom: 10px" width="48%" color="info" size="small" placeholder="小号输入框"></c-input><br>
  <c-input width="48%" color="warning" size="mini" placeholder="迷你尺寸输入框"></c-input><br>
</div>

```html
<c-input width="48%" color="primary" size="large" placeholder="大号输入框"></c-input><br>
<c-input width="48%" color="danger" placeholder="普通尺寸输入框"></c-input><br>
<c-input width="48%" color="info" size="small" placeholder="小号输入框"></c-input><br>
<c-input width="48%" color="warning" size="mini" placeholder="迷你尺寸输入框"></c-input><br>
```

## 只在聚焦时显示图标

输入框的图标可以设置只在输入框聚焦时显示，在输入框失去焦点后就会暂时隐藏。只需要为输入框添加`show-icon-on-focus`属性即可。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" color="danger" prefix-icon="face" show-icon-on-focus></c-input>
  <c-input width="48%" suffix-icon="clear" show-icon-on-focus></c-input>
</div>

```html
<c-input width="48%" color="danger" prefix-icon="face" show-icon-on-focus></c-input>
<c-input width="48%" suffix-icon="clear" show-icon-on-focus></c-input>
```

## 输入框提示 <Badge text="下一版本" type="tip"/>

输入框提供了内置的插槽`hint`用于在输入框下方显示一行提示文字。如果提示文字过长，超过父级元素输入框的长度，那么文字将被截断并在结尾添加省略号。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" color="danger" placeholder="example.com">
    <span slot="hint">请输入网址</span>
  </c-input>
  <c-input width="48%" placeholder="请输入待办事项">
    <span slot="hint">如果提示文字长度过长，那么这行文字将会被截断，并在结尾添加省略号</span>
  </c-input>
</div>

```html
<c-input width="48%" color="danger" placeholder="example.com">
  <span slot="hint">请输入网址</span>
</c-input>
<c-input width="48%" placeholder="请输入待办事项">
  <span slot="hint">如果提示文字长度过长，那么这行文字将会被截断，并在结尾添加省略号</span>
</c-input>
```


## 禁用交互

禁止用户与输入框的交互可以通过将输入框设置为禁用状态或制度状态，可以分别添加属性`disabled`和`readonly`实现。

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
  <c-input width="48%" value="禁用状态" disabled></c-input>
  <c-input width="48%" color="danger" value="只读状态" readonly></c-input>
</div>

```html
<c-input width="48%" value="禁用状态" disabled></c-input>
<c-input width="48%" color="danger" value="只读状态" readonly></c-input>
```

## API

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| color | 输入框的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| simplified | 简化输入框 | boolean | — | false |
| round | 圆角输入框 | boolean | — | false |
| disabled | 禁用状态 | boolean | — | false |
| readonly | 只读状态 | boolean | — | false |
| prefix-icon | 前缀图标 | string | — | — |
| suffix-icon | 后缀图标 | string | — | — |
| prepend-caption | 输入框组前缀 | string | — | — |
| append-caption | 输入框组后缀 | string | — | — |
| size | 输入框的尺寸 | string | large/—/small/mini | — |

### Slot

| 名称 | 说明                |
|------|--------------------|
| prefix-icon | 前缀图标 | string | — | — |
| suffix-icon | 后缀图标 | string | — | — |
| prepend-caption | 输入框组前缀 | string | — | — |
| append-caption | 输入框组后缀 | string | — | — |