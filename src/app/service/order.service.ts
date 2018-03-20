import { Injectable } from '@angular/core';
import orderModel from '../model/order.model';
import { HttpService } from './http.service';
declare var WeixinJSBridge: any;
@Injectable()
export class OrderService {
  private orderModel = orderModel;
  constructor(
    private httpService: HttpService
  ) { }

  orderPercreate(cb?) {
    // 订单预览
    this.httpService.getJSON(this.httpService.ACTION.ORDER_PRECREATE, {}, data => {
      for (const key in orderModel) {
        if (data.hasOwnProperty(key)) {
          orderModel[key] = data[key];
        }
      }
      cb && cb();
    });
  }
  orderCreate(cb?) {
    // 订单创建
    this.httpService.getJSON(this.httpService.ACTION.ORDER_CREATE, orderModel.orderParams, data => {
      orderModel.orderId = data.data.id;
      cb && cb(data);
    });
  }
  orderDetail(cb?) {
    // 订单详情
    this.httpService.getJSON(this.httpService.ACTION.ORDER_DETAIL, { id: orderModel.orderId }, data => {
      orderModel.orderDetail = data.order;
      orderModel.cartGoodsList = orderModel.orderDetail.goods;
      cb && cb();
    });
  }
  orderCancel(cb?) {
    // 订单取消
    this.httpService.getJSON(this.httpService.ACTION.ORDER_CANCAL, { id: orderModel.orderId }, data => {
      cb && cb();
      this.orderDetail();
    });
  }
  orderPay(cb?) {
    // 订单支付
    this.httpService.getJSON(this.httpService.ACTION.ORDER_PAY, { id: orderModel.orderId }, data => {
      cb && cb();
      function onBridgeReady() {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": data.data.appId,
            "timeStamp": data.data.timeStamp, // 时间戳
            "nonceStr": data.data.nonceStr, // 随机串
            "package": data.data.package,
            "signType": data.data.signType, // 微信签名方式
            "paySign": data.data.paySign   // 微信签名
          },
          function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 跳到付款成功页面
            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
              // 取消付款
            }
          }
        );
      }
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } 
        // else if (document.attachEvent) {
        //   document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        //   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        // }
      } else {
        onBridgeReady();
      }
    });
  }
  orderReceive(cb?) {
    // 订单完成
    this.httpService.getJSON(this.httpService.ACTION.ORDER_RECEIVE, { id: orderModel.orderId }, data => {
      cb && cb();
      this.orderDetail();
    });
  }
  orderDel(cb?) {
    // 订单删除
    this.httpService.getJSON(this.httpService.ACTION.ORDER_DEL, { id: orderModel.orderId }, data => {
      cb && cb();
      this.orderDetail();
    });
  }
  getOrderList(cb?) {
    // 获取订单列表
    this.httpService.getJSON(this.httpService.ACTION.ORDER_LIST, {}, data => {
      cb && cb();
      orderModel.orderList = data.list;
      this.getState();
    });
  }
  getState() {
    // 获取订单数量状态
    orderModel.stateObj = { unpaid: 0, unshipped: 0, shipped: 0, completed: 0 };
    orderModel.orderList.forEach((item, index) => {
      for (const key in orderModel.stateObj) {
        if (item.status == key) {
          orderModel.stateObj[key]++;
        }
      }
    });
    console.log(orderModel.stateObj);
  }

}
