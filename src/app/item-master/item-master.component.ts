import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService, Item } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-item-master',
	templateUrl: './item-master.component.html',
	styleUrls: [ './item-master.component.scss' ]
})
export class ItemMasterComponent implements OnInit, OnDestroy {
	items: Item[] = [];
	itemsSub: Subscription;
	filterText: string = '';
	constructor(private itemsService: ItemsService) {}

	ngOnInit() {
		//this.getItems();
		this.getItemsFromServer();
	}
	ngOnDestroy() {
		if (this.itemsSub) {
			this.itemsSub.unsubscribe();
		}
	}
	getItems() {
		this.items = this.itemsService.getItems();
	}
	getItemsFromServer() {
		this.itemsSub = this.itemsService.getItemsFromServer().subscribe(
			(res: Item[]) => {
				console.log('res:' + res);
				this.items = res;
			},
			(err) => {
				console.log('err:' + err);
			}
		);
	}
}
