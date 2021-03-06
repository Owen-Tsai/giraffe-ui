# 安装

这篇文档将会指引你在本地安装 Giraffe UI 的最新版本。

## 通过包管理工具安装

想要通过包管理工具安装 Giraffe UI，你必须已经安装了[node.js](https://nodejs.org/en/)。node.js 的包管理工具有很多，例如 [NPM](https://www.npmjs.com/) 和 [yarn](https://www.yarnpkg.com/lang/en/)。如果你已经安装了 node.js，那么 NPM 将随之一同被安装在你的系统中；如果你想使用 yarn 作为包管理工具，可以在[这个页面](https://www.yarnpkg.com/en/docs/install)下载和安装。

其次，我们推荐使用 [Vue CLI3](https://cli.vuejs.org/) 来创建、管理、构建 Vue 应用。使用 Vue CLI3 可以很方便地搭建项目并获取更新。你可以通过下面的指令安装 Vue CLI3。

```bash
yarn global add @vue/cli
# 或者
npm install @vue/cli -g
```

接下来通过 Vue CLI3 创建一个 Vue 项目，并进入到项目目录内。

```bash
vue create my-project

cd my-project
```

然后，通过包管理工具来安装 Giraffe UI 和依赖。

```bash
yarn add giraffe-ui
# 或者
npm install giraffe-ui --save
```

## 获取源代码

你可以从 GitHub 获取 Giraffe UI 的源代码，并进行修改或者自行编译。

你可以直接打开 Giraffe UI 的 [Github 仓库](https://github.com/Owen-Tsai/giraffe-ui)，并点击下载按钮获取包含了 Giraffe UI 所有组件的 `.zip` 压缩包。你可以使用解压工具解压缩，进入到目录内，并且执行下面的命令来安装 Giraffe UI 的依赖。

```bash
yarn add
# 或者
npm install
```

如果你的机器上已经安装了 git bash，你也可以通过命令行完成上述操作：

```bash
git clone https://github.com/Owen-Tsai/giraffe-ui.git my-project

cd my-project

yarn add
# 或者
npm install
```