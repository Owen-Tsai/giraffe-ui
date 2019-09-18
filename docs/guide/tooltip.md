# Tooltip 工具提示组件

工具提示组件是一个依赖于 Popper 的悬浮层组件，用来为一个元素显示说明或提示。

## 基础用法

工具提示组件包含两个插槽，一个具名插槽`activator`是索引元素（reference），另一个默认插槽是悬浮层（popper）。当用户的鼠标指针指向索引元素时，悬浮层就会出现在索引元素旁边。

你也可以不使用默认插槽，而是使用`content`属性指定工具提示的内容。

<c-tooltip>
  <p slot="activator">鼠标指针指向这句话来查看工具提示！</p>
  <span>很好，你现在看到我了</span>
</c-tooltip>

```html
<c-tooltip>
  <p slot="activator">鼠标指针指向这句话来查看工具提示！</p>
  <span>很好，你现在看到我了</span>
</c-tooltip>
<!--
或是
<c-tooltip content="很好，你现在看到我了">
  <p slot="activator">鼠标指针指向这句话来查看工具提示！</p>
</c-tooltip>
-->
```

工具提示组件的悬浮层默认以灰色作为底色。你也可以指定一个`color`属性来让悬浮层具备不同颜色的背景。

<template>
  <div style="margin-top: 20px;">
    <c-tooltip v-for="color in colors" :key="color" :color="color">
      <c-button slot="activator" :color="color" style="margin-right: 10px;">{{ color }}</c-button>
      <span>我是 {{ color }} 色的！</span>
    </c-tooltip>
  </div>
</template>

```vue
<template>
  <div>
    <c-tooltip v-for="color in colors" :key="color" :color="color">
      <c-button slot="activator" :color="color">{{ color }}</c-button>
      <span>我是 {{ color }} 色的！</span>
    </c-tooltip>
  </div>
</template>

<script>
  export default {
    data: () => ({
      colors: [
        'primary', 'pink', 'teal', 'lime', 'indigo', 'info'
      ]
    })
  }
</script>
```

## 限定悬浮层的位置

悬浮层默认出现在索引元素的下方，就像上面的例子那样。你也可以让悬浮层出现在索引元素的左、右、下方。你只需要更改`placement`属性就可以了。在下面有 12 种不同方向的展示方式，可以通过以下完整示例来理解`placement`属性并选择你要的效果。

:::tip 注意
如果指定的位置被窗口阻挡（例如指定了悬浮层出现在左侧，但是从索引元素到左侧窗口边框的距离不足以容纳悬浮层内容），那么悬浮层将自动反向显示在索引元素的另外一侧。
:::

<div class="box">
  <div class="top">
    <c-tooltip class="item" placement="top-start">
      <c-button slot="activator">上左</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="top">
      <c-button slot="activator">上边</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="top-end">
      <c-button slot="activator">上右</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
  </div>
  <div class="left">
    <c-tooltip class="item" placement="left-start">
      <c-button slot="activator">左上</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="left">
      <c-button slot="activator">左边</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="left-end">
      <c-button slot="activator">左下</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
  </div>
  <div class="right">
    <c-tooltip class="item" placement="right-start">
      <c-button slot="activator">右上</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="right">
      <c-button slot="activator">右边</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="right-end">
      <c-button slot="activator">右下</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
  </div>
  <div class="bottom">
    <c-tooltip class="item" placement="bottom-start">
      <c-button slot="activator">下左</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="bottom">
      <c-button slot="activator">下边</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
    <c-tooltip class="item" placement="bottom-end">
      <c-button slot="activator">下右</c-button>
      <span>现在你看到我了~</span>
    </c-tooltip>
  </div>
</div>

