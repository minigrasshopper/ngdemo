import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import userModel from '../../model/user.model';
import { ZorroService } from '../../service/zorro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accout: string;   // 默认帐号：admin
  password: any;    // 默认密码：admin
  constructor(
    private zorroService: ZorroService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
  }

  loginHandle() {
    if (this.accout == 'admin' && this.password == 'admin') {
      this.router.navigate(['home']);
      userModel.isLogin = true;
    } else {
      this.zorroService.message('用户名和密码不匹配');
    }
  }

}
