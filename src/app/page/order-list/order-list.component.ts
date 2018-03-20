import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../service/order.service';
import orderModel from '../../model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderModel = orderModel;
  state: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { 
    activatedRoute.queryParams.subscribe(queryParams => {
      this.state = queryParams.state;
      orderService.getOrderList();
    });
  }

  ngOnInit() {
    
  }

  jumpHome() {
    this.router.navigate(['home']);
  }

  jumpOrderDetail(orderId) {
    this.router.navigate(['order-detail'], {
      queryParams: { orderId: orderId, delta: 1}
    })
  }

  toggleHandle(state) {
    this.state = state;
  }

}