```html
<div class="top">
  <c-tooltip class="item" placement="top-start">
    <c-button slot="activator">上左</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="top">
    <c-button slot="activator">上边</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="top-end">
    <c-button slot="activator">上右</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
</div>
<div class="left">
  <c-tooltip class="item" placement="left-start">
    <c-button slot="activator">左上</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="left">
    <c-button slot="activator">左边</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="left-end">
    <c-button slot="activator">左下</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
</div>
<div class="right">
  <c-tooltip class="item" placement="right-start">
    <c-button slot="activator">右上</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="right">
    <c-button slot="activator">右边</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="right-end">
    <c-button slot="activator">右下</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
</div>
<div class="bottom">
  <c-tooltip class="item" placement="bottom-start">
    <c-button slot="activator">下左</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="bottom">
    <c-button slot="activator">下边</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
  <c-tooltip class="item" placement="bottom-end">
    <c-button slot="activator">下右</c-button>
    <span>现在你看到我了~</span>
  </c-tooltip>
</div>
```

<style lang="scss">
  .box {
    width: 80%;
    margin: 0 auto;
    .top {
      text-align: center;
    }
    .left {
      float: left;
      width: 80px;
    }
    .right {
      float: right;
      width: 80px;
    }
    .bottom {
      clear: both;
      text-align: center;
    }
    .item {
      margin: 4px;
    }
    .left .c-tooltip-popper,
    .right .c-tooltip-popper {
      padding: 8px 10px;
    }
  }
</style>

## 不自动消失

工具提示在默认情况下总是在鼠标移入索引元素时出现，在鼠标移出索引元素后消失。当你想要一条工具提示不可被隐藏时，可以添加`persistent`属性。

<p>
  这句话带有一个
  <c-tooltip persistent>
    <span slot="activator">不可关闭</span>
    <span>嗯，你会一直看得到我</span>
  </c-tooltip>
  的工具提示
</p>

```html
<p>
  这句话带有一个
  <c-tooltip persistent>
    <span slot="activator">不可关闭</span>
    <span>嗯，你会一直看得到我</span>
  </c-tooltip>
  的工具提示
</p>
```

## 指定悬浮层最大宽度

悬浮层宽度默认根据内容的长短自动调整。但如果你的工具提示内容过长，最好换行显示。这个时候你可以为工具提示制定一个最大长度。这个长度是一个以`px`为单位的数字或是一个带单位的字符串。

<p>
  这句话带有一个
  <c-tooltip placement="top">
    <span style="color: blue" slot="activator">内容过长</span>
    <span>史蒂夫·乔布斯，美国发明家、企业家、美国苹果公司联合创办人。</span>
  </c-tooltip>
  的工具提示，而且没有换行
</p>
<p>
  这句话带有一个
  <c-tooltip placement="bottom" max-width="120px">
    <span style="color: blue" slot="activator">内容过长</span>
    <span>史蒂夫·乔布斯，美国发明家、企业家、美国苹果公司联合创办人。</span>
  </c-tooltip>
  的工具提示，带有换行
</p>

```html
<p>
  这句话带有一个
  <c-tooltip placement="top">
    <span style="color: blue" slot="activator">内容过长</span>
    <span>史蒂夫·乔布斯，美国发明家、企业家、美国苹果公司联合创办人。</span>
  </c-tooltip>
  的工具提示，而且没有换行
</p>
<p>
  这句话带有一个
  <c-tooltip placement="bottom" max-width="120px">
    <span style="color: blue" slot="activator">内容过长</span>
    <span>史蒂夫·乔布斯，美国发明家、企业家、美国苹果公司联合创办人。</span>
  </c-tooltip>
  的工具提示，带有换行
</p>
```

## 延迟出现

你可以为工具提示指定一个时间，用户触发工具提示后，悬浮层会延迟指定的时间后再显示。同样，也会在延迟相同时间之后消失。

<template>
  <c-tooltip :delay="1000" color="info">
    <c-button color="info" slot="activator">索引元素</c-button>
    <span>延迟 1 秒后出现提示</span>
  </c-tooltip>
</template>

```html
<c-tooltip :delay="1000" color="info">
  <c-button color="info" slot="activator">索引元素</c-button>
  <span>延迟 1 秒后出现提示</span>
</c-tooltip>
```

<script>
  export default {
    data: () => ({
      colors: [
        'primary', 'pink', 'teal', 'lime', 'indigo', 'info'
      ]
    })
  }
</script>