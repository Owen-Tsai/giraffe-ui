# Dropdown 下拉列表组件

列表常用于菜单中，是一组折叠项的集合。

## 基础用法

下拉列表包含两个插槽，具名插槽`activator`是索引元素（reference），默认插槽是悬浮层（popper）。当鼠标指针移入索引元素时，悬浮层就会出现在索引元素旁边。

<template>
  <c-dropdown>
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown>
  <c-button slot="activator">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="fas fa-camera">第一个选项</c-dropdown-item>
    <c-dropdown-item>第二个选项</c-dropdown-item>
    <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

可以为下拉列表组件指定`color`属性，来使下拉列表具有背景颜色。

<template>
  <c-dropdown color="primary">
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>