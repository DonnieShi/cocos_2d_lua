//index.js
//获取应用实例
const config = require('../../conf.js');
const util = require('../../utils/util.js');
const request = require('../../utils/request.js');

const app = getApp()

Page({
  data: {
  	previewing:false,
  	navItems:[],
  	navBtnSelectIdx : 0,
  },
  //事件处理函数
  onLoad: function () {
  	this.loadTagData();
  },

  loadTagData(){
    var _this = this
    wx.request({
      url: util.getUrl('/tags'), 
      method:'GET',
      success: function(res) {
        _this.setData({'navItems':res.data.data});
      }
    })
    },
  })
