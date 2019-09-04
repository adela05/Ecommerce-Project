import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Item {
	name: string;
	itemId: string;
	description?: string;
	price?: number;
	imageUrl?: string;
	id: number;

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
	//add the api url here, one is for class and the other at home
	//apiUrl = 'http://192.168.200.45:3000';
	apiUrl = 'https://crudpi.io/39f94f';
	constructor(private http: HttpClient) {}

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
	// This method is being call from item-detail-component-ts
	getItemByIndex(index: number): Item | null {
		if (this.items[index]) {
			// if this exist in the array then return the item
			return this.items[index];
		} else {
			return null; //if not, return null
		}
	}
	//gets all items in the Array
	getItemsFromServer(): Observable<Item[]> {
		const url = this.apiUrl + '/items';
		return this.http.get<Item[]>(url);
	}
	//this method gets an indivial item
	getItemByIdFromServer(itemId: number): Observable<Item> {
		const url = `${this.apiUrl}/items/${itemId}`;
		return this.http.get<Item>(url);
	}
	createNewItemOnServer(name: string, description?: string, price?: number, imageUrl?: string): Observable<Item> {
		const newItem = new Item(name, description, price, imageUrl);
		const url = this.apiUrl + '/items';
		// this is api request POST (call) to add a new item to be inserted into the Array
		return this.http.post<Item>(url, newItem);
	}
	deleteItemByIdServer(itemId: number): Observable<Item> {
		const url = `${this.apiUrl}/items/${itemId}`;
		return this.http.delete<Item>(url);
	}
	// This is api PUT request
	updateItemOnServer(
		itemId: number,
		name: string,
		description?: string,
		price?: number,
		imageUrl?: string
	): Observable<Item> {
		const newItem = new Item(name, description, price, imageUrl);
		const url = `${this.apiUrl}/items/${itemId}`;
		return this.http.put<Item>(url, newItem);
	}
}
