# Alert 警告组件

警告组件是非悬浮层组件，用于在页面上为用户显示一条提示或者警告信息。

## 基础用法

<div class="demo-block">
  <c-alert :visible="a1">请您先登录后再执行本操作</c-alert>
</div>

```vue
<template>
  <c-alert :visible="alert">请您先登录后再执行本操作</c-alert>
<template>

<script>
  export default {
    data: () => ({
      alert: true
    })
  }
</script>
```

通过指定组件的`color`属性，可以实现用于不同情境下的警告样式：

<div class="demo-block">
  <c-alert :visible="a2" color="primary">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="a3" color="warning">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="a4" color="danger">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="a5" color="info">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="a6" color="teal">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="a7" color="yellow">请您先登录后再执行本操作</c-alert>
</div>

```vue
<template>
  <c-alert :visible="alert1" color="primary">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="alert2" color="warning">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="alert3" color="danger">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="alert4" color="info">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="alert5" color="teal">请您先登录后再执行本操作</c-alert>
  <c-alert :visible="alert6" color="yellow">请您先登录后再执行本操作</c-alert>
<template>

<script>
  export default {
    data: () => ({
      alert1: true,
      alert2: true,
      alert3: true,
      alert4: true,
      alert5: true,
      alert6: true
    })
  }
</script>
```

## 突出边框

可以为组件添加`outlined`属性来实现突出边框、淡化底色的效果。

<div class="demo-block">
  <c-alert :visible="a8" color="primary" outlined>感谢您使用 Giraffe UI 组件库</c-alert>
  <c-alert :visible="a9" color="danger" outlined>遇到了不可预知的错误，请刷新页面继续</c-alert>
  <c-alert :visible="a10" color="info" outlined>页面加载于 {{ new Date().toLocaleString() }}</c-alert>
</div>

```vue
<template>
  <c-alert :visible="alert1" color="primary" outlined>
    感谢您使用 Giraffe UI 组件库
  </c-alert>
  <c-alert :visible="alert2" color="danger" outlined>
    遇到了不可预知的错误，请刷新页面继续
  </c-alert>
  <c-alert :visible="alert3" color="info" outlined>
    页面加载于 {{ new Date().toLocaleString() }}
  </c-alert>
</template>

<script>
  export default {
    data: () => ({
      alert1: true,
      alert2: true,
      alert3: true
    })
  }
</script>
```

## 图标

可以通过组件的`icon`属性为当前的警告指定一个图标。图标将会显示在警告文字的最前。

<div class="demo-block">
  <c-alert :visible="a11" color="primary" outlined icon="face">感谢您使用 Giraffe UI 组件库</c-alert>
  <c-alert :visible="a12" color="danger" icon="error">遇到了不可预知的错误，请刷新页面继续</c-alert>
</div>

```vue
<c-alert :visible="alert1" color="primary" outlined icon="face">
  感谢您使用 Giraffe UI 组件库
</c-alert>

<c-alert :visible="alert2" color="danger" icon="error">
  遇到了不可预知的错误，请刷新页面继续
</c-alert>

<script>
  export default {
    data: () => ({
      alert1: true,
      alert2: true
    })
  }
</script>
```

## 标题

带有标题的警告组件使用粗体突出标题，同时辅以详细的文字介绍，使之更加易读。同时，如果一个警告组件同时带有图标和标题，那么图标将会自动放大以匹配两行文字的高度。如果警告组件的文字大于两行，那么图标将会居中对齐，不再放大。

<div class="demo-block">
  <c-alert :visible="a13" color="primary" title="你好！">感谢您使用 Giraffe UI 组件库</c-alert>
  <c-alert :visible="a14" outlined color="info" title="渲染完成！" icon="alarm">页面加载于 {{ new Date().toLocaleString() }}</c-alert>
</div>

```vue
<c-alert :visible="alert1" color="primary" title="你好！">
  感谢您使用 Giraffe UI 组件库
</c-alert>
<c-alert :visible="alert2" outlined color="info" title="渲染完成!" icon=alarm">
  页面加载于 {{ new Date().toLocaleString() }}
</c-alert>

<script>
  export default {
    data: () => ({
      alert1: true,
      alert2: true
    })
  }
</script>
```

