import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import goodModel from '../model/good.model';
@Injectable()
export class GoodService {

  constructor(
    private httpService: HttpService,
  ) {
    
   }
  getCategory(cb?) {
    // 获取商品分类
    if (goodModel.category.length) {
      cb && cb();
      return false;
    }
    this.httpService.getJSON(this.httpService.ACTION.GOODS_CATE, {}, data => {
      goodModel.category = data.cates;
      cb && cb();
    });
  }
  getGoodList(cb?) {
    // 获取商品列表
    if (goodModel.goodList.length) {
      cb && cb();
      return false;
    }
    this.httpService.getJSON(this.httpService.ACTION.GOODS_LIST, {}, data => {
      goodModel.goodList = data.goods;
      cb && cb();
    });
  }
  getGoodListCate(cb?) {
    // 获取商品列表
    goodModel.goodListCate = null;
    this.httpService.getJSON(this.httpService.ACTION.GOODS_LIST, { categoryid: goodModel.categoryId }, data => {
      goodModel.goodListCate = data.goods;
      cb && cb();
    });
  }
  getGoodDetail(cb?) {
    // 获取商品详情
    goodModel.goodDetail = null;
    this.httpService.getJSON(this.httpService.ACTION.GOODS_DETAIL, { id: goodModel.goodId }, data => {
      goodModel.goodDetail = data.good;
      cb && cb();
    });
  }
  getGoodListLimit(cb?) {
    // 调用这个接口前，请先调用getCategory()
    // 获取商品列表限制每个分类4个
    if (goodModel.goodListLimit.length) {
      cb && cb();
      return false;
    }
    this.getGoodList(data => {
      goodModel.category.forEach((item, index, array) => {
        item.goods = [];
        goodModel.goodListLimit.push(item);
      });
      goodModel.goodListLimit.forEach((item, index, array) => {
        let id = item.id;
        goodModel.goodList.forEach((v, i, arr) => {
          let categoryId = v.category_id;
          if (id == categoryId && item.goods.length < 4) {
            goodModel.goodListLimit[index].goods.push(v);
          }
        });
      });
      cb && cb();
    });
  }
  getGoodListRandom(cb?) {
    // 获取随机列表
    goodModel.goodListRandom = null;
    function random(min, max) {
      return Math.floor(min + Math.random() * (max - min));
    }
    this.getGoodList(data => {
      let randomList = [];
      let max = goodModel.goodList.length;
      let numArr = [random(0, max)];
      while (numArr.length < 4) {
        let isSame = false;
        let num = random(0, max);
        numArr.forEach((item, index) => {
          if (num == item) {
            isSame = true;
          }
        });
        !isSame && numArr.push(num);
      }
      numArr.forEach((item, index) => {
        randomList.push(goodModel.goodList[item]);
      });
      goodModel.goodListRandom = randomList;
      cb && cb();
    });
  }
}
