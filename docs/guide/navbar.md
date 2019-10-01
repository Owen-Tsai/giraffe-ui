# Navbar 导航条组件

导航条组件往往是应用的主要交互区域，通常肩负着导航等功能。

## 基础用法

导航条`<c-navbar>`组件需要与菜单项`<c-navbar-item>`组件一起使用：后者作为前者的子组件。同时，为了方便按照功能对菜单项分类以便应用不同的样式和逻辑，导航条组件也提供了`<c-navbar-group>`组件，可以作为容器容纳一组功能逻辑相似的`<c-navbar-item>`。

<template>
  <c-navbar class="example">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
</template>

```html
<c-navbar>
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item to="#">介绍</c-navbar-item>
  <c-navbar-item to="#">指南</c-navbar-item>
  <c-navbar-item to="#">深入</c-navbar-item>
  <c-navbar-item to="#">开发</c-navbar-item>
</c-navbar>
```

为`<c-navbar>`指定`color`属性，导航条背景颜色会改变为相应的颜色。

<template>
  <c-navbar color="primary">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
  <c-navbar color="info" style="margin-top: 10px">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
  <c-navbar color="pink-alt" style="margin-top: 10px">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
</template>

```html
<c-navbar color="primary">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
  <c-navbar color="info">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
  <c-navbar color="pink-alt">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
```

## 其他元素

导航条内的直接子元素必须是`<c-navbar-item>`。但是`<c-navbar-item>`除了可以直接嵌入文字链接，还可以嵌入其他组件。例如下面分别给出了在菜单项中使用下拉列表和按钮的实例。

<template>
  <div>
    <c-navbar color="primary">
      <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
      <c-navbar-item to="#">介绍</c-navbar-item>
      <c-navbar-item to="#">指南</c-navbar-item>
      <c-navbar-item>
        <c-dropdown>
          <span style="display: flex; align-items: center" slot="activator">深入 <i class="material-icons">arrow_drop_down</i></span>
          <c-dropdown-menu>
            <c-dropdown-item>自定义事件</c-dropdown-item>
            <c-dropdown-item>渲染函数</c-dropdown-item>
            <c-dropdown-item>渲染函数</c-dropdown-item>
          </c-dropdown-menu>
        </c-dropdown>
      </c-navbar-item>
      <c-navbar-item to="#">开发</c-navbar-item>
    </c-navbar>
    <c-navbar color="teal" style="margin-top: 10px">
      <c-navbar-item title to="/">Title</c-navbar-item>
      <c-navbar-item to="#">链接 1</c-navbar-item>
      <c-navbar-item to="#">链接 2</c-navbar-item>
      <c-navbar-item>
        <c-dropdown trigger="click" placement="bottom-start">
          <c-button color="info" slot="activator" icon="expand_more">列表</c-button>
          <c-dropdown-menu :max-width="100">
            <c-dropdown-item>第一个选项</c-dropdown-item>
            <c-dropdown-item>第二个选项</c-dropdown-item>
            <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
          </c-dropdown-menu>
        </c-dropdown>
      </c-navbar-item>
      <c-navbar-item>
        <c-button circle icon="photo_camera" color="primary" flat></c-button>
      </c-navbar-item>
    </c-navbar>
  </div>
</template>

```html
<c-navbar color="primary">
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item to="#">介绍</c-navbar-item>
  <c-navbar-item to="#">指南</c-navbar-item>
  <c-navbar-item>
    <c-dropdown>
      <span style="display: flex; align-items: center" slot="activator">深入 <i class="material-icons">arrow_drop_down</i></span>
      <c-dropdown-menu>
        <c-dropdown-item>自定义事件</c-dropdown-item>
        <c-dropdown-item>渲染函数</c-dropdown-item>
        <c-dropdown-item>渲染函数</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </c-navbar-item>
  <c-navbar-item to="#">开发</c-navbar-item>
</c-navbar>

<c-navbar color="teal">
  <c-navbar-item title to="/">Title</c-navbar-item>
  <c-navbar-item to="#">链接 1</c-navbar-item>
  <c-navbar-item to="#">链接 2</c-navbar-item>
  <c-navbar-item>
    <c-dropdown trigger="click" placement="bottom-start">
      <c-button color="info" slot="activator" icon="expand_more">列表</c-button>
      <c-dropdown-menu :max-width="100">
        <c-dropdown-item>第一个选项</c-dropdown-item>
        <c-dropdown-item>第二个选项</c-dropdown-item>
        <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </c-navbar-item>
  <c-navbar-item>
    <c-button circle icon="photo_camera" color="primary" flat></c-button>
  </c-navbar-item>
</c-navbar>
```

## 分组

你也可以使用`<c-navbar-group>`组件将`<c-navbar-item>`进行分组，一般可以将逻辑、功能、操作类似的元素归为一组。分组之后的菜单项可以更方便地应用样式。例如，下面的例子中将菜单项分成两组：导航链接靠左，注册/登录按钮靠右。

<template>
  <c-navbar color="info">
    <c-navbar-item title to="/">Envision</c-navbar-item>
    <c-navbar-group>
      <c-navbar-item to="#">动态</c-navbar-item>
      <c-navbar-item to="#">文章</c-navbar-item>
      <c-navbar-item to="#">因问</c-navbar-item>
    </c-navbar-group>
    <div class="c-flex-grow"></div>
    <c-navbar-group>
      <c-button-group>
        <c-button color="primary">注册</c-button>
        <c-button color="pink">登录</c-button>
      </c-button-group>
    </c-navbar-group>
  </c-navbar>
