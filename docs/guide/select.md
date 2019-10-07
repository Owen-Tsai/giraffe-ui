# Select 选择器组件

选择器组件用于在多个选项中选择一个或多个的情形，是常见的表单元素之一。

## 基础用法

<div class="demo-block">
  <p>你最想游览的济南市景点是：{{ spot }}</p>
  <c-select v-model="spot" width="300px">
    <c-option>大明湖</c-option>
    <c-option>趵突泉</c-option>
    <c-option>五龙潭</c-option>
    <c-option>千佛山</c-option>
    <c-option>红叶谷</c-option>
  </c-select>
</div>

```vue
<template>
  <div>
    <p>你最想游览的济南市景点是：{{ spot }}</p>
    <c-select v-model="spot" width="300px">
      <c-option>大明湖</c-option>
      <c-option>趵突泉</c-option>
      <c-option>五龙潭</c-option>
      <c-option>千佛山</c-option>
      <c-option>红叶谷</c-option>
    </c-select>
  </div>
</template>

<script>
  export default {
    data: () => ({
      spot: ''
    }) 
  }
</script>
```

指定`color`属性将改变文本框和下拉菜单的颜色。

<div class="demo-block">
  <c-select width="300px" color="teal">
    <c-option>大明湖</c-option>
    <c-option>趵突泉</c-option>
    <c-option>五龙潭</c-option>
    <c-option>千佛山</c-option>
    <c-option>红叶谷</c-option>
  </c-select>
</div>

```html
<c-select width="300px" color="teal">
  <c-option>大明湖</c-option>
  <c-option>趵突泉</c-option>
  <c-option>五龙潭</c-option>
  <c-option>千佛山</c-option>
  <c-option>红叶谷</c-option>
</c-select>
```

## 标签与值

在上面的例子中，选择器组件绑定的变量与当前选中的选项永远相等。在有些情况下这是我们不想要的，例如我们不想在代码中处理中文。遇到这种情况需要将标签与值分离处理。你可以分别指定`label`与`value`属性，`label`将显示在下拉菜单中作为选项的文本，`value`将与`v-model`指定的变量绑定。

<div class="demo-block">
  <p>你最想游览的济南市景点是：{{ spot2 }}</p>
  <c-select v-model="spot2" width="300px">
    <c-option label="大明湖" value="1"></c-option>
    <c-option label="趵突泉" value="2"></c-option>
    <c-option label="五龙潭" value="3"></c-option>
    <c-option label="千佛山" value="4"></c-option>
    <c-option label="红叶谷" value="5"></c-option>
  </c-select>
</div>

```html
<c-select v-model="spot2" width="300px">
  <c-option label="大明湖" value="1"></c-option>
  <c-option label="趵突泉" value="2"></c-option>
  <c-option label="五龙潭" value="3"></c-option>
  <c-option label="千佛山" value="4"></c-option>
  <c-option label="红叶谷" value="5"></c-option>
</c-select>
```

## 允许多选

你可以改变属性`max-selection`的值，允许用户使用选择器进行至多为`max-selection`项的多选。

<div class="demo-block">
  <p>你最想游览的济南市景点是：{{ spot3 }}</p>
  <c-select v-model="spot3" width="300px" :max-selection="3">
    <c-option label="大明湖"></c-option>
    <c-option label="趵突泉"></c-option>
    <c-option label="五龙潭"></c-option>
    <c-option label="千佛山"></c-option>
    <c-option label="红叶谷"></c-option>
  </c-select>
</div>

```html
<c-select v-model="spot3" width="300px" :max-selection="3">
  <c-option label="大明湖"></c-option>
  <c-option label="趵突泉"></c-option>
  <c-option label="五龙潭"></c-option>
  <c-option label="千佛山"></c-option>
  <c-option label="红叶谷"></c-option>
</c-select>
```

## 文本框样式

由于选择器的索引元素是一个输入框组件，因此能够作用在输入框组件上的属性也能够作用在选择器上。例如`placeholder`，`prefix-icon`，`size`，`round`。

<div class="demo-block">
  <c-select width="300px" :max-selection="3" placeholder="请选择" prefix-icon="location_on" size="small" round>
    <c-option label="大明湖"></c-option>
    <c-option label="趵突泉"></c-option>
    <c-option label="五龙潭"></c-option>
    <c-option label="千佛山"></c-option>
    <c-option label="红叶谷"></c-option>
  </c-select>
</div>

```html
<c-select width="300px" :max-selection="3" placeholder="请选择" prefix-icon="location_on" size="small" round>
  <c-option label="大明湖"></c-option>
  <c-option label="趵突泉"></c-option>
  <c-option label="五龙潭"></c-option>
  <c-option label="千佛山"></c-option>
  <c-option label="红叶谷"></c-option>
</c-select>
```


<script>
  export default {
    data: () => ({
      spot: '',
      spot2: '',
      spot3: ''
    }) 
  }
</script>