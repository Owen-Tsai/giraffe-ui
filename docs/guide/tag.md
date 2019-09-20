# Tag 标签组件

标签是用于标记的一类组件。

## 基础用法

<div style="margin-top: 20px">
  <c-tag>标签1</c-tag>
  <c-tag>标签2</c-tag>
  <c-tag>标签3</c-tag>
</div>

```html
<c-tag>标签1</c-tag>
<c-tag>标签2</c-tag>
<c-tag>标签3</c-tag>
```

通过指定`color`属性，可以让标签组件具有背景颜色：

<div style="margin-top: 20px">
  <c-tag color="primary">标签1</c-tag>
  <c-tag color="warning">标签2</c-tag>
  <c-tag color="brown">标签3</c-tag>
  <c-tag color="success">标签4</c-tag>
  <c-tag color="red">标签5</c-tag>
</div>

```html
<c-tag color="primary">标签1</c-tag>
<c-tag color="warning">标签2</c-tag>
<c-tag color="brown">标签3</c-tag>
<c-tag color="success">标签4</c-tag>
<c-tag color="red">标签5</c-tag>
```

## 标签的风格

### 突出边框

向标签组件添加`outlined`属性，可以让标签组件应用边框样式：

<div style="margin-top: 20px">
  <c-tag outlined color="primary">标签1</c-tag>
  <c-tag outlined color="warning">标签2</c-tag>
  <c-tag outlined color="brown">标签3</c-tag>
  <c-tag outlined color="success">标签4</c-tag>
  <c-tag outlined color="red">标签5</c-tag>
</div>

```html
<c-tag outlined color="primary">标签1</c-tag>
<c-tag outlined color="warning">标签2</c-tag>
<c-tag outlined color="brown">标签3</c-tag>
<c-tag outlined color="success">标签4</c-tag>
<c-tag outlined color="red">标签5</c-tag>
```

### 简化

向标签组件添加`flat`属性，可以简化标签的样式，只应用边框和文字颜色。

<div style="margin-top: 20px">
  <c-tag flat color="primary">标签1</c-tag>
  <c-tag flat color="warning">标签2</c-tag>
  <c-tag flat color="brown">标签3</c-tag>
  <c-tag flat color="success">标签4</c-tag>
  <c-tag flat color="red">标签5</c-tag>
</div>

```html
<c-tag flat color="primary">标签1</c-tag>
<c-tag flat color="warning">标签2</c-tag>
<c-tag flat color="brown">标签3</c-tag>
<c-tag flat color="success">标签4</c-tag>
<c-tag flat color="red">标签5</c-tag>
```

## 边框弧度

默认的标签包含 4px 的边框弧度。你可以通过指定`round`或`sharp`属性来使标签具有圆角或尖角风格。

<div style="margin-top: 20px">
  <c-tag round color="primary">标签1</c-tag>
  <c-tag sharp color="warning">标签2</c-tag>
</div>

```html
<c-tag round color="primary">标签1</c-tag>
<c-tag sharp color="warning">标签2</c-tag>
```

## 可被关闭

通过为标签添加`closable`属性，标签会出现一个关闭按钮。关闭按钮被点击时，会触发`close`事件。在事件毁掉函数中你可以自主实现关闭标签的逻辑。

:::warning 注意
点击关闭按钮不会真的关闭标签，关闭逻辑需要开发则自行实现。
:::

<div style="margin-top: 20px">
  <c-tag closable>标签1</c-tag>
  <c-tag closable>标签2</c-tag>
</div>

```html
<c-tag closable>标签1</c-tag>
<c-tag closable>标签2</c-tag>
```

下面是一个动态编辑标签的例子。这个例子的灵感来源于 [Element UI](https://element.eleme.cn/)。

<template>
  <div class="tags">
    <c-tag
      color="info" 
      outlined 
      v-for="tag in dynamicTags" 
      :key="tag" 
      @close="handleClose(tag)"
      closable
    >
      {{ tag }}
    </c-tag>
    <c-input 
      ref="tagInput"
      size="small"
      v-model="tagInputVal"
      v-if="tagInputVisible"
      @blur="confirmInput"
      width="90px"
    ></c-input>
    <c-button color="green" size="small" v-if="!tagInputVisible" @click="showTagInput">+ Add Tag</c-button>
  </div>
</template>

```vue
<template>
  <div class="tags">
    <c-tag
      color="info" 
      outlined 
      v-for="tag in dynamicTags" 
      :key="tag" 
      @close="handleClose(tag)"
      closable
    >
      {{ tag }}
    </c-tag>
    <c-input 
      ref="tagInput"
      size="small"
      v-model="tagInputVal"
      v-if="tagInputVisible"
      @blur="confirmInput"
      width="90px"
    ></c-input>
    <c-button color="green" size="small" v-if="!tagInputVisible" @click="showTagInput">+ Add Tag</c-button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dynamicTags: ['标签1', '标签2', '标签3'],
      tagInputVal: '',
      tagInputVisible: false,
    }),
    methods: {
      confirmInput() {
        if(this.tagInputVal !== '') {
          this.dynamicTags.push(this.tagInputVal);
        }
        this.tagInputVisible = false;
        this.tagInputVal = '';
      },
      showTagInput() {
        this.tagInputVisible = true;
        this.$nextTick(() => {
          this.$refs.tagInput.$refs.input.focus();
        });
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    * {
      margin: 5px;
      vertical-align: middle;
    }
  }
</style>
```

<script>
  export default {
    data: () => ({
      dynamicTags: ['标签1', '标签2', '标签3'],
      tagInputVal: '',
      tagInputVisible: false,
    }),
    methods: {
      confirmInput() {
        if(this.tagInputVal !== '') {
          this.dynamicTags.push(this.tagInputVal);
        }
        this.tagInputVisible = false;
        this.tagInputVal = '';
      },
      showTagInput() {
        this.tagInputVisible = true;
        this.$nextTick(() => {
          this.$refs.tagInput.$refs.input.focus();
        });
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    * {
      margin: 5px;
      vertical-align: middle;
    }
  }
</style>

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| color | 标签的颜色 | string | [查看受支持的颜色列表](color.md) | — |
| round | 标签采用圆角边框弧度 | Boolean | — | false |
| sharp | 标签不采用边框弧度 | Boolean | — | false |
| outlined | 突出标签的边框 | Boolean | — | false |
| flat | 采用简化的标签样式 | Boolean | — | false |
| closable | 允许标签被关闭 | Boolean | — | false |
| size | 标签的尺寸 | string | large/—/small | — |

### Slot

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，标签的文本 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 当标签的关闭按钮被点击时触发 | — |