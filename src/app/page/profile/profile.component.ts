import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GoodService } from '../../service/good.service';
import { OrderService } from '../../service/order.service';
import userModel from '../../model/user.model';
import { HttpService } from '../../service/http.service';
import orderModel from '../../model/order.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private orderModel = orderModel;
  private userModel = userModel;
  constructor(
    private goodService: GoodService,
    private orderService: OrderService,
    private httpService: HttpService,
    private router: Router,
  ) {
    goodService.getCategory(() => {
      orderService.getOrderList(() => {
        if (!userModel.headimgurl) {
          httpService.getJSON(httpService.ACTION.ACCOUNT_INFO, {}, (data) => {
            userModel.headimgurl = data.headimgurl;
            userModel.nickname = data.nickname;
          });
        }
      });
    })
  }

  ngOnInit() {
  }

  jumpOrderList(state){
    this.router.navigate(['order-list'], {
      queryParams: { state: state }
    });
  }

}
