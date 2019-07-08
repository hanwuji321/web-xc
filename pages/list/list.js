// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    listData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.aid)
    console.log(options.name)
    const ml = [
      {
        "id": 1,
        "xcid": 16,
        "title": "什么是版本控制系统（VCS）"
      },
      {
        "id": 2,
        "xcid": 16,
        "title": "什么是分布式版本控制系统（DVCS)"
      },
      {
        "id": 3,
        "xcid": 16,
        "title": "上手 1：新公司用 Git 管理代码，怎么快速上手？"
      },
      {
        "id": 4,
        "xcid": 16,
        "title": "上手 2：团队工作的基本工作模型"
      },
      {
        "id": 5,
        "xcid": 16,
        "title": "进阶 1：HEAD、master 与 branch"
      },
      {
        "id": 6,
        "xcid": 16,
        "title": "进阶 2：push 的本质"
      },
      {
        "id": 7,
        "xcid": 16,
        "title": "进阶 3：merge：合并 commits"
      },
      {
        "id": 8,
        "xcid": 16,
        "title": "进阶 4：Feature Branching：最流行的工作流"
      },
      {
        "id": 9,
        "xcid": 16,
        "title": "进阶 5：关于 add"
      },
      {
        "id": 10,
        "xcid": 16,
        "title": "进阶 6：看看我都改了什么"
      },
      {
        "id": 11,
        "xcid": 16,
        "title": "高级 1：不喜欢 merge 的分叉？用 rebase 吧"
      },
      {
        "id": 12,
        "xcid": 16,
        "title": "高级 2：刚刚提交的代码，发现写错了怎么办？"
      },
      {
        "id": 13,
        "xcid": 16,
        "title": "高级 3：写错的不是最新的提交，而是倒数第二个？"
      },
      {
        "id": 14,
        "xcid": 16,
        "title": "高级 4：比错还错，想直接丢弃刚写的提交？"
      },
      {
        "id": 15,
        "xcid": 16,
        "title": "高级 5：想丢弃的也不是最新的提交？"
      },
      {
        "id": 16,
        "xcid": 16,
        "title": "高级 6：代码已经 push 上去了才发现写错？"
      },
      {
        "id": 17,
        "xcid": 16,
        "title": "高级 7：reset 的本质——不止可以撤销提交"
      },
      {
        "id": 18,
        "xcid": 16,
        "title": "高级 8：checkout 的本质"
      },
      {
        "id": 19,
        "xcid": 16,
        "title": "高级 9：紧急情况：「立即给我打个包，现在马上！」"
      },
      {
        "id": 20,
        "xcid": 16,
        "title": "高级 10：branch 删过了才想起来有用？"
      },
      {
        "id": 21,
        "xcid": 16,
        "title": "额外说点：gitignore——排除不想被管理的文件和目录"
      },
      {
        "id": 22,
        "xcid": 16,
        "title": "总结"
      },
      {
        "id": 23,
        "xcid": 15,
        "title": "React 的设计思想"
      },
      {
        "id": 24,
        "xcid": 15,
        "title": "组件实践（1）如何定义清晰可维护的接口"
      },
      {
        "id": 25,
        "xcid": 15,
        "title": "组件实践（2）组件的内部实现"
      },
      {
        "id": 26,
        "xcid": 15,
        "title": "组件实践（3）组件化样式"
      },
      {
        "id": 27,
        "xcid": 15,
        "title": "组件设计模式（1）聪明组件和傻瓜组件"
      },
      {
        "id": 28,
        "xcid": 15,
        "title": "组件设计模式（2）高阶组件"
      },
      {
        "id": 29,
        "xcid": 15,
        "title": "组件设计模式（3）render props 模式"
      },
      {
        "id": 30,
        "xcid": 15,
        "title": "组件设计模式（4）提供者模式"
      },
      {
        "id": 31,
        "xcid": 15,
        "title": "组件设计模式（5）组合组件"
      },
      {
        "id": 32,
        "xcid": 15,
        "title": "React 单元测试"
      },
      {
        "id": 33,
        "xcid": 15,
        "title": "React 状态管理（1）组件状态"
      },
      {
        "id": 34,
        "xcid": 15,
        "title": "React 状态管理（2）Redux 使用模式"
      },
      {
        "id": 35,
        "xcid": 15,
        "title": "React 状态管理（3）Mobx  使用模式"
      },
      {
        "id": 36,
        "xcid": 15,
        "title": "React 状态管理（4）不同方式对比"
      },
      {
        "id": 37,
        "xcid": 15,
        "title": "路由的魔法：React Router"
      },
      {
        "id": 38,
        "xcid": 15,
        "title": "服务器端渲染（1）基本套路"
      },
      {
        "id": 39,
        "xcid": 15,
        "title": "服务器端渲染（2）理解 Nextjs"
      },
      {
        "id": 40,
        "xcid": 15,
        "title": "React 的未来（1）拥抱异步渲染"
      },
      {
        "id": 41,
        "xcid": 15,
        "title": "React 的未来（2）Suspense 带来的异步操作革命"
      },
      {
        "id": 42,
        "xcid": 15,
        "title": "React 的未来（3）函数化的 Hooks"
      },
      {
        "id": 43,
        "xcid": 15,
        "title": "结语"
      },
      {
        "id": 44,
        "xcid": 14,
        "title": "开篇：前端多端统一开发背景与趋势介绍"
      },
      {
        "id": 45,
        "xcid": 14,
        "title": "基础篇 1：React 核心语法初识"
      },
      {
        "id": 46,
        "xcid": 14,
        "title": "基础篇 2：微信小程序开发入门与技术选型"
      },
      {
        "id": 47,
        "xcid": 14,
        "title": "基础篇 3：多端统一开发框架 Taro 的安装与使用"
      },
      {
        "id": 48,
        "xcid": 14,
        "title": "基础篇 4：Taro 开发说明与注意事项"
      },
      {
        "id": 49,
        "xcid": 14,
        "title": "基础篇 5：用 Taro 实现一个简单的 Todo 项目"
      },
      {
        "id": 50,
        "xcid": 14,
        "title": "基础篇 6：在 Taro 中使用 Redux"
      },
      {
        "id": 51,
        "xcid": 14,
        "title": "进阶篇 1：Taro 设计思想及架构"
      },
      {
        "id": 52,
        "xcid": 14,
        "title": "进阶篇 2：CLI 原理及不同端的运行机制"
      },
      {
        "id": 53,
        "xcid": 14,
        "title": "进阶篇 3：组件库及 API 的设计与适配"
      },
      {
        "id": 54,
        "xcid": 14,
        "title": "进阶篇 4：JSX 转换微信小程序模板的实现（上）"
      },
      {
        "id": 55,
        "xcid": 14,
        "title": "进阶篇 5：JSX 转换微信小程序模板的实现（下）"
      },
      {
        "id": 56,
        "xcid": 14,
        "title": "进阶篇 6：运行时揭秘 - 小程序运行时"
      },
      {
        "id": 57,
        "xcid": 14,
        "title": "进阶篇 7：运行时揭秘 - H5 运行时"
      },
      {
        "id": 58,
        "xcid": 14,
        "title": "进阶篇 8：运行时揭秘 - RN 运行时 "
      },
      {
        "id": 59,
        "xcid": 14,
        "title": "实战篇 1：多端电商平台完整项目概述及开发准备"
      },
      {
        "id": 60,
        "xcid": 14,
        "title": "实战篇 2：小程序云的介绍与使用"
      },
      {
        "id": 61,
        "xcid": 14,
        "title": "实战篇 3：通过小程序云搭建电商后台服务"
      },
      {
        "id": 62,
        "xcid": 14,
        "title": "实战篇 4：商品列表页开发及性能优化"
      },
      {
        "id": 63,
        "xcid": 14,
        "title": "实战篇 5：商品详情页面开发"
      },
      {
        "id": 64,
        "xcid": 14,
        "title": "实战篇 6：购物车开发"
      },
      {
        "id": 65,
        "xcid": 14,
        "title": "实战篇 7：结算页面开发"
      },
      {
        "id": 66,
        "xcid": 14,
        "title": "实战篇 8：微信小程序端用户授权处理"
      },
      {
        "id": 67,
        "xcid": 14,
        "title": "实战篇 9：微信小程序开发填坑指南"
      },
      {
        "id": 68,
        "xcid": 14,
        "title": "实战篇 10：微信小程序端及 H5 端预览适配与发布"
      },
      {
        "id": 69,
        "xcid": 14,
        "title": "实战篇 11：React Native 端打包与发布"
      },
      {
        "id": 70,
        "xcid": 14,
        "title": "总结"
      },
      {
        "id": 71,
        "xcid": 13,
        "title": "准备：简历编写和面试前准备"
      },
      {
        "id": 72,
        "xcid": 13,
        "title": "一面 1：ES 基础知识点与高频考题解析"
      },
      {
        "id": 73,
        "xcid": 13,
        "title": "一面 2：JS-Web-API 知识点与高频考题解析"
      },
      {
        "id": 74,
        "xcid": 13,
        "title": "一面 3：CSS-HTML 知识点与高频考题解析"
      },
      {
        "id": 75,
        "xcid": 13,
        "title": "一面 4：从容应对算法题目"
      },
      {
        "id": 76,
        "xcid": 13,
        "title": "一面 5：浏览器相关知识点与高频考题解析"
      },
      {
        "id": 77,
        "xcid": 13,
        "title": "一面 6：开发环境相关知识点与高频考题解析"
      },
      {
        "id": 78,
        "xcid": 13,
        "title": "二面 1：如何回答常见的软技能问题"
      },
      {
        "id": 79,
        "xcid": 13,
        "title": "二面 2：如何介绍项目及应对项目细节追问"
      },
      {
        "id": 80,
        "xcid": 13,
        "title": "HR 面：谈钱不伤感情"
      },
      {
        "id": 81,
        "xcid": 13,
        "title": "其他：面试注意事项"
      },
      {
        "id": 82,
        "xcid": 13,
        "title": "总结与补充说明"
      },
      {
        "id": 83,
        "xcid": 12,
        "title": "开篇：Vuejs 的精髓——组件"
      },
      {
        "id": 84,
        "xcid": 12,
        "title": "基础：Vuejs 组件的三个 API：prop、event、slot"
      },
      {
        "id": 85,
        "xcid": 12,
        "title": "组件的通信 1：provide   inject"
      },
      {
        "id": 86,
        "xcid": 12,
        "title": "组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法"
      },
      {
        "id": 87,
        "xcid": 12,
        "title": "实战 1：具有数据校验功能的表单组件——Form"
      },
      {
        "id": 88,
        "xcid": 12,
        "title": "组件的通信 3：找到任意组件实例——findComponents 系列方法88"
      },
      {
        "id": 89,
        "xcid": 12,
        "title": "实战 2：组合多选框组件——CheckboxGroup & Checkbox"
      },
      {
        "id": 90,
        "xcid": 12,
        "title": "Vue 的构造器extend 与手动挂载$mount"
      },
      {
        "id": 91,
        "xcid": 12,
        "title": "实战 3：动态渲染 点vue 文件的组件—— Display"
      },
      {
        "id": 92,
        "xcid": 12,
        "title": "实战 4：全局提示组件——$Alert"
      },
      {
        "id": 93,
        "xcid": 12,
        "title": "更灵活的组件：Render 函数与 Functional Render"
      },
      {
        "id": 94,
        "xcid": 12,
        "title": "实战 5：可用 Render 自定义列的表格组件——Table"
      },
      {
        "id": 95,
        "xcid": 12,
        "title": "实战 6：可用 slot-scope 自定义列的表格组件——Table"
      },
      {
        "id": 96,
        "xcid": 12,
        "title": "递归组件与动态组件"
      },
      {
        "id": 98,
        "xcid": 12,
        "title": "实战 7：树形控件——Tree"
      },
      {
        "id": 99,
        "xcid": 12,
        "title": "拓展：Vuejs 容易忽略的 API 详解"
      },
      {
        "id": 100,
        "xcid": 12,
        "title": "拓展：Vuejs 面试、常见问题答疑"
      },
      {
        "id": 101,
        "xcid": 12,
        "title": "拓展：如何做好一个开源项目（上篇）"
      },
      {
        "id": 102,
        "xcid": 12,
        "title": "拓展：如何做好一个开源项目（下篇）"
      },
      {
        "id": 103,
        "xcid": 12,
        "title": "写在最后"
      },
      {
        "id": 104,
        "xcid": 11,
        "title": "开篇：Vue CLI 3 项目构建基础"
      },
      {
        "id": 105,
        "xcid": 11,
        "title": "构建基础篇 1：你需要了解的包管理工具与配置项"
      },
      {
        "id": 106,
        "xcid": 11,
        "title": "构建基础篇 2：webpack 在 CLI 3 中的应用"
      },
      {
        "id": 107,
        "xcid": 11,
        "title": "构建基础篇 3：env 文件与环境设置"
      },
      {
        "id": 108,
        "xcid": 11,
        "title": "构建实战篇 1：单页应用的基本配置"
      },
      {
        "id": 109,
        "xcid": 11,
        "title": "构建实战篇 2：使用 pages 构建多页应用"
      },
      {
        "id": 110,
        "xcid": 11,
        "title": "构建实战篇 3：多页路由与模板解析"
      },
      {
        "id": 111,
        "xcid": 11,
        "title": "构建实战篇 4：项目整合与优化"
      },
      {
        "id": 112,
        "xcid": 11,
        "title": "开发指南篇 1：从编码技巧与规范开始"
      },
      {
        "id": 113,
        "xcid": 11,
        "title": "开发指南篇 2：学会编写可复用性模块"
      },
      {
        "id": 114,
        "xcid": 11,
        "title": "开发指南篇 3：合理划分容器组件与展示组件"
      },
      {
        "id": 115,
        "xcid": 11,
        "title": "开发指南篇 4：数据驱动与拼图游戏"
      },
      {
        "id": 116,
        "xcid": 11,
        "title": "开发指南篇 5：Vue API 盲点解析"
      },
      {
        "id": 117,
        "xcid": 11,
        "title": "开发拓展篇 1：扩充你的开发工具"
      },
      {
        "id": 118,
        "xcid": 11,
        "title": "开发拓展篇 2：将 UI 界面交给第三方库"
      },
      {
        "id": 119,
        "xcid": 11,
        "title": "开发拓展篇 3：尝试使用外部数据"
      },
      {
        "id": 120,
        "xcid": 11,
        "title": "总结篇：写在最后"
      },
      {
        "id": 121,
        "xcid": 10,
        "title": "以史为鉴：前端开发的四个时代"
      },
      {
        "id": 122,
        "xcid": 10,
        "title": "似水流年：企业管理系统的前世今生"
      },
      {
        "id": 123,
        "xcid": 10,
        "title": "实战篇 01：开发前准备"
      },
      {
        "id": 124,
        "xcid": 10,
        "title": "实战篇 02：项目脚手架"
      },
      {
        "id": 125,
        "xcid": 10,
        "title": "实战篇 03：页面布局方案"
      },
      {
        "id": 126,
        "xcid": 10,
        "title": "实战篇 04：权限管理机制"
      },
      {
        "id": 127,
        "xcid": 10,
        "title": "实战篇 05：菜单匹配逻辑"
      },
      {
        "id": 128,
        "xcid": 10,
        "title": "实战篇 06：消息通知设计"
      },
      {
        "id": 129,
        "xcid": 10,
        "title": "实战篇 07：多语言支持"
      },
      {
        "id": 130,
        "xcid": 10,
        "title": "继往开来：可视化页面搭建工具"
      },
      {
        "id": 131,
        "xcid": 10,
        "title": "总结"
      },
      {
        "id": 132,
        "xcid": 9,
        "title": "为什么选择 npm script"
      },
      {
        "id": 133,
        "xcid": 9,
        "title": "入门篇 01 创建并运行 npm script 命令"
      },
      {
        "id": 134,
        "xcid": 9,
        "title": "入门篇 02 运行多个 npm script 的各种姿势"
      },
      {
        "id": 135,
        "xcid": 9,
        "title": "入门篇 03 给 npm script 传递参数和添加注释"
      },
      {
        "id": 136,
        "xcid": 9,
        "title": "进阶篇 01 使用 npm script 的钩子"
      },
      {
        "id": 137,
        "xcid": 9,
        "title": "进阶篇 02 在 npm script 中使用环境变量"
      },
      {
        "id": 138,
        "xcid": 9,
        "title": "进阶篇 03 实现 npm script 命令自动补全"
      },
      {
        "id": 139,
        "xcid": 9,
        "title": "高阶篇 01 实现 npm script 跨平台兼容"
      },
      {
        "id": 140,
        "xcid": 9,
        "title": "高阶篇 02 把庞大的 npm script 拆到单独文件中"
      },
      {
        "id": 141,
        "xcid": 9,
        "title": "高阶篇 03 用 nodejs 脚本替代复杂的 npm script"
      },
      {
        "id": 142,
        "xcid": 9,
        "title": "实战篇 01 监听文件变化并自动运行 npm script"
      },
      {
        "id": 143,
        "xcid": 9,
        "title": "实战篇 02 结合 live-reload 实现自动刷新"
      },
      {
        "id": 144,
        "xcid": 9,
        "title": "实战篇 03 在 git hooks 中运行 npm script"
      },
      {
        "id": 145,
        "xcid": 9,
        "title": "实战篇 04 用 npm script 实现构建流水线"
      },
      {
        "id": 146,
        "xcid": 9,
        "title": "实战篇 05 用 npm script 实现服务自动化运维"
      },
      {
        "id": 147,
        "xcid": 8,
        "title": "开篇：微信小程序概述"
      },
      {
        "id": 148,
        "xcid": 8,
        "title": "基础篇 1：小程序开发基础知识"
      },
      {
        "id": 149,
        "xcid": 8,
        "title": "基础篇 2：小程序云开发基础知识"
      },
      {
        "id": 150,
        "xcid": 8,
        "title": "基础篇 3：小程序架构及其实现机制"
      },
      {
        "id": 151,
        "xcid": 8,
        "title": "实战篇 1：小程序开发环境搭建"
      },
      {
        "id": 152,
        "xcid": 8,
        "title": "实战篇 2：新鲜天气小程序简介"
      },
      {
        "id": 153,
        "xcid": 8,
        "title": "实战篇 3：天气页面样式布局开发"
      },
      {
        "id": 154,
        "xcid": 8,
        "title": "实战篇 4：天气页面数据获取和交互实现"
      },
      {
        "id": 155,
        "xcid": 8,
        "title": "实战篇 5：为天气页面制作雨雪效果的粒子系统"
      },
      {
        "id": 156,
        "xcid": 8,
        "title": "实战篇 6：心情签到页面开发"
      },
      {
        "id": 157,
        "xcid": 8,
        "title": "实战篇 7：对小程序进行优化"
      },
      {
        "id": 158,
        "xcid": 8,
        "title": "实战篇 8：小程序调试技巧和上线发布"
      },
      {
        "id": 159,
        "xcid": 8,
        "title": "总结与拓展"
      },
      {
        "id": 160,
        "xcid": 7,
        "title": "什么是 Canvas "
      },
      {
        "id": 161,
        "xcid": 7,
        "title": "Canvas 的应用场景"
      },
      {
        "id": 162,
        "xcid": 7,
        "title": "手摸手带你入门 Canvas"
      },
      {
        "id": 163,
        "xcid": 7,
        "title": "炫酷背景特效的通性"
      },
      {
        "id": 164,
        "xcid": 7,
        "title": "怎么实现随机粒子"
      },
      {
        "id": 165,
        "xcid": 7,
        "title": "使你的随机粒子动起来"
      },
      {
        "id": 166,
        "xcid": 7,
        "title": "使你的鼠标和屏幕互动"
      },
      {
        "id": 167,
        "xcid": 7,
        "title": "制作属于你自己的特效"
      },
      {
        "id": 168,
        "xcid": 7,
        "title": "使你的 Canvas 更加优雅"
      },
      {
        "id": 169,
        "xcid": 6,
        "title": "Vuejs 运行机制全局概览"
      },
      {
        "id": 170,
        "xcid": 6,
        "title": "响应式系统的基本原理"
      },
      {
        "id": 171,
        "xcid": 6,
        "title": "响应式系统的依赖收集追踪原理"
      },
      {
        "id": 172,
        "xcid": 6,
        "title": "实现 Virtual DOM 下的一个 VNode 节点"
      },
      {
        "id": 173,
        "xcid": 6,
        "title": "template 模板是怎样通过 Compile 编译的"
      },
      {
        "id": 174,
        "xcid": 6,
        "title": "数据状态更新时的差异 diff 及 patch 机制"
      },
      {
        "id": 175,
        "xcid": 6,
        "title": "批量异步更新策略及 nextTick 原理"
      },
      {
        "id": 176,
        "xcid": 6,
        "title": "Vuex 状态管理的工作原理"
      },
      {
        "id": 177,
        "xcid": 6,
        "title": "总结 & 常见问题解答"
      },
      {
        "id": 178,
        "xcid": 5,
        "title": "基于 JavaScript 的数据应用开发概述"
      },
      {
        "id": 179,
        "xcid": 5,
        "title": "基本数据处理字符串和数字"
      },
      {
        "id": 180,
        "xcid": 5,
        "title": "基本数据处理对象字面量"
      },
      {
        "id": 181,
        "xcid": 5,
        "title": "基本数据处理数组"
      },
      {
        "id": 182,
        "xcid": 5,
        "title": "基本数据处理基本统计"
      },
      {
        "id": 183,
        "xcid": 5,
        "title": "复杂数据处理使用序列(1)"
      },
      {
        "id": 184,
        "xcid": 5,
        "title": "复杂数据处理树形"
      },
      {
        "id": 185,
        "xcid": 5,
        "title": "复杂数据处理关系图谱"
      },
      {
        "id": 186,
        "xcid": 5,
        "title": "复杂数据处理结构转换（上）"
      },
      {
        "id": 187,
        "xcid": 5,
        "title": "复杂数据处理结构转换（下）"
      },
      {
        "id": 188,
        "xcid": 5,
        "title": "基于ECharts 的基础表达性统计图表 · 散点图与折线图"
      },
      {
        "id": 189,
        "xcid": 5,
        "title": "基于ECharts 的基础表达性统计图表 · 柱状图与饼图"
      },
      {
        "id": 190,
        "xcid": 5,
        "title": "复杂数据图表箱线图"
      },
      {
        "id": 191,
        "xcid": 5,
        "title": "复杂数据图表关系图谱"
      },
      {
        "id": 192,
        "xcid": 5,
        "title": "复杂数据图表树形图"
      },
      {
        "id": 193,
        "xcid": 5,
        "title": "数据分析师的好帮手辅助线"
      },
      {
        "id": 194,
        "xcid": 5,
        "title": "更高维度的数据可视化图表"
      },
      {
        "id": 195,
        "xcid": 5,
        "title": "动态数据应用用数据流概念重新理解数据转换"
      },
      {
        "id": 196,
        "xcid": 5,
        "title": "动态数据应用使用 Vuejs 为数据流添加动态转换过滤器"
      },
      {
        "id": 197,
        "xcid": 5,
        "title": "动态数据应用应用高大上的动态数据流（上）"
      },
      {
        "id": 198,
        "xcid": 5,
        "title": "动态数据应用应用高大上的动态数据流（下）"
      },
      {
        "id": 199,
        "xcid": 4,
        "title": "大厂 H5 开发概述"
      },
      {
        "id": 200,
        "xcid": 4,
        "title": "基础页面开发"
      },
      {
        "id": 201,
        "xcid": 4,
        "title": "响应式页面开发"
      },
      {
        "id": 202,
        "xcid": 4,
        "title": "滑屏应用开发"
      },
      {
        "id": 203,
        "xcid": 4,
        "title": "动效开发 1：让它动起来"
      },
      {
        "id": 204,
        "xcid": 4,
        "title": "动效开发 2：聊一聊 3D"
      },
      {
        "id": 205,
        "xcid": 4,
        "title": "动效开发 3：补间动画"
      },
      {
        "id": 206,
        "xcid": 4,
        "title": "动效开发 4：逐帧动画"
      },
      {
        "id": 207,
        "xcid": 4,
        "title": "动效开发 5：SVG 动画"
      },
      {
        "id": 208,
        "xcid": 4,
        "title": "动效开发 6：动效之效"
      },
      {
        "id": 209,
        "xcid": 4,
        "title": "总结"
      },
      {
        "id": 210,
        "xcid": 3,
        "title": "webpack 的概念和基础使用"
      },
      {
        "id": 211,
        "xcid": 3,
        "title": "搭建基本的前端开发环境"
      },
      {
        "id": 212,
        "xcid": 3,
        "title": "webpack 如何解析代码模块路径"
      },
      {
        "id": 213,
        "xcid": 3,
        "title": "配置 loader"
      },
      {
        "id": 214,
        "xcid": 3,
        "title": "使用 plugin"
      },
      {
        "id": 215,
        "xcid": 3,
        "title": "更好地使用 webpack-dev-server"
      },
      {
        "id": 216,
        "xcid": 3,
        "title": "开发和生产环境的构建配置差异"
      },
      {
        "id": 217,
        "xcid": 3,
        "title": "用 HMR 提高开发效率"
      },
      {
        "id": 218,
        "xcid": 3,
        "title": "优化前端资源加载 1 - 图片加载优化和代码压缩"
      },
      {
        "id": 219,
        "xcid": 3,
        "title": "优化前端资源加载 2 - 分离代码文件"
      },
      {
        "id": 220,
        "xcid": 3,
        "title": "优化前端资源加载 3 - 进一步控制 JS 大小"
      },
      {
        "id": 221,
        "xcid": 3,
        "title": "提升 webpack 的构建速度"
      },
      {
        "id": 222,
        "xcid": 3,
        "title": "探究 webpack 内部工作流程"
      },
      {
        "id": 223,
        "xcid": 3,
        "title": "创建自己的 loader"
      },
      {
        "id": 224,
        "xcid": 3,
        "title": "创建自己的 plugin"
      },
      {
        "id": 225,
        "xcid": 3,
        "title": "总结"
      },
      {
        "id": 226,
        "xcid": 2,
        "title": "开篇：知识体系与小册格局"
      },
      {
        "id": 227,
        "xcid": 2,
        "title": "网络篇 1：webpack 性能调优与 Gzip 原理"
      },
      {
        "id": 228,
        "xcid": 2,
        "title": "网络篇 2：图片优化——质量与性能的博弈"
      },
      {
        "id": 229,
        "xcid": 2,
        "title": "存储篇 1：浏览器缓存机制介绍与缓存策略剖析"
      },
      {
        "id": 230,
        "xcid": 2,
        "title": "存储篇 2：本地存储——从 Cookie 到 Web Storage、IndexDB"
      },
      {
        "id": 231,
        "xcid": 2,
        "title": "彩蛋篇：CDN 的缓存与回源机制解析"
      },
      {
        "id": 232,
        "xcid": 2,
        "title": "渲染篇 1：服务端渲染的探索与实践"
      },
      {
        "id": 233,
        "xcid": 2,
        "title": "渲染篇 2：知己知彼——解锁浏览器背后的运行机制"
      },
      {
        "id": 234,
        "xcid": 2,
        "title": "渲染篇 3：对症下药——DOM 优化原理与基本实践"
      },
      {
        "id": 235,
        "xcid": 2,
        "title": "渲染篇 4：千方百计——Event Loop 与异步更新策略"
      },
      {
        "id": 236,
        "xcid": 2,
        "title": "渲染篇 5：最后一击——回流（Reflow）与重绘（Repaint）"
      },
      {
        "id": 237,
        "xcid": 2,
        "title": "应用篇 1：优化首屏体验——Lazy-Load 初探"
      },
      {
        "id": 238,
        "xcid": 2,
        "title": "应用篇 2：事件的节流（throttle）与防抖（debounce）"
      },
      {
        "id": 239,
        "xcid": 2,
        "title": "性能监测篇：Performance、LightHouse 与性能 API"
      },
      {
        "id": 240,
        "xcid": 2,
        "title": "前方的路：希望以此为你的起点"
      },
      {
        "id": 241,
        "xcid": 1,
        "title": "小册食用指南"
      },
      {
        "id": 242,
        "xcid": 1,
        "title": "JS 基础知识点及常考面试题（一）"
      },
      {
        "id": 243,
        "xcid": 1,
        "title": "JS 基础知识点及常考面试题（二）"
      },
      {
        "id": 244,
        "xcid": 1,
        "title": "ES6 知识点及常考面试题"
      },
      {
        "id": 245,
        "xcid": 1,
        "title": "JS 异步编程及常考面试题"
      },
      {
        "id": 246,
        "xcid": 1,
        "title": "手写 Promise"
      },
      {
        "id": 247,
        "xcid": 1,
        "title": "Event Loop"
      },
      {
        "id": 248,
        "xcid": 1,
        "title": "JS 进阶知识点及常考面试题"
      },
      {
        "id": 249,
        "xcid": 1,
        "title": "JS 思考题"
      },
      {
        "id": 250,
        "xcid": 1,
        "title": "DevTools Tips"
      },
      {
        "id": 251,
        "xcid": 1,
        "title": "浏览器基础知识点及常考面试题"
      },
      {
        "id": 252,
        "xcid": 1,
        "title": "浏览器缓存机制"
      },
      {
        "id": 253,
        "xcid": 1,
        "title": "浏览器渲染原理"
      },
      {
        "id": 254,
        "xcid": 1,
        "title": "安全防范知识点"
      },
      {
        "id": 255,
        "xcid": 1,
        "title": "从 V8 中看 JS 性能优化"
      },
      {
        "id": 256,
        "xcid": 1,
        "title": "性能优化琐碎事"
      },
      {
        "id": 258,
        "xcid": 1,
        "title": "实现小型打包工具"
      },
      {
        "id": 259,
        "xcid": 1,
        "title": "React 和 Vue 两大框架之间的相爱相杀"
      },
      {
        "id": 260,
        "xcid": 1,
        "title": "Vue 常考基础知识点"
      },
      {
        "id": 261,
        "xcid": 1,
        "title": "Vue 常考进阶知识点"
      },
      {
        "id": 262,
        "xcid": 1,
        "title": "React 常考基础知识点"
      },
      {
        "id": 263,
        "xcid": 1,
        "title": "React 常考进阶知识点"
      },
      {
        "id": 264,
        "xcid": 1,
        "title": "监控"
      },
      {
        "id": 265,
        "xcid": 1,
        "title": "UDP"
      },
      {
        "id": 266,
        "xcid": 1,
        "title": "TCP"
      },
      {
        "id": 267,
        "xcid": 1,
        "title": "HTTP 及 TLS"
      },
      {
        "id": 268,
        "xcid": 1,
        "title": "HTTP 2 及 HTTP 3"
      },
      {
        "id": 269,
        "xcid": 1,
        "title": "输入 URL 到页面渲染的整个流程"
      },
      {
        "id": 270,
        "xcid": 1,
        "title": "设计模式"
      },
      {
        "id": 271,
        "xcid": 1,
        "title": "常见数据结构"
      },
      {
        "id": 272,
        "xcid": 1,
        "title": "常考算法题解析"
      },
      {
        "id": 273,
        "xcid": 1,
        "title": "CSS 常考面试题资料"
      },
      {
        "id": 274,
        "xcid": 1,
        "title": "Webpack 性能优化"
      },
      {
        "id": 275,
        "xcid": 1,
        "title": "面试常用技巧"
      },
      {
        "id": 276,
        "xcid": 1,
        "title": "前方的路，让我们结伴同行"
      },
      {
        "id": 457,
        "xcid": 1,
        "title": "如何写好一封简历"
      }
    ]

    let datas = [];
     ml.map((item,index)=>{
       if(item.xcid == options.aid){
         datas.push(item)
       }
    })
    console.log(datas)
    this.setData({
      listData:datas
    })
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