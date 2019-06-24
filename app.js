//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    language:"",

    navHeight: 0
  }
})