import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import goodModel from "../../model/good.model";
import { GoodService } from '../../service/good.service';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
  private goodModel = goodModel;
  constructor(
    private goodService: GoodService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      goodModel.categoryName = queryParams.categoryName;
      goodModel.categoryId = queryParams.categoryId;
      goodService.getGoodListCate();
    });
  }

  ngOnInit() {
  }
}
