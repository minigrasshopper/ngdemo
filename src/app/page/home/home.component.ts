import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import goodModel from "../../model/good.model";
import { GoodService } from '../../service/good.service';
import { CartService } from '../../service/cart.service';
import { ShareService } from '../../service/share.service';
declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private goodModel = goodModel;
  constructor(
    private goodService: GoodService,
    private router: Router,
    private cartService: CartService,
    private shareService: ShareService
  ) {
    goodService.getCategory(() => {
      goodService.getGoodListLimit(() => {
        cartService.getCartInfo(() => {
          shareService.wxShare();
        });
      });
    })
  }

  ngOnInit() {
    new Swiper ('.swiper-container', {
      direction: 'horizontal',
      pagination : '.swiper-pagination',
      loop: true,
      observer: true,   // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      autoplay: 1000,
      autoplayDisableOnInteraction: false
    });
  }

  jumpGoodList(categoryName, categoryId){
    this.router.navigate(['good-list'], {
      queryParams: {categoryName: categoryName, categoryId: categoryId}
    })
  }

}
