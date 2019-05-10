// pages/article/article.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{},
    article:null,
    loading:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'https://webmonitor.taidu8.com/xc?id=' + options.datas, // 仅为示例，并非真实的接口地址
      success(res) {
        let obj = {};
        obj = JSON.parse(res.data).data[0]
        let dd = app.towxml.toJson(JSON.parse(res.data).data[0].content, 'markdown');
        //设置文档显示主题，默认'light'
        dd.theme = 'light';
        that.setData({
          datas: obj,
          article: dd,
          loading:false
        })
      }
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