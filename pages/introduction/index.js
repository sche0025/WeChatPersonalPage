const {
  $Toast
} = require('../../dist/base/index');
var cText = require("../../assets/ChineseText.js")
var eText = require("../../assets/EnglishText.js")
var app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    language: "",
    title: "",
    card: {
      name: ""
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

    this.setData({

      navH: app.globalData.navHeight
    })

    if (this.data.language == "chinese") {
      this.setData({
        title: "陈思宇的主页"
      })
    } else {
      this.setData({
        title: "Edward's Homepage"
      })
    }

    this.renderTabBar()
  },

  renderTabBar: function() {
    console.log(this.data.language)

  },
  navBack: function() {
    var url = "/pages/splash/index"
    console.log(url)
    wx.navigateTo({
      url
    })
  },

  renderCard: function() {

  },
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {


    this.setData({
      language: app.globalData.language,
    })

    if (this.data.language == "chinese") {

      this.setData({
        text: cText.mtData()
      })

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
    } else {
      console.log(eText.mtData())
      this.setData({
        text: eText.mtData()
      })

      wx.setTabBarItem({
        index: 0,
        text: "Introduction"
      })
      wx.setTabBarItem({
        index: 1,
        text: "Relevant Experience"
      })
      wx.setTabBarItem({
        index: 2,
        text: "Contact"
      })

    }
    this.renderTitle()
    this.renderCard()
  },
  handleJsClicked: function(e, text) {
    console.log(e, text)
    $Toast({
      content: '极其残忍'
    });
  },

  handleSkillClicked: function(e) {
    console.log(e, text)
    var type = e.currentTarget.id
    var text = ""
    switch (type) {
      case "js":
        text = "极其残忍"
        break

      case "python":
        text = "溜的鸭匹"
        break

      case "java":
        text = "游刃有余"
        break

      case "haskell":
        text = "欲言又止"
        break

      case "prolog":
        text = "自暴自弃"
        break
    }


    $Toast({
      content: text
    });
  },


  renderTitle: function() {

    this.setData({
      title: this.data.text.title
    })
  },

  renderCard: function() {
    // var cardInfo = this.data.text.card
    this.setData({
      card: this.data.text.card
    })
  },
  containerTap: function (res) {
    console.log(res.touches[0]);
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})