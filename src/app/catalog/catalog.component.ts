import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];

  constructor(
    private itemService: ItemService,
    @Inject('BaseURL') private BaseURL
) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
