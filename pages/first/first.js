// pages/first.js
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
    timeTip:'不适用时间段',
    msg:"搜索要预估的酒店"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMe: function(){
      wx.navigateTo({
        url: '../second/second'
      })
    }
  }
})
