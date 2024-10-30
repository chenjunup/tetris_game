# tetris_game

## 概述

使用技术：webpack + jquery + typescript + 面向对象开发

## 工程搭建

环境：浏览器环境 + 模块化

1. 初始化工程

```
yarn init -y
```

2. 添加webpack依赖、配置文件（webpack.config.js）

3. 安装typescript、ts-loader，添加tsconfig.json

```
tsc --init
```
4. 添加webpack-html-plugin

5. 添加webpack-dev-server clean-webpack-plugin

6. 添加.gitignore文件

```
git rm -rf --cached . // 清除暂存区文件
```

## 增加小方块类

1. 成员：位置 颜色
2. 能力：显示 隐藏

在位置的setter中自动显示

## 增加页面显示类

1. 添加jquery @types/jquery @ 新建viewer包 把数据逻辑和现实逻辑分开

2. 新建SquarePageViewer类实现IViewer

传入数据（Square）
传入容器（container）

## 测试显示

1.实例化Square
2.添加Viewer
3.设置坐标
