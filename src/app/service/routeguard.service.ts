import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import userModel from '../model/user.model';
@Injectable()
export class RouteguardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // A跳转到B，B页面停留在A页面的滚动位置；解决方法：将scrollTop设置为0
    window.scroll(0, 0);
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;  
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['home', 'good-detail', 'cart', 'profile'];
    let isLogin = userModel.isLogin;  // 是否登录
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!isLogin) {
        // 未登录，跳转到login
        this.router.navigate(['login']);
        return false;
      }else{
        // 已登录，跳转到当前路由
        return true;
      }
    }
    // 当前路由是login时 
    if (path === 'login') {
      if (!isLogin) {
        // 未登录，跳转到当前路由
        return true;
      }else{
        // 已登录，跳转到home
        this.router.navigate(['home']);
        return false;
      }
    }
  }

}