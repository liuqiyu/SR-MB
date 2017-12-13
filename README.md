# 移动端模板  VUE

## 目录

1. [前言](#preface)
2. [技术栈](#technologyStack)
3. [目录结构](#catalog)
4. [项目运行](#run)
5. [描述](#describe)
6. [结语](#end)

<a name="preface"></a>
## 前言

在众多的前端框架中选择了VUE，不仅仅因为它的作者是国人，有较为完整的开发文档。也因为它的轻量，高效。
从入门到参与一个项目，可能需要花几个星期的时间。但是将所学的东西整合成一个复用的框架则相对较为棘手。
在使用VUE开发公司项目的半年里，也参与了大大小的项目。有PC端，也有移动端。但是每次完成一个项目转进另外一个项目时，搭建框架又需要花费一些时间，由此可见，搭建一个前端的公有框架是多么的重要。
废话不多说，开始吧！

<a name="technologyStack"></a>
## 技术栈

`vue2` `vuex` `vue-router` `webpack` `ES6/7` `mint-ui` `element-ui` `vue-resource`

<a name="catalog"></a>
## 目录结构

```

|-- VueTemplate-m
    |-- build
    |-- config
    |-- dist
    |-- node_modules
    |-- src                 开发目录
        |-- assets          样式脚本库
        |-- components      公用组件
        |-- router          路由
        |-- views           视图文件
            |-- contacts    联系人
            |-- film        电影
            |-- layout      结构
            |-- my          我的
            |-- read        阅读
        |-- api.js          接口地址
        |-- app-ui.js       ui框架引入
    |-- static

```
<a name="run"></a>
## 运行

```
git clone https://github.com/liuqiyu/VueTemplate-m.git

cd VueTemplate-m

npm i

npm run dev

```

<a name="describe"></a>
## 描述
<a name="end"></a>
## 结语
