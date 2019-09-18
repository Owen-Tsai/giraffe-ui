# Textarea 文本域组件

文本域是表单组件之一，通常用于让用户输入一段较长的文本。

## 基础用法

<template>
  <c-textarea v-model="text"></c-textarea>
</template>

```vue
<teamplate>
  <c-textarea v-model="text"></c-textarea>
</template>

<script>
  export default {
    data: () => ({
      text: ''
    })
  }
</script>
```

你可以通过`color`属性为文本域指定一个颜色。文本域组件与输入框组件的样式表现类似，只不过允许输入多行文本。

<template>
  <c-textarea v-model="text" color="danger"></c-textarea>
</template>

```html
<c-textarea v-model="text" color="danger"></c-textarea>
```

<script>
  export default {
    data: () => ({
      text: ''
    })
  }
</script>

## 指定行数

通过`rows`属性传入一个`Number`型值，可以为文本域指定一个行数。

<c-textarea placeholder="请输入文字..." color="primary" :rows="4"></c-textarea>

```html
<c-textarea placeholder="请输入文字..." color="primary" :rows="4"></c-textarea>
```

## 锁定行数

文本域默认允许用户通过拖拽右下角实现尺寸调整。当为文本域组件指定`no-resize`属性时，文本域的大小将会固定，不允许用户手动调整。

<c-textarea placeholder="请输入文字..." color="primary" :rows="4" no-resize></c-textarea>

```html
<c-textarea placeholder="请输入文字..." color="primary" :rows="4" no-resize></c-textarea>
```

## 禁用交互

禁止用户与文本域的交互可以通过将文本域设置为禁用状态或制度状态，可以分别添加属性`disabled`和`readonly`实现。

<c-textarea placeholder="请输入文字..." color="primary" disabled :rows="4" no-resize></c-textarea>
<c-textarea placeholder="请输入文字..." color="primary" readonly :rows="4" no-resize></c-textarea>

```html
<c-textarea placeholder="请输入文字..." color="primary" disabled :rows="4" no-resize></c-textarea>
<c-textarea placeholder="请输入文字..." color="primary" readonly :rows="4" no-resize></c-textarea>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| disabled | 禁用单选框 | Boolean | — | false |
| checked | 当前是否勾选 | Boolean | — | false |
| label | 单选框的选项文字，或者单选框的值 | Any | — | — |
| name | 原生`<input>`的`name`属性 | String | — | — |
| size | 按钮单选框组中所有按钮的尺寸 | string | large/—/small/mini | — |
| color | 单选框的颜色 | string | [查看受支持的颜色列表](color.md) | — |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，选项的文本 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发的事件 | 绑定值更新后的值 |