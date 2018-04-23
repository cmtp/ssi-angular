import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(
    private itemservice: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.item = this.itemservice.getItem(id);
  }

  goBack(): void {
    this.location.back();
  }

}
