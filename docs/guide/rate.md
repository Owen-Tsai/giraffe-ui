# Rate 评价组件

评价组件允许用户直观地选择一个分值，或者向用户展示一个分值。

## 基础用法

<div class="demo-block">
  <c-rate v-model="rate"></c-rate>
</div>

```html
<c-rate v-model="rate"></c-rate>
```

默认情况下，评价组件使用`warning`色作为被激活图标的颜色，选用`grey-300`作为未被激活图标的颜色。你可以在评价组件上指定`color`属性来改变激活图标的颜色，使之符合你的产品环境。

<div class="demo-block">
  <c-rate color="primary" v-model="rate"></c-rate>
</div>

```html
<c-rate color="primary" v-model="rate"></c-rate>
```

评价组件是一个可以使用`v-model`来实现数据与变量绑定的组件：

<template>
  <div class="demo-block">
    <c-rate v-model="rate1"></c-rate>
  </div>
</template>

```vue
<template>
  <c-rate v-model="rate"></c-rate>
</template>

<script>
  export default {
    data: () => ({
      rate: 3
    })
  }
</script>
```

## 改变图标

默认的评价组件使用星星图标，你可以通过传入`icon`和`inactive-icon`这两个属性来分别指定处于激活状态和未激活状态下的图标。但当然，你也可以只指定`icon`属性中的一个，`inactive-icon`未被指定，将会采用与`icon`相同的值。

<div class="demo-block">
  <c-rate icon="favorite" v-model="rate" inactive-icon="favorite_border" color="red"></c-rate>
</div>

```html
<c-rate icon="favorite" v-model="rate" inactive-icon="favorite_border" color="red"></c-rate>
```

## 改变分值上限

如果你在开发中需要展示的评分不在最大为 5 的区间内，你可以通过指定`max`属性来调整分值上限。

<template>
  <div class="demo-block">
    <c-rate icon="favorite" inactive-icon="favorite_border" color="red" v-model="rate2" :max="8"></c-rate>
  </div>
</template>

```vue
<template>
  <c-rate
    icon="favorite"
    inactive-icon="favorite_border"
    color="red"
    v-model="rate"
    :max="8"
  ></c-rate>
</template>

<script>
  export default {
    data: () => ({
      rate: 5
    })
  }
</script>
```

## 显示分值

你可以通过添加`show-score`属性来在评分图标的右侧展示一个当前分值。

<template>
  <div class="demo-block">
    <c-rate icon="favorite" inactive-icon="favorite_border" color="red" v-model="rate3" :max="8" show-score></c-rate>
  </div>
</template>

```vue
<template>
  <c-rate
    icon="favorite"
    inactive-icon="favorite_border"
    color="red"
    v-model="rate"
    :max="8"
    show-score
  ></c-rate>
</template>

<script>
  export default {
    data: () => ({
      rate: 5
    })
  }
</script>
```

## 显示文字

通过添加`show-text`属性可以让右侧显示辅助性文字，这能够为用户指明评分标准。辅助性文字是一个数组，默认值是`['不满', '失望', '中等', '良好', '满意']`。你可以为`text`属性传入一个数组覆盖默认值。

尤其需要注意的是，当评分上限不是默认值5时，为`text`传入的数组长度应当始终与`max`属性值相等。

<template>
  <div class="demo-block">
    <c-rate v-model="rate4" show-text></c-rate>
    <br>
    <c-rate v-model="rate5" show-text :text="['wrost', 'bad', 'so-so', 'good', 'awesome']"></c-rate>
    <br>
    <c-rate icon="favorite" inactive-icon="favorite_border" color="red" v-model="rate6" :max="8" show-text :text="['有一点喜欢你', '有两点喜欢你', '有三点喜欢你', '有四点喜欢你', '有五点喜欢你', '有六点喜欢你', '有七点喜欢你', '有八点喜欢你']"></c-rate>
  </div>
</template>

```vue
<template>
  <div class="demo-block">
    <c-rate v-model="rate4" show-text></c-rate>

    <c-rate
      v-model="rate5"
      show-text
      :text="['wrost', 'bad', 'so-so', 'good', 'awesome']"
    ></c-rate>

    <c-rate
      icon="favorite"
      inactive-icon="favorite_border"
      color="red"
      v-model="rate6"
      :max="8"
      show-text
      :text="arr"></c-rate>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rate4: 3,
      rate5: 1,
      rate6: 1,
      arr: ['有一点喜欢你', '有两点喜欢你', '有三点喜欢你', '有四点喜欢你', '有五点喜欢你', '有六点喜欢你', '有七点喜欢你', '有八点喜欢你']
    })
  }
</script>
```

## 阻止交互

当你只想展示一个分数，或者不想再让用户修改一个分数时，可以添加`readonly`属性将评价组件变为只读。

<div class="demo-block">
  <c-rate icon="face" color="success" v-model="rateStatic" readonly></c-rate>
</div>

```html
<c-rate icon="face" color="success" v-model="rateStatic" readonly></c-rate>
```

<script>
  export default {
    data: () => ({
      rate: 0,
      rate1: 3,
      rate2: 5,
      rate3: 5,
      rate4: 3,
      rate5: 1,
      rate6: 1,
      rateStatic: 3
    })
  }
</script>

<style scoped>
  .demo-block {
    margin-top: 20px
  }
</style>

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| color | 评价图标被激活时颜色 | string | [查看受支持的颜色列表](color.md) | — |
| icon | 采用指定的图标替代默认评价图标 | string | [查看所有图标列表](icon.md) | — |
| inactive-icon | 采用指定的图标替代评价中未激活的图标 | string | [查看所有图标列表](icon.md) | — |
| max | 评分上限 | number | — | 5 |
| text | 每一级评分的辅助文字 | array | — | ['不满', '失望', '中等', '良好', '满意'] |
| show-score | 显示分数 | boolean | — | false |
| show-text | 显示辅助性文字 | boolean | — | false |
| readonly | 只读，不允许修改评分 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 当评分改变的时候触发 | 当前评分 |