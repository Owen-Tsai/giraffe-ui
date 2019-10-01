# Icon 图标

:::tip 重要更新
出于优化等的考虑，Giraffe UI 停止使用 Font Awesome 和 mdi 图标集，改为内置 Google 官方的 material design 图标集。
:::

图标不是组件，但作为一个常见元素经常被用于应用或是其他的组件中。

## 基础用法

<div style="margin-top: 20px;">
  <i class="material-icons">face</i>
  <i class="material-icons">account_box</i>
  <i class="material-icons">alarm</i>
  <i class="material-icons">assessment</i>
  <i class="material-icons">favorite</i>
</div>

```html
<i class="material-icons">face</i>
<i class="material-icons">account_box</i>
<i class="material-icons">alarm</i>
<i class="material-icons">assessment</i>
<i class="material-icons">favorite</i>
```

图标本质上是一种字体，因此可以使用`color`, `font-size`等 CSS 属性调整图标的样式。为了方便图标可以使用 Giraffe UI 提供的色板中的颜色，从而使图标与其他元素具有统一的风格，也可以在`<i>`标签上使用`color`属性来指定颜色。

<div style="margin-top: 20px;">
  <i class="material-icons" color="primary" style="font-size: 40px;">face</i>
  <i class="material-icons" color="teal" style="font-size: 30px;">account_box</i>
  <i class="material-icons" color="blue">alarm</i>
  <i class="material-icons" color="pink">assessment</i>
  <i class="material-icons" color="danger">favorite</i>
</div>

```html
<i class="material-icons" color="primary" style="font-size: 40px;">face</i>
<i class="material-icons" color="teal" style="font-size: 30px;">account_box</i>
<i class="material-icons" color="blue">alarm</i>
<i class="material-icons" color="pink">assessment</i>
<i class="material-icons" color="danger">favorite</i>
```

## 图标列表

你可以从 [Google material design 官网](https://material.io/resources/icons/?icon=favorite&style=baseline)看到所有图标的列表。但由于某些原因，如果网页无法正常加载，你可以从下面看到这些图标。

<template>
  <div>
    <div class="control">
      <c-input prefix-icon="search" placeholder="输入图标名过滤图标" width="50%" v-model="search"></c-input>
      <c-button color="info" @click="toggle">{{ btn }}</c-button>
    </div>
    <div class="icons-container" v-if="visible">
      <div class="icon" v-for="icon in iconList" :key="icon">
        <i class="material-icons demo-icon">{{ icon }}</i>
        <p class="demo-icon-name">{{ icon }}</p>
      </div>
    </div>
    <div class="no-icon" v-if="iconList.length===0">
      <p>没有找到相关图标，请修改搜索内容</p>
    </div>
</div>
</template>

## 使用帮助类（helper-class）修饰图标

Giraffe UI 为图标提供了 2 个帮助类，分别是`icon-spin`和`icon-pulse`。在图标`<i>`标签上添加这两个类，就能实现特殊的效果：

<div style="margin-top: 20px;">
  <i class="material-icons icon-spin" color="primary" style="font-size: 40px;">refresh</i>
  <i class="material-icons icon-pulse" color="primary" style="font-size: 40px;">refresh</i>
</div>

```html
<i class="material-icons icon-spin" color="primary" style="font-size: 40px;">refresh</i>
<i class="material-icons icon-pulse" color="primary" style="font-size: 40px;">refresh</i>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| color | 图标的颜色 | string | [查看受支持的颜色列表](color.md) | — |

<script>
  import iconNames from '../../src/utilities/icons.name'

  export default {
    data: () => ({
      fullIcons: iconNames,
      visible: true,
      search: null
    }),
    computed: {
      btn() {
        return this.visible ? '隐藏全部图标' : '显示全部图标'
      },
      iconList() {
        return this.fullIcons.filter(item => !this.search || item.includes(this.search))
      }
    },
    methods: {
      toggle() {
        this.visible = (this.visible ? false : true);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .icons-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));

    .icon {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      text-overflow: warp;
      margin-bottom: 5px;
      padding: 5px;
    }

    .demo-icon {
      font-size: 48px;
    }

    .demo-icon-name {
      margin-top: 0;
      font-size: 12px;
      line-height: 1;
      text-justify: newspaper;
      word-break: break-all;
    }
  }

  .no-icon {
    text-align: center;
    color: lighten(grey, 30%);
    font-size: 1.2rem;
    line-height: 3rem;
  }
</style>