import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() headline: string = '';
  @Input() hasBack: number = 1;
  @Input() delta: number = 1;

  constructor(
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  backHandle(){
    // this.location.back();
    history.go(-this.delta);
  }

}
