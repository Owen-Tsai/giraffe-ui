# Card 卡片组件

卡片是基本的元素容器，可以容纳大部分组件。

## 基础用法

<div style="margin-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
  <c-card style="width: 350px; margin-top: 10px;">
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  </c-card>
  <c-card style="width: 350px; margin-top: 10px;">
    <div>
      <img src="http://localhost:8081/hero.jpg" height="180px" width="100%" style="object-fit: cover">
    </div>
  </c-card>
</div>

```vue
<template>
  <div class="container">
    <c-card class="card">
      <div>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </c-card>
    <c-card class="card">
      <div>
        <img src="hero.jpg">
      </div>
    </c-card>
  </div>
</template>

<style scoped>
  .container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    width: 350px;
    margin-top: 10px;
  }
  img {
    height: 180px;
    width: 100%;
    object-fit: cover;
  }
</style>
```

为卡片组件指定`color`属性，可以设置卡片的背景颜色。

<div style="margin-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
  <c-card style="width: 350px; margin-top: 10px;" color="primary">
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  </c-card>
  <c-card style="width: 350px; margin-top: 10px;" color="yellow">
    <div>
      <img src="http://localhost:8081/hero.jpg" height="180px" width="100%" style="object-fit: cover">
    </div>
  </c-card>
</div>

```html
<c-card color="primary">
  <div>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</c-card>
<c-card color="yellow">
  <div>
    <img src="/hero.jpg">
  </div>
</c-card>
```

## 阴影效果

默认情况下，当鼠标指针悬浮在卡片组件上时，卡片会添加`box-shadow`规则，营造出立体阴影的样式。你可以通过指定`flat`属性移除这一特征，或者指定`raised`属性来使卡片在任何情况下都具有立体阴影效果。

<div style="margin-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
  <c-card style="width: 350px; margin-top: 10px;" color="primary" raised>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  </c-card>
  <c-card style="width: 350px; margin-top: 10px;" color="yellow" flat>
    <div>
      <img src="http://localhost:8081/hero.jpg" height="180px" width="100%" style="object-fit: cover">
    </div>
  </c-card>
</div>

```html
<c-card color="primary" raised>
  <div>
    Lorem ipsum dolor sit amet...
  </div>
</c-card>
<c-card color="yellow" flat>
  <div>
    <img src="/hero.jpg">
  </div>
</c-card>
```

## 带有标题

卡片组件包含了一个标题插槽，允许通过`header`插槽为卡片传入一个标题。

<div style="margin-top: 10px; display: flex; justify-content: center; flex-wrap: wrap;">
  <c-card style="width: 350px; margin-top: 10px;">
    <div slot="header"><b>标题</b></div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </div>
  </c-card>
</div>

```html
<c-card>
  <div slot="header"><b>标题</b></div>
  <div>
    Lorem ipsum dolor sit amet...
  </div>
</c-card>
```

## 带有脚部 (footer)

卡片组件也包含了一个脚部`footer`插槽。通常 footer 区域可以放置用于与用户交互的组件。

<div style="margin-top: 10px; display: flex; justify-content: center; flex-wrap: wrap;">
  <c-card style="width: 350px; margin-top: 10px;" color="success">
    <div slot="header"><b>待办事项</b></div>
    <ul>
      <li>您今天有 <b>99</b> 个待办事项</li>
      <li>其中有 <b>1</b> 个紧急事项</li>
      <li>您的第一个事项安排在 <b>3</b> 分钟后</li>
    </ul>
    <div slot="footer">
      <c-button>我知道了</c-button>
    </div>
  </c-card>
</div>

```html
<c-card color="success">
  <div slot="header"><b>待办事项</b></div>
  <ul>
    <li>您今天有 <b>99</b> 个待办事项</li>
    <li>其中有 <b>1</b> 个紧急事项</li>
    <li>您的第一个事项安排在 <b>3</b> 分钟后</li>
  </ul>
  <div slot="footer">
    <c-button>我知道了</c-button>
  </div>
</c-card>
```

## API

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| color | 卡片的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| [下一版本] outlined | 突出卡片的边框，将在下一版本添加 | boolean | — | false |
| flat | 不显示卡片阴影 | boolean | — | false |
| raised | 总是显示卡片阴影 | boolean | — | false |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，卡片的内容 |
| header | 标题插槽，卡片的头部区域 |
| footer | 脚部插槽，卡片的底部区域 |
