import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import goodModel from "../../model/good.model";
import cartModel from "../../model/cart.model";
import { GoodService } from '../../service/good.service';
import { CartService } from '../../service/cart.service';
import { ZorroService } from '../../service/zorro.service';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.scss']
})
export class GoodDetailComponent implements OnInit {
  goodModel = goodModel;
  num: any = 1;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private goodService: GoodService,
    private cartService: CartService,
    private zorroService: ZorroService
  ) {
    this.activatedRouter.queryParams.subscribe(queryParams => {
      goodModel.goodId = queryParams.goodId;
      cartModel.goodId = queryParams.goodId;
      goodService.getGoodDetail();
    });
  }
  
  ngOnInit(){

  }

  cartEmitHandle(event){
    this.num = event;
  }

  addCartHandle() {
    this.cartService.addCart(this.num, () => {
      this.zorroService.message('成功加入购物车');
    });
  }

  jumpCart(){
    this.router.navigate(['cart']);
  }

}
