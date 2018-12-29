// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['好好学习', 'h嘎嘎', '好好学习', 'h嘎嘎', '好好学习', 'h嘎嘎'],
    goodsShow: true,   //是否现实商品列表(false为关键词)
    hasGoods: true,  //是否有搜索的商品
    noGoodMsg: {   // 没有商品的时候现实的信息
      img: './images/none.png',
      msg: '没有任何结果呦～',
      tryMsg: '换个关键词试试？'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'ppp'
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

  },

  /**
   * 跳转到商品详情
   */
  onGoGoodDetail: function() {
    let url = `../good-detail/good-detail?goodName=hcd`
    wx.navigateTo({
      url: url,
    })
  }
})