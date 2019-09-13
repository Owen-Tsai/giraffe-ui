# Color 颜色

颜色并不是组件，而是`color`属性的所有可以使用的值。

## 默认颜色

Giraffe UI 提供了默认的色板，包含下表中所有颜色。其中“属性值”一栏就是对应颜色的`color`属性的值。

| 名称      | 属性值          | 颜色值      | 颜色     |
|---------- |-------------- |---------- |:---------:|
| 主要 / 紫色 | primary | #6f42c1 | <colorSquare color="#6f42c1"/> |
| 信息 / 蓝色 | info | #007bff | <colorSquare color="#007bff"/> |
| 警示 / 橙色 | warning | #fd7e14 | <colorSquare color="#fd7e14"/> |
| 危险 / 红色 | danger | #dc3545 | <colorSquare color="#dc3545"/> |
| 成功 / 绿色 | success | #6ac83c | <colorSquare color="#6ac83c"/> |
| 靛蓝色 | indigo | #6711f2 | <colorSquare color="#6711f2"/> |
| 粉色 | pink | #e83e8c | <colorSquare color="#e83e8c"/> |
| 黄色 | yellow | #f7e435 | <colorSquare color="#f7e435"/> |
| 青色 | cyan | #17a2b8 | <colorSquare color="#17a2b8"/> |
| 蓝绿色 | teal | #20c997 | <colorSquare color="#20c997"/> |

## 灰度颜色

:::danger 注意
灰度颜色只能通过变量的方式引入在样式代码中，且只能使用在基于`scss`的样式中。
:::

灰度颜色包含了 Giraffe UI 定义在`scss`样式表中的所有灰色系颜色。需要注意的是，**这些颜色无法设置为`color`属性的值**。

| 名称      | 变量名          | 颜色值      | 颜色     |
|---------- |-------------- |---------- |:---------:|
| 灰色 50 | grey-50 | #fafafa | <colorSquare color="#fafafa"/> |
| 灰色 100 | grey-100 | #f5f5f5 | <colorSquare color="#f5f5f5"/> |
| 灰色 200 | grey-200 | #eeeeee | <colorSquare color="#eeeeee"/> |
| 灰色 300 | grey-300 | #e0e0e0 | <colorSquare color="#e0e0e0"/> |
| 灰色 400 | grey-400 | #bdbdbd | <colorSquare color="#bdbdbd"/> |
| 灰色 500 | grey-500 | #9e9e9e | <colorSquare color="#9e9e9e"/> |
| 灰色 600 | grey-600 | #757575 | <colorSquare color="#757575"/> |
| 灰色 700 | grey-700 | #616161 | <colorSquare color="#616161"/> |
| 灰色 800 | grey-800 | #424242 | <colorSquare color="#424242"/> |
| 灰色 900 | grey-900 | #212121 | <colorSquare color="#212121"/> |
| 白色 | white | #ffffff | <colorSquare color="#ffffff"/> |
| 黑色 | black | #000000 | <colorSquare color="#000000"/> |

## 自定义色板 <Badge text="下一版本" type="tip"/>

在 Giraffe UI 的下一版本中，你将可以通过在一个`scss`文件中自定义颜色的方式对色板做出扩充或覆盖。你指定的颜色将会和 Giraffe UI 已经提供的颜色进行合并。