import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import cartModel from "../../model/cart.model";
import goodModel from "../../model/good.model";
import { GoodService } from '../../service/good.service';
import { CartService } from '../../service/cart.service';
import { ZorroService } from '../../service/zorro.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel = cartModel;
  goodModel = goodModel;
  constructor(
    private router: Router,
    private goodService: GoodService,
    private cartService: CartService,
    private zorroService: ZorroService
    ) {
    goodService.getCategory(() => {
      cartService.getCartInfo(() => {
        goodService.getGoodListRandom();
      });
    })
  }

  ngOnInit() {

  }

  addEmitHandle(goodId) {
    cartModel.goodId = goodId;
    // 增加商品数量
    this.cartService.addCart(1, () => {
      this.zorroService.message('购物车+1');
      this.cartService.getCartInfo();
    });
  }

  reduceEmitHandle(goodId) {
    cartModel.goodId = goodId;
    // 减少商品数量
    this.cartService.reduceCart(() => {
      this.zorroService.message('购物车-1');
      this.cartService.getCartInfo();
    });
  }

  delHandle(goodId) {
    cartModel.goodId = goodId;
    // 删除商品
    this.cartService.deleteCart(() => {
      this.zorroService.message('已删除');
      this.cartService.getCartInfo();
    });
  }

  togglepickHandle(goodId) {
    cartModel.goodId = goodId;
    // 商品选中取消
    this.cartService.togglePickCart(() => {
      this.cartService.getCartInfo();
    });
  }
  
  jumpOrderCreate() {
    this.router.navigate(['order-create']);
  }

}
