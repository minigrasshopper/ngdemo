import { Injectable } from '@angular/core';
import configModel from "../model/config.model";
import { HttpService } from './http.service';

@Injectable()
export class ShareService {

  constructor(
    private httpService: HttpService
  ) { }

  wxShare(succCb?, cancelCb?, errorCb?) {
    let params = { url: encodeURIComponent(window.location.href.split('#')[0]) };
    this.httpService.getJSON(this.httpService.ACTION.SHARE, params, data => {
      this.wxConfig(data.cfg, configModel.shareInfo, succCb, cancelCb, errorCb);
    });
  }
  wxConfig(wxconfig, share, succCb?, cancelCb?, errorCb?) {
    wx.config({
      debug: false,
      appId: wxconfig.appId,
      timestamp: wxconfig.timestamp,
      nonceStr: wxconfig.nonceStr,
      signature: wxconfig.signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ]
    });
    wx.ready(function () {
      wx.onMenuShareAppMessage({ //朋友
        title: share.title,
        desc: share.desc,
        link: share.link,
        imgUrl: share.imgUrl,
        success: function () {
          succCb && succCb();
        },
        cancel: function () {
          cancelCb && cancelCb();
        }
      });
      wx.onMenuShareTimeline({ //朋友圈
        title: share.desc,
        link: share.link,
        imgUrl: share.imgUrl,
        success: function () {
          succCb && succCb();
        },
        cancel: function () {
          cancelCb && cancelCb();
        }
      });
      wx.onMenuShareQQ({ //QQ
        title: share.title,
        desc: share.desc,
        link: share.link,
        imgUrl: share.imgUrl,
        success: function () {
          succCb && succCb();
        },
        cancel: function () {
          cancelCb && cancelCb();
        }
      });
      wx.onMenuShareWeibo({ //QQ
        title: share.title,
        desc: share.desc,
        link: share.link,
        imgUrl: share.imgUrl,
        success: function () {
          succCb && succCb();
        },
        cancel: function () {
          cancelCb && cancelCb();
        }
      });
    });
    wx.error(function (res) {
      console.log(res);
      errorCb && errorCb(JSON.stringify(res));
    });
  }

}
