import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

export class Item {
	name: string;
	itemId: string;
	description?: string;
	price?: number;
	imageUrl?: string;

	constructor(name: string, description?: string, price?: number, imageUrl?: string) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.imageUrl = imageUrl;

		// this import uuid will generate Id number with letters for each item.
		this.itemId = uuid.v4();
	}
}

@Injectable({
	providedIn: 'root'
})
export class ItemsService {
	items: Item[] = [ new Item('Toy Story', 'kids', 9.99, '') ];
	constructor() {}

	addItem(name: string, description: string, price?: number, imageUrl?: string) {
		const newItem = new Item(name, description, price, imageUrl);
		this.items.push(newItem);
		//console.log(newItem); Making sure it works
	}
	// Delete's each item
	deleteItem(item: Item) {
		this.items = this.items.filter((itemToFilter: Item) => {
			return item.itemId !== itemToFilter.itemId;
		});
	}
	getItems(): Item[] {
		return this.items;
	}
}
