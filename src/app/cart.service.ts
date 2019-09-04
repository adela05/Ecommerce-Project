import { Injectable } from '@angular/core';
import { Item } from './items.service';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	// New Array for Cart
	items: Item[] = [];
	constructor() {}

	// Add individual item to the cart
	addToCart(item: Item) {
		this.items.push(item);
	}
	//Shows all items in Cart
	getCartItems(): Item[] {
		return this.items;
	}
	// Removes an individual item from the array
	deleteItemByIndex(i: number) {
		this.items.splice(i, 1);
	}
	//This empty's the array when the items are purchased
	emptyCart() {
		this.items = [];
	}
}
