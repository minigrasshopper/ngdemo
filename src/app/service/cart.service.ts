import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import cartModel from '../model/cart.model';

@Injectable()
export class CartService {

  constructor(
    private httpService: HttpService
  ) { }

  getCartInfo(cb?) {
    // 获取购物车信息
    this.httpService.getJSON(this.httpService.ACTION.CART_LIST, {}, data => {
      cb && cb();
      // 给cart.model赋值
      for (const key in cartModel) {
        if (data.hasOwnProperty(key)) {
          cartModel[key] = data[key];
        }
      }
      // 由于ng不能遍历对象，需要对goodsList进一步处理
      let newList = [];
      for (var key in cartModel.goodsList) {
        var item = data.goodsList[key];
        item.goodId = key;
        newList.push(item);
      }
      cartModel.goodsList = newList;
    });
  }
  addCart(num, cb?) {
    // 增加购物车数量
    this.httpService.getJSON(this.httpService.ACTION.CART_CREATE, { goodsId: cartModel.goodId, num: num }, data => {
      cb && cb();
    });
  }
  reduceCart(cb?) {
    // 减少购物车数量
    this.httpService.getJSON(this.httpService.ACTION.CART_SUBTRACT, { goodsId: cartModel.goodId }, data => {
      cb && cb();
    });
  }
  deleteCart(cb?) {
    // 删除购物车某个商品
    this.httpService.getJSON(this.httpService.ACTION.CART_DEL, { goodsId: cartModel.goodId }, data => {
      cb && cb();
    });
  }
  togglePickCart(cb?) {
    // 切换是否选中支付
    this.httpService.getJSON(this.httpService.ACTION.CART_PICK, { goodsId: cartModel.goodId }, data => {
      cb && cb();
    });
  }

}