## 不允许关闭

在警告组件上添加`persistent`属性可以使警告组件的关闭按钮被隐藏。

不允许用户自主关闭的警告组件用于显示关键的提示或警告，往往需要用户手动通过其他方式（例如勾选“我知道了”选项，或是点击“同意条款”按钮）触发关闭事件。想要通过编程的方式关闭一个警告，可以通过设置警告组件的`visible`属性所绑定的变量实现。通过这样的方式关闭一个警告或是显示一个警告，依然可以捕获到`open`和`close`事件。

<div class="demo-block">
  <c-alert :visible="a15" outlined persistent color="danger" title="服务条款变更">请注意，我们的服务条款有所变更，请确保已经完整阅读变化的部分。</c-alert>
  <c-button @click="a15 = !a15">{{ btnStr }}</c-button>
</div>

```vue
<template>
  <c-alert :visible="alert" outlined persistent color="danger" title="服务条款变更">
    请注意，我们的服务条款有所变更，请确保已经完整阅读变化的部分。
  </c-alert>
  <c-button @click="alert = !alert">{{ btnStr }}</c-button>
</template>

<script>
  export default {
    data: () => ({
      alert: true
    }),
    computed: {
      btnStr() {
        return alert ? '我已阅读' : '重置警告'
      }
    }
  }
</script>
```

## 自定义关闭按钮

在某些场合下，默认的关闭按钮可能需要被客制化为其他图标或是一串文字。警告组件提供了`close-icon`和`close-text`属性，允许自定义关闭按钮的图标或文本。

需要注意的是，当`persistent`属性生效时，无论是自定义的关闭符号还是默认的，都不会显示。

<div class="demo-block">
  <c-alert :visible="a16" outlined color="success" icon="info" close-icon="check">操作成功！</c-alert>
  <c-alert :visible="a17" outlined color="teal" close-text="我知道了">您今日有 <b>99</b> 个日程安排</c-alert>
</div>

```vue
<template>
  <c-alert :visible="alert1" outlined color="success" icon="info" close-icon="check">
    操作成功！
  </c-alert>
  <c-alert :visible="alert2" outlined color="teal" close-text="我知道了">
    您今日有 <b>99</b> 个日程安排
  </c-alert>
</template>

<script>
  export default {
    data: () => ({
      alert1: true,
      alert2: true
    })
  }
</script>
```

## API 列表

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| title | 标题 | string | — | — |
| visible | 警告绑定的变量，控制警告组件的显示/隐藏 | boolean | — | — |
| color | 颜色 | string | [查看受支持的颜色列表](color.md) | — |
| description |警告的内容。也可通过默认 slot 传入 | string | — | — |
| persistent | 是否不可关闭 | boolean | — | false |
| icon | 要显示的图标 | string | [查看所有图标列表](icon.md) | — |
| close-icon | 关闭按钮自定义图标 | string | — | — |
| close-text | 关闭按钮自定义文本 | string | — | — |
| outlined | 突出警告的边框，淡化填充色 | boolean | — | false |

### Slots

| 名称 | 说明                |
|------|--------------------|
| — | 默认插槽，警告的内容。与使用`description`属性传入效果相同 |
| title | 标题的内容。与使用`title`属性传入效果相同 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 警告组件被关闭时触发的事件 | — |
| open | 警告组件显示时触发的事件 | — |

<script>
  export default {
    data: () => ({
      a1: true,
      a2: true,
      a3: true,
      a4: true,
      a5: true,
      a6: true,
      a7: true,
      a8: true,
      a9: true,
      a10: true,
      a11: true,
      a12: true,
      a13: true,
      a14: true,
      a15: true,
      a16: true,
      a17: true
    }),
    computed: {
      btnStr() {
        return this.a15 ? '我已阅读' : '重置警告'
      }
    },
    methods: {
      test() {
        alert('123');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .demo-block {
        margin-top: 20px;
        
        .c-alert {
            margin-bottom: 10px;
        }
    }
</style>