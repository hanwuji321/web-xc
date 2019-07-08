// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [
      {
        id: 1,
        name: '前端面试之道',
        xcid: 1,
        desc: '助你建立起完整的前端知识架构体系，探究知识的原理，深入了解大厂常考知识点',
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc1.png",
      },
      {
        id: 2,
        name: '前端性能优化原理与实践',
        xcid: 2,
        "desc": "毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc2.png",
      },
      {
        id: 3,
        name: '使用 webpack 定制前端开发环境',
        xcid: 3,
        "desc": "基于 4.x 版本，从细节和深度上弄懂 webpack，随心所欲定制前端开发环境",
        "price": 19.9,
        "title": "使用 webpack 定制前端开发环境",
        "buyCount": 4284,
        "viewCount": 0,
        "contentSize": 89053,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc3.png",
      },
      {
        id: 4,
        name: '大厂 H5 开发实战手册',
        xcid: 4,
        "desc": "京东、腾讯等大厂 H5 开发或 UI 开发工程师的真实实战技巧",
        "user": "56cd99b7c4c9710057e8984b",
        "price": 19.9,
        "title": "大厂 H5 开发实战手册",
        "buyCount": 3021,
        "viewCount": 0,
        "contentSize": 80220,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc4.png",
      },
      {
        id: 5,
        name: '基于 JavaScript 开发灵活的数据应用',
        xcid: 5,
        "desc": "使用 JavaScript、ECharts、Vue.js 等开发工具，完成各种数据结构的处理、转换、动态过滤以及数据可视化的开发。",
        "user": "55802cb3e4b0bd33aa45ba25",
        "price": 29.9,
        "title": "基于 JavaScript 开发灵活的数据应用",
        "buyCount": 1208,
        "viewCount": 0,
        "contentSize": 196735,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc5.png",
      },
      {
        id: 6,
        name: '剖析 Vue.js 内部运行机制',
        xcid: 6,
        "desc": "把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc6.png",
      },
      {
        id: 7,
        name: '如何使用 Canvas 制作出炫酷的网页背景特效',
        xcid: 7,
        "desc": "从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc7.png",
      },
      {
        id: 8,
        name: '微信小程序开发入门：从 0 到 1 实现天气小程序',
        xcid: 8,
        "desc": "从基础到实战，从开发环境搭建到开发、调试、上线，打通小程序开发全流程",
        "user": "58b78ae88d6d8100652653e0",
        "price": 9.9,
        "title": "微信小程序开发入门：从 0 到 1 实现天气小程序",
        "buyCount": 4206,
        "viewCount": 0,
        "contentSize": 119064,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc8.png",
      },
      {
        id: 9,
        name: '用 npm script 打造超溜的前端工作流',
        xcid: 9,
        "desc": "抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc9.png",
      },
      {
        id: 10,
        name: 'React 组合式开发实践：打造企业管理系统五大核心模块',
        xcid: 10,
        "desc": "基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升",
        "user": "59e83cef6fb9a044fd10deec",
        "price": 19.9,
        "title": "React 组合式开发实践：打造企业管理系统五大核心模块",
        "buyCount": 3340,
        "viewCount": 0,
        "contentSize": 72575,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc10.png",
      },
      {
        id: 11,
        name: 'Vue 项目构建与开发入门',
        xcid: 11,
        "desc": "从构建到开发，帮助 Vue 开发者提升项目构建与开发能力，基于 Vue CLI 3",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc11.png",
      },
      {
        id: 12,
        name: 'Vue.js 组件精讲',
        xcid: 12,
        "desc": "iView 作者 3 年的 Vue.js 组件开源积累，Vue.js 组件知识深入剖析",
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc12.png",
      },
      {
        id: 13,
        name: 'Web 前端面试指南与高频考题解析',
        xcid: 13,
        "desc": "找工作面试是门技术活，掌握一定技巧可以让你事半功倍",
        "user": "5a8f885d5188257a61324c03",
        "price": 29.9,
        "title": "Web 前端面试指南与高频考题解析",
        "buyCount": 4181,
        "viewCount": 0,
        "contentSize": 82296,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc13.png",
      },
      {
        id: 14,
        name: 'Taro 多端开发实现原理与项目实战',
        xcid: 14,
        "desc": "剖析 Taro 多端开发框架的实现原理，并通过电商核心的项目实战，帮助开发者快速上手多端项目。",
        "user": "56cd99b7c4c9710057e8984b",
        "price": 9.9,
        "title": "Taro 多端开发实现原理与项目实战",
        "buyCount": 3115,
        "viewCount": 0,
        "contentSize": 147336,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc14.png",
      },
      {
        id: 15,
        name: 'React 实战：设计模式和最佳实践',
        xcid: 15,
        "desc": "深入了解 React 应用中的设计模式，总结业界验证的最佳实践，更进一步，了解React 未来新功能 Suspense 和 Hooks。",
        "user": "5b69aceaf265da0faa368ffa",
        "price": 29.9,
        "title": "React 实战：设计模式和最佳实践",
        "buyCount": 1819,
        "viewCount": 0,
        "contentSize": 109884,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc15.png",
      },
      {
        id: 16,
        name: 'Git 原理详解及实用指南',
        xcid: 16,
        "desc": "让你不仅用上、更用明白的 Git 实用指南",
        "user": "552f20a7e4b060d72a89d87f",
        "price": 29.9,
        "title": "Git 原理详解及实用指南",
        "buyCount": 4950,
        "viewCount": 0,
        "contentSize": 58704,
        "img": "https://pinrenwuimage.taidu8.com/uploads/20180904/xc16.png",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})