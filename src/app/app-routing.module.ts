import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {GoodDetailComponent} from "./page/good-detail/good-detail.component";
import {CartComponent} from "./page/cart/cart.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {GoodListComponent} from "./page/good-list/good-list.component";
import { RouteguardService } from './service/routeguard.service';
import { LoginComponent } from './page/login/login.component';
import { OrderCreateComponent } from './page/order-create/order-create.component';
import { OrderDetailComponent } from './page/order-detail/order-detail.component';
import { OrderListComponent } from './page/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',   // 初始路由重定向[写在第一个]
    redirectTo: 'home',
    pathMatch: 'full'  // 必须要设置
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'good-detail',
    component: GoodDetailComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'good-list',
    component: GoodListComponent,
    canActivate: []
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'order-create',
    component: OrderCreateComponent,
    canActivate: []
  },
  {
    path: 'order-detail',
    component: OrderDetailComponent,
    canActivate: []
  },
  {
    path: 'order-list',
    component: OrderListComponent,
    canActivate: []
  },
  {
    path: '**',   // 错误路由重定向[写在最后一个]
    redirectTo: 'home',
    pathMatch: 'full'  // 必须要设置
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
