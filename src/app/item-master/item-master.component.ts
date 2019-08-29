import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../items.service';

@Component({
	selector: 'app-item-master',
	templateUrl: './item-master.component.html',
	styleUrls: [ './item-master.component.scss' ]
})
export class ItemMasterComponent implements OnInit {
	items: Item[] = [];
	constructor(private itemsService: ItemsService) {}

	ngOnInit() {
		this.getItems();
	}
	getItems() {
		this.items = this.itemsService.getItems();
	}
}
