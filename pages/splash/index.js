// pages/splash/index.js
var app = getApp();
var url = "/pages/introduction/index"
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  chooseChinese() {

 
    app.globalData.language = "chinese"
    // wx.showTabBar()
    // wx.setTabBarItem({
    //   index: 0,
    //   text:"介绍"
    // })
    // wx.setTabBarItem({
    //   index: 1,
    //   text: "联系方式"
    // })
    wx.switchTab({
      url
    })
  },

  chooseEnglish(){
    let url = "/pages/english/index"

    app.globalData = "english"
    // console.log(app.globalData)
    wx.switchTab({
      url
    })
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