# Toolbar 工具栏组件

工具栏组件往往是应用的主要交互区域，通常也一并肩负着导航等功能。

## 基础用法

工具栏`<c-toolbar>`组件需要与工具项`<c-toolbar-item>`组件一起使用：后者作为前者的子组件。同时，为了方便按照功能对工具项分类以便应用不同的样式和逻辑，工具栏组件也提供了`<c-toolbar-group>`组件，可以作为容器容纳一组功能逻辑相似的`<c-toolbar-item>`。

<template>
  <c-toolbar class="example">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
</template>

```html
<c-toolbar>
  <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
  <c-toolbar-item to="#">介绍</c-toolbar-item>
  <c-toolbar-item to="#">指南</c-toolbar-item>
  <c-toolbar-item to="#">深入</c-toolbar-item>
  <c-toolbar-item to="#">开发</c-toolbar-item>
</c-toolbar>
```

为`<c-toolbar>`指定`color`属性，工具栏背景颜色会改变为相应的颜色。

<template>
  <c-toolbar color="primary">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
  <c-toolbar color="info" style="margin-top: 10px">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
  <c-toolbar color="pink-alt" style="margin-top: 10px">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
</template>

```html
<c-toolbar color="primary">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
  <c-toolbar color="info">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
  <c-toolbar color="pink-alt">
    <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
    <c-toolbar-item to="#">介绍</c-toolbar-item>
    <c-toolbar-item to="#">指南</c-toolbar-item>
    <c-toolbar-item to="#">深入</c-toolbar-item>
    <c-toolbar-item to="#">开发</c-toolbar-item>
  </c-toolbar>
```

## 其他元素

工具栏内的直接子元素必须是`<c-toolbar-item>`。但是`<c-toolbar-item>`除了可以直接嵌入文字链接，还可以嵌入其他组件。例如下面分别给出了在工具项中使用下拉列表和按钮的实例。

<template>
  <div>
    <c-toolbar color="primary">
      <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
      <c-toolbar-item to="#">介绍</c-toolbar-item>
      <c-toolbar-item to="#">指南</c-toolbar-item>
      <c-toolbar-item>
        <c-dropdown>
          <span slot="activator">深入 <c-icon style="line-height: 64px;">fas fa-angle-down</c-icon></span>
          <c-dropdown-menu>
            <c-dropdown-item>自定义事件</c-dropdown-item>
            <c-dropdown-item>渲染函数</c-dropdown-item>
            <c-dropdown-item>渲染函数</c-dropdown-item>
          </c-dropdown-menu>
        </c-dropdown>
      </c-toolbar-item>
      <c-toolbar-item to="#">开发</c-toolbar-item>
    </c-toolbar>
    <c-toolbar color="teal" style="margin-top: 10px">
      <c-toolbar-item title to="/">Title</c-toolbar-item>
      <c-toolbar-item to="#">链接 1</c-toolbar-item>
      <c-toolbar-item to="#">链接 2</c-toolbar-item>
      <c-toolbar-item>
        <c-dropdown trigger="click" placement="bottom-start">
          <c-button color="info" slot="activator" icon="giraffe giraffe-expand-more">列表</c-button>
          <c-dropdown-menu :max-width="100">
            <c-dropdown-item>第一个选项</c-dropdown-item>
            <c-dropdown-item>第二个选项</c-dropdown-item>
            <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
          </c-dropdown-menu>
        </c-dropdown>
      </c-toolbar-item>
      <c-toolbar-item>
        <c-button circle icon="fas fa-camera" color="primary" flat></c-button>
      </c-toolbar-item>
    </c-toolbar>
  </div>
</template>

```html
<c-toolbar color="primary">
  <c-toolbar-item title to="/">Giraffe UI</c-toolbar-item>
  <c-toolbar-item to="#">介绍</c-toolbar-item>
  <c-toolbar-item to="#">指南</c-toolbar-item>
  <c-toolbar-item>
    <c-dropdown>
      <span slot="activator">深入 <c-icon style="line-height: 64px;">fas fa-angle-down</c-icon></span>
      <c-dropdown-menu>
        <c-dropdown-item>自定义事件</c-dropdown-item>
        <c-dropdown-item>渲染函数</c-dropdown-item>
        <c-dropdown-item>渲染函数</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </c-toolbar-item>
  <c-toolbar-item to="#">开发</c-toolbar-item>
</c-toolbar>

<c-toolbar color="teal">
  <c-toolbar-item title to="/">Title</c-toolbar-item>
  <c-toolbar-item to="#">链接 1</c-toolbar-item>
  <c-toolbar-item to="#">链接 2</c-toolbar-item>
  <c-toolbar-item>
    <c-dropdown trigger="click" placement="bottom-start">
      <c-button color="info" slot="activator" icon="giraffe giraffe-expand-more">列表</c-button>
      <c-dropdown-menu :max-width="100">
        <c-dropdown-item>第一个选项</c-dropdown-item>
        <c-dropdown-item>第二个选项</c-dropdown-item>
        <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </c-toolbar-item>
  <c-toolbar-item>
    <c-button circle icon="fas fa-camera" color="primary" flat></c-button>
  </c-toolbar-item>
</c-toolbar>
```

## 分组

你也可以使用