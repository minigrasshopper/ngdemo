import { Component, OnInit } from '@angular/core';
import orderModel from "../../model/order.model";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderModel = orderModel;
  delta: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) { 
    activatedRoute.queryParams.subscribe(queryParams => {
      orderModel.orderId = queryParams.orderId;
      this.delta = queryParams.delta;
      orderService.orderDetail();
    });
  }

  ngOnInit() {
    
  }

  cancelHandle() {
    this.orderService.orderCancel();
  }

  payHandle() {
    this.orderService.orderPay();
  }

  receiveHandle() {
    this.orderService.orderReceive();
  }

  delHandle() {
    this.orderService.orderDel();
  }
  
  jumpHome() {
    this.router.navigate(['home']);
  }

}
