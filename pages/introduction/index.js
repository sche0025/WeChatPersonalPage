// pages/introduction/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    card:{
      name:""
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    

    wx.setTabBarItem({
      index: 0,
      text: "介绍"
    })
    wx.setTabBarItem({
      index: 1,
      text: "相关经历"
    })
    wx.setTabBarItem({
      index: 2,
      text: "联系方式"
    })

  this.renderCard()

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})