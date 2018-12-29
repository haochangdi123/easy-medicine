// components/no/no.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msgobj: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  attached: function () {
    console.log(this.properties);
    console.log('==========');
    console.log(this.data);
  }
})
