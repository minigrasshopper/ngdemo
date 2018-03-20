import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonService} from "./service/common.service";
import { HomeComponent } from './page/home/home.component';
import {JsonpModule} from "@angular/http";
import {HttpService} from "./service/http.service";
import { GoodDetailComponent } from './page/good-detail/good-detail.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './page/cart/cart.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ImgurlPipe } from './pipe/imgurl.pipe';
import { GoodListComponent } from './page/good-list/good-list.component';
import { CartdealComponent } from './component/cartdeal/cartdeal.component';
import {FormsModule} from "@angular/forms";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouteguardService } from './service/routeguard.service';
import { LoginComponent } from './page/login/login.component';
import { GoodlistComponent } from './component/goodlist/goodlist.component';
import { GoodService } from './service/good.service';
import { CartService } from './service/cart.service';
import { ShareService } from './service/share.service';
import { ZorroService } from './service/zorro.service';
import { OrderCreateComponent } from './page/order-create/order-create.component';
import { GoodorderComponent } from './component/goodorder/goodorder.component';
import { OrderService } from './service/order.service';
import { OrderDetailComponent } from './page/order-detail/order-detail.component';
import { OrderListComponent } from './page/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    NavComponent,
    FooterComponent,
    CartComponent,
    ProfileComponent,
    ImgurlPipe,
    GoodListComponent,
    CartdealComponent,
    LoginComponent,
    GoodlistComponent,
    OrderCreateComponent,
    GoodorderComponent,
    OrderDetailComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  entryComponents: [
    
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CommonService,
    HttpService,
    RouteguardService,
    GoodService,
    CartService,
    ShareService,
    ZorroService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
