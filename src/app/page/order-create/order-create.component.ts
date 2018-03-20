import { Component, OnInit } from '@angular/core';
import orderModel from "../../model/order.model";
import { OrderService } from '../../service/order.service';
import { ZorroService } from '../../service/zorro.service';
import { CommonService } from '../../service/common.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})

export class OrderCreateComponent implements OnInit {
  private orderModel = orderModel;
  constructor(
    private orderService: OrderService,
    private zorroService: ZorroService,
    private commonService: CommonService,
    private router: Router
  ) {
    orderModel.orderParams = JSON.parse(JSON.stringify(orderModel.initParams));
    orderService.orderPercreate();
  }

  ngOnInit() {
  }

  getMerchantInfo(id) {
    if (!id) {
      return;
    }
    let html = '';
    orderModel.merchantList.forEach((item, index) => {
      if (item.id == orderModel.orderParams.merchantid) {
        html = item['name'] + "<br>" + item['address'];
      }
    });
    return html;
  }
  
  jumpOrderDetail() {
    if (!orderModel.orderParams.merchantid) {
      this.zorroService.message('请选择取货门店');
    } else if (!this.commonService.testMobile(orderModel.orderParams.mobile)) {

    } else if (!orderModel.orderParams.pickupdate) {
      this.zorroService.message('请选择取货日期');
    } else if (!orderModel.orderParams.pickuptime) {
      this.zorroService.message('请选择取货时间');
    } else {
      // 请求后台
      this.orderService.orderCreate(data => {
        this.router.navigate(['order-detail'], {
          queryParams: { orderId: orderModel.orderId, delta: 2 }
        })
      });
    }
  }

}