</template>

```html
<c-navbar color="info">
  <c-navbar-item title to="/">Envision</c-navbar-item>
  <c-navbar-group>
    <c-navbar-item to="#">动态</c-navbar-item>
    <c-navbar-item to="#">文章</c-navbar-item>
    <c-navbar-item to="#">因问</c-navbar-item>
  </c-navbar-group>
  <div class="c-flex-grow"></div>
  <c-navbar-group>
    <c-button-group>
      <c-button color="primary">注册</c-button>
      <c-button color="pink">登录</c-button>
    </c-button-group>
  </c-navbar-group>
</c-navbar>
```

:::tip 注意
上面的例子中使用了`<div class="c-flex-grow"></div>`分隔两组`<c-navbar-group>`。当你添加在两组菜单项之间添加`c-flex-grow`类时，它将会自动隔开两组菜单项。其原理是带有`c-flex-grow`帮助类的元素将会自动应用`flex-grow: 1`样式。
:::

## 菜单项间隔

你可以调整菜单项的间隔，避免菜单项元素太多时在屏幕区域内无法展示完全。在`<c-navbar>`上添加`padding-x`属性就可以调整所有菜单项的横向间隔。或者，你也可以为每个菜单项单独添加`padding-x`属性。

<template>
  <c-navbar color="primary" :padding-x="2">
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item>
      <c-button color="primary">介绍</c-button>
    </c-navbar-item>
    <c-navbar-item>
      <c-button color="primary">指南</c-button>
    </c-navbar-item>
    <c-navbar-item>
      <c-button color="primary">深入</c-button>
    </c-navbar-item>
    <c-navbar-item>
      <c-button color="primary">开发</c-button>
    </c-navbar-item>
  </c-navbar>
</template>

```html
<c-navbar color="primary" :padding-x="2">
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item>
    <c-button color="primary">介绍</c-button>
  </c-navbar-item>
  <c-navbar-item>
    <c-button color="primary">指南</c-button>
  </c-navbar-item>
  <c-navbar-item>
    <c-button color="primary">深入</c-button>
  </c-navbar-item>
  <c-navbar-item>
    <c-button color="primary">开发</c-button>
  </c-navbar-item>
</c-navbar>
```

## 紧凑型

默认的导航条占据了64px的高度空间。你可以在导航条上添加`dense`属性，来使高度变为48px。

<template>
  <c-navbar class="example" dense>
    <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
    <c-navbar-item to="#">介绍</c-navbar-item>
    <c-navbar-item to="#">指南</c-navbar-item>
    <c-navbar-item to="#">深入</c-navbar-item>
    <c-navbar-item to="#">开发</c-navbar-item>
  </c-navbar>
</template>

<template>
  <c-navbar dense color="teal" style="margin-top: 10px">
    <c-navbar-item title to="/">Title</c-navbar-item>
    <c-navbar-item to="#">链接 1</c-navbar-item>
    <c-navbar-item to="#">链接 2</c-navbar-item>
    <c-navbar-item>
      <c-dropdown trigger="click" placement="bottom-start">
        <c-button color="primary" size="small" slot="activator" icon="expand_more">列表</c-button>
        <c-dropdown-menu :max-width="100">
          <c-dropdown-item>第一个选项</c-dropdown-item>
          <c-dropdown-item>第二个选项</c-dropdown-item>
          <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
        </c-dropdown-menu>
      </c-dropdown>
    </c-navbar-item>
    <c-navbar-item>
      <c-button circle size="small" icon="photo_camera" color="primary" flat></c-button>
    </c-navbar-item>
  </c-navbar>
</template>

```html
<c-navbar class="example">
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item to="#">介绍</c-navbar-item>
  <c-navbar-item to="#">指南</c-navbar-item>
  <c-navbar-item to="#">深入</c-navbar-item>
  <c-navbar-item to="#">开发</c-navbar-item>
</c-navbar>

<c-navbar dense color="teal">
  <c-navbar-item title to="/">Title</c-navbar-item>
  <c-navbar-item to="#">链接 1</c-navbar-item>
  <c-navbar-item to="#">链接 2</c-navbar-item>
  <c-navbar-item>
    <c-dropdown trigger="click" placement="bottom-start">
      <c-button color="primary" size="small" slot="activator" icon="expand_more">列表</c-button>
      <c-dropdown-menu :max-width="100">
        <c-dropdown-item>第一个选项</c-dropdown-item>
        <c-dropdown-item>第二个选项</c-dropdown-item>
        <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </c-navbar-item>
  <c-navbar-item>
    <c-button circle size="small" icon="photo_camera" color="primary" flat></c-button>
  </c-navbar-item>
</c-navbar>
```

## 无阴影效果

在导航条上添加`flat`属性，导航条将不再呈现立体阴影效果。

<c-navbar color="green" flat>
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item to="#">介绍</c-navbar-item>
  <c-navbar-item to="#">指南</c-navbar-item>
  <c-navbar-item to="#">深入</c-navbar-item>
  <c-navbar-item to="#">开发</c-navbar-item>
</c-navbar>

```html
<c-navbar color="green" flat>
  <c-navbar-item title to="/">Giraffe UI</c-navbar-item>
  <c-navbar-item to="#">介绍</c-navbar-item>
  <c-navbar-item to="#">指南</c-navbar-item>
  <c-navbar-item to="#">深入</c-navbar-item>
  <c-navbar-item to="#">开发</c-navbar-item>
</c-navbar>
```

