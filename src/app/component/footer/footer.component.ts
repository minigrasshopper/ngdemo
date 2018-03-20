import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import goodModel from "../../model/good.model";
import cartModel from "../../model/cart.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() type: number;   // 当前tab

  private cateShow: boolean = false; // 类别是否展示
  private cateId: any;  // 当前选中的类别的id
  private goodModel = goodModel; // 用于展示商品分类
  private cartModel = cartModel; // 用于展示购物车数量
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    // 此时所有输入属性都已经有了正确的初始绑定值
  }

  tabHandle(type){
    this.type = type;
    switch (type){
      case 1:
        this.cateShow = false;
        this.router.navigate(['home']);
        break;
      case 2:
        this.cateShow = !this.cateShow;
        break;
      case 3:
        this.cateShow = false;
        this.router.navigate(['cart']);
        break;
      case 4:
        this.cateShow = false;
        this.router.navigate(['profile']);
        break;
    }
  }

  jumpGoodList(categoryName ,categoryId){
    this.cateId = categoryId;
    this.router.navigate(['good-list'], {
      queryParams: {
        categoryName: categoryName,
        categoryId: categoryId
      }
    })
  }

}
