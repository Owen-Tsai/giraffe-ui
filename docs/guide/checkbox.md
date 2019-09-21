# Checkbox 复选框组件

复选框是表单组件之一，常用于让用户选取一个或一个以上选项的场合。

## 基础用法

一个复选框必须具备一个`label`属性。

下面例子的前两个选项中，没有在默认插槽额外插入文字，因此`label`属性也决定了复选框的标签文本；但第三个选项中，除了`label`属性设置了值外，默认插槽也传入了文本。在这种情况下，**默认插槽的文本将被显示在复选框旁边作为选项文字，而`label`属性指定的值在双向数据流中与变量`major`绑定**。

<template>
  <div style="margin-top: 20px;">
    <c-checkbox label="自动化" v-model="major"></c-checkbox>
    <c-checkbox label="通信工程" v-model="major"></c-checkbox>
    <c-checkbox label="医工" v-model="major">生物医学工程</c-checkbox>
    <p>你喜欢的专业有：{{ major }}</p>
  </div>
</template>

```vue
<template>
  <div>
    <c-checkbox label="自动化" v-model="major"></c-checkbox>
    <c-checkbox label="通信工程" v-model="major"></c-checkbox>
    <c-checkbox label="医工" v-model="major">生物医学工程</c-checkbox>
    <p>你喜欢的专业有：{{ major }}</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      major: []
    })
  }
</script>
```

你也可以通过设置`color`属性，改变复选框中的默认的灰色填充色。

<div style="margin-top: 20px;">
  <c-checkbox label="自动化" v-model="major" color="primary"></c-checkbox>
  <c-checkbox label="通信工程" v-model="major" color="info"></c-checkbox>
  <c-checkbox label="医工" v-model="major" color="danger">生物医学工程</c-checkbox>
</div>

## 禁用状态

你可以添加`disabled`属性禁用某一个复选框。禁用的复选框仍然可以通过编程的方式选中或取消选中，但是用户无法直接与之交互。

<template>
  <div style="margin-top: 20px;">
    <c-checkbox label="beijing" v-model="cities" color="primary">北京</c-checkbox>
    <c-checkbox label="jinan" v-model="cities" color="primary">济南</c-checkbox>
    <c-checkbox label="yibin" v-model="cities" disabled>宜宾</c-checkbox>
    <p>你喜欢的城市有：{{ cities }}</p>
    <c-button @click="toggle">{{ btnText }}</c-button>
  </div>
</template>

```vue
<template>
  <div>
    <c-checkbox label="beijing" v-model="cities" color="primary">北京</c-checkbox>
    <c-checkbox label="jinan" v-model="cities" color="primary">济南</c-checkbox>
    <c-checkbox label="yibin" v-model="cities" disabled>宜宾</c-checkbox>
    <p>你喜欢的城市有：{{ cities }}</p>
    <c-button @click="toggle">{{ btnText }}</c-button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cities: []
    }),
    methods: {
      toggle() {
        if(this.cities.includes('yibin')) {
          this.cities.splice(this.cities.indexOf('yibin'), 1);
        } else {
          this.cities.push('yibin')
        }
      }
    },
    computed: {
      btnText() {
        return this.cities.includes('yibin') ? '移除宜宾' : '添加宜宾'
      }
    }
  }
</script>
```

## 复选框组

在上面的例子中，使用复选框必须为每一个复选框组件使用`v-model`绑定一个变量。当选项比较多时，这样做使代码重复冗余。复选框组允许将一组复选框集合起来，并且通过设置复选框组的`v-model`取代为每一个复选框单独设置的`v-model`属性。

<template>
  <c-checkbox-group v-model="major" style="margin-top: 20px;">
    <c-checkbox label="自动化"></c-checkbox>
    <c-checkbox label="通信工程"></c-checkbox>
    <c-checkbox label="医工">生物医学工程</c-checkbox>
    <p>你喜欢的专业有：{{ major }}</p>
  </c-checkbox-group>
</template>

```html
<c-checkbox-group v-model="major" style="margin-top: 20px;">
  <c-checkbox label="自动化"></c-checkbox>
  <c-checkbox label="通信工程"></c-checkbox>
  <c-checkbox label="医工">生物医学工程</c-checkbox>
  <p>你喜欢的专业有：{{ major }}</p>
</c-checkbox-group>
```

## 复选框按钮

:::danger 注意
复选框按钮只能作为复选框组的直接子组件。在复选框组外使用复选框按钮时，将不会起作用。
:::

这个复选框的变体灵感来自于 ElementUI。

可以使用复选框按钮组件代替原本的复选框。但需要注意的是，**只有在复选框组内才能使用复选框按钮组件**。

<template>
  <div style="margin-top: 20px;">
    <c-checkbox-group v-model="major" size="large">
      <c-checkbox-button label="自动化"></c-checkbox-button>
      <c-checkbox-button style="margin-left: -5px"label="通信工程"></c-checkbox-button>
      <c-checkbox-button style="margin-left: -5px" label="医工">生物医学工程</c-checkbox-button>
    </c-checkbox-group>
    <p>你喜欢的专业有：{{ major }}</p>
    <c-checkbox-group v-model="cities" color="warning">
      <c-checkbox-button label="beijing">北京</c-checkbox-button>
      <c-checkbox-button style="margin-left: -5px" label="jinan">济南</c-checkbox-button>
      <c-checkbox-button style="margin-left: -5px" label="yibin" disabled>宜宾</c-checkbox-button>
      <c-checkbox-button style="margin-left: -6px" label="hongkong">香港</c-checkbox-button>
    </c-checkbox-group>
    <p>你喜欢的城市有：{{ cities }}</p>
  </div>
</template>

```html
<div>
  <c-checkbox-group v-model="major" size="large">
    <c-checkbox-button label="自动化"></c-checkbox-button>
    <c-checkbox-button label="通信工程"></c-checkbox-button>
    <c-checkbox-button label="医工">生物医学工程</c-checkbox-button>
  </c-checkbox-group>
  <p>你喜欢的专业有：{{ major }}</p>
  <c-checkbox-group v-model="cities" color="warning">
    <c-checkbox-button label="beijing">北京</c-checkbox-button>
    <c-checkbox-button label="jinan">济南</c-checkbox-button>
    <c-checkbox-button label="yibin" disabled>宜宾</c-checkbox-button>
    <c-checkbox-button label="hongkong">香港</c-checkbox-button>
  </c-checkbox-group>
  <p>你喜欢的城市有：{{ cities }}</p>
</div>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| disabled | 禁用复选框 | Boolean | — | false |
| checked | 当前是否勾选 | Boolean | — | false |
| label | 复选框的选项文字，或者复选框的值 | Any | — | — |
| name | 原生`<input>`的`name`属性 | String | — | — |
| size | 按钮复选框组中所有按钮的尺寸 | string | large/—/small/mini | — |
| color | 复选框的颜色 | string | [查看受支持的颜色列表](color.md) | — |

### Slots

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，选项的文本 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发的事件 | 绑定值更新后的值 |


<script>
  export default {
    data: () => ({
      major: [],
      cities: [],
    }),
    methods: {
      toggle() {
        if(this.cities.includes('yibin')) {
          this.cities.splice(this.cities.indexOf('yibin'), 1);
        } else {
          this.cities.push('yibin')
        }
      }
    },
    computed: {
      btnText() {
        return this.cities.includes('yibin') ? '移除宜宾' : '添加宜宾'
      }
    }
  }
</script>