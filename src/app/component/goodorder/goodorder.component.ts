import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goodorder',
  templateUrl: './goodorder.component.html',
  styleUrls: ['./goodorder.component.scss']
})
export class GoodorderComponent implements OnInit {
  @Input() list: Array<any> = [];  // 商品列表
  constructor() { }

  ngOnInit() {
  }

}
