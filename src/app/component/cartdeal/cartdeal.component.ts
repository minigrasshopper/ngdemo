import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cartdeal',
  templateUrl: './cartdeal.component.html',
  styleUrls: ['./cartdeal.component.scss']
})
export class CartdealComponent implements OnInit {
  @Input() num: number;   // 购物车数量
  @Input() disabled: boolean = false;   // input框是否禁用
  @Input() parentctrol: boolean = false;  // 事件是否由父组件操作
  @Output() changeEmit: EventEmitter<any> = new EventEmitter();
  @Output() reduceEmit: EventEmitter<any> = new EventEmitter();
  @Output() addEmit: EventEmitter<any> = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  }

  changeHandle(){
    if (!Number(this.num) || this.num == 0){
      this.num = 1;
    }
    this.changeEmit.emit(this.num);
  }

  reduceHandle(){
    if (this.parentctrol){
      this.reduceEmit.emit(this.num);
      return false;
    }
    if(this.num <= 1){
      return false;
    }
    this.num --;
    this.changeEmit.emit(this.num);
  }

  addHandle(){
    if (this.parentctrol) {
      this.addEmit.emit(this.num);
      return false;
    }
    this.num ++;
    this.changeEmit.emit(this.num);
  }

}
