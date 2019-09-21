# Avatar 头像组件

头像组件用于展示用户头像或品牌标识。

## 基础用法

头像组件会将`username`属性值中，以空格或短横线分割的子串首字母作为initials，显示在具有背景色的圆形区域上。这种方式往往可以在没有用户头像的图片时用来标识用户的身份。

你也可以手动指定`initials`属性，而不是让系统通过`username`自动计算。

<c-avatar inline username="Owen Tsai"></c-avatar>
<c-avatar inline initials="YLY"></c-avatar>
<c-avatar inline username="中文"></c-avatar>

```html
<c-avatar inline username="Owen Tsai"></c-avatar>
<c-avatar inline initials="YLY"></c-avatar>
<c-avatar inline username="中文"></c-avatar>
```
:::tip 注意
默认情况下头像组件的布局是`flex`，这意味着每个头像将在文档流中单独占据一行。你可以为头像指定`inline`属性，来使头像组件的布局成为`inline-flex`，就像例子中一样。
:::

通过指定`color`属性值可以改变头像组件默认的背景颜色。

<c-avatar inline username="Owen Tsai" color="info"></c-avatar>
<c-avatar inline initials="YLY" color="primary"></c-avatar>

```html
<c-avatar inline username="Owen Tsai" color="info"></c-avatar>
<c-avatar inline initials="YLY" color="primary"></c-avatar>
```

你可以指定`src`属性，来使用图片代替文字标识用户的身份。

<template>
  <c-avatar inline :src="img"></c-avatar>
</template>


```html
<c-avatar inline src="giraffe-ui.jpg"></c-avatar>
```

## 使用图标

你也可以在头像组件上使用图标，就像在没有传入`src`属性的时候使用文字一样。

<c-avatar inline icon="fas fa-user"></c-avatar>
<c-avatar inline icon="far fa-user" color="pink"></c-avatar>

```html
<c-avatar inline icon="fas fa-user"></c-avatar>
<c-avatar inline icon="far fa-user" color="pink"></c-avatar>
```

## 指定尺寸

你可以通过`size`属性传入一个尺寸，来指定头像的大小。与 Giraffe UI 中大部分组件不同，头像组件的`size`属性**只能是**`Number`型，单位默认为`px`。

头像组件的缺省`size`为40px。

<template>
  <div style="display: flex; align-items: center">
    <c-avatar inline :src="img" :size="80"></c-avatar>
    <c-avatar inline icon="fas fa-user" :size="60" color="red" style="margin-left: 5px"></c-avatar>
    <c-avatar inline username="Owen Tsai" color="green" style="margin-left: 5px"></c-avatar>
  </div>
</template>

```html
<c-avatar inline :src="img" :size="80"></c-avatar>
<c-avatar inline icon="fas fa-user" :size="60" color="red"></c-avatar>
<c-avatar inline username="Owen Tsai" color="green"></c-avatar>
```

## 不使用圆形

头像组件默认采用了圆形边框。如果你不想使用圆形的头像，而是想用早些年应用中常见的方形，则需要将`circle`属性显式地指定为`false`。

<template>
  <c-avatar inline :src="img" :size="80" :circle="false"></c-avatar>
</template>

```html
<c-avatar inline :src="img" :size="80" :circle="false"></c-avatar>
```

## 自定义样式

头像组件更灵活的使用方式是可以自定义样式。你可以为`style`属性传入一个对象，这个对象包含你需要为头像组件自定义的样式规则。

<template>
  <c-avatar inline username="Someone" :custom-style="myStyle"></c-avatar>
</template>

```vue
<template>
  <c-avatar inline username="Someone" :custom-style="myStyle"></c-avatar>
</template>

<script>
  export default {
    data: () => ({
      myStyle: {
        backgroundColor: '#fcc3b2',
        color: '#666699',
        border: '1px solid #ed8894',
        borderRadius: '30%'
      }
    })
  }
</script>
```

<script>
  import img from './img/hero.jpg';
  export default {
    data: () => ({
      img: img,
      myStyle: {
        backgroundColor: '#fcc3b2',
        color: '#666699',
        border: '1px solid #ed8894',
        borderRadius: '30%'
      }
    })
  }
</script>


## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| icon | 头像的图标 | string | — | — |
| size | 头像的尺寸 | number | — | — |
| color | 头像的背景颜色。只有当头像没有图片可以显示时生效 | string | [查看受支持的颜色列表](color.md) | — |
| circle | 圆形头像 | boolean | — | true |
| username | 用户名。以空格或短横线分割时，每一部分的首字母/汉字将被显示。只有当头像没有图片可以显示时生效 | string | — | — |
| initials | 被显示于头像上的文字，只有当头像没有图片可以显示时生效 | string | — | — |
| custom-style | 头像组件的自定义样式 | object | — | — |