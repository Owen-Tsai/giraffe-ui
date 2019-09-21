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
| disabled | 禁用文本域 | Boolean | — | false |
| readonly | 设定文本域为只读 | Boolean | — | false |
| color | 单选框的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| no-resize | 禁止用户更改文本域尺寸 | Boolean | — | false |
| hint | 显示在输入区域下方的提示文字 | string | — | — |

**你可以在`<c-textarea>`上使用原生`<textarea>`标签的属性，例如`rows`和`placeholder`等**。

### Slots

| 名称 | 说明                |
|------|--------------------|
| hint | 显示在输入区域下方的提示文字，与使用`hint`属性效果相同 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| focus | 输入框成为焦点后触发 | — |
| blur | 输入框失去焦点后触发 | — |
| input | 输入框被键入文本时触发 | event.target.value |
| change | 输入框内容改变时触发 | event.target.value |