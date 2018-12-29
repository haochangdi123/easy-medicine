// components/search-title/search-title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    upImg: './images/up.png',
    downImg: './images/down.png',
    showUp: true,
    isActive: 'compositive'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //综合
    onCompositive() {
      this.setData({
        isActive: 'compositive'
      })
    },
    // 销量
    onSales() {
      this.setData({
        isActive: 'sales'
      })
    },
    // 价格
    onChangePrice() {
      this.setData({
        showUp: !this.data.showUp,
        isActive: 'price'
      })
    }
  }
})
