# Radio 单选框组件

单选框是表单组件之一，常用于让用户在多个选项中选取一个的场合。由于单选框组件应当显示全部可能的选项，因此当选项过多时会使交互友好性下降。在这种场合下应当使用 [select 下拉选项](select.md)组件。

## 基础用法

一个单选框必须具备一个`label`属性。

下面例子的前两个选项中，没有在默认插槽额外插入文字，因此`label`属性也决定了单选框的标签文本；但第三个选项中，除了`label`属性设置了值外，默认插槽也传入了文本。在这种情况下，**默认插槽的文本将被显示在单选框旁边作为选项的标签文本，而`label`属性指定的值在双向数据流中与变量`major`绑定**。

<template>
  <div style="margin-top: 20px;">
    <c-radio label="自动化" v-model="major"></c-radio>
    <c-radio label="通信工程" v-model="major"></c-radio>
    <c-radio label="医工" v-model="major">生物医学工程</c-radio>
    <p>你就读的专业是：{{ major }}</p>
  </div>
</template>

```vue
<template>
  <div>
    <c-radio label="自动化" v-model="major"></c-radio>
    <c-radio label="通信工程" v-model="major"></c-radio>
    <c-radio label="医工" v-model="major">生物医学工程</c-radio>
    <p>你就读的专业是：{{ major }}</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      major: '',
    }),
  }
</script>
```

你也可以通过设置`color`属性，改变单选框中的默认的灰色填充色。

<div style="margin-top: 20px;">
  <c-radio label="自动化" v-model="major" color="primary"></c-radio>
  <c-radio label="通信工程" v-model="major" color="info"></c-radio>
  <c-radio label="医工" v-model="major" color="danger">生物医学工程</c-radio>
</div>

```html
<c-radio label="自动化" v-model="major" color="primary"></c-radio>
<c-radio label="通信工程" v-model="major" color="info"></c-radio>
<c-radio label="医工" v-model="major" color="danger">生物医学工程</c-radio>
```

## 禁用状态

你可以添加`disabled`属性禁用某一个单选框。禁用的单选框仍然可以通过编程的方式选中或取消选中，但是用户无法直接与之交互。

<template>
  <div style="margin-top: 20px;">
    <c-radio label="beijing" v-model="city" color="primary">北京</c-radio>
    <c-radio label="jinan" v-model="city" color="primary">济南</c-radio>
    <c-radio label="yibin" v-model="city" disabled>宜宾</c-radio>
    <p>你所在的城市是：{{ city }}</p>
    <c-button @click="toggle">{{ btnText }}</c-button>
  </div>
</template>

```vue
<template>
  <div>
    <c-radio label="beijing" v-model="city" color="primary">北京</c-radio>
    <c-radio label="jinan" v-model="city" color="primary">济南</c-radio>
    <c-radio label="yibin" v-model="city" disabled>宜宾</c-radio>
    <p>你所在的城市是：{{ city }}</p>
    <c-button @click="toggle">{{ btnText }}</c-button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      city: '',
    }),
    methods: {
      toggle() {
        this.city === 'yibin' ? this.city = '' : this.city = 'yibin'
      }
    },
    computed: {
      btnText() {
        return this.city === 'yibin' ? '排除宜宾' : '选择宜宾'
      }
    }
  }
</script>
```

## 单选框组

在上面的例子中，必须为每一个单选框组件使用`v-model`绑定一个变量。当选项比较多时，这样做使代码重复冗余。单选框组允许将一组单选框集合起来，并且通过设置单选框组的`v-model`取代为每一个单选框单独设置的`v-model`属性。

<template>
  <c-radio-group v-model="major" style="margin-top: 20px;">
    <c-radio label="自动化"></c-radio>
    <c-radio label="通信工程"></c-radio>
    <c-radio label="医工">生物医学工程</c-radio>
    <p>你就读的专业是：{{ major }}</p>
  </c-radio-group>
</template>

```html
<c-radio-group v-model="major" style="margin-top: 20px;">
  <c-radio label="自动化"></c-radio>
  <c-radio label="通信工程"></c-radio>
  <c-radio label="医工">生物医学工程</c-radio>
  <p>你就读的专业是：{{ major }}</p>
</c-radio-group>
```

## 单选框按钮

:::danger 注意
单选框按钮只能作为单选框组的直接子组件。在单选框组外使用单选框按钮时，将不会起作用。
:::

这个单选框的变体灵感来自于 ElementUI。

可以使用单选框按钮组件代替原本的单选框。但需要注意的是，**只有在单选框组内才能使用单选框按钮组件**。

<template>
  <div style="margin-top: 20px;">
    <c-radio-group v-model="major" size="large">
      <c-radio-button label="自动化"></c-radio-button>
      <c-radio-button style="margin-left: -5px"label="通信工程"></c-radio-button>
      <c-radio-button style="margin-left: -5px" label="医工">生物医学工程</c-radio-button>
    </c-radio-group>
    <p>你就读的专业是：{{ major }}</p>
    <c-radio-group v-model="city" color="warning">
      <c-radio-button label="beijing">北京</c-radio-button>
      <c-radio-button style="margin-left: -5px" label="jinan">济南</c-radio-button>
      <c-radio-button style="margin-left: -5px" label="yibin" disabled>宜宾</c-radio-button>
      <c-radio-button style="margin-left: -6px" label="hongkong">香港</c-radio-button>
    </c-radio-group>
    <p>你所在的城市是：{{ city }}</p>
  </div>
</template>

```html
<div>
  <c-radio-group v-model="major" size="large">
    <c-radio-button label="自动化"></c-radio-button>
    <c-radio-button label="通信工程"></c-radio-button>
    <c-radio-button label="医工">生物医学工程</c-radio-button>
  </c-radio-group>
  <p>你就读的专业是：{{ major }}</p>
  <c-radio-group v-model="city" color="warning">
    <c-radio-button label="beijing">北京</c-radio-button>
    <c-radio-button label="jinan">济南</c-radio-button>
    <c-radio-button label="yibin" disabled>宜宾</c-radio-button>
    <c-radio-button label="hongkong">香港</c-radio-button>
  </c-radio-group>
  <p>你所在的城市是：{{ city }}</p>
</div>
```

<script>
  export default {
    data: () => ({
      major: '',
      city: '',
    }),
    methods: {
      toggle() {
        this.city === 'yibin' ? this.city = '' : this.city = 'yibin'
      }
    },
    computed: {
      btnText() {
        return this.city === 'yibin' ? '排除宜宾' : '选择宜宾'
      }
    }
  }
</script>