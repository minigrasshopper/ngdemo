import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodlist',
  templateUrl: './goodlist.component.html',
  styleUrls: ['./goodlist.component.scss']
})
export class GoodlistComponent implements OnInit {
  @Input() list:Array<any> = [];  // 商品列表

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  jumpGoodDetail(goodId) {
    this.router.navigate(['good-detail'], {
      queryParams: {
        goodId: goodId
      }
    });
  }

}
