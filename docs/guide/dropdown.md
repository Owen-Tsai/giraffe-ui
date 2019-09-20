# Dropdown 下拉列表组件

列表常用于菜单中，是一组折叠项的集合。

## 基础用法

下拉列表包含两个插槽，具名插槽`activator`是索引元素（reference），默认插槽是悬浮层（popper）。当鼠标指针移入索引元素时，悬浮层就会出现在索引元素旁边。

使用下拉列表`<c-dropdown>`，需要配合下拉列表的菜单`<c-dropdown-menu>`和下拉列表的列表项`<c-dropdown-item>`这两个组件。请注意查看下面的示例：

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
    <c-button slot="activator" color="primary" style="margin-right: 20px;">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
  <c-dropdown color="cyan">
    <c-button slot="activator" color="cyan" style="margin-right: 20px;">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
  <c-dropdown color="pink">
    <c-button slot="activator" color="pink">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown color="primary">
  <c-button slot="activator" color="primary">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item>第一个选项</c-dropdown-item>
    <c-dropdown-item>第二个选项</c-dropdown-item>
    <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
<c-dropdown color="cyan">
  <c-button slot="activator" color="cyan">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item>第一个选项</c-dropdown-item>
    <c-dropdown-item>第二个选项</c-dropdown-item>
    <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
<c-dropdown color="pink">
  <c-button slot="activator" color="pink">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item>第一个选项</c-dropdown-item>
    <c-dropdown-item>第二个选项</c-dropdown-item>
    <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## 图标

你可以通过`icon`属性为下拉列表中的列表项指定一个图标，图标将会显示在文字之前。

<template>
  <c-dropdown>
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown>
  <c-button slot="activator">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## 分割线

当某个选项或某些选项与之前的选项功能或含义相差较大时，可以使用分割线对下拉列表进行分割。只需要在你想要进行分割的位置的后一个列表项中增加`divided`属性即可。

<template>
  <c-dropdown>
    <c-button slot="activator" style="margin-right: 20px;">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
  <c-dropdown color="info">
    <c-button color="info" slot="activator">下拉菜单</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown>
  <c-button slot="activator">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
<c-dropdown color="info">
  <c-button color="info" slot="activator">下拉菜单</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## 限定宽度

下拉列表的宽度默认以文字最长的一个列表项的宽度为准。在少数情况下你可能想要限制下拉列表的最大宽度，可以通过为`<c-dropdown-menu>`组件的`max-width`属性传入一个包含单位的字符串或数字值来实现。如果你传入的值是数字，那么单位将被视为`px`。

<template>
  <c-dropdown>
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu max-width="100px">
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown>
  <c-button slot="activator">下拉菜单</c-button>
  <c-dropdown-menu max-width="100px">
    <c-dropdown-item>第一个选项</c-dropdown-item>
    <c-dropdown-item>第二个选项</c-dropdown-item>
    <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## 限定高度

在默认情况下，下拉列表会展示出所有的选项。有些情形下下拉选项过多，不宜全部展示，这个时候可以为`<c-dropdown-menu>`组件设置`max-height`属性限制下拉列表的高度。如果列表内容比这个高度长，那么下拉列表会出现一个滚动条。

与`max-width`属性类似，`max-height`需要你传入一个包含单位的字符串或数字值。如果你传入的值是数字，那么单位将被视为`px`。

<template>
  <c-dropdown>
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu max-height="120px">
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
      <c-dropdown-item>第四个选项</c-dropdown-item>
      <c-dropdown-item>第五个选项</c-dropdown-item>
      <c-dropdown-item>第六个选项</c-dropdown-item>
      <c-dropdown-item>第七个选项</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<template>
  <c-dropdown>
    <c-button slot="activator">下拉菜单</c-button>
    <c-dropdown-menu max-height="120px">
      <c-dropdown-item>第一个选项</c-dropdown-item>
      <c-dropdown-item>第二个选项</c-dropdown-item>
      <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
      <c-dropdown-item>第四个选项</c-dropdown-item>
      <c-dropdown-item>第五个选项</c-dropdown-item>
      <c-dropdown-item>第六个选项</c-dropdown-item>
      <c-dropdown-item>第七个选项</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>
```

## 触发方式

下拉列表默认在鼠标悬浮于索引元素之上时触发。你可以将`trigger`设定为`click`，这样只有当用户点击索引元素的时候，下拉列表才会显示。

<template>
  <c-dropdown>
    <c-button slot="activator" style="margin-right: 20px;">hover 触发</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
  <c-dropdown color="purple" trigger="click">
    <c-button color="purple" slot="activator">click 触发</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown>
  <c-button slot="activator">hover 触发</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
<c-dropdown color="purple" trigger="click">
  <c-button color="purple" slot="activator">click 触发</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## 位置

下拉列表是一个悬浮层（popper）元素，这意味着和其他 popper 元素一样，下拉列表可以指定位置。关于所有可选择的位置值，请查看 [工具提示](tooltip.md#限定悬浮层的位置) 组件的位置说明。

下面是简单的例子，下拉列表分别出现在索引元素的左侧和右侧。

<template>
  <c-dropdown color="blue" placement="left-start">
    <c-button color="blue" slot="activator" style="margin-right: 20px;">左侧</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
  <c-dropdown color="purple" placement="right-start">
    <c-button color="purple" slot="activator">右侧</c-button>
    <c-dropdown-menu>
      <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
      <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
      <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
      <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
    </c-dropdown-menu>
  </c-dropdown>
</template>

```html
<c-dropdown color="blue" placement="left-start">
  <c-button color="blue" slot="activator">左侧</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
<c-dropdown color="purple" placement="right-start">
  <c-button color="purple" slot="activator">右侧</c-button>
  <c-dropdown-menu>
    <c-dropdown-item icon="far fa-calendar-alt">日程安排</c-dropdown-item>
    <c-dropdown-item icon="far fa-calendar-plus">新建日程</c-dropdown-item>
    <c-dropdown-item icon="fas fa-bookmark">我的收藏</c-dropdown-item>
    <c-dropdown-item icon="fas fa-cog" divided>系统设置</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>
```

## API 列表

### `<c-dropdown-item>` Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| icon | 下拉列表项的图标 | string | — | — |
| divided | 向下拉选项添加分割线 | boolean | — | — |

### `<c-dropdown-menu>` Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| max-width | 下拉列表最大宽度 | string, number | — | — |
| max-height | 下拉列表最大高度 | string, number | — | — |

### `<c-dropdown>` Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| trigger | 下拉列表触发方式 | string | hover/click | hover |
| placement | 下拉列表悬浮层相对于索引元素的位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |

### `<c-dropdown-item>` Slot
| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，列表项内容 |

### `<c-dropdown-menu>` Slot
| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，下拉列表的内容。子组件只能是`<c-dropdown-item>` |

### `<c-dropdown>` Slot
| 名称 | 说明                |
|------|--------------------|
| activator | 下拉列表索引元素 |
| — | 默认插槽，下拉列表。子组件只能是`<c-dropdown-menu>` |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change:visible | 当下拉列表可见性发生变化时触发 | 下拉列表可见性（`true`/`false`） |
| click:item | 当下拉列表中的某一项被点击时触发 | 被点击的列表项子组件 |
| click:outside | 当下拉列表的触发方式设置为`click`时，点击下拉列表之外的区域触发 | — |