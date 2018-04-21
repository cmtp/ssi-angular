import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../shared/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;

  constructor(private itemservice: ItemService) { }

  ngOnInit() {
    this.item = this.itemservice.getFeaturedItem();
  }

}
