// pages/good-detail/good-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: false, // 是否显示mask
    isShowExplain: false //是否显示药品说明书
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 将传过来的商品名称设置为页面的title
    wx.setNavigationBarTitle({
      title: options.goodName,
    })
  },

  // 显示药品说明书
  onShowExplain:function() {
    this.setData({
      showMask: true,
      isShowExplain: true
    })
  },

  // 关闭药品说明书
  onCloseExplain: function () {
    this.setData({
      showMask: false,
      isShowExplain: false
    })
  }
  





  
 
})