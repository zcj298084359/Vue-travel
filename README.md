# Vue-travel

> Vue2.0仿旅游网站移动端

## 项目简介

思路是先规划组件结构、再编写对应路由、再落实具体每个组件功能。

## 技术栈

vue2全家桶（vue、vuex、vue-router）、axios、Es6、Animate.css、Webpack

## 功能

- 各类游记、攻略的查看
- 登陆、注册功能

## 效果预览图

![image](https://github.com/zcj298084359/Vue-travel/blob/master/src/assets/images/011.png)
![image](https://github.com/zcj298084359/Vue-travel/blob/master/src/assets/images/022.png)
![image](https://github.com/zcj298084359/Vue-travel/blob/master/src/assets/images/033.png)
![image](https://github.com/zcj298084359/Vue-travel/blob/master/src/assets/images/044.png)
![image](https://github.com/zcj298084359/Vue-travel/blob/master/src/assets/images/055.png)

## 目录
```
|- src
   |- assets
      |- css
         |- base.css  // 重置样式
         |- index.css  // 全局样式
         |- mydoc.css  // 过渡样式
      |- images  // 项目图片
      |- img     // 项目图标
      |- js
         |- font.js  
         |- jquery-1.7.2.js  
         |- swipe.js      
   |- components  // 组件
      |- loading  //加载效果
         |- index.js  
         |- loading.vue 
      |- Article.vue  // 文章内容
      |- Column.vue  // 攻略
      |- Footer.vue  // 页脚
      |- Follow.vue  // 游记
      |- Home.vue  // 主页
      |- Slider.vue  // 轮播图
      |- Nav.vue  // 导航
      |- UserInfo.vue  // 个人信息
      |- UserLogin.vue  // 登陆
      |- UserReg.vue  // 注册
   |- data  // 仿后台数据
      |- article.data // 文章数据
      |- folllow.data  // 游记数据
      |- index.data  // 主页数据
      |- trip.data  // 攻略数据
   |- filter  //过滤器
      |- index.js 
      |- timeFormat.js  // 时间戳过滤器
   |- store  // 状态管理
      |- action.js 
      |- getters.js
      |- mutation.js 
      |- store.js
   |- routeConfig.js  // 路由 
   |- App.vue
   |- main.js  // 入口文件
index.html
package.json
webpack.config.js
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